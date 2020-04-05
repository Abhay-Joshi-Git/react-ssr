export const getInitialDataValue = (key, defaultValue = null) => {
  if (typeof window !== 'undefined') {
    return (window && window.INITIAL_DATA) ? window.INITIAL_DATA[key]: defaultValue;
  }
  return defaultValue;
};