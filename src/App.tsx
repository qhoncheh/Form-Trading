import { useState } from 'react';
import FormBg from '/Form-bg.png';
import { TabOne } from "./components/Tabs/TabOne";
import { Button } from './ui/Button';
import { TabTwo } from './components/Tabs/TabTwo';
import { TabThree } from './components/Tabs/TabThree';
import { TabFour } from './components/Tabs/TabFour';

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const formTabs = [
    { tabCount: 1, text: "TradingIdea" },
    { tabCount: 2, text: "Trade" },
    { tabCount: 3, text: "PostMarket" },
    { tabCount: 4, text: "Conclusion" },
  ];

  
  return (
  <>
    <img className="absolute top-0 left-0 h-[25rem] w-full -z-20" src={FormBg}/>
    <div className="mx-auto my-16 p-6 w-full sm:w-11/12 md:w-10/12 lg:max-w-[95rem]">
    {/* Tab Indicators 👇 */}
      <div className="flex mb-6 justify-around items-center relative">
        <div className='w-full h-1 bg-gray-400 absolute left-0 -z-10 rounded-full'>
          <div 
            className={`bg-green-900 h-full transition-all duration-1000 rounded-full`}
            style={{ width: `${((currentTab / (formTabs.length)) * 100) - 12.5}%` }}
          />
        </div>
        {formTabs.map((tab) => (
          <div className="flex flex-col items-center gap-2" key={tab.tabCount}>
            <button
              type="button"
              className={`size-25 rounded-full transition duration-500 border-4 border-green-950 font-bold text-sm cursor-default ${
                currentTab >= tab.tabCount ? "bg-green-900 text-white" : "bg-gray-200 text-black"
              }`}
              // onClick={() => setCurrentTab(tab.tabCount)}
            >
              {tab.text}
            </button>
          </div>
        ))}
      </div>
      
      {/* Tab Content */}
      {currentTab === 1 && <TabOne />}

      {currentTab === 2 && <TabTwo />}

      {currentTab === 3 && <TabThree />}
      
      {currentTab === 4 && <TabFour />}
      
      {/* Navigation Buttons */}
      <div className={`flex flex-col sm:flex-row justify-end gap-5 mt-4`}>
        {currentTab > 1 && (
          <Button variant="destructive" className="w-full sm:w-auto" onClick={() => setCurrentTab(currentTab - 1)}>
            Previous
          </Button>
        )}
        {currentTab < 4 && (
          <Button className="w-full sm:w-auto" onClick={() => setCurrentTab(currentTab + 1)}>
            Next
          </Button>
        )}
        {currentTab === 4 && (
          <Button variant='submit' type='submit' className="w-full sm:w-auto" onClick={() => alert("Submitted👌")}>
            Submit
          </Button>
        )}
      </div>
    </div>
    </>
  );
}


export default App;
