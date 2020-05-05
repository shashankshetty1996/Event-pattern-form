const formSettings = "form-settings";

export const getLocalStore = () =>
  JSON.parse(localStorage.getItem(formSettings));

export const setLocalStore = (data) =>
  localStorage.setItem(formSettings, JSON.stringify(data));
