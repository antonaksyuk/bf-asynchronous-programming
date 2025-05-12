import { dom } from "../dom/dom.js";
import { typicodeResource } from "../api-calls/api";
import { createPostsDom } from "../components/createPosts.js";

export const handleClick = async() => {
    dom.root.insertAdjacentHTML = '';
    const num = dom.form.postId.value;
    const post = typicodeResource(num);
    const comments = await typicodeResource(num, 'comments');

    dom.root.append(createPostsDom(post, comments));
}