# 

Source: https://proofwiki.org/wiki/Deck_of_52_Cards_returns_to_Original_Order_after_52_Modified_Perfect_Faro_Shuffles

Theorem
Let $D$ be a deck of $52$ cards.
Let $D$ be given a sequence of modified perfect faro shuffles.
Then after $52$ such shuffles, the cards of $D$ will be in the same order they started in.


Proof 1
From Position of Card after n Modified Perfect Faro Shuffles, after $n$ shuffles a card in position $x$ will be in position $2^n x \pmod {53}$.
So for all $52$ cards in $D$, we need to find $n$ such that:

$2^n x \equiv x \pmod {53}$
We have that $53$ is a prime number, so $x$ can be cancelled from either side:

$2^n \equiv 1 \pmod {53}$
By Fermat's Little Theorem:

$2^{52} \equiv 1 \pmod {53}$
So the cards of $D$ will return to their original order after $52$ modified perfect faro shuffles.
$\blacksquare$


Proof 2
From Number of Modified Perfect Faro Shuffles to return Deck of Cards to Original Order, the cards of $D$ will return to their original order after $n$ such shuffles, where:

$2^n \equiv 1 \pmod {53}$
By Fermat's Little Theorem:

$2^{52} \equiv 1 \pmod {53}$
So the cards of $D$ will return to their original order after $52$ modified perfect faro shuffles.
$\blacksquare$





