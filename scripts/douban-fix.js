const cheerio = require('cheerio');
const config = hexo.config;

let doubanPagePaths = [];
const doubanBookConfig = config.douban.book;
const doubanMovieConfig = config.douban.movie;
const doubanGameConfig = config.douban.game;
const doubanSongConfig = config.douban.song;
if (doubanBookConfig && doubanBookConfig.path)
    doubanPagePaths.push(doubanBookConfig.path);
if (doubanMovieConfig && doubanMovieConfig.path)
    doubanPagePaths.push(doubanMovieConfig.path);
if (doubanGameConfig && doubanGameConfig.path)
    doubanPagePaths.push(doubanGameConfig.path);
if (doubanSongConfig && doubanSongConfig.path)
    doubanPagePaths.push(doubanSongConfig.path);

hexo.extend.filter.register('after_render:html', (htmlSrc, local) => {
    if (doubanPagePaths.includes(local.page.path)) {
        let $ = cheerio.load(htmlSrc);
        $('.hexo-douban-pagination+script').attr('data-swup-reload-script', '');
        return $.html();
    }
    return htmlSrc;
}, 20);