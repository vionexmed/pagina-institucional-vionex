const hero = document.querySelector('.hero--advisory');
if (hero) {
 const params = new URLSearchParams(location.search);
 const card = params.get('hero') === 'card';
 hero.dataset.heroVariant = card ? 'card' : 'static';
 document.body.classList.toggle('home--hero-card', card);
 const options = hero.querySelector('.hero-preview-options');
 if (params.get('preview') === 'hero') {
  options.hidden = false;
  options.querySelectorAll('[data-hero-option]').forEach(link => {
   const url = new URL(location.href);
   url.searchParams.set('hero', link.dataset.heroOption);
   link.href = url.href;
   if (link.dataset.heroOption === (card ? 'card' : 'static')) link.setAttribute('aria-current', 'true');
  });
 }
}
