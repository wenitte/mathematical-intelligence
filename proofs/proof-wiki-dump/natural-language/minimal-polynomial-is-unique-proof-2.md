# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique/Proof_2

Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then the minimal polynomial of $\alpha$ over $K$ is unique.


Proof
Let $f, g \in K \sqbrk x$ be minimal polynomials for $\alpha$ according to definition 2.
That is, let $f$ and $g$ be irreducible monic polynomials in $K \sqbrk x$ with $\map f \alpha = \map g \alpha = 0$.
Suppose $f$ and $g$ are distinct.
Then $f$ and $g$ are coprime.
Thus there exist polynomials $a, b \in K \sqbrk x$ with $a f + b g = 1$.
Taking the evaluation homomorphism in $\alpha$, we obtain the contradiction that $0=1$.
$\blacksquare$





