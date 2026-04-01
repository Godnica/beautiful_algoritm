/**
 * Appiattisce un oggetto annidato in notazione dot-notation.
 * @param {Object} obj - L'oggetto da appiattire
 * @param {string} prefix - Prefisso corrente (uso interno)
 * @returns {Object} - Oggetto appiattito
 */
function flatten(obj, prefix = "") {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(acc, flatten(value, fullKey));
    } else {
      acc[fullKey] = value;
    }

    return acc;
  }, {});
}
