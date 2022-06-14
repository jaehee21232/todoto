import React, { useState } from "react";

function Rev({value, chvalue, zo, chzo, fevalue, chfevalue}){
    chfevalue([...fevalue, value]);
    console.log(fevalue)
    return //배열 복사하고 수정하고 원본에다가 붙이기
}

export default Rev;