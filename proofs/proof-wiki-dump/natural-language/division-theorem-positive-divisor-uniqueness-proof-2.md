# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Uniqueness/Proof_2

Theorem
For every pair of integers $a, b$ where $b > 0$, the integers $q, r$ such that $a = q b + r$ and $0 \le r < b$ are unique:

$\forall a, b \in \Z, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
It is given by Division Theorem: Positive Divisor: Existence that such $q$ and $r$ exist.

Let $a = q b + r$ where $q, r \in \Z$ and $0 \le r < b$.
Thus:

$\dfrac a b = q + \dfrac r b$
and:

$0 \le \dfrac r b \le \dfrac {b - 1} b < 1$
So:

$q = \floor {\dfrac a b}$
and so:

$r = a - b \floor {\dfrac a b}$
Thus, given $a$ and $b$, the numbers $q$ and $r$ are unique determined.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 11.1$: The division algorithm




