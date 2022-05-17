import React, { forwardRef } from "react";

const Child2 = (props: any, ref: any) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef(Child2);
