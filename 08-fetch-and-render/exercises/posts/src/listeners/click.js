import { dom } from "../dom/dom";
import { handleClick } from "../handlers/handleClick.js";

export const onClick = () => {
    dom.form.addEventListener('click', handleClick);
};