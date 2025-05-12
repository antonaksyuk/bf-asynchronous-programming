export const createPosts = (post, comments) => {
    const container = document.createElement('div');
    
    const title = document.createElement('h2');
    title.insertAdjacentText = post.title;

    const id = document.createElement('code');
    id.insertAdjacentText = `posted by user: ${post.id}`;

    const content = document.createElement('p');
    content.insertAdjacentText = post.body;

    container.append(title, id, body);

    comments.forEach((item) => {
        const commentsSection = document.createElement('div');
        commentsSection.className = 'comment';

        const name = document.createElement('h2');
        name.insertAdjacentText = item.name;

        const commentator = document.createElement('p')
        commentator.insertAdjacentText = `comment by: ${item.email}`;

        const commentText = document.createElement('p');
        commentText.insertAdjacentText = item.body;

        commentsSection.append(name, commentator, commentText);
        container.appendChild(commentsSection);
    });
    return container;
};