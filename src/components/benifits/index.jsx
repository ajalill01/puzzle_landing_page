import './index.css'
import DropdownExample from './dropdown/index'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend ,ArcElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Doughnut, Pie } from 'react-chartjs-2';


// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Benefits() {
    return (
        <div className='w-[80%] mx-auto mt-[64px] grid grid-cols-4 gap-x-6 bg-[transparent] mb-[128px] '>
            <div className=" bg-[transparent]
            h-[240px]
            border border-1 border-[var(--color-white-op)] rounded-3xl
            px-4 py-4
            flex flex-col 
            shadow-[0_54px_55px_#0C0E1D40,_0_-12px_30px_#0C0E1D1F,_0_4px_6px_#0C0E1D1F,_0_12px_13px_#0C0E1D2B,_0_-3px_5px_#0C0E1D17]
hover:shadow-[0_54px_55px_#ff81ff26,_0_-12px_30px_#ff81ff14,_0_4px_6px_#ff81ff14,_0_12px_13px_#ff81ff1A,_0_-3px_5px_#ff81ff10]
    hover:bg-[linear-gradient(to_bottom,transparent,#ff81ff14)]
    transition-[box-shadow,background] duration-300
    hover:-translate-y-2 transform transition-transform
            ">
                <h3 className='text-[var(--color-white)] bold mb-[16px] text-[16px]'>Be tax ready</h3>
                <DropdownExample />
                <p className='text-[var(--color-white)] text-[12px] mt-[106px]'>Cash & accrual together at last</p>
            </div>

            <div className=" bg-[transparent] translate-y-10
            h-[240px]
            border border-1 border-[var(--color-white-op)] rounded-3xl
            px-4 py-4
            flex flex-col 
            shadow-[0_54px_55px_#0C0E1D40,_0_-12px_30px_#0C0E1D1F,_0_4px_6px_#0C0E1D1F,_0_12px_13px_#0C0E1D2B,_0_-3px_5px_#0C0E1D17]
            hover:shadow-[0_54px_55px_#ff81ff26,_0_-12px_30px_#ff81ff14,_0_4px_6px_#ff81ff14,_0_12px_13px_#ff81ff1A,_0_-3px_5px_#ff81ff10]
            hover:bg-[linear-gradient(to_bottom,transparent,#ff81ff14)]
            transition-[box-shadow,background] duration-300 transform transition-transform hover:translate-y-8
            ">
                <h3 className='text-[var(--color-white)] bold mb-[6px] text-[16px]'>Be fundraise ready</h3>
                <div className="h-[350px] w-[90%] mx-auto mb-[4px]">
<Bar 
  data={{
    labels: ['nov', 'dec', 'jan', 'feb', 'mar', 'apr'],
    datasets: [{
      data: [200, 350, 500, 650, 800, 900],
      backgroundColor: '#7EC8E3',
      borderColor: '#7EC8E3',
      borderWidth: 1,
      borderRadius: 4
    }]
  }}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false
      },
      x: {
        grid: {
          display: false
        },
        barThickness: 5,
        categoryPercentage: 0.5,
        barPercentage: 0.8
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false // This removes the hover tooltip
      }
    },
    // Optional: Also remove hover styling
    interaction: {
      mode: null // Disables all hover interactions
    },
    elements: {
      bar: {
        hoverBackgroundColor: '#7EC8E3', // Keep same color on hover
        hoverBorderColor: '#7EC8E3', // Keep same border color on hover
        hoverBorderWidth: 1 // Keep same border width
      }
    }
  }}
/>
                </div>
                                <p className='text-[var(--color-white)] text-[12px]'>Real-time-key metrics</p>

            </div>

            <div className=" bg-[transparent] translate-y-6
            h-[240px]
            border border-1 border-[var(--color-white-op)] rounded-3xl
            px-4 py-4
            flex flex-col 
            shadow-[0_54px_55px_#0C0E1D40,_0_-12px_30px_#0C0E1D1F,_0_4px_6px_#0C0E1D1F,_0_12px_13px_#0C0E1D2B,_0_-3px_5px_#0C0E1D17]
hover:shadow-[0_54px_55px_#ff81ff26,_0_-12px_30px_#ff81ff14,_0_4px_6px_#ff81ff14,_0_12px_13px_#ff81ff1A,_0_-3px_5px_#ff81ff10]
    hover:bg-[linear-gradient(to_bottom,transparent,#ff81ff14)]
    transition-[box-shadow,background] duration-300
    transform transition-transform hover:translate-y-4
    
            ">
                <h3 className='text-[var(--color-white)] bold mb-[16px] text-[16px]'>Get accurate books, faster</h3>

<div className='flex flex-row justify-between w-[95%] mx-auto mb-[16px] mt-[16px]'>
                <div className=' w-[50px] h-[50px] '>
      <Doughnut
        data={{
          labels: ['Filled', 'Empty'],
          datasets: [{
            data: [92, 8], 
            backgroundColor: [
              '#7EC8E3',
              'rgba(240, 240, 240, 0.1)'
            ],
            borderColor: 'rgba(240, 240, 240, 0.1)', 
            circumference: 360, 
          }]
        }}
        options={{
          cutout: '70%',
          rotation: 80, 
          plugins: {
            legend: {
              display: false 
            },
            tooltip: {
              enabled: false 
            }
          }
        }}
      />
                          </div>
                    <div className='flex flex-col'>
                        <p className='text-[14px] text-[var(--color-white)]'>90% of dollar volume</p>
                        <p className='text-[10px] text-[var(--color-white)] opacity-50' >auto-categorized</p>

                    </div>
                </div>

                <div className='flex flex-row justify-between w-[95%] mx-auto'>
                <div className=' w-[50px] h-[50px] '>
      <Doughnut
        data={{
          labels: ['Filled', 'Empty'],
          datasets: [{
            data: [90, 10], 
            backgroundColor: [
              '#ff81ff',
              'rgba(240, 240, 240, 0.1)'
            ],
            borderColor: 'rgba(240, 240, 240, 0.1)', 
            circumference: 360, 
          }]
        }}
        options={{
          cutout: '70%',
          rotation: 80, 
          plugins: {
            legend: {
              display: false 
            },
            tooltip: {
              enabled: false 
            }
          }
        }}
      />
                          </div>
                    <div className='flex flex-col'>
                        <p className='text-[14px] text-[var(--color-white)]'>98% of dollar volume</p>
                        <p className='text-[10px] text-[var(--color-white)] opacity-50' >finalized</p>

                    </div>
                
                </div>

                <p className='text-[var(--color-white)] text-[12px] mt-[17px]'>Financials on the first of the month</p>
            </div>

            <div className=" bg-[transparent]
            h-[240px]
            border border-1 border-[var(--color-white-op)] rounded-3xl
            px-4 py-4
            flex flex-col 
            shadow-[0_54px_55px_#0C0E1D40,_0_-12px_30px_#0C0E1D1F,_0_4px_6px_#0C0E1D1F,_0_12px_13px_#0C0E1D2B,_0_-3px_5px_#0C0E1D17]
hover:shadow-[0_54px_55px_#ff81ff26,_0_-12px_30px_#ff81ff14,_0_4px_6px_#ff81ff14,_0_12px_13px_#ff81ff1A,_0_-3px_5px_#ff81ff10]
    hover:bg-[linear-gradient(to_bottom,transparent,#ff81ff14)]
    transition-[box-shadow,background] duration-300
    hover:-translate-y-2 transform transition-transform translate-y-4 transform transition-transform hover:translate-y-2
            ">
                <h3 className='text-[var(--color-white)] bold mb-[16px] text-[16px]'>Build a better business</h3>
                <div className='flex flex-col w-[90%] mx-auto items-center mb-[32px]'>
                    <div className='flex flex-row justify-between w-[100%] mx-auto mb-[12px]'>
                        <div className='text-[var(--color-white)] text-[10px]
                        border border-1 border-[var(--color-white-op)] rounded-xl
                        py-2 px-4
                        bg-[linear-gradient(to_bottom,rgba(240,240,240,0.1)_0%,rgba(240,240,240,0.1)_5%,transparent_5%),linear-gradient(to_top,rgba(240,240,240,0.1)_0%,rgba(240,240,240,0.1)_4%,transparent_20%)]
    shadow-[0_2px_8px_0_rgba(255,255,255,0.2)]'>$16.328</div>
                        <div className='text-[var(--color-white)] text-[10px]
                        border border-1 border-[var(--color-white-op)] rounded-xl
                        py-2 px-4
bg-[linear-gradient(to_bottom,rgba(240,240,240,0.1)_0%,rgba(240,240,240,0.1)_5%,transparent_5%),linear-gradient(to_top,rgba(240,240,240,0.1)_0%,rgba(240,240,240,0.1)_4%,transparent_20%)]
    shadow-[0_2px_8px_0_rgba(255,255,255,0.2)]'>$14.092</div>

                    </div>
                    <div className='flex flex-row justify-between w-[100%] mx-auto mb-[12px]'>
                        <div className='text-[var(--color-white)] text-[10px]
                        py-2 px-4 opacity-50
                        '>$500</div>
<div
  className="
    inline-block
    text-[var(--color-fourth)] text-[10px]
    border rounded-xl py-2 px-4
    border-[rgba(81,250,170,0.5)]
    bg-[linear-gradient(to_bottom,rgba(81,250,170,0.1)_0%,rgba(81,250,170,0.1)_5%,transparent_5%),linear-gradient(to_top,rgba(81,250,170,0.1)_0%,rgba(81,250,170,0.1)_4%,transparent_20%)]
    shadow-[0_2px_8px_0_rgba(81,250,170,0.2)]
  "
>
  $212
</div>


                    </div>


                                        <div className='flex flex-row justify-between w-[100%] mx-auto'>
                                                                <div
  className="
    inline-block
    text-[var(--color-fourth)] text-[10px]
    border rounded-xl py-2 px-4
    border-[rgba(81,250,170,0.5)]
    bg-[linear-gradient(to_bottom,rgba(81,250,170,0.1)_0%,rgba(81,250,170,0.1)_5%,transparent_5%),linear-gradient(to_top,rgba(81,250,170,0.1)_0%,rgba(81,250,170,0.1)_4%,transparent_20%)]
    shadow-[0_2px_8px_0_rgba(81,250,170,0.2)]
  "
>
  $350
</div>
                        <div className='text-[var(--color-white)] text-[10px]
                        py-2 px-4 opacity-50
                        '>$50</div>


                    </div>
                    
                </div>
                <p className='text-[var(--color-white)] text-[12px]'>Spotlight tool highlights changes</p>
            </div>
        </div>
    )
}

export default Benefits