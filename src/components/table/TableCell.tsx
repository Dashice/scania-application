export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableCell = ({ children, ...rest }: TableCellProps) => {
  return <td>TableCell</td>;
};
