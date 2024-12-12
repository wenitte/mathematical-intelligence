# 

Source: https://proofwiki.org/wiki/Degree_of_Product_of_Polynomials_over_Integral_Domain_not_Less_than_Degree_of_Factors

Theorem
Let $\struct {R, +, \circ}$ be an integral domain whose zero is $0_R$.
Let $R \sqbrk X$ be the ring of polynomial forms over $R$ in the indeterminate $X$.
For $f \in R \sqbrk X$ let $\map \deg f$ be the degree of $f$.

Then if neither $f$ nor $g$ are the null polynomial:

$\forall f, g \in R \sqbrk X: \map \deg {f g} \ge \map \deg f$


Proof
From Degree of Product of Polynomials over Integral Domain, we have:

$\map \deg {f g} = \map \deg f + \map \deg g$
But $\map \deg g \ge 0$ by definition of degree, as $g$ is not null.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 27$. Euclidean Rings: Theorem $51$




