"use client";
import {
  Button,
  Flex,
  FlexProps,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import useMap from "@/utils/useMap";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Point } from "geojson";
import {
  ArrowTopRightIcon,
  MinusCircledIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import useNumberInput from "@/utils/useNumberInput";
import truncate from "@turf/truncate";
import dynamic from "next/dynamic";
import { MapPortal } from "../MapPortal";
import ControlPanelPortal from "../ControlPanelPortal";

const SeraphMarker = dynamic(() => import("@/components/SeraphMarker"), {
  ssr: false,
});

function FieldGeoPoint({
  value,
  setValue: setValueRaw = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  required = false,
  ...props
}: FieldProps &
  Omit<TextField.RootProps, "value"> & {
    value: Point | null;
    setValue?: React.Dispatch<React.SetStateAction<Point | null>>;
    required?: boolean;
    wrapperProps?: FlexProps;
  }) {
  // const [mapMarker, setMapMarker] = useState<Marker | null>(null);
  const { mapRef, mapLoaded } = useMap();
  const [isEditing, setIsEditing] = useState(false);
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
  const latRef = useRef<HTMLInputElement>(null);

  const {
    numberValue: latNumValue,
    stringValue: latStringValue,
    onChange: onLatChange,
    onBlur: onLatBlur,
    isValid: isLatValid,
  } = useNumberInput(value?.coordinates[1] ?? null, {
    allowDecimal: true,
    allowNull: true,
  });

  const {
    numberValue: lngNumValue,
    stringValue: lngStringValue,
    onChange: onLngChange,
    onBlur: onLngBlur,
    isValid: isLngValid,
  } = useNumberInput(value?.coordinates[0] ?? null, {
    allowDecimal: true,
    allowNull: true,
  });

  // wrapper for setValue to ensure coordinates are rounded
  const setValue = useCallback(
    (value: Point | null | ((_v: Point | null) => Point | null)) => {
      if (typeof value === "function") {
        setValueRaw((prev) => {
          let newValue = value(prev);
          if (!newValue) {
            return newValue;
          }
          return truncate(newValue, {
            precision: 7,
          });
        });
      } else {
        if (!value) {
          setValueRaw(value);
          return;
        }
        setValueRaw(
          truncate(value, {
            precision: 7,
          }),
        );
      }
    },
    [setValueRaw],
  );

  const addPoint = useCallback(() => {
    if (!mapRef.current) return;
    const center = mapRef.current.getCenter();
    setValue({
      type: "Point",
      coordinates: [center.lng, center.lat],
    });
    setIsEditing(true);
  }, [setValue]);

  const edit = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const saveChanges = useCallback(() => {
    // TODO: actually make this save, and not just close (currently its autosaving)
    setIsEditing(false);
  }, []);

  useEffect(() => {
    // if lat or lng is not valid, do not set the value
    if (isLatValid && isLngValid) {
      if (latNumValue !== null && lngNumValue !== null) {
        setValue({
          type: "Point",
          coordinates: [lngNumValue, latNumValue],
        });
      } else {
        setValue(null);
      }
    }
  }, [latNumValue, lngNumValue, isLatValid, isLngValid]);

  const northing = useMemo(() => {
    if (latNumValue === null) return null;
    return latNumValue > 0 ? "N" : "S";
  }, [latNumValue]);
  const easting = useMemo(() => {
    if (lngNumValue === null) return null;
    return lngNumValue > 0 ? "E" : "W";
  }, [lngNumValue]);

  return (
    <FieldWrapper
      name={name}
      description={description}
      valueKey={valueKey}
      {...wrapperProps}
    >
      <ControlPanelPortal active={isEditing}>
        <Flex
          direction="column"
          gap="2"
          // className={styles.controlPanel}
        >
          <Flex align="center" mt="3">
            <Text size="4" weight="bold" style={{ flex: 1 }}>
              Edit display point
            </Text>
          </Flex>
        </Flex>
        <Flex gap="2" align="center" mt="3">
          <TextField.Root
            placeholder="Latitude"
            value={latStringValue}
            onChange={onLatChange}
            onBlur={onLatBlur}
            style={{ flex: 1 }}
            {...props}
            ref={latRef}
          >
            <TextField.Slot side="right">
              <Text size="2" style={{ color: "var(--gray-8)" }} weight="medium">
                {northing}
              </Text>
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Longitude"
            value={lngStringValue}
            onChange={onLngChange}
            onBlur={onLngBlur}
            style={{ flex: 1 }}
            {...props}
          >
            <TextField.Slot side="right">
              <Text size="2" style={{ color: "var(--gray-8)" }} weight="medium">
                {easting}
              </Text>
            </TextField.Slot>
          </TextField.Root>

          <IconButton
            size="2"
            variant="soft"
            onClick={() => {
              if (!value?.coordinates) {
                return;
              }
              mapRef.current?.flyTo(
                [value?.coordinates[1], value?.coordinates[0]],
                18,
                {
                  animate: true,
                  duration: 1,
                },
              );
            }}
          >
            <ArrowTopRightIcon />
          </IconButton>
          {!required &&
            (value?.coordinates ? (
              <IconButton
                color="red"
                variant="ghost"
                size="1"
                onClick={() => {
                  setValue(null);
                }}
              >
                <MinusCircledIcon />
              </IconButton>
            ) : (
              <IconButton
                color="green"
                variant="ghost"
                size="1"
                // ml="1"
                onClick={() => {
                  addPoint();
                }}
              >
                <PlusCircledIcon />
              </IconButton>
            ))}
        </Flex>
        <Button mt="2" onClick={saveChanges} style={{ width: "100%", flex: 1 }}>
          Save Changes
        </Button>
        <MapPortal id="field-geo-point-map">
          {value && (
            <SeraphMarker
              position={[value.coordinates[1], value.coordinates[0]]}
              draggable={isEditing}
              eventHandlers={{
                dragend: (e) => {
                  const marker = e.target;
                  const position = marker.getLatLng();
                  setValue({
                    type: "Point",
                    coordinates: [position.lng, position.lat],
                  });
                },
              }}
            />
          )}
        </MapPortal>
      </ControlPanelPortal>
      <Button
        variant="surface"
        size="2"
        onClick={edit}
        style={{ width: "100%", flex: 1 }}
      >
        Edit on map
      </Button>
    </FieldWrapper>
  );
}
export default FieldGeoPoint;
