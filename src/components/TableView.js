import './TableView.css';

const TableView = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Person ID</th>
                    <th>Person Name</th>
                    <th>Domain</th>
                    <th>Love</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.person_details.map(
                        person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.person_name}</td>
                            <td>{person.domain}</td>
                            <td>{person.personal}</td>
                        </tr>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TableView;