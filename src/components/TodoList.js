// import React, {useEffect, useState} from 'react';
// import CreateTask from '../modals/CreateTask'
// import Card from './Card';

// const TodoList = () => {
//     const [modal, setModal] = useState(false);
//     const [taskList, setTaskList] = useState([])

//     useEffect(() => {
//         let arr = localStorage.getItem("taskList")

//         if(arr){
//             let obj = JSON.parse(arr)
//             setTaskList(obj)
//         }
//     }, [])

//     const deleteTask = (index) => {
//         let tempList = taskList
//         tempList.splice(index, 1)
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(tempList)
//         window.location.reload()
//     }

//     const updateListArray = (obj, index) => {
//         let tempList = taskList
//         tempList[index] = obj
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(tempList)
//         window.location.reload()
//     }

//     const toggle = () => {
//         setModal(!modal);
//     }

//     const saveTask = (taskObj) => {
//         let tempList = taskList
//         tempList.push(taskObj)
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(taskList)
//         setModal(false)
//     }

//     return (
//         <>
//             <div className = "header text-center">
//                 <h3>Todo List</h3>
//                 <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
//             </div>
//             <div className = "task-container">
//             {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
//             </div>
//             <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
//         </>
//     );
// };

// export default TodoList;

// import React, { useEffect, useState } from "react";
// import CreateTask from "../modals/CreateTask";
// import Card from "./Card";
// import { Container, Typography, Button, Box } from "@mui/material";

// const TodoList = () => {
//   const [modal, setModal] = useState(false);
//   const [taskList, setTaskList] = useState([]);

//   useEffect(() => {
//     const arr = localStorage.getItem("taskList");

//     if (arr) {
//       const obj = JSON.parse(arr);
//       setTaskList(obj);
//     }
//   }, []);

//   const deleteTask = (index) => {
//     const tempList = taskList;
//     const deletedTask = tempList.splice(index, 1);
//     localStorage.setItem("taskList", JSON.stringify(tempList));
//     setTaskList(tempList);

//     // Remove the task from completedTasks in localStorage
//     const completedTasks =
//       JSON.parse(localStorage.getItem("completedTasks")) || {};
//     delete completedTasks[deletedTask[0].id];
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

//     window.location.reload();
//   };

//   const updateListArray = (obj, index) => {
//     const tempList = taskList;
//     tempList[index] = obj;
//     localStorage.setItem("taskList", JSON.stringify(tempList));
//     setTaskList(tempList);
//     window.location.reload();
//   };

//   const toggle = () => {
//     setModal(!modal);
//   };

//   const saveTask = (taskObj) => {
//     taskObj.id = new Date().getTime(); // Add a unique ID to the task object
//     const tempList = taskList;
//     tempList.push(taskObj);
//     localStorage.setItem("taskList", JSON.stringify(tempList));
//     setTaskList(tempList);
//     setModal(false);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" my={4}>
//         <Typography variant="h3">Todo List</Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setModal(true)}
//         >
//           Create Task
//         </Button>
//       </Box>
//       <Box display="flex" flexWrap="wrap">
//         {taskList &&
//           taskList.map((obj, index) => (
//             <Card
//               key={obj.id} // Use the unique ID as the key
//               taskObj={obj}
//               index={index}
//               deleteTask={deleteTask}
//               updateListArray={updateListArray}
//             />
//           ))}
//       </Box>
//       <CreateTask toggle={toggle} modal={modal} save={saveTask} />
//     </Container>
//   );
// };

// export default TodoList;

import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { Container, Typography, Button, Box } from "@mui/material";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const arr = localStorage.getItem("taskList");

    if (arr) {
      const obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    const tempList = taskList;
    const deletedTask = tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);

    // Remove the task from completedTasks in localStorage
    const completedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || {};
    delete completedTasks[deletedTask[0].id];
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    const tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    taskObj.id = new Date().getTime(); // Add a unique ID to the task object
    const tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <Container>
      <Box
        textAlign="center"
        my={4}
        className="header"
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: "#4a90e2",
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "3em", margin: 0 }}>
          Todo List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal(true)}
          className="btn"
          sx={{
            marginTop: 2,
            fontSize: "1.5em",
            padding: "15px 30px",
            border: "none",
            borderRadius: "50px",
            background: "linear-gradient(45deg, #6a11cb, #2575fc)",
            color: "#fff",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(45deg, #2575fc, #6a11cb)",
              boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Create Task
        </Button>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        className="task-container"
        sx={{
          height: "600px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#f6f7f8",
          padding: "40px 100px",
        }}
      >
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={obj.id} // Use the unique ID as the key
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </Box>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </Container>
  );
};

export default TodoList;
