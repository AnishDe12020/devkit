const testDataTypesRegex = (value: any) => {
  try {
    new RegExp(value);
    return true;
  } catch (e) {
    return false;
  }
};

export default testDataTypesRegex;
