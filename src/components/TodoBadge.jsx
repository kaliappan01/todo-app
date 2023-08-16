import { Badge } from "react-bootstrap"
export default function TodoBadge(props){
    let details = props.details;
    return <Badge  >
        <h1>
        <p>{details.user} has compeleted {details.noOfCompletedTasks}/{details.noOfTasks}</p>
        </h1>
    </Badge>
}