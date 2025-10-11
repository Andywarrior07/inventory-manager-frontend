import path from 'node:path';
import * as fs from 'node:fs';

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Static for now, we'll change this later (use cookies)
  const locale = 'es';
  const dir = path.join(process.cwd(), 'messages', locale);

  if (!fs.existsSync(dir)) {
    throw new Error(
      `No se encontró el directorio de mensajes para el locale "${locale}". Buscando en: ${dir}`
    );
  }

  const messages: Record<string, any> = {};

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));

  if (files.length === 0) {
    throw new Error(`No se encontraron archivos .json en ${dir}`);
  }

  for (const file of files) {
    const namespace = file.replace(/\.json$/, '');
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf8');

    try {
      messages[namespace] = JSON.parse(raw);
    } catch (err) {
      throw new Error(`Error parseando JSON en ${filePath}: ${(err as Error).message}`);
    }
  }

  return {
    locale,
    messages,
  };
});
