# 

Source: https://proofwiki.org/wiki/Number_of_Modified_Perfect_Faro_Shuffles_to_return_Deck_of_Cards_to_Original_Order/Examples/Deck_of_12_Cards

Theorem
Let $D$ be a deck of $12$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $12$ such shuffles, the cards of $D$ will be in the same order they started in.


Proof
From Number of Modified Perfect Faro Shuffles to return Deck of Cards to Original Order, the cards of $D$ will return to their original order after $n$ such shuffles, where:

$2^n \equiv 1 \pmod {13}$
From Fermat's Little Theorem:

$2^{12} \equiv 1 \pmod {13}$
so we know that $n$ is at most $12$.
But $n$ may be smaller, so it is worth checking the values:
Inspecting $2^n$ for $n$ from $1$:














\(\ds 2^1\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod {13}\)


















\(\ds 2^2\)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod {13}\)


















\(\ds 2^3\)

\(\equiv\)







\(\ds 8\)

\(\ds \pmod {13}\)


















\(\ds 2^4\)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod {13}\)


















\(\ds 2^5\)

\(\equiv\)







\(\ds 6\)

\(\ds \pmod {13}\)


















\(\ds 2^6\)

\(\equiv\)







\(\ds 12\)

\(\ds \pmod {13}\)


















\(\ds 2^7\)

\(\equiv\)







\(\ds 11\)

\(\ds \pmod {13}\)


















\(\ds 2^8\)

\(\equiv\)







\(\ds 9\)

\(\ds \pmod {13}\)


















\(\ds 2^9\)

\(\equiv\)







\(\ds 5\)

\(\ds \pmod {13}\)


















\(\ds 2^{10}\)

\(\equiv\)







\(\ds 10\)

\(\ds \pmod {13}\)


















\(\ds 2^{11}\)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod {13}\)


















\(\ds 2^{12}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {13}\)







Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-3}$ Riffling: Exercise $1$




