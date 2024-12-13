# 

Source: https://proofwiki.org/wiki/Polynomial_Forms_over_Field_is_Euclidean_Domain

Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental in $F$.
Let $F \sqbrk X$ be the ring of polynomial forms in $X$ over $F$.

Then $F \sqbrk X$ is a Euclidean domain.


Proof
From Degree of Product of Polynomials over Integral Domain not Less than Degree of Factors we have that:

$\forall a, b \in F \sqbrk X, a \ne 0_F, b \ne 0_F: \map \deg {a b} \ge \map \deg a$
where $\map \deg a$ denotes the degree of $a$.

From Division Theorem for Polynomial Forms over Field:

$\forall a, b \in F \sqbrk X, b \ne 0_F: \exists q, r \in F \sqbrk X: a = q b + r$
where $\map \deg r < \map \deg b$ (or $r = 0$), and $q$ and $r$ are unique.

So $\deg$ is a Euclidean valuation on $F \sqbrk X$.

Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 27$. Euclidean Rings: Example $53$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Euclidean domain or Euclidean ring




