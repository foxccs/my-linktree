// ===== 个人配置 =====
const config = {
  avatar: 'https://api.fenx.top/api/qqimg?qq=82115339',
  name: '狐狸引导页',
  bio: '一句简短的自我介绍',
  links: [
    { title: '狐狸资源网', url: 'https://www.foxccs.com/' },
    { title: '狐狸导航', url: 'https://www.foxccs.cn/' },
    { title: '蚂蚁分享网', url: 'https://www.emyi.cn/' },
    { title: '蜜蜂图床', url: 'https://www.beeimg.cn/' },
    { title: ' 蜂巢云盘', url: 'https://www.beeseek.cn/home' },
    { title: ' 邮箱', url: 'mailto:foxccs@qq.com' }
  ]
};

// ===== 渲染逻辑 =====
document.getElementById('avatar').src = config.avatar;
document.getElementById('name').textContent = config.name;
document.getElementById('bio').textContent = config.bio;

const nav = document.getElementById('links');
config.links.forEach(l => {
  const a = document.createElement('a');
  a.className = 'btn';
  a.href = l.url;
  a.textContent = l.title;
  a.target = '_blank';
  nav.appendChild(a);
});
