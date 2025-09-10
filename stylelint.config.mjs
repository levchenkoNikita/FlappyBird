/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'no-duplicate-selectors': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    'syntax-string-no-invalid': true,
  },
};
