'use client'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
const SuccessModal = ({ showSuccess }) => {

    const [show, setShow] = useState(showSuccess);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton className='modal-header position-absolute border-0 end-0'>
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                </Modal.Header>
                <Modal.Header>
                    <div className='text-center w-100 mt-2'>
                        {/* <FaRegCircleCheck className='text-success m-auto' size={50} /> */}
                        <FaCheckDouble className='text-success m-auto' size={50} />
                    </div>
                </Modal.Header>

                <Modal.Body className='text-center'>
                    Your car details has been successfully submitted. Our team will get back to you shortly. <div className='d-flex justify-content-center gap-1 align-items-center'>Thanks <h4 className='text-success mb-0'>!</h4></div> 
                </Modal.Body>
                <Modal.Footer className='text-center w-100'>
                    <Button variant="outline-success" className='m-auto px-5' onClick={handleClose}>
                        OKAY
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SuccessModal;