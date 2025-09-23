import {
  Button,
  Flex,
  FlexProps,
  IconButton,
  Select,
  TextField,
} from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import { Labels } from "@/types/imdf";
import { useCallback, useMemo } from "react";
import { COMMON_LANGUAGES } from "@/data/commonLanguages";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";

function FieldLabels({
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
    value: Labels | null;
    setValue?: (value: Labels | null) => void;
    required?: boolean;
    wrapperProps?: FlexProps;
  }) {
  const emptyable = !required;
  const languages = useMemo(() => {
    return Object.keys(value ?? {});
  }, [value]);

  const setValue = useCallback(
    (value: Labels | null) => {
      if (setValueRaw) {
        if (Object.keys(value ?? {}).length === 0) {
          setValueRaw(null);
        } else {
          setValueRaw(value);
        }
      }
    },
    [setValueRaw]
  );

  // to take care of the order of languages
  // (i.e. to keep the editing language in the same position)
  // we need to create a new object
  const changeLanguage = useCallback(
    (lang: string, newValue: string) => {
      const newLabels = {} as Labels;
      languages.forEach((l) => {
        if (l !== lang) {
          newLabels[l] = value?.[l] ?? "";
        } else {
          newLabels[newValue] = value?.[l] ?? "";
        }
      });
      setValue(newLabels);
    },
    [setValue, value, languages]
  );

  const changeLabel = useCallback(
    (lang: string, newValue: string) => {
      const newLabels = {} as Labels;
      languages.forEach((l) => {
        if (l !== lang) {
          newLabels[l] = value?.[l] ?? "";
        } else {
          newLabels[l] = newValue;
        }
      });
      if (setValue) {
        setValue(newLabels);
      }
    },
    [setValue, languages, value]
  );

  const addLanguage = useCallback(() => {
    const newLabels = value ? { ...value } : {};
    // pick a language that is not already in the labels
    // prioritize english by default
    const newLang = COMMON_LANGUAGES.sort((a, b) => {
      if (a.code === "en") return -1;
      if (b.code === "en") return 1;
      return a.name.localeCompare(b.name);
    }).find((lang) => !Object.keys(newLabels).includes(lang.code))?.code;
    if (newLang) {
      newLabels[newLang] = "";
    }
    setValue(newLabels);
  }, [value, setValue]);

  const removeLanguage = useCallback(
    (lang: string) => {
      if (!emptyable && Object.keys(value ?? {}).length <= 1) {
        console.warn("Cannot remove the last language");
        return;
      }
      const newLabels = { ...value };
      delete newLabels[lang];
      if (Object.keys(newLabels).length === 0) {
        setValue(null);
        return;
      }
      setValue(newLabels);
    },
    [value, setValue]
  );

  return (
    <FieldWrapper
      name={name}
      description={description}
      valueKey={valueKey}
      {...wrapperProps}
    >
      <Flex direction="column" gap="1" style={{ width: "100%" }}>
        {languages.map((lang) => (
          <Flex key={lang} gap="1" align="center">
            <Select.Root
              key={lang}
              value={lang}
              onValueChange={(newLang) => {
                changeLanguage(lang, newLang);
              }}
            >
              <Select.Trigger style={{ width: 60 }}>
                {lang.toLocaleUpperCase()}
              </Select.Trigger>
              <Select.Content>
                {COMMON_LANGUAGES.map((language) => (
                  <Select.Item key={language.code} value={language.code}>
                    {language.name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            <TextField.Root
              value={value?.[lang] ?? ""}
              onChange={(e) => {
                const newValue = e.target.value;
                changeLabel(lang, newValue);
              }}
              placeholder={`Label in ${
                COMMON_LANGUAGES.find((l) => l.code === lang)?.name ??
                "Unknown Language"
              }`}
              style={{ flex: 1 }}
              required={required}
              {...props}
            />
            <IconButton
              color="red"
              variant="ghost"
              ml="2"
              size="1"
              disabled={!emptyable && emptyable && languages.length <= 1}
              onClick={() => removeLanguage(lang)}
            >
              <TrashIcon />
            </IconButton>
          </Flex>
        ))}
      </Flex>
      <Button
        variant="surface"
        size="1"
        color="gray"
        mt="2"
        onClick={addLanguage}
        disabled={Object.keys(value ?? {}).length >= COMMON_LANGUAGES.length}
      >
        <PlusIcon />
        Add Language
      </Button>
    </FieldWrapper>
  );
}
export default FieldLabels;
