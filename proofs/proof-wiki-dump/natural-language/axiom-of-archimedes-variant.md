# 

Source: https://proofwiki.org/wiki/Axiom_of_Archimedes/Variant



Theorem
Let $x$ and $y$ be a natural numbers.

Then there exists a natural number $n$ such that:

$n x \ge y$


Proof
Aiming for a contradiction, suppose there exists $x, y \in \N$ such that $n x < y$ for every natural number $n$.
Consider the set $S$, defined as:

$S := \set {y - n x: n \in \N}$
We have by hypothesis that $S$ contains only natural numbers.
By the Well-Ordering Principle, $S$ contains a smallest element, $y - m x$ for example.
But $y - \paren {m + 1} x$ is also in $S$, as $S$ contains all natural numbers of this form.
Furthermore, we have:

$y - \paren {m + 1} x = \paren {y - m x} - x < y - m x$
But this contradicts our assertion that $y - m x$ is the smallest element of $S$.
This assertion originated from the assumption that there exists $x, y \in \N$ such that $n x < y$ for every natural number $n$.
Hence that assumption cannot hold.
Hence the result by Proof by Contradiction.
$\blacksquare$


Source of Name
This entry was named for Archimedes of Syracuse.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Theorem $1 \text{-} 1$




