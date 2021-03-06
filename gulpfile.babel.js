/*
 * To add a new task, simply add a new task file that directory.
 * gulp/tasks/default.js specifies the default set of tasks to run
 * when you run `gulp`.
 */

'use strict';

import requireDir from 'require-dir';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
