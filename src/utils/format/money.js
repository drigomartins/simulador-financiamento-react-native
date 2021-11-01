export const formatValue = (data) => {
  var value = data;
	value = (value/100).toFixed(2) + '';
	value = value.replace(".", ",");
	value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return data ? value : '';
}

export default formatValue