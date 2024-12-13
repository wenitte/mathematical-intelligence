# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_Integral_Domain


It has been suggested that this page or section be merged into Ring of Polynomial Forms over Integral Domain is Integral Domain.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\struct {D, +, \circ}$ be an integral subdomain of $R$.
Let $X \in R$ be transcendental over $D$.
Let $D \sqbrk X$ be the ring of polynomials in $X$ over $D$.

Then $D \sqbrk X$ is an integral domain.


Proof
By Ring of Polynomial Forms is Commutative Ring with Unity we know that $D \sqbrk X$ is a commutative ring with unity.
Let neither $\ds \map f X = \sum_{k \mathop = 0}^n a_k x^k$ nor $\ds \map g X = \sum_{k \mathop = 0}^m b_k X^k$ be the null polynomial.
Then their leading coefficients $a_n$ and $b_m$ are non-zero.
Therefore, as $D$ is an integral domain and $a_n, b_m \in D$, so is their product $a_n b_m$.
By the definition of polynomial multiplication, it follows that $f g$ is not the null polynomial.
It follows that $D \sqbrk X$ has no proper zero divisors.
Hence $D \sqbrk X$ is an integral domain.
$\blacksquare$


Also see
Ring of Polynomial Forms over Integral Domain is Integral Domain


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 5$. Further Examples of Integral Domains: Example $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 64.3$ Polynomial rings over an integral domain




