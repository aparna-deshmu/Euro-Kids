export const validation: any = {
onlyNumber: (fieldValue: any, fieldName: any, setValue: any) => {
    const sanitizedValue = fieldValue?.toString()?.replace(/[^0-9]/g, "");
    setValue(fieldName, sanitizedValue);
    return true;
  }
}