interface MenuButtonProps {
  isOpen: boolean;
  controls: string;
  openLabel: string;
  closeLabel: string;
  onToggle: () => void;
}

/** Hamburger button that turns into a cross while the menu is open. Only shown on narrow screens. */
export function MenuButton({ isOpen, controls, openLabel, closeLabel, onToggle }: MenuButtonProps) {
  return (
    <button
      type="button"
      className="menu-button"
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={isOpen ? closeLabel : openLabel}
      onClick={onToggle}
    >
      <span className="menu-button__bar" aria-hidden="true" />
      <span className="menu-button__bar" aria-hidden="true" />
      <span className="menu-button__bar" aria-hidden="true" />
    </button>
  );
}
