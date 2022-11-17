export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const TableRow = ({ children, ...rest }: TableRowProps) => {
  return <tr>TableRow</tr>;
};
