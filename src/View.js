const View = {
  render: ({ minutes, seconds }) => {
   document.querySelector('#timer').innerHTML = `
    <p>Próximo Post em</p>
    <span>${minutes}:${seconds}</span>
    `;
  },
};

export { View };
