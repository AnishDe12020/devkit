const testDataTypesHex = (value: any) => {
  return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value);
};

export default testDataTypesHex;
