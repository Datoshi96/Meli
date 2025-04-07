export const formatMiles = (value: number | undefined) => {
  if (!value) return 0;
  return parseFloat(String(value)).toLocaleString("es-CO");
};
