import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions/todosAction";

export const Todos = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch]);

  return (
    <div>
      <h2>Todos App</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <section
        style={{
          margin: "20px auto",
        }}>
        {todos.map((todo) => (
          <table key={todo.id}>
            <tbody>
              <tr>
                <td
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: todo.completed ? "green" : "red",
                    fontSize: "18px",
                  }}>
                  {todo.id}
                </td>
                <td
                  style={{
                    width: "650px",
                    height: "50px",
                    border: "1px solid white",
                    textAlign: "left",
                    paddingLeft: "10px",
                    textTransform: "capitalize",
                    textDecoration: todo.completed ? "line-through" : "none",
                    fontSize: "18px",
                  }}>
                  {todo.title}
                </td>
                <td
                  style={{
                    width: "200px",
                    height: "50px",
                    border: "1px solid white",
                    textAlign: "center",
                    paddingLeft: "10px",
                    fontSize: "18px",
                  }}>
                  {todo.completed ? "Completed" : "Not Completed"}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </section>
    </div>
  );
};

// ! PLANNING REDUX USING API DATA FETCHING
// step-1: installing packages
// step-2: constant define
// step-3: async action creator
// step-4: reducer
// step-5: create store
// step-6: provide store
// step-7: use store
// step-8: adding style
