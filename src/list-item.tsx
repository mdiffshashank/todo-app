import { useContext } from "react";
import { AppContext } from "./app-context";

const ListItem = ({ children, id }: Props) => {
  const { deleteById } = useContext(AppContext);

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    deleteById(id);
    console.log("Deleted");
  };

  return (
    <>
      <li className="item">
        <div>{children}</div>
        <button onClick={onDelete}>Delete</button>
      </li>
    </>
  );
};

export default ListItem;

type Props = {
  children: React.ReactNode;
  id: string;
};
