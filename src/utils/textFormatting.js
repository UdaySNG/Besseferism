export const formatText = (text) => {
  return text
    .trim()                         // Verwijder whitespace aan begin en eind
    .split('\n')                    // Split op nieuwe regels
    .map(line => line.trim())       // Trim elke regel
    .filter(line => line !== '')    // Verwijder lege regels
    .join('\n');                    // Voeg weer samen
}; 