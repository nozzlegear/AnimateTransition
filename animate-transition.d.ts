export interface BlockTransitionOptions: {
  container: string | Element;
  blockIn?: string | Element;
  blockOut?: string | Element;
  beforeTransition?: (blockIn: Element, blockOut: Element, container: Element) => void;
  onTransitionStart?: (blockIn: Element, blockOut: Element, container: Element, e: Event) => void;
  onTransitionEnd?: (blockIn: Element, blockOut: Element, container: Element, e: Event) => void;
  animation: (
    "slide-in" |
    "slide-out" |
    "fade-in" |
    "fade-out" |
    "cover-in" |
    "cover-out" |
    "cover-double-in" |
    "cover-double-out" |
    "revolution-in" |
    "revolution-out" |
    "bounce-in" |
    "bounce-out" |
    "popup-scale-in" |
    "popup-drop-in" |
    "popup-revolution-in" |
    "popup-fade-in" |
    "cover-in" |
    "cover-left-in" |
    "cover-right-in" |
    "bounce-in" |
    "popup-scale-out" |
    "popup-drop-out" |
    "popup-revolution-out" |
    "popup-fade-out" |
    "cover-out" |
    "cover-left-out" |
    "cover-right-out" |
    "bounce-out"
  );
}

export default function blockTransition(options: BlockTransitionOptions);
