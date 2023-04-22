import PropTypes from 'prop-types';
import { Raw } from './Transaction.styled';

export const Transaction = ({ transactions }) => {
    return (
        transactions.map(({ id, type, amount, currency }) => (
            <Raw key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </Raw>))
    )
};

Transaction.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};