import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistoryTable}>
      <thead className={css.transactionMenuInfo}>
        <tr>
          <th className={css.transactionMenuInfoText}>Type</th>
          <th className={css.transactionMenuInfoText}>Amount</th>
          <th className={css.transactionMenuInfoText}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.transactionMenuValueCells} key={item.id}>
              <td className={css.transactionMenuValue}>{item.type}</td>
              <td className={css.transactionMenuValue}>{item.amount}</td>
              <td className={css.transactionMenuValue}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
