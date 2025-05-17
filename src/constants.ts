export const URL_RE_STR = // protocol identifier (optional)
    // short syntax // still required
    '^' +
    '(?:(?:(?:https?|mtdaxiang):)?\\/\\/)?' +
    // user:pass BasicAuth (optional)
    '(?:[!-~]+(?::\\[!-~]*)?@)?' +
    '(?:' +
    // 不区分内网IP地址
    '((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\\b){4}' +
    '|' +
    // host & domain names, may end with dot
    // can be replaced by a shortest alternative
    // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
    '(?:' +
    '(?:' +
    // 删除掉UTF8字符的支持，只识别ASCII的
    '[a-z0-9]' +
    '[a-z0-9_-]{0,62}' +
    ')?' +
    '[a-z0-9]\\.' +
    ')+' +
    // TLD identifier name
    `(?:([a-zA-Z_]{2,10})(?![a-z]))` +
    ')' +
    // port number (optional)
    '(?:(?::\\d{2,5})?' +
    /**
     * resource path (optional),只匹配ASCII字符,去除左中括号
     * @see https://stackoverflow.com/questions/2366260/whats-valid-and-whats-not-in-a-uri-query
     *
     * UPDATE: 241106：
     * 添加 {} 字符的支持。（https://datatracker.ietf.org/doc/html/rfc2396#section-2.4.3 中不支持）
     */
    `(?:[/?#][0-9a-zA-Z!$&'()*+,\\-./:;=?@_~%#{}]*)?)` +
    '$'