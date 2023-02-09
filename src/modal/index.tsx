
import OriginModal from "./modal"
import useModal from "./useModal";

type ModalType = typeof OriginModal & {
    useModal: typeof useModal;
};


const Modal = OriginModal as ModalType;
Modal.useModal = useModal;
export default Modal;