import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

/** Load a YAML file from /content (e.g. load('site')). */
export function load(name) {
  const file = path.resolve(process.cwd(), 'content', `${name}.yaml`);
  return yaml.load(fs.readFileSync(file, 'utf8'));
}

/** Plain English text from a {en, kn} object (used only for attributes/titles). */
export function en(value) {
  if (value && typeof value === 'object') return value.en ?? value.kn ?? '';
  return value ?? '';
}

/** Returns u('key') -> the {en, kn} object for a UI label in content/ui.yaml. */
export function makeUI() {
  const ui = load('ui');
  return (key) => ui[key] ?? { en: key, kn: key };
}
