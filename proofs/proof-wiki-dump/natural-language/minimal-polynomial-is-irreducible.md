# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_is_Irreducible

Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then the minimal polynomial in $\alpha$ over $K$ is unique and irreducible.


Proof
Let $\map f x$ be a minimal polynomial of $\alpha$ over $K$ of degree $n$.
From Minimal Polynomial is Unique we have that $\map f x$ is unique.

Since $K$ is a field, we may assume that the coefficient of $x^n$ is $1$.
Aiming for a contradiction, suppose that $f$ is not irreducible.
Then there exist non-constant polynomials $g, h \in K \sqbrk x$ such that $f = g h$.
By definition of $f$ as the minimal polynomial in $\alpha$:

$0 = \map f \alpha = \map g \alpha \, \map h \alpha$
From Field is Integral Domain, $L$ is an integral domain.
Therefore, as $\map g \alpha \, \map h \alpha \in L$, either $\map g \alpha = 0$ or $\map h \alpha = 0$.
This contradicts the minimality of the degree of $f$.
Hence the result, by Proof by Contradiction.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Theorem $71 \ \text{(i)}$




