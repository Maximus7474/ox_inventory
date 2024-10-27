import React, { useState } from 'react';

interface RenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newName: string) => void;
}

const RenameModal: React.FC<RenameModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [newName, setNewName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(newName);
    setNewName('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className="inventory-control"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#111111',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: '0 0 15px' }}>Rename Item</h2>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
          className='inventory-control-input'
          style={{
            margin: '5px auto 15px',
            border: 'solid 1px #2a2a2a',
            width: '85%',
            padding: '10px',
            marginBottom: '15px',
          }}
        />
        <div className='ButtonRow' style={{ margin: '0 auto' }}>
          <button
            onClick={onClose}
            className='inventory-control-button'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='inventory-control-button'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenameModal;
