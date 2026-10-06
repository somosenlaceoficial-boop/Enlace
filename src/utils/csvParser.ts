import type { Proyecto } from '@/types';

export function parseCSV(text: string): Proyecto[] {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.trim());

  const proyectos: Proyecto[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < headers.length - 1) continue;

    const row: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = (values[j] || '').trim();
    }

    const proyecto: Proyecto = {
      id: row['id'] || '',
      nombre: row['nombre'] || '',
      descripcion: row['descripcion'] || '',
      categoria: row['categoria'] || '',
      imagen: row['imagen'] || '',
      url: row['url'] || '',
      boton: row['boton'] || 'Ver proyecto',
      activo: row['activo'] === 'true',
      orden: parseInt(row['orden'] || '0', 10),
      destacado: row['destacado'] === 'true',
    };

    if (proyecto.activo && proyecto.id && proyecto.nombre) {
      proyectos.push(proyecto);
    }
  }

  return proyectos.sort((a, b) => a.orden - b.orden);
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
      i++;
      continue;
    }

    if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
      i++;
      continue;
    }

    current += char;
    i++;
  }

  result.push(current);
  return result;
}
