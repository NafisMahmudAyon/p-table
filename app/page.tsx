'use client'
import ptable from "@/components/ptable"
import Element from "@/components/Element"

export default function Home() {

  return (
    <div className="">
      <div className="grid grid-cols-18">
        {ptable.elements
          .filter(el => el.number <= 57 || (el.number >= 72 && el.number <= 89) || el.number >= 104)
          .map((el, index) => {
            console.log(el.number)
            return(
            <div key={index} className="border" style={{ gridColumnStart: el.group, gridRowStart: el.period }}>

              {el.number !== 57 && el.number !== 89 && (
                  <Element data={el} />
                )}
              {el.number == 57 && (
                <span>57 - 71</span>
              )}
              {el.number == 89 && (
                <span>89 - 103</span>
              )}
            </div>
          )})}
      </div>
    </div>
  );
}
