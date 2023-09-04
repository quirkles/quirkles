import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { reactFrontendThemedGenerator } from './generator';
import { ReactFrontendThemedGeneratorSchema } from './schema';

describe('react-frontend-themed generator', () => {
  let tree: Tree;
  const options: ReactFrontendThemedGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await reactFrontendThemedGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
