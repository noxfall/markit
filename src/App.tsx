import { useState, useCallback } from 'react';
import Editor from '@/components/Editor';
import Render from '@/components/Render';
import Footer from '@/components/Footer';
import './App.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Welcome\n');

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <main>
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Render doc={doc} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
