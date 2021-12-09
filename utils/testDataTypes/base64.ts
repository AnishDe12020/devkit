const testDataTypesBase64 = (value: any) => {
  return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(
    value
  );
};

export default testDataTypesBase64;
