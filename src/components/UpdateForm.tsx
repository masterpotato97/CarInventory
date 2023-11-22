import React, { useState } from 'react';
import Modal from './Modal';

interface UpdateFormProps {
    open: boolean;
    onClose: () => void;
    selectedItemId: any; 
    onUpdate: (id: any, data: any) => void; 
}

const UpdateForm: React.FC<UpdateFormProps> = ({ open, onClose, selectedItemId, onUpdate }) => {
   
    const [updatedName, setUpdatedName] = useState('');
    const [updatedCarmodel, setUpdatedCarmodel] = useState('');
    const [updatedAddress, setUpdatedAddress] = useState('');
    const [updatedMake, setUpdatedMake] = useState('');

  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

      
        const updatedData = {
            name: updatedName,
            model: updatedCarmodel,
            address: updatedAddress,
            make: updatedMake,
        };

        onUpdate(selectedItemId, updatedData);

      
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <h1>Update Form for ID: {selectedItemId}</h1>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Updated Name:
                    <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                </label>

                <label>
                    Updated Car Model:
                    <input
                        type="text"
                        value={updatedCarmodel}
                        onChange={(e) => setUpdatedCarmodel(e.target.value)}
                    />
                </label>

                <label>
                    Updated Address:
                    <input
                        type="text"
                        value={updatedAddress}
                        onChange={(e) => setUpdatedAddress(e.target.value)}
                    />
                </label>

                <label>
                    Updated Make:
                    <input
                        type="text"
                        value={updatedMake}
                        onChange={(e) => setUpdatedMake(e.target.value)}
                    />
                </label>

                <button type="submit">Update</button>
            </form>
        </Modal>
    );
};

export default UpdateForm;
