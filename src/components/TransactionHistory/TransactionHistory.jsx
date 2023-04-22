import { Transaction } from "./Transaction/Transaction";
import PropTypes from 'prop-types';
import { Table, Head, Raw, Group, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
            <Head>
                <Raw>
                    <Group>Type</Group>
                    <Group>Amount</Group>
                    <Group>Currency</Group>
                </Raw>
            </Head>
            <Body>
                <Transaction transactions={transactions} />
            </Body>
        </Table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};