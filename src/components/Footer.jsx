export default function Footer({ name }) {
  return (
    <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} {name}. Built with React &amp; Tailwind CSS.
    </footer>
  );
}
