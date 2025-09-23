import { newImdfCategories } from "@/data/newImdfCategories";
import { Box, Button, Flex, IconButton } from "@radix-ui/themes";
import { FC, useCallback, useRef } from "react";
import JSZip from "jszip";
import downloadFile from "@/utils/downloadFile";
import html2canvas from "html2canvas-pro";
// @ts-ignore
import htmlToSvg from "htmlsvg";
import {
  grayDark,
  redDark,
  yellowDark,
  cyanDark,
  violetDark,
  indigoDark,
  grassDark,
  orangeDark,
  blueDark,
  crimsonDark,
} from "@radix-ui/colors";
import { SVG } from "@svgdotjs/svg.js";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

function IconExport() {
  const printRef = useRef<HTMLDivElement | null>(null);
  const iconAndCategories = newImdfCategories.reduce<
    { icon: FC; subcategory: string }[]
  >((acc, subcategory) => {
    // if (acc.length > 20) return acc; // limit to 10 icons
    const index = acc.findIndex(
      (item) =>
        item.subcategory === subcategory.subcategory &&
        item.icon === subcategory.icon
    );
    if (index === -1) {
      acc.push({
        icon: subcategory.icon,
        subcategory: subcategory.subcategory,
      });
    }
    return acc;
  }, []);

  const downloadAllIcons = useCallback(async () => {
    // use html2canvas to capture the icons
    //  capture the buttons so the icons are not cropped
    if (!printRef.current) return;

    const zip = new JSZip();
    const icons = printRef.current.querySelectorAll("div");

    const div = document.createElement("div");
    const root = createRoot(div);
    // use await to ensure all icons are captured one at a time
    // for (const icon of icons) {
    //   const canvas = await html2canvas(icon, {
    //     backgroundColor: null,
    //     scale: 2, // increase scale for better quality
    //   });
    //   const dataUrl = canvas.toDataURL("image/png");
    //   const blob = await fetch(dataUrl).then((res) => res.blob());
    //   const iconName = icon.id || "icon";
    //   //   const svg = await htmlToSvg(icon, {
    //   //     // downloadSvg: true,
    //   //     filename: iconName,
    //   //   });
    //   //   //   svg is a node, convert it to a string
    //   //   if (typeof svg === "string") {
    //   //     zip.file(`${iconName}.png`, blob);
    //   //   } else if (svg instanceof Node) {
    //   //     // convert Node to string
    //   //     const serializer = new XMLSerializer();
    //   //     const svgString = serializer.serializeToString(svg);
    //   //     zip.file(`${iconName}.svg`, svgString);
    //   //   } else {
    //   //     // svg is not a string or Node, handle it accordingly
    //   //     console.error("Unexpected svg type:", typeof svg);
    //   //     continue; // skip this icon
    //   //   }
    //   //   console.log(svg, "svg");
    //   zip.file(`${iconName}.png`, blob);
    //   console.log(`Added ${iconName}.png to zip`);
    //   //   zip.file(`${iconName}.svg`, svg);
    // }

    for (const icon of iconAndCategories) {
      const { icon: Icon } = icon;
      flushSync(() => {
        root.render(<Icon />);
      });
      const svgString = div.innerHTML;

      // create new svg with dimensions 40x40
      const svg = SVG().size(40, 40);
      // put the icon svg at the center of the new svg (at x=8, y=8)
      // add a circle background to the svg. the color is based on the subcategory
      const subcategory = icon.subcategory;
      let backgroundColor;
      switch (subcategory) {
        case "emergency":
          backgroundColor = redDark.red9;
          break;
        case "fnb":
          backgroundColor = yellowDark.yellow9;
          break;
        case "generic":
          backgroundColor = grayDark.gray9;

          break;
        case "mobility":
          backgroundColor = cyanDark.cyan9;
          break;
        case "restroom":
          backgroundColor = violetDark.violet9;
          break;
        case "service":
          backgroundColor = indigoDark.indigo9;
          break;
        case "sports":
          backgroundColor = grassDark.grass9;
          break;
        case "theater":
          backgroundColor = orangeDark.orange9;
          break;
        case "transport":
          backgroundColor = blueDark.blue9;
          break;
        case "wellbeing":
          backgroundColor = crimsonDark.crimson9;
          break;
        default:
          backgroundColor = grayDark.gray9;
          break;
      }
      svg
        .rect(36, 36)
        .fill(backgroundColor)
        .stroke({
          color: "#fff",
          width: 2,
        })
        .attr({
          color: icon.subcategory === "fnb" ? "black" : "white",
        })
        // max border radius
        .radius(20)
        .move(2, 2);
      // add the icon svg to the center of the new svg

      const iconSvg = SVG(svgString);
      let iconSvgAttributes = {};
      if (iconSvg.node?.attributes) {
        iconSvgAttributes = Array.from(iconSvg.node?.attributes).reduce<
          Record<string, string>
        >((acc, attr) => {
          if (
            attr.name !== "width" &&
            attr.name !== "height" &&
            attr.name !== "viewBox" &&
            attr.name !== "class"
          ) {
            acc[attr.name] = attr.value;
            if (attr.value === "currentColor") {
              acc[attr.name] = icon.subcategory === "fnb" ? "black" : "white";
            }
          }
          return acc;
        }, {});
      }
      //   each children are paths with different bounding boxes, so strictly only translate them to keep them all relatively centered
      iconSvg.children().forEach((child) => {
        child.translate(8, 8);
        // set attributes from parent
        child.attr(iconSvgAttributes || {});
        // add child to the svg
        svg.add(child);
      });
      // add the svg to the zip

      const svgContent = svg.svg();
      zip.file(`${subcategory}-${Icon.displayName}.svg`, svgContent);
      console.log(`Added ${subcategory}-${Icon.displayName}.svg to zip`);
    }
    zip.generateAsync({ type: "blob" }).then((content) => {
      downloadFile(URL.createObjectURL(content), "icons.zip");
    });
  }, []);
  return (
    <>
      <Button onClick={downloadAllIcons} size="2" mb="1">
        Download All Icons
      </Button>
      <Flex gap="2" wrap="wrap" ref={printRef}>
        {iconAndCategories.map(({ icon: Icon, subcategory }) => (
          //   <IconButton
          //     id={`${subcategory}-${Icon.displayName}`}
          //     radius="full"
          //     size="3"
          //     key={`${subcategory}-${Icon.displayName}`}
          //     style={{ border: "solid 2px white", boxSizing: "border-box" }}
          //     color={
          //       subcategory === "emergency"
          //         ? "red"
          //         : subcategory === "fnb"
          //           ? "yellow"
          //           : subcategory === "generic"
          //             ? "gray"
          //             : subcategory === "mobility"
          //               ? "cyan"
          //               : subcategory === "restroom"
          //                 ? "violet"
          //                 : subcategory === "service"
          //                   ? "indigo"
          //                   : subcategory === "sports"
          //                     ? "grass"
          //                     : subcategory === "theater"
          //                       ? "orange"
          //                       : subcategory === "transport"
          //                         ? "blue"
          //                         : subcategory === "wellbeing"
          //                           ? "crimson"
          //                           : "gray"
          //     }
          //   >
          //     <Icon />
          //     {/* <span>{subcategory}</span> */}
          //   </IconButton>
          <Box
            id={`${subcategory}-${Icon.displayName}`}
            // radius="full"
            // size="3"
            key={`${subcategory}-${Icon.displayName}`}
            style={{
              border: "solid 2px white",
              boxSizing: "border-box",
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: subcategory === "fnb" ? "black" : "white",
              backgroundColor:
                subcategory === "emergency"
                  ? redDark.red9
                  : subcategory === "fnb"
                    ? yellowDark.yellow9
                    : subcategory === "generic"
                      ? grayDark.gray9
                      : subcategory === "mobility"
                        ? cyanDark.cyan9
                        : subcategory === "restroom"
                          ? violetDark.violet9
                          : subcategory === "service"
                            ? indigoDark.indigo9
                            : subcategory === "sports"
                              ? grassDark.grass9
                              : subcategory === "theater"
                                ? orangeDark.orange9
                                : subcategory === "transport"
                                  ? blueDark.blue9
                                  : subcategory === "wellbeing"
                                    ? crimsonDark.crimson9
                                    : grayDark.gray9,
            }}
          >
            <Icon />
            {/* <span>{subcategory}</span> */}
          </Box>
        ))}
      </Flex>
    </>
  );
}
export default IconExport;
