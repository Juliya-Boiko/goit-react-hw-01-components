import PropTypes from 'prop-types';

export const TransactionHistory = ({ history }) => {
    return <table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {history.map((item) => 
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>)}
    </tbody>
</table>
}

TransactionHistory.propTypes = {
    history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired
}