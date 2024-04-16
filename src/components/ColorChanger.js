function ColorChanger({ colorHex, colorName, changeColorFxn }) {
  return (
    <div
      className=" flex  rounded-xl h-fit items-center p-[5px]"
      style={{ backgroundColor: colorHex }}
    >
      {/* <p className=" font-bold bg-slate-400/20 rounded-2xl"></p> */}
      <button className=" shadow-xl" onClick={() => changeColorFxn(colorHex)}>
        {/* Why we needed this "() => changeColorFxn(colorHex)" to write inside the onClick={} ???
        Ans:- Because, onClick{} expects a function, nothing else!!! {see 14:50 of L9}
                And we also needed to pass arguments to this "changeColorFxn"
                So, if we would have wrote the argument inside this fxn as 
                "changeColorFxn(colorHex)" then, this function's return value would have gone
                as argument to the "onClick" fxn.
                Hence to keep both conditions actively satisfying, we used a "callBack function"
                This callback function actually calls back (returns) a function which now
                has the required arguments!!! */}
        {colorName}
      </button>
    </div>
  );
}
export default ColorChanger;
