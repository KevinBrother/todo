
// import './index.scss';

export default function Tailwind() {
  return (
    <div className="outer-container md:flex-row">
        <div className='border-2 md:flex-1 p-1 flex flex-wrap'>
            <div className='border-2 flex-1'>firstfirstfirstfirstfirst</div>
            <div  className='border-2 flex-1'>secondsecondsecondsecondsecond</div>
            <div  className='border-2 flex-1'>thirdthirdthirdthirdthird</div>
        </div>
        <div className='border-2 md:flex-1 p-1'>
            <div  className='border-2 flex-1'>first</div>
            <div  className='border-2 flex-1'>second</div>
            <div  className='border-2 flex-1'>third</div>
        </div>
    </div>
  )
}
