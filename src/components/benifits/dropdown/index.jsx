import { useState, useRef, useEffect } from 'react';

function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1'); // Default: Option 1
  const dropdownRef = useRef(null);

  const options = [
    { value: 'option1', label: 'Accural' },
    { value: 'option2', label: 'Cash' },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative mx-auto items-center w-[70%]"  ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="
          w-full px-4 py-2 text-left
          bg-[var(--color-fourth)]
          rounded-lg focus:outline-none
          flex justify-between items-center
          text-center text-[var(--color-white)] font-semibold
        "
      >
        {options.find(opt => opt.value === selectedOption)?.label}
      </button>

      {isOpen && (
        <div className="
          absolute z-10 w-full mt-1
          bg-[transparent] backdrop-blur-sm
          rounded-lg shadow-lg overflow-hidden
          text-[var(--color-white)] text-center font-semibold
        ">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`
                  px-4 py-2 cursor-pointer
                  hover:bg-[rgba(81,250,170,0.6)]
                  hover:text-[var(--color-white-op)]
                  transition-colors duration-200
                  mb-[4px] text-center font-semibold
                  ${selectedOption === option.value ? 'bg-[rgba(81,250,170,0.4)]' : 'bg-[transparent]'}
                `}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownExample;