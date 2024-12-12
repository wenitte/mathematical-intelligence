# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Existence/Proof_2

Theorem
For every pair of integers $a, b$ where $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
Let:

$q = \floor {\dfrac a b}, t = \dfrac a b - \floor {\dfrac a b}$
where $\floor {\, \cdot \,}$ denotes the floor function.
Thus $q \in \Z$ and $t \in \hointr 0 1$.
So:

$\dfrac a b = q + t$
and so:

$(1): \quad a = q b + r$
where $r = t d$.
Since $a, q, b \in \Z$, it follows from $(1)$ that:

$r = a - q b$
and so $r \in \Z$ also.
Since $0 \le t < 1$ and $b > 0$, it follows that:

$0 \le t b < b$
that is:

$0 \le r < b$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 11.1$: The division algorithm
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$




