import style from './LangDropDown.module.css'

// eslint-disable-next-line react/prop-types
function LangDropDown({id,languages,onChange,value}) {
  return (
    <div className={style.container1}>
      <select className={style.select_container} name={id} id={id} onChange={onChange} value={value}>
        {
            Object.entries(languages).map(([langName,langCode])=>{
                return(
                    <option style={{
                        height : '30px'
                    }} key={langCode} value={langCode}>{langName}</option>
                )
            })
        }
      </select>
    </div>
  );
}

export default LangDropDown;
