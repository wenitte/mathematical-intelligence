# 

Source: https://proofwiki.org/wiki/Little-O_Implies_Big-O/Sequences

Theorem
Let $\sequence {a_n}$ and $\sequence {b_n}$ be sequences of real or complex numbers.
Let $a_n = \map \oo {b_n}$ where $\oo$ denotes little-$\oo$ notation.

Then $a_n = \map \OO {b_n}$ where $\OO$ denotes big-$\OO$ notation.


Proof
Because $a_n = \map \oo {b_n}$, there exists $n_0 \in \N$ such that $\size {a_n} \le 1 \cdot \size {b_n}$ for $n \ge n_0$.
Thus $a_n = \map \OO {b_n}$.
$\blacksquare$





