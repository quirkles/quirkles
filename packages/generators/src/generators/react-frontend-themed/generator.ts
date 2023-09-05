import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ReactFrontendThemedGeneratorSchema } from './schema';

export async function reactFrontendThemedGenerator(
  tree: Tree,
  options: ReactFrontendThemedGeneratorSchema
) {
  const projectRoot = `web/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default reactFrontendThemedGenerator;
