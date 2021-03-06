export const selectors = {
  taskNode: '.task-list-item',
  markdownRoot: '[data-markdown-root]',
};

export const taskPrefixRegex = /^(\s+)?(-[ \t]+\[[xX\s]?\])/g;

export const taskRegex = /^(\s+)?(-[ \t]+\[[xX\s]?\])(.+)/gm;
