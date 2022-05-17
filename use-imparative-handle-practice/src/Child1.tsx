import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Child1 = (props: any, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // useImperativeHandle 은 reference를 맵핑한다.
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef?.current?.focus();
      console.log("inputRef.current", inputRef.current); // ??
    },
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default forwardRef(Child1);
