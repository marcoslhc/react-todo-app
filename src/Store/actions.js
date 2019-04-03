export const CHECK_TASK = "CHECK_TASK";
export const FILTER_VIEW_ALL = "FILTER_VIEW_ALL";
export const FILTER_VIEW_COMPLETE = "FILTER_VIEW_COMPLETE";
export const FILTER_VIEW_UNCOMPLETE = "FILTER_VIEW_UNCOMPLETE";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const checkTask = dispatch => id =>
  dispatch({
    type: CHECK_TASK,
    payload: {
      id
    }
  });
export const viewAll = dispatch => () =>
  dispatch({
    type: FILTER_VIEW_ALL
  });
export const viewComplete = dispatch => () =>
  dispatch({
    type: FILTER_VIEW_COMPLETE
  });
export const viewUncomplete = dispatch => () =>
  dispatch({
    type: FILTER_VIEW_UNCOMPLETE
  });
export const createTask = dispatch => ({ title, done = false }) =>
  dispatch({
    type: CREATE_TASK,
    payload: {
      title,
      done
    }
  });
export const deleteTask = dispatch => id =>
  dispatch({
    type: DELETE_TASK,
    payload: {
      id
    }
  });
