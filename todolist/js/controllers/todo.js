export const generateListHtml = (list) => {
  return list.reduce(
    (html, todo) =>
      html +
      `
        <li>
          <span>
            ${todo.name}
          </span>
          <div>
            <span class="buttons remove" onclick="handleDelete('${todo.name}')">
              <i class="far fa-trash-alt"></i>
            </span>
            <span class="buttons complete" onclick="handleMarkCompleted('${todo.name}')">
              <i class="far fa-check-circle"></i>
            </span>
          </div>
        </li>
      `,
    ''
  );
};
