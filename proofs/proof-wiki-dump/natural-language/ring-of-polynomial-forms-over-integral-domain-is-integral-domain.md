# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_over_Integral_Domain_is_Integral_Domain


It has been suggested that this page or section be merged into Ring of Polynomial Forms is Integral Domain.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$.
Let $\struct {D \sqbrk X, \oplus, \odot}$ be the ring of polynomial forms over $D$ in the indeterminate $X$.

Then $\struct {D \sqbrk X, \oplus, \odot}$ is an integral domain.


Proof
By definition an integral domain is a commutative ring with unity. 
From Ring of Polynomial Forms is Commutative Ring with Unity it follows that $\struct {D \sqbrk X, +, \circ}$ is a commutative ring with unity.

Suppose $f, g \in D \sqbrk X$ such that neither $f$ nor $g$ are the null polynomial.
Let $\map \deg f = n$ and $\map \deg g = m$.
From Degree of Product of Polynomials over Integral Domain the degree of $f \odot g$ is $n + m$.
Thus by definition $f \odot g$ is not the null polynomial of $D \sqbrk X$.
Thus neither $f$ nor $g$ is a proper zero divisor of $D \sqbrk X$.
This holds for any two arbitrary non-null polynomials elements of $D \sqbrk X$.
Hence $\struct {D \sqbrk X, \oplus, \odot}$ is a commutative ring with unity with no proper zero divisors.
That is, $\struct {D \sqbrk X, \oplus, \odot}$ is an integral domain.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.2$: Polynomial rings: Lemma $3.7 \ \text{(iii)}$




