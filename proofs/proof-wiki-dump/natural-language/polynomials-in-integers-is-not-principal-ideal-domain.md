# 

Source: https://proofwiki.org/wiki/Polynomials_in_Integers_is_not_Principal_Ideal_Domain

Theorem
Let $\Z \sqbrk X$ be the ring of polynomials in $X$ over $\Z$.

Then $\Z \sqbrk X$ is not a principal ideal domain.


Proof
Let $J$ be the ideal formed from the set of polynomials over $\Z$ in $X$ which have a constant term which is even.
From Polynomials in Integers with Even Constant Term forms Ideal, $J$ is indeed an ideal.
Aiming for a contradiction, suppose $J$ is a principal ideal of $\Z \sqbrk X$ such that $J = \ideal f$.
But $2 \in J$, and so $2$ is a multiple of $f$ in $\Z \sqbrk X$.
So $f = \pm 2$ or $f = \pm 1$.
But this contradicts the fact that $J = \ideal f$.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $21$




