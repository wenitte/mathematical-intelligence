# 

Source: https://proofwiki.org/wiki/Number_of_Modified_Perfect_Faro_Shuffles_to_return_Deck_of_Cards_to_Original_Order/Examples/Deck_of_8_Cards

Theorem
Let $D$ be a deck of $8$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $6$ such shuffles, the cards of $D$ will be in the same order they started in.


Proof
From Number of Modified Perfect Faro Shuffles to return Deck of Cards to Original Order, the cards of $D$ will return to their original order after $n$ such shuffles, where:

$2^n \equiv 1 \pmod 9$
Inspecting $2^n$ for $n$ from $1$:














\(\ds 2^1\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 9\)


















\(\ds 2^2\)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 9\)


















\(\ds 2^3\)

\(\equiv\)







\(\ds 8\)

\(\ds \pmod 9\)


















\(\ds 2^4\)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod 9\)


















\(\ds 2^5\)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod 9\)


















\(\ds 2^6\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 9\)







Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-3}$ Riffling: Exercise $1$




