# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions



Theorem
Let $D$ be an integral domain.
Let $D \sqbrk X$ be the ring of polynomial forms in $X$ over $D$.
Let $\map P D$ be the ring of polynomial functions over $D$.

Then it is not necessarily the case that $D \sqbrk X$ is isomorphic with $\map P D$.


Proof
Proof by Counterexample:
Consider the integral domain $\struct {\Z_2, +, \times}$.
From Ring of Integers Modulo Prime is Integral Domain, it is seen that $\struct {\Z_2, +, \times}$ is indeed an integral domain.
Consider the ring of polynomial forms $\Z_2 \sqbrk X$.
This is an infinite ring, as it can be seen that $S \subseteq \Z_2 \sqbrk X$ where:

$S = \set {1, X, X^2, X^3, \dotsc}$
But the ring of polynomial functions $\map P D$ is finite, as:

$\map P D \subseteq \Z_2^{Z_2}$
where $\Z_2^{Z_2}$ is the set of all mappings from $\Z_2$ to $\Z_2$, and has $4$ elements.
$\blacksquare$


Also see
Epimorphism from Polynomial Forms to Polynomial Functions, where it is shown that there exists an epimorphism from $D \sqbrk X$ to $\map P D$.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 64$ Polynomial rings over an integral domain




