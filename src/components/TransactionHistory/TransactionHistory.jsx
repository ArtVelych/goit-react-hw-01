import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.transactionMenuInfo}>
        <tr className={css.transactionMenuInfoList}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map((item) => {
        return (
          <tbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;
