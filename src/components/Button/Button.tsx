type Props = {
  children: string;
  onAdd: () => {};
};

export function Button({ children, onAdd }: Props) {
  return <button onClick={onAdd}>{children}</button>;
}
