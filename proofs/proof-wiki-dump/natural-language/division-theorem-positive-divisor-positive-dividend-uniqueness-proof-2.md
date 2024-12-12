# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Uniqueness/Proof_2

Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, the integers $q, r$ such that $a = q b + r$ and $0 \le r < b$ are unique:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
It is given by Division Theorem: Positive Divisor: Positive Dividend: Existence that such $q$ and $r$ exist.

Let $a = 0$.
It is immediately apparent that $q = r = 0$ is the only possible solution with $0 \le r < b$.
$\Box$

Let $a > 0$ and $b = 1$.
Then from the condition $0 \le r < b$ it follows that $r = 0$.
Hence $r = 0, q = a$ is the only possible solution.
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




Suppose a second pair $q', r'$ were to exist.
Then there would be a representation for $q'$ to the base $b$:

$\displaystyle q' = \sum_{k \mathop = 0}^t u_k b^k$
so that:














\(\ds a\)

\(=\)







\(\ds b q' + r'\)





$0 \le r < b$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^t u_k b^{k + 1} + r'\)









But there already exists a representation of $a$ to the base $b$:

$\displaystyle a = \sum_{k \mathop = 0}^s r_k b^k$
By the Basis Representation Theorem, such a representation is unique.
So:














\(\ds t\)

\(=\)







\(\ds s - 1\)




















\(\ds u_k\)

\(=\)







\(\ds r_{k + 1}\)




















\(\ds r'\)

\(=\)







\(\ds a_0\)




















\(\ds \)

\(=\)







\(\ds r\)









and hence $q' = q$.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Theorem $\text {2-1}$




