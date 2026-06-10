import { create } from "zustand";

export const taskStore = create((set) => ({
    tasks:[
  { id: 1, text: "doLaundry", isComplete: false, priority: "low" },
  { id: 2, text: "doDishes", isComplete: false, priority: "medium" },
  { id: 3, text: "doHousework", isComplete: false, priority: "high" },
  { id: 4, text: "doChores", isComplete: false, priority: "low" },
],

  addTask: (text, priority) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          text,
          isCompleted: false,
          priority,
        },
      ],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter(
        (task) => task.id !== id
      ),
    })),

  toggleCompletion: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted:
                !task.isCompleted,
            }
          : task
      ),
    })),

  updatePriority: (
    id,
    priority
  ) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, priority }
          : task
      ),
    })),
}));