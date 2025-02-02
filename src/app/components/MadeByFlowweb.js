function MadeByFlowweb() {
  return (
    <footer className="flex items-center justify-center rounded-xl p-4 bg-blue-100 -mt-2">
      <a
        href="https://flowweb.ru" // Укажите здесь правильную ссылку на сайт Flowweb
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-blue-700 transition-colors duration-200"
      >
        Сделано в <span className="font-bold hover:underline gradient_text animate-shine">Flowweb</span>
      </a>
    </footer>
  );
}

export default MadeByFlowweb;
