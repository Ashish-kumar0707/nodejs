const hero='stayk';
const cric1='virat';
const cric2='kinrn';

export const generatePrecent= ()=>{
    const x= Math.floor(Math.random()*100);
    const per= x.toString();
    return per+"%";

    
}

export default hero;

export {cric1,cric2};