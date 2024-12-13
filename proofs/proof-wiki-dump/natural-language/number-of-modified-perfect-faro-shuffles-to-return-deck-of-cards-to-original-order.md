# 

Source: https://proofwiki.org/wiki/Number_of_Modified_Perfect_Faro_Shuffles_to_return_Deck_of_Cards_to_Original_Order



Theorem
Let $D$ be a deck of $2 m$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.

Then the cards of $D$ will return to their original order after $n$ such shuffles, where:

$2^n \equiv 1 \pmod {2 m + 1}$


Proof
From Position of Card after n Modified Perfect Faro Shuffles, after $n$ shuffles a card in position $x$ will be in position $2^n x \pmod {m + 1}$.
So for all $2 m$ cards in $D$, we need to find $n$ such that:

$2^n x \equiv x \pmod {2 m + 1}$
Because $2 m + 1$ is odd, we have:

$\gcd \set {2, 2 m + 1}$
and so from Cancellability of Congruences:

$2^n \equiv 1 \pmod {2 m + 1}$
$\blacksquare$


Examples
Deck of 6 Cards
Let $D$ be a deck of $6$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $3$ such shuffles, the cards of $D$ will be in the same order they started in.


Deck of 8 Cards
Let $D$ be a deck of $8$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $6$ such shuffles, the cards of $D$ will be in the same order they started in.


Deck of 12 Cards
Let $D$ be a deck of $12$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $12$ such shuffles, the cards of $D$ will be in the same order they started in.


Deck of 52 Cards
Let $D$ be a deck of $52$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $52$ such shuffles, the cards of $D$ will be in the same order they started in.


Deck of 62 Cards
Let $D$ be a deck of $62$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $6$ such shuffles, the cards of $D$ will be in the same order they started in.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-3}$ Riffling: $\text {4-3-4}$




