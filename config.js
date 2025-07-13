// ===== 个人配置 =====
const config = {
  avatar: 'https://avatars.githubusercontent.com/u/123456?v=4',
  name: 'Your Name',
  bio: '一句简短的自我介绍',
  links: [
    { title: '📧 邮箱', url: 'mailto:you@example.com' },
    { title: '🐙 GitHub', url: 'https://github.com/yourname' },
    { title: '🐦 Twitter', url: 'https://twitter.com/yourname' },
    { title: '📷 Instagram', url: 'https://instagram.com/yourname' },
    { title: '📝 博客', url: 'https://blog.example.com' }
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
