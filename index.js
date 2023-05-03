const faqList = document.querySelector('.faq-list');

let ids = [
  { id: 'faq-1', clicked: false },
  { id: 'faq-2', clicked: false },
  { id: 'faq-3', clicked: false },
  { id: 'faq-4', clicked: false },
  { id: 'faq-5', clicked: false },
];

faqList.addEventListener('click', (event) => {
  const { id } = event.target.parentNode;

  for (let i = 0; i < ids.length; i++) {
    if (ids[i].id === id) {
      const clickedID = document.querySelector(`#${id}`);
      const nodes = Array.from(clickedID.childNodes);

      const img = nodes.find((node) => {
        return checkType(node) === '[object HTMLImageElement]';
      });
      if (img.style.transform.length === 0) {
        img.style.transform = `scale(-1, 1)`;
        ids = ids.map((v) => {
          return v.id === id ? { ...v, clicked: !v.clicked } : v;
        });
        const h3 = img.parentNode.nextSibling.nextSibling;
        h3.style.display = 'block';
      } else {
        img.style.transform = '';
        ids = ids.map((v) => {
          return v.id === id ? { ...v, clicked: !v.clicked } : v;
        });
        const h3 = img.parentNode.nextSibling.nextSibling;
        h3.style.display = 'none';
      }
    }
  }
});

function checkType(val) {
  return Object.prototype.toString.call(val);
}
