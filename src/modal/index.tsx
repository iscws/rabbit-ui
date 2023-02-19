
import OriginModal from "./modal"
import useModal from "./useModal";
import confirm from "./confirm";

type ModalType = typeof OriginModal & {
    useModal: typeof useModal;
} & {
    confirm: typeof confirm;
};


const Modal = OriginModal as ModalType;
Modal.useModal = useModal;
Modal.confirm = confirm;
export default Modal;