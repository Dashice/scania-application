export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table = ({ children, ...rest }: TableProps) => {
  return <table>Table</table>;
};
