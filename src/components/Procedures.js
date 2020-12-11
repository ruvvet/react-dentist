import {Link} from 'react-router-dom'

export default function Home ({proceduresList}){

    const printprocedures = proceduresList.map(procedure => <li><Link to={`/procedures/${procedure.id}`}>{procedure.name}</Link></li>)
    return (
<>
<div> Procedures List </div>
    <ul>{printprocedures}</ul>
    </>
    )
}