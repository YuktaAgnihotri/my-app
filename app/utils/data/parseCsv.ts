import Papa from "papaparse";

export async function parseCsv(csv: string) {
  return new Promise((resolve) => {
    Papa.parse(csv, {
      header: true,
      dynamicTyping: true,
      complete: (results) => resolve(results.data),
    });
  });
}
