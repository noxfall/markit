import { useState, useCallback } from 'react';
import Editor from '@/components/Editor';
import './App.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Welcome\n');

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App;
