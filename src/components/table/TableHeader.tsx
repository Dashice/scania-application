export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableHeader = ({ children, ...rest }: TableHeaderProps) => {
  return <th>TableHeader</th>;
};
