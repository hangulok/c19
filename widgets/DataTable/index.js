import { useState, useEffect } from "react";
import styles from "shared/styles/modules/DataTable.module.scss";

const DataTable = ({ table_data }) => {
  const { headers, body } = table_data;

  const [sortBy, setSortBy] = useState("Index");
  const [sortedBody, setSortedBody] = useState(body);

  const sortClicked = (header) => {
    setSortBy(header);
    setSortedBody(
      body.sort((a, b) => {
        return typeof a[header].value === "number"
          ? header === "Index"
            ? a[header].value - b[header].value
            : b[header].value - a[header].value
          : a[header].value.localeCompare(b[header].value);
      })
    );
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>
              <div
                className={sortBy === header ? styles.active : ""}
                onClick={() => sortClicked(header)}
              >
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedBody.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((r, i) => (
              <td key={i}>
                <div className={`${styles[r.style]} ${styles[r.font]}`}>
                  <div>{r.value?.toLocaleString()}</div>
                  <div className={styles.sub}>{r.sub?.toLocaleString()}</div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
