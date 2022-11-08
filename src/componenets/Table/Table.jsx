import React from "react";
import { Table as AntTable } from "antd";
import "antd/dist/antd.css";

const Table = (props) => {
  const { columns, ...otherTableProps } = props;

  const sortableColumns = columns.map((column) => {
    const { sorter, dataIndex, ...otherColumnProps } = column;

    if (sorter) {
      const { compare, ...otherSorterProps } = sorter;

      return {
        ...otherColumnProps,
        dataIndex,
        sorter: {
          compare: (rowA, rowB) => compare(rowA[dataIndex], rowB[dataIndex]),
          ...otherSorterProps
        }
      };
    }

    return { ...otherColumnProps, dataIndex };
  });

  return <AntTable columns={sortableColumns} {...otherTableProps} className="overflow-x-auto"/>;
};

export default Table;
