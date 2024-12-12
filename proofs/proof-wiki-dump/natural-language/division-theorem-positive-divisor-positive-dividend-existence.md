# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Existence



Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof 1
Let $a, b \in \Z$ such that $a \ge 0$ and $b > 0$ be given.
Let $S$ be defined as the set of all positive integers of the form $a - z b$ where $z$ is an integer:

$S = \set {x \in \Z_{\ge 0}: \exists z \in \Z: x = a - z b}$
By setting $z = 0$ we have that $a \in S$.
Thus $S \ne \O$.
We have that $S$ is bounded below by $0$.
From Set of Integers Bounded Below by Integer has Smallest Element it follows that $S$ has a smallest element $r$.
Thus:

$\exists q \in \Z: a - q b = r$
and so:

$a = q b + r$
So we have proved the existence of $q$ and $r$ such that $a = q b + r$.

It remains to be shown that $0 \le r < b$.
We have that $r \in S$ which is bounded below by $0$.
Therefore $0 \le r$.

Aiming for a contradiction, suppose $b \le r$.
So:














\(\ds b\)

\(\le\)







\(\ds r\)




















\(\ds \)

\(<\)







\(\ds r + b\)





as $b > 0$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds r - b\)




















\(\ds \)

\(<\)







\(\ds r\)





subtracting $b$ throughout



But then:














\(\ds a\)

\(=\)







\(\ds q b + r\)





from above








\(\ds \leadsto \ \ \)





\(\ds r - b\)

\(=\)







\(\ds \paren {a - q b} - b\)




















\(\ds \)

\(=\)







\(\ds a - b \paren {q + 1}\)














\(\ds \leadsto \ \ \)





\(\ds r - b\)

\(\in\)







\(\ds S\)





as $r - b$ is of the correct form




But $r - b < r$ contradicts the choice of $r$ as the least element of $S$.
Hence $r < b$ as required.

Thus the existence of $q$ and $r$ satisfying $a = q b + r, 0 \le r < b$ has been demonstrated.
$\blacksquare$


Proof 2
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


Proof 3
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





