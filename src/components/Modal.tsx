import ContactForm from './ContactForm';



type Props = {
   
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if (!props.open) return (<></>)

    return (
        <div
            onClick={props.onClose}
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center items-center bg-gray-300 bg-opacity-75'
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-between">
                        <p className="flex justify-end m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                            onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div>
                       
                            <ContactForm />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
