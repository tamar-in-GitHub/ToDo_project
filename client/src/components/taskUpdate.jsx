// import { useEffect, useState } from "react";
// import { useRef } from "react";
// import { connect } from "react-redux";

// import { useLocation } from 'react-router-dom'

// import { updateTask } from "../redux/action";
// import axios from 'axios'
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// function mapStateToProps(state) {
//     return {
//         taskType: state.tasks.taskType,
//         tasksList: state.tasks.tasksList,
//         activeUser: state.users.activeUser
//     }
// }

// export default connect(mapStateToProps)(function ShowTaskList(props) {
//     // const loc = useLocation()
//     const { taskType, tasksList, setFlag, dispatch, UserTaskId, activeUser } = props;

//     // const [flag, setFlag] = useState(false);
//     // debugger
//     // const tasksContact = tasksList.filter(task => task.taskId == loc.state.taskId);

//     // const [open, setOpen] = React.useState(false);

//     // const handleClickOpen = () => {
//     //     setOpen(true);
//     //     // setFlag(true)
//     // };

//     // const handleClose = () => {
//     //     setOpen(false);
//     // };

//     // const add = ((taskId, taskName, taskTypeId, contactTaskId, contactTaskName) => {
//     //     debugger
//     //     dispatch(addTaskToList({ taskId: taskId, taskName: taskName, taskTypeId: taskTypeId, contactTaskId: contactTaskId, contactTaskName: contactTaskName }))
//     //     // setFlag(true)
//     // })
//     const updateThisTask = async () => {
//         let indexSelectOption = taskType.find(x => x.taskTypeName == taskTypeIdRef.current.value)?.taskTypeId
//         try {
//             const response = await axios.post('http://localhost:5000/task/', {
//                 taskId: taskIdRef.current.value,
//                 taskTypeId: taskTypeIdRef.current.value,
//                 taskName: taskNameRef.current.value,
//                 taskDescription: taskDescriptionRef.current.value,
//                 UserTaskId: activeUser
//             });

//         } catch (ex) {
//             throw new Error(ex)
//         };
//         dispatch(updateTask({ taskId: taskIdRef.current.value, taskTypeId: indexSelectOption, taskName: taskNameRef.current.value, taskDescription: taskDescriptionRef.current.value, UserTaskId: activeUser }))
//         newNavigate('/taskList')
//     }


//     //   useEffect(function () {
//     //     console.log("contactsList", taskList)
//     // }, [, taskList]);

//     return (
//         <>
//             <React.Fragment>
//                 {tasksContact.map((item) => {
//                     return (
//                         <>
//                             <TaskData id={item.taskId} />
//                         </>
//                     )
//                 })}
//                 {/* <Button variant="outlined" onClick={handleClickOpen}>
//                     Open form dialog
//                 </Button> */}
//                 {/* <Button variant="outlined" onClick={handleClickOpen}>add task</Button>
//                 {!flag || <EnterTask setFlag={setFlag} />} */}

//                 <Dialog
//                     // open={open}
//                     // onClose={handleClose}
//                     PaperProps={{
//                         component: 'form',
//                         onSubmit: (event) => {
//                             event.preventDefault();
//                             const formData = new FormData(event.currentTarget);
//                             const formJson = Object.fromEntries(formData.entries());
//                             const taskId = formJson.taskId;
//                             const taskName = formJson.taskName;
//                             const taskTypeId = formJson.taskTypeId;
//                             const taskDescription = formJson.taskDescription;
//                             const UserTaskId = formJson.UserTaskId;
//                             console.log(contactTaskName);
//                             // add(taskId, taskTypeId,taskName,taskDescription ,  UserTaskId)
//                             updateThisTask();
//                             // handleClose();
//                         },
//                     }}
//                 >
//                     <DialogTitle>Add Now</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             enter details of task
//                         </DialogContentText>
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="taskId"
//                             name="taskId"
//                             label="Task Id"
//                             type="taskId"
                        
//                             variant="standard"
//                         />
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="taskName"
//                             name="taskName"
//                             label="Task Name"
//                             type="taskName"
                            
//                             variant="standard"
//                         />
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="taskTypeId"
//                             name="taskTypeId"
//                             label="Task Type Id"
//                             type="taskTypeId"
                          
//                             variant="standard"
//                         />
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="contactTaskId"
//                             name="contactTaskId"
//                             label="Contact Task Id"
//                             type="contactTaskId"
                      
//                             variant="standard"
//                         />
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="contactTaskName"
//                             name="contactTaskName"
//                             label="Contact Task Name"
//                             type="contactTaskName"
              
//                             variant="standard"
//                         />
//                     </DialogContent>
//                     {/* <DialogActions>
//                         <Button onClick={handleClose}>Cancel</Button>
//                         <Button type="submit">Ok</Button>
//                     </DialogActions> */}
//                 </Dialog>
//             </React.Fragment>

//         </>
//     )
// })