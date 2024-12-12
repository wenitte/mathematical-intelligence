# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Existence/Proof_3

Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
Let $a, b \in \Z$ such that $a \ge 0$ and $b > 0$ be given.
When $a = 0$, the integers $q = r = 0$ satisfy the conditions of the theorem.

Let $a > 0$.
For each $k \in \closedint 0 {a + 1}$, let $r_k = b k$.
(Note that here, as elsewhere in this proof, $\closedint 0 {a + 1}$ denotes an integer interval.)
Then $\sequence {r_k}_{0 \mathop \le k \mathop \le a + 1}$ is a strictly increasing sequence of positive integers.
It is also the case that:

$a + 1 \in \closedint 1 {\map b {a + 1} }$
So from Strictly Increasing Sequence induces Partition there exists $q \in \closedint 0 a$ such that:

$a + 1 \in \closedint {r_q + 1} {r_{q + 1} }$
Let $r = a - b q$.
Then $a = b q + r$.
We have:














\(\ds b q + 1\)

\(=\)







\(\ds r_q + 1\)




















\(\ds \)

\(\le\)







\(\ds a + 1\)




















\(\ds \)

\(\le\)







\(\ds r_{q + 1}\)




















\(\ds \)

\(=\)







\(\ds b q + b\)









and so:














\(\ds 0\)

\(\le\)







\(\ds r\)




















\(\ds \)

\(=\)







\(\ds \paren {a + 1} - \paren {b q + 1}\)




















\(\ds \)

\(\le\)







\(\ds \paren {b q + b} - \paren {b q + 1}\)




















\(\ds \)

\(=\)







\(\ds b - 1\)




















\(\ds \)

\(<\)







\(\ds b\)









Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.1$




