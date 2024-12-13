# 

Source: https://proofwiki.org/wiki/Natural_Number_is_not_Subset_of_its_Union

Theorem
Let $n \in \N$ be a natural number as defined by the von Neumann construction.
Then, except in the degenerate case where $n = 0$, it is not the case that:

$n \subseteq \bigcup n$


Proof
First we note that from Union of Empty Set we have:

$\bigcup \O = \O$
leading to:

$\O \subseteq \bigcup \O$
thus disposing of the degenerate case.

Let $n \in \N$ such that $n \ne \O$.
By definition of the von Neumann construction:

$n = \set {0, 1, 2, \ldots, n - 1}$
Thus, by definition, $m \in n$ for $m = 0, 1, 2, \ldots, n - 1$.
From Natural Numbers cannot be Elements of Each Other, it cannot therefore be the case that $n \in m$ for $m \in n$.
By definition of union of class:

$\bigcup n = \set {x: \exists X \in n: x \in X}$
But it has been established that there is no $X \in n$ such that $n \in X$.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results: Exercise $3.2 \ \text {(a)}$




