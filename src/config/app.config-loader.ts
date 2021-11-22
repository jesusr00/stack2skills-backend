import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  const path = join(__dirname, '..', '..');
  const loaded = yaml.load(
    readFileSync(join(path, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;

  return loaded;
};
