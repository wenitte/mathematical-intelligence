# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Existence/Proof_2

Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
Let $a = 0$.
It is immediately apparent that $q = r = 0$ is the only possible solution with $0 \le r < b$.
$\Box$

Let $a > 0$ and $b = 1$.
Then from the condition $0 \le r < b$ it follows that $r = 0$ and hence $q = a$.
$\Box$

Let $a > 0$ and $b > 1$.
By the Basis Representation Theorem, $a$ has a unique representation to the base $b$:














\(\ds a\)

\(=\)







\(\ds \sum_{k \mathop = 0}^s r_k b^k\)




















\(\ds \)

\(=\)







\(\ds b \sum_{k \mathop = 0}^{s - 1} r_k b^{k - 1} + r_0\)




















\(\ds \)

\(=\)







\(\ds b q + r\)





where $0 \le r = r_0 < b$



$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Theorem $\text {2-1}$




