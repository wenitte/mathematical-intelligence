# 

Source: https://proofwiki.org/wiki/Integer_Less_One_divides_Power_Less_One/Corollary/Converse

Converse of Corollary to Integer Less One divides Power Less One
Let $m, n, q \in \Z_{>0}$.
Let

$\paren {q^m - 1} \divides \paren {q^n - 1}$
where $\divides$ denotes divisibility.
Then:

$m \divides n$


Proof
By the Division Theorem:

$\exists a, b \in \Z: n = m a + b, 0 \le b < m$
Then:

$q^n \equiv q^{m a} q^b \equiv q^b \equiv 1 \pmod {\paren {q^m - 1} }$
But:

$q^b - 1 < q^m - 1$
So:

$q^b - 1 = 0$
and so $b = 0$.
Hence the result.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Further Exercises $6$




