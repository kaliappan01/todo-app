import { Table , Button, Row, Col} from "react-bootstrap";
import Task from "./Task";
import TodoBadge from "./TodoBadge";
import { Container } from "@mui/material";
import { useState,useRef } from "react";
export default function TodoList() {
    let [tasks, setTasks] = useState([]);
    let name = useRef(null);
    let description = useRef(null);
    let [completedtasksCnt, setCompletedTasksCnt] = useState(0);
    let [newTask, setNewTask] = useState({name:"", desc:"", done:false, id: crypto.randomUUID()})
    function toggleTaskusingId(taskId){
        console.log("calling toggle task")
        for(let task of tasks){

             if (task.id===taskId){
            task.done = !task.done
                if (task.done)
                setCompletedTasksCnt(completedtasksCnt+1);
            else{
                setCompletedTasksCnt(completedtasksCnt-1);
            }
            break
            }
        }
    }
  return (
    <Container>
      <TodoBadge
        details={{
          user: "kp",
          noOfCompletedTasks: completedtasksCnt,
          noOfTasks: tasks.length,
        }} />
        <br/>
        <br/>
        <Container className="col-5">
            <Row>
            <Col><label>Task Name: </label></Col>
            <Col><input ref={name}  onChange={(e)=>setNewTask({...newTask, name:e.target.value})}/></Col>
            </Row>
            <br/>
            <Row>
            <Col><label>Task Description: </label></Col>
            <Col><input ref={description} onChange={(e)=>setNewTask({...newTask, desc:e.target.value})}/></Col>
            </Row>
            <br/>
            <br/>
            <Button type="success" onClick={()=>{ if (newTask.name){
                setTasks([...tasks,newTask]);
             setNewTask({name:"", desc:"", done:false, id: crypto.randomUUID()});
             name.current.value = "";
             description.current.value = "";
            }
            else alert("fill name for the task")}}>Add Task</Button>
        </Container>
        <br/>
        <br/>
        <Table bordered hover striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Done</th>
            </tr></thead>
            {tasks.map((task)=> <Task key={task.id} toggleTask={(taskId)=>toggleTaskusingId(taskId)} task={task} />)}
        </Table>
        </Container>
  );
}
