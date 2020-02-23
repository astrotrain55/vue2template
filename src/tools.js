import _ from '@/plugins/lodash';

export default {
  tpl(name, data) {
    const templates = document.querySelector('#templates');
    const template = templates.querySelector(`[title=${name}]`);
    const markup = _.trim(template.textContent);
    const compiled = _.template(markup);

    return compiled({ _, ...data });
  },
};
