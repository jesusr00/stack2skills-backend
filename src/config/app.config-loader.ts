import { readFileSync, existsSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  const path = join(__dirname, '..', '..');
  const filePath = join(path, YAML_CONFIG_FILENAME);

  if (!existsSync(filePath)) {
    throw new Error(`${YAML_CONFIG_FILENAME} not found`);
  }

  const loaded = yaml.load(readFileSync(join(filePath), 'utf8')) as Record<
    string,
    any
  >;

  return loaded;
};
