import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Halo, Ini Website React Rayhan Ibrahim! 👋</h1>
      <p>Saya sedang menyelesaikan tugas belajar React dan Vite.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', display: 'inline-block' }}>
        <h3>Biodata Singkat</h3>
        <p><strong>Status Tugas:</strong> Sedang Dikerjakan</p>
        <p><strong>Fitur:</strong> Berhasil dijalankan di localhost!</p>
      </div>
    </div>
  );
}

export default App;