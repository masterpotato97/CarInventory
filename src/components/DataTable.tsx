import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import UpdateForm from './UpdateForm'; // Import the UpdateForm component
import UpdateModal from './UpdateModal';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'address', headerName: "Address", flex: 1 }
];

function DataTable() {
    let [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);
    let [updateFormOpen, setUpdateFormOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleUpdateClose = () => {
        setUpdateFormOpen(false);
    }


    const deleteData = async () => {
        await server_calls.delete(selectionModel[0]);
        getData();
        setSelectionModel([]);
    }

    const handleUpdate = () => {
        if (selectionModel.length === 1) {
            // Open the update form modal
            setUpdateFormOpen(true);
        } else {
            console.error('Select one item to update');
        }
    };

    const handleUpdateSubmit = async (id, updatedData) => {
        try {
            // Make an API call to update the selected item with the provided data
            await server_calls.update(id, updatedData);

            // Refresh the data after the update
            getData();

            // Close the update form modal
            setUpdateFormOpen(false);
        } catch (error) {
            console.error('Error updating data:', error);
            // Handle errors (e.g., show an error message to the user)
        }
    };

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}

            />

            <UpdateModal
                id={selectionModel[0]}
                open={updateFormOpen}
                onClose={handleUpdateClose}
            />

            <div className="flex flex-row">
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Create New car
                    </button>
                </div>
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleUpdate()}>
                        update
                    </button>
                </div>

                <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
            </div>

            {/* Data Table section */}
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Cars</h2>
                <DataGrid
                    rows={contactData}
                    columns={columns}
                    checkboxSelection={true}
                    onRowSelectionModelChange={(item: any) => {
                        setSelectionModel(item);
                    }}
                    componentsProps={{
                        pagination: {
                            rowsPerPageOptions: [5]
                        }
                    }}
                />
            </div>
        </>
    );
}

export default DataTable;