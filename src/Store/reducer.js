import {
  CHECK_TASK,
  DELETE_TASK,
  FILTER_VIEW_UNCOMPLETE,
  FILTER_VIEW_COMPLETE,
  FILTER_VIEW_ALL,
  CREATE_TASK
} from "./actions";
export default function reducer(
  state = {
    tasks: [],
    filter: tasks => tasks
  },
  { type, payload }
) {
  switch (type) {
    case CHECK_TASK: {
      const { id } = payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          Number(task.id) === Number(id) ? { ...task, done: !task.done } : task
        )
      };
    }
    case DELETE_TASK: {
      const { id } = payload;
      return {
        ...state,
        tasks: state.tasks.filter(task => Number(task.id) !== Number(id))
      };
    }
    case FILTER_VIEW_UNCOMPLETE: {
      return {
        ...state,
        filteredBy: "Uncomplete",
        filter: task => !task.done
      };
    }
    case FILTER_VIEW_COMPLETE: {
      return {
        ...state,
        filteredBy: "Complete",
        filter: task => task.done
      };
    }
    case FILTER_VIEW_ALL: {
      return {
        ...state,
        filteredBy: "All",
        filter: task => task
      };
    }
    case CREATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.concat([
          {
            ...payload,
            id: state.tasks.length
          }
        ])
      };
    }
    default:
      return state;
  }
}
