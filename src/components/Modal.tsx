import { Link } from "react-router-dom";

const Modal = ({
  fName,
  lName,
  status,
  id,
  handleDelete,
  open,
  onClose,
}: any) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed bg-[rgba(0,0,0,0.7)] z-[100] inset-0"></div>
      <div className="flex flex-col gap-4 p-[7px] rounded-[7px] fixed -translate-x-2/4 -translate-y-2/4 bg-white z-[1000] w-[200px] left-2/4 top-2/4">
        <div className="flex flex-col gap-3 p-3 text-center">
          <h2 className="capitalize text-xl">{fName}</h2>
          <h2 className="capitalize text-xl">{lName}</h2>
          <h2 className="font-medium">{status}</h2>
        </div>
        <div className="flex justify-around">
          <Link to={`/edit-contact/${id}`}>
            <button className="bg-[#4d4df5] text-[black] px-[15px] py-[7px] rounded-[7px]">
              Edit
            </button>
          </Link>
          <button
            className="bg-[rgb(230,24,24)] text-white px-[15px] py-[7px] rounded-[7px]"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className="absolute right-3 top-[7px] text-indigo-500"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
