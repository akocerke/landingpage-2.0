"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifyPage() {
  const notify = () =>
    toast.success("This is a success toast!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Toastify Examples</h1>
      <button
        onClick={notify}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
}
