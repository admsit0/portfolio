
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Simple syntax highlighting for demo purposes
  const formatCode = (code: string, language: string) => {
    if (language === 'python' || language === 'javascript') {
      return code
        .replace(/(def|class|import|from|if|else|elif|for|while|try|except|return|async|await|const|let|var|function|=&gt;)/g, '<span class="text-purple-600 font-semibold">$1</span>')
        .replace(/(#.*$)/gm, '<span class="text-green-600 italic">$1</span>')
        .replace(/(\/\/.*$)/gm, '<span class="text-green-600 italic">$1</span>')
        .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-amber-600">$1</span>')
        .replace(/(\d+)/g, '<span class="text-blue-600">$1</span>');
    }
    return code;
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-slate-400 text-sm">{language}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 text-sm transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-slate-300 text-sm leading-relaxed">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: formatCode(code, language) 
            }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
