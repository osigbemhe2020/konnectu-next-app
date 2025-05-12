import { CiGlobe } from "react-icons/ci";

const Formcont = () => {
  return (
    <>
      <div className="newflex"> 
        <div class="field">
          <input type="text" name="name" placeholder="search" />
          <CiGlobe className="icon"/>
        </div>
        <div><button className='top-button'> Sort By</button></div>
      </div>
    </>
  )
}

export default Formcont
