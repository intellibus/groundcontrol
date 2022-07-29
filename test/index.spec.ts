import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Ground Control Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'groundcontrol');
});

export const { run } = test;
