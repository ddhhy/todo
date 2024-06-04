// import React, { useState } from "react";
// import EditTask from "../modals/EditTask";

// const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
//   const [modal, setModal] = useState(false);
//   const [isCompleted, setIsCompleted] = useState(false);

//   const colors = [
//     {
//       primaryColor: "#5D93E1",
//       secondaryColor: "#ECF3FC",
//     },
//     {
//       primaryColor: "#F9D288",
//       secondaryColor: "#FEFAF1",
//     },
//     {
//       primaryColor: "#5DC250",
//       secondaryColor: "#F2FAF1",
//     },
//     {
//       primaryColor: "#F48687",
//       secondaryColor: "#FDF1F1",
//     },
//     {
//       primaryColor: "#B964F7",
//       secondaryColor: "#F3F0FD",
//     },
//   ];

//   const toggle = () => {
//     setModal(!modal);
//   };

//   const updateTask = (obj) => {
//     updateListArray(obj, index);
//   };

//   const handleDelete = () => {
//     deleteTask(index);
//   };

//   const handleCheckboxChange = () => {
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <div class="card-wrapper mr-5">
//       <div
//         class="card-top"
//         style={{ "background-color": colors[index % 5].primaryColor }}
//       ></div>
//       <div class="task-holder">
//         <input
//           type="checkbox"
//           checked={isCompleted}
//           onChange={handleCheckboxChange}
//           className="task-checkbox"
//         />
//         <span
//           class="card-header"
//           style={{
//             "background-color": colors[index % 5].secondaryColor,
//             "border-radius": "10px",
//             textDecoration: isCompleted ? "line-through" : "none",
//           }}
//         >
//           {taskObj.Name}
//         </span>
//         <p className="mt-3">{taskObj.Description}</p>
//         <div style={{ position: "absolute", top: "160px", left: "160px" }}>
//           <button
//             style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
//             onClick={() => setModal(true)}
//           >
//             close
//           </button>
//           <button
//             style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       <EditTask
//         modal={modal}
//         toggle={toggle}
//         updateTask={updateTask}
//         taskObj={taskObj}
//       />
//     </div>
//   );
// };

// export default Card;

// import React, { useState, useEffect } from "react";
// import EditTask from "../modals/EditTask";
// import {
//   Card as MuiCard,
//   CardContent,
//   Checkbox,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { Delete, Edit } from "@mui/icons-material";

// const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
//   const [modal, setModal] = useState(false);
//   const [isCompleted, setIsCompleted] = useState(false);

//   const colors = [
//     {
//       primaryColor: "#5D93E1",
//       secondaryColor: "#ECF3FC",
//     },
//     {
//       primaryColor: "#F9D288",
//       secondaryColor: "#FEFAF1",
//     },
//     {
//       primaryColor: "#5DC250",
//       secondaryColor: "#F2FAF1",
//     },
//     {
//       primaryColor: "#F48687",
//       secondaryColor: "#FDF1F1",
//     },
//     {
//       primaryColor: "#B964F7",
//       secondaryColor: "#F3F0FD",
//     },
//   ];

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {};
//     if (savedTasks[taskObj.id]) {
//       setIsCompleted(true);
//     }
//   }, [taskObj.id]);

//   const toggle = () => {
//     setModal(!modal);
//   };

//   const updateTask = (obj) => {
//     updateListArray(obj, index);
//   };

//   const handleDelete = () => {
//     deleteTask(index);
//   };

//   const handleCheckboxChange = () => {
//     const newState = !isCompleted;
//     setIsCompleted(newState);
//     const savedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {};
//     savedTasks[taskObj.id] = newState;
//     localStorage.setItem("completedTasks", JSON.stringify(savedTasks));
//   };

//   return (
//     <MuiCard sx={{ marginBottom: 2, boxShadow: 3 }}>
//       <div
//         style={{
//           backgroundColor: colors[index % 5].primaryColor,
//           height: "5px",
//         }}
//       ></div>
//       <CardContent
//         style={{
//           backgroundColor: colors[index % 5].secondaryColor,
//           position: "relative",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Checkbox
//             checked={isCompleted}
//             onChange={handleCheckboxChange}
//             color="primary"
//           />
//           <Typography
//             variant="h6"
//             style={{ textDecoration: isCompleted ? "line-through" : "none" }}
//           >
//             {taskObj.Name}
//           </Typography>
//         </div>
//         <Typography
//           variant="body2"
//           style={{ textDecoration: isCompleted ? "line-through" : "none" }}
//         >
//           {taskObj.Description}
//         </Typography>
//         <div style={{ position: "absolute", top: "10px", right: "10px" }}>
//           <IconButton onClick={toggle} color="primary">
//             <Edit />
//           </IconButton>
//           <IconButton onClick={handleDelete} color="secondary">
//             <Delete />
//           </IconButton>
//         </div>
//       </CardContent>
//       <EditTask
//         modal={modal}
//         toggle={toggle}
//         updateTask={updateTask}
//         taskObj={taskObj}
//       />
//     </MuiCard>
//   );
// };

// export default Card;
import React, { useState, useEffect } from "react";
import EditTask from "../modals/EditTask";
import {
  Card as MuiCard,
  CardContent,
  Checkbox,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {};
    if (savedTasks[taskObj.id]) {
      setIsCompleted(true);
    }
  }, [taskObj.id]);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    const savedTasks = JSON.parse(localStorage.getItem("completedTasks")) || {};
    savedTasks[taskObj.id] = newState;
    localStorage.setItem("completedTasks", JSON.stringify(savedTasks));
  };

  return (
    <MuiCard
      sx={{
        marginBottom: 2,
        boxShadow: 3,
        width: 270,
        height: 200,
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
        borderRadius: 2,
        boxShadow: "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
        margin: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "8px 8px 16px #bdbdbd, -8px -8px 16px #ffffff",
        },
      }}
    >
      <div
        style={{
          backgroundColor: colors[index % 5].primaryColor,
          height: "5px",
        }}
      ></div>
      <CardContent
        style={{
          backgroundColor: colors[index % 5].secondaryColor,
          position: "relative",
          height: "100%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={isCompleted}
            onChange={handleCheckboxChange}
            color="primary"
            sx={{ marginRight: 1 }}
          />
          <Typography
            variant="h6"
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {taskObj.Name}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {taskObj.Description}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <IconButton onClick={toggle} color="primary">
            <Edit />
          </IconButton>
          <IconButton onClick={handleDelete} color="secondary">
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </MuiCard>
  );
};

export default Card;
