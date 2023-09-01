import { useState } from 'react';

function Modal({ children, onConfirm, onCancel }) {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-[400px] h-[200px] bg-secondary rounded-lg p-4">
        {children}
        <div className="flex justify-end mt-4">
          <button onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">확인</button>
          <button onClick={handleCancel} className="mr-2 px-4 py-2 bg-gray-300 rounded">취소</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
