export const isNull = (obj: any): boolean => {
  if (!obj) return true;
  if (JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]") return true;
  return false;
};
