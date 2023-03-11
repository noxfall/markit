import { useState, useCallback } from 'react';
import Editor from '@/components/Editor';
import Render from '@/components/Render';
import './App.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Welcome\n');

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Render doc={doc} />
    </div>
  )
}

export default App;
