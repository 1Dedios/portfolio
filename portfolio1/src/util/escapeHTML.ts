export function escapeHTML(fieldsArray: string[]) {
  return fieldsArray.map((field) => {
    return field
      .replace(/&/g, "&")
      .replace(/</g, "")
      .replace(/>/g, "")
      .replace(/"/g, "")
      .replace(/'/g, "");
  });
}
