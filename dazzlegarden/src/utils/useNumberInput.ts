import { useCallback, useEffect, useState } from "react";

function clamp(
  value: number,
  bounds: {
    min?: number;
    max?: number;
  },
): number {
  const { min = -Infinity, max = Infinity } = bounds;
  if (min > max) throw new Error("Min cannot be greater than max");
  return Math.min(Math.max(value, min), max);
}

function validateNumberInput(
  value: string,
  allowNull: boolean,
  allowDecimal: boolean,
  allowNegative: boolean,
): boolean {
  if (value.trim() === "") {
    return allowNull;
  }
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return false;
  }
  if (!allowDecimal && value.includes(".")) {
    return false; // if decimal is not allowed, ensure no decimal point
  }
  if (!allowNegative && parsedValue < 0) {
    return false; // if negative numbers are not allowed, ensure no negative value
  }
  return true; // valid number input
}

/**
 * function to handle number input gracefully,
 * allowing users to type naturally.
 * for example, 0.50 should be accepted as 0.5, but still show 0.50 in the input.
 * empty input should be null, and not 0.
 * only validates on blur.
 * returns value, onFocus, onBlur, onChange, and isValid.
 */
export default function useNumberInput(
  initialValue: number | null,
  config?: {
    allowNull?: boolean; // if null is not allowed, empty input will not be valid, but set to 0
    allowDecimal?: boolean;
    allowNegative?: boolean; // if negative numbers are allowed, negative sign will be accepted
    min?: number; // minimum value, if not set, no minimum
    max?: number; // maximum value, if not set, no maximum
  },
) {
  const [numberValue, setNumberValue] = useState<number | null>(initialValue);
  const [stringValue, setStringValue] = useState<string>(
    initialValue !== null ? initialValue.toString() : "",
  );
  const [isValid, setIsValid] = useState<boolean>(true);

  const onBlur = useCallback(() => {
    const isValidInput = validateNumberInput(
      stringValue,
      config?.allowNull ?? false,
      config?.allowDecimal ?? false,
      config?.allowNegative ?? false,
    );
    setIsValid(isValidInput);
  }, [stringValue, config]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // dont validate on change, only on blur
      setIsValid(true);

      let value = e.target.value;
      //   if value is 0-, turn into -
      if (value === "0-") {
        value = "-";
      }
      if (!config?.allowDecimal && value.includes(".")) {
        // if decimal is not allowed, remove it
        value = value.replace(/\./g, "");
      }
      if (!config?.allowNegative && value.startsWith("-")) {
        // if negative numbers are not allowed, remove the negative sign
        value = value.replace(/-/g, "");
      }
      // remove all non numeric characters except for decimal point
      value = value.replace(/[^0-9.,-]/g, "");
      //   remove all negative signs except for the first one
      value = value.replace(/(?!^)-/g, "");
      setStringValue(value);

      // parse the value to a number
      const parsedValue = value.trim() === "" ? NaN : parseFloat(value);
      if (isNaN(parsedValue)) {
        return;
      }
      // clamp the value to the min and max if set
      setNumberValue(
        clamp(parsedValue, {
          min: config?.min,
          max: config?.max,
        }),
      );
    },
    [config],
  );

  useEffect(() => {
    // if initialValue changes, check if the new value is numerically equal to the previous one
    if (initialValue !== numberValue) {
      const newValue = initialValue?.toString();
      setStringValue(newValue ?? "");
      setNumberValue(initialValue);
      setIsValid(
        validateNumberInput(
          newValue || "NaN",
          config?.allowNull ?? false,
          config?.allowDecimal ?? false,
          config?.allowNegative ?? false,
        ),
      );
    }
  }, [initialValue, config?.allowNull, config?.allowDecimal]);

  return {
    numberValue,
    stringValue,
    onChange,
    onBlur,
    isValid,
    setStringValue, // expose setter for external use
  };
}
