# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_Exists/Proof_2

Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then there exists a minimal polynomial $f \in K \sqbrk x$ for $\alpha$ over $K$.


Proof
According to definition 2 of minimal polynomial, we ought to find $f \in K \sqbrk x$ such that:

$f \in K \sqbrk x$ is an irreducible, monic polynomial such that $\map f \alpha = 0$

Since $\alpha$ is algebraic over $K$, there is some $f \in K \sqbrk x$ such that $\map f \alpha = 0$.
By Polynomial Forms over Field form Unique Factorization Domain, $\map f x$ has a complete factorization:

$\map f x = a \cdot \map {g_1} x \cdots \map {g_n} x$
where $a \in K, a \ne 0$, and the $g_i$ are irreducible and monic.
Since $\map f \alpha = 0$, it follows that for some $g_i$:

$\map {g_i} \alpha = 0$
as required.
$\blacksquare$





