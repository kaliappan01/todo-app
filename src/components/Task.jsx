
export default function Task(props) {
    let task = props.task
    return <tr>
        <td>{task.name}</td>
        <td>{task.desc}</td>
        <td><input onChange={()=>props.toggleTask(task.id)} value={task.done} type="checkbox"></input></td>
    </tr>
}