# 

Source: https://proofwiki.org/wiki/Polynomial_which_is_Irreducible_over_Integers_is_Irreducible_over_Rationals

Theorem
Let $\Z \sqbrk X$ be the ring of polynomial forms over the integers in the indeterminate $X$.
Let $\Q \sqbrk X$ be the ring of polynomial forms over the field of rational numbers in the indeterminate $X$.
Let $\map f X \in \Z \sqbrk X$ be irreducible in $\Z \sqbrk X$.

Then $\map f X$ is also irreducible in $\Q \sqbrk X$.


Proof
Aiming for a contradiction, suppose $\map f X = \map g X \, \map h X$ for some $\map g X, \map h X \in \Q \sqbrk X$.
By hypothesis:

$\map f X \in \Z \sqbrk X$
and so by definition has coefficients all of which are integers.
But from Factors of Polynomial with Integer Coefficients have Integer Coefficients it follows that $\map f X$ can be expressed as:

$\map f X = \map {g'} X \, \map {h'} X$
where both $\map {g'} X$ and $\map {h'} X$ are elements of $\Q \sqbrk X$ which have coefficients all of which are integers.
That is:

$\map {g'} X \in \Z \sqbrk X$
and:

$\map {h'} X \in \Z \sqbrk X$
This contradicts the statement that $\map f X$ is irreducible in $\Z \sqbrk X$.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients




