import { useGlobalState } from "../libs/global_state";
const Modal = () => {
  const { setIsModalOpen, modalErrorMessage } = useGlobalState();
  return (
    <div className=" w-screen h-screen absolute flex items-center justify-center shadow-">
      <div className=" h-28 w-52 bg-teal-500 rounded-md flex flex-col items-center justify-center border-2 border-black p-2 text-center">
        <p>{modalErrorMessage}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className=" bg-white border-2 border-black px-6 py-1 mt-3 rounded-full"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
