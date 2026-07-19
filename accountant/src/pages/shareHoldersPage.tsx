import { useState } from 'react';
import { ChevronDown, ChevronUp, Pencil, Wallet } from 'lucide-react';

interface Shareholder {
  id: string;
  name: string;
  sharesPercentage: number;
  totalCash: number;
}

const mockShareholders: Shareholder[] = [
  { id: '1', name: 'Aria Vance', sharesPercentage: 45.5, totalCash: 250000 },
  { id: '2', name: 'Marcus Sterling', sharesPercentage: 30.0, totalCash: 164500 },
  { id: '3', name: 'Elena Rostova', sharesPercentage: 24.5, totalCash: 134450 }
];

const ShareholdersPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white text-black border border-black p-6">
      {/* Table Header */}
      <div className="border-b-2 border-black pb-2 mb-4">
        <h2 className="text-xl font-black tracking-tighter uppercase">Shareholders</h2>
      </div>

      {/* Table Rows Container */}
      <div className="flex flex-col border border-black divide-y divide-black">
        {mockShareholders.map((shareholder) => {
          const isExpanded = expandedId === shareholder.id;

          return (
            <div key={shareholder.id} className="bg-white">
              {/* Row Header (Closed State) */}
              <button
                onClick={() => toggleRow(shareholder.id)}
                className="w-full flex justify-between items-center p-4 hover:bg-black hover:text-white transition-colors duration-150 text-left"
                aria-expanded={isExpanded}
              >
                <span className="font-bold text-lg tracking-tight">
                  {shareholder.name}
                </span>
                <div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 stroke-[3]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 stroke-[3]" />
                  )}
                </div>
              </button>

              {/* Row Content (Expanded State) */}
              {isExpanded && (
                <div className="transition-all duration-300 p-6 bg-white text-black border-t border-black grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Data Grid */}
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-black uppercase tracking-widest text-black">
                        Share Holder Name
                      </span>
                      <span className="text-base font-medium">{shareholder.name}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black uppercase tracking-widest text-black">
                        Shares Percentage
                      </span>
                      <span className="text-base font-medium">{shareholder.sharesPercentage}%</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black uppercase tracking-widest text-black">
                        Total Cash
                      </span>
                      <span className="text-base font-medium">
                        ${shareholder.totalCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="flex flex-col justify-end gap-2 md:items-end">
                    <button
                      onClick={() => console.log(`Edit shares for ${shareholder.id}`)}
                      className="flex items-center justify-center gap-2 w-full md:w-52 bg-black text-white font-bold text-xs uppercase tracking-wider py-3 border border-black hover:bg-white hover:text-black transition-colors duration-150"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit Shares Percentage
                    </button>
                    <button
                      onClick={() => console.log(`Withdraw cash for ${shareholder.id}`)}
                      className="flex items-center justify-center gap-2 w-full md:w-52 bg-white text-black font-bold text-xs uppercase tracking-wider py-3 border border-black hover:bg-black hover:text-white transition-colors duration-150"
                    >
                      <Wallet className="h-4 w-4" />
                      Withdraw Cash
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShareholdersPage;
