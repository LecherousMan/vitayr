(function() {
    var w = window;
    var d = document;
    var s = d.createElement('script');
    
    // 使用Google通用的reCAPTCHA API地址，自动加载最新的版本
    s.src = 'https://recaptcha.net/recaptcha/api.js';  // 如果需要，可以替换为 'https://recaptcha.net/recaptcha/api.js'
    s.async = true;
    s.defer = true;  // 确保脚本延迟加载
    var t = d.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);

    // 初始化 reCAPTCHA 配置
    var C = '___grecaptcha_cfg';
    var cfg = w[C] = w[C] || {};
    var N = 'grecaptcha';
    var gr = w[N] = w[N] || {};

    // ready 函数将传入的函数添加到 grecaptcha 的回调队列中
    gr.ready = gr.ready || function(f) {
        (cfg['fns'] = cfg['fns'] || []).push(f);
    };

    // 设置 reCAPTCHA API URL
    w['__recaptcha_api'] = 'https://recaptcha.net/recaptcha/api2/';
    (cfg['render'] = cfg['render'] || []).push('onload');
    w['__google_recaptcha_client'] = true;
})();
