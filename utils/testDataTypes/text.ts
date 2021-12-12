const testDataTypesText = (value: any): boolean => {
  if (typeof value === "string" || value instanceof String) {
    return true;
  } else {
    return false;
  }
};

export default testDataTypesText;
