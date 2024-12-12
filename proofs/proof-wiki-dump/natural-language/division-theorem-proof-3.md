# 

Source: https://proofwiki.org/wiki/Division_Theorem/Proof_3



Theorem
For every pair of integers $a, b$ where $b \ne 0$, there exist unique integers $q, r$ such that $a = q b + r$ and $0 \le r < \size b$:

$\forall a, b \in \Z, b \ne 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < \size b$


Proof
Existence
Consider the arithmetic sequence:

$\ldots, a - 3 b, a - 2 b, a - b, a, a + b, a + 2 b, a + 3 b, \ldots$
which extends in both directions.
Then by the Well-Ordering Principle, there must exist a smallest non-negative element, denoted by $r$.
So $r = a - q b$ for some $q \in \Z$.
$r$ must be in the interval $\hointr 0 b$ because otherwise $r - b$ would be smaller than $r$ and a non-negative element in the sequence.
$\Box$


Uniqueness
Suppose we have another pair $q_0$ and $r_0$ such that $a = b q_0 + r_0$, with $0 \le r_0 < b$.
Then:

$b q + r = b q_0 + r_0$
Factoring we see that:

$r - r_0 = b \paren {q_0 - q}$
and so:

$b \divides \paren {r - r_0}$
Since $0 \le r < b$ and $0 \le r_0 < b$, we have that:

$-b < r - r_0 < b$
Hence:

$r - r_0 = 0 \implies r = r_0$
So now:

$r - r_0 = 0 = b \paren {q_0 - q}$
which implies that:

$q = q_0$
Therefore the solution is unique.
$\blacksquare$





