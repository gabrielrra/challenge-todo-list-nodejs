import { reset_data, add_task, remove_task, find_task, move_task, list_tasks } from './index'; // Update with the correct path

describe('index.spec.ts', () => {
  beforeEach(() => {
    reset_data();
  });

  test('should add a task at the end by default', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' });
    expect(list_tasks()).toEqual([{ name: 'Task 1' }, { name: 'Task 2' }]);
  });

  test('should add a task at a specific position', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' }, 0);
    expect(list_tasks()).toEqual([{ name: 'Task 2' }, { name: 'Task 1' }]);
  });

  test('should throw an error when adding a task at an invalid position', () => {
    expect(() => add_task({ name: 'Task 1' }, 5)).toThrow('Invalid position 5! Valid numbers are 0 to 0');
  });

  test('should throw an error when adding a duplicate task', () => {
    add_task({ name: 'Task 1' });
    expect(() => add_task({ name: 'Task 1' })).toThrow('Task already exists!');
  });

  test('should remove a task by name', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' });
    const removedTask = remove_task('Task 1');
    expect(removedTask).toEqual({ name: 'Task 1' });
    expect(list_tasks()).toEqual([{ name: 'Task 2' }]);
  });

  test('should throw an error when trying to remove a non-existing task', () => {
    expect(() => remove_task('Nonexistent Task')).toThrow();
  });

  test('should find a task by name', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' });
    const taskIndex = find_task('Task 2');
    expect(taskIndex).toBe(1);
  });

  test('should return -1 when trying to find a non-existing task', () => {
    add_task({ name: 'Task 1' });
    const taskIndex = find_task('Nonexistent Task');
    expect(taskIndex).toBe(-1);
  });

  test('should move a task to a new position', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' });
    add_task({ name: 'Task 3' });
    move_task('Task 1', 2);
    expect(list_tasks()).toEqual([{ name: 'Task 2' }, { name: 'Task 3' }, { name: 'Task 1' }]);
  });

  test('should throw an error when trying to move a task to an invalid position', () => {
    add_task({ name: 'Task 1' });
    expect(() => move_task('Task 1', 5)).toThrow('Invalid position 5! Valid numbers are 0 to 0');
  });

  test('should throw an error when trying to move a non-existing task', () => {
    expect(() => move_task('Nonexistent Task', 1)).toThrow("Task 'Nonexistent Task' not found!");
  });

  test('should list all tasks', () => {
    add_task({ name: 'Task 1' });
    add_task({ name: 'Task 2' });
    expect(list_tasks()).toEqual([{ name: 'Task 1' }, { name: 'Task 2' }]);
  });
});
