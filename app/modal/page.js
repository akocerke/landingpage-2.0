"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function ModalExample() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS initialisieren
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      id="features"
      className="max-h-screen py-28 bg-gradient-to-l from-purple-600 to-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-950"
    >
      {/* Header mit Border */}
      <div className="flex items-center justify-center pb-11 shadow-md">
        <div
          data-aos="fade-right"
          className="border-l-4 border-teal-400 h-12 mr-4"
        ></div>{" "}
        {/* Höhe anpassen */}
        <h2
          data-aos="fade-left"
          className="text-6xl font-bold text-gray-100 drop-shadow-md dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)]"
        >
          Modal
        </h2>
        
      </div>
      <p className="text-center text-gray-100 dark:text-gray-300 dark:drop-shadow-[0_5px_5px_rgba(128,0,128,1)] pt-6" data-aos="fade-up">
          Add dialogs to your site for light boxes, user notifications, or
          completely custom content.
        </p>
      <div
        className="flex items-center justify-center pt-11"
        data-aos="zoom-in"
      >
        <button
          className="bg-red-700 hover:bg-blue-700 px-4 py-3 hover:scale-110 duration-300 text-gray-100 rounded-lg shadow-lg"
          onClick={handleShow}
        >
          Launch demo modal
        </button>

        <Modal
          show={show}
          dialogClassName="modal-dialog-centered"
          onHide={handleClose}
          className="bg-gray-950 bg-opacity-25"
        >
          <Modal.Header
            closeButton
            className="dark:bg-gray-600 dark:text-gray-200"
          >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="dark:bg-gray-600 dark:text-gray-200">
            Woohoo, you are reading this text in a modal!
          </Modal.Body>
          <Modal.Footer className="dark:bg-gray-600 dark:text-gray-200">
            <button
              className="shadow-lg bg-red-700 hover:bg-blue-700 px-4 py-2 duration-300 text-gray-100 rounded-lg"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="flex flex-col justify-center items-center mt-11 p-4 text-center min-h-[100px] max-w-[400px] mx-auto">
        <p className="text-gray-200 text-center" data-aos="fade-up">
          If you want to know how it works,
          <a
            href="https://react-bootstrap.netlify.app/docs/components/modal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center drop-shadow-md text-gray-300 hover:text-orange-200 hover:scale-110 duration-300 dark:text-gray-400 dark:hover:text-orange-200"
          >
            <AiOutlineQuestionCircle size={24} className="ml-3 mr-2" />
            <span>Read the documentation</span>
          </a>
        </p>
      </div>
    </section>
  );
}
