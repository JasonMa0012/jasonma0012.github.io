const {matterMarkdownAdapter} = require('@elog/plugin-adapter')

/**
 * 自定义文档处理器
 * @typedef {Object} DocDetail
 * @param doc doc的类型定义为 DocDetail，详情见下方 DocDetail 类型定义
 * @return {string} 返回处理后的文档内容
 */
const format = (doc) => {
  doc.body = doc.body.replace(/\n/gi, '\n\n')
  return matterMarkdownAdapter(doc);
};

module.exports = {
  format,
};
