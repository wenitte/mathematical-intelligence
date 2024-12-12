# 

Source: https://proofwiki.org/wiki/Associates_in_Ring_of_Polynomial_Forms_over_Field

Theorem
Let $F \sqbrk X$ be the ring of polynomial forms over the field $F$.
Let $\map d X$ and $\map {d'} X$ be polynomial forms in $F \sqbrk X$.

Then $\map d X$ is an associate of $\map {d'} X$ if and only if $\map d X = c \cdot \map {d'} X$ for some $c \in F, c \ne 0_F$.
Hence any two polynomials in $F \sqbrk X$ have a unique monic GCD.


Proof
From the definition of associate, there exist $\map e X$ and $\map {e'} X$ \in $F \sqbrk X$ such that:

$\map d X = \map e X \cdot \map {d'} X$
$\map {d'} X = \map {e'} X \cdot \map d X$
From Field is Integral Domain, $F$ is an integral domain.
From Degree of Product of Polynomials over Integral Domain it follows that necessarily $\deg e = \deg e' = 0$, as $F$ has no proper zero divisors.

Thus for some $c, c' \in F$, it must be that $\map e X = c$ and $\map {e'} X = c'$.
From the two equations above it follows that $c \cdot c' = 1_F$, where $1_F$ is the unity of $F$.
Hence, it follows that $c \ne 0_F$.

The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 28$. Highest Common Factor: Example $55$




