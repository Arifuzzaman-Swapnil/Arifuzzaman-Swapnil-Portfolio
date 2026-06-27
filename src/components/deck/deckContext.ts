import { createContext, useContext } from "react";

export interface DeckPage {
  id: string;
  label: string;
}

export interface DeckCtx {
  page: number;
  count: number;
  pages: DeckPage[];
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
}

export const DeckContext = createContext<DeckCtx | null>(null);

export const useDeck = (): DeckCtx => {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used within <Deck>");
  return ctx;
};
