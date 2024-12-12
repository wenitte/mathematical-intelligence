# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_of_Dipper_Relation

Theorem
Let $m \in \N$ be a natural number.
Let $n \in \N_{>0}$ be a non-zero natural number.

Let $\RR_{m, n}$ be the dipper relation on $\N$:

$\forall x, y \in \N: x \mathrel {\RR_{m, n} } y \iff \begin {cases} x = y \\ m \le x < y \text { and } n \divides \paren {y - x} \\  m \le y < x \text { and } n \divides \paren {x - y} \end {cases}$

The equivalence classes of $\RR_{m, n}$ are:

$\eqclass x {\RR_{m, n} } = \begin {cases} \set x & : x < m \\ \set {y \in \N: \paren {m \le y} \land \paren {\exists k \in \Z: x = y + k n} } & : x \ge m \end {cases}$

Thus the classes are:














\(\ds \eqclass 0 {\RR_{m, n} }\)

\(=\)







\(\ds \set 0\)




















\(\ds \eqclass 1 {\RR_{m, n} }\)

\(=\)







\(\ds \set 1\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \eqclass {m - 1} {\RR_{m, n} }\)

\(=\)







\(\ds \set {m - 1}\)




















\(\ds \eqclass m {\RR_{m, n} }\)

\(=\)







\(\ds \set {m, m + n, m + 2 n, m + 3 n, \ldots}\)




















\(\ds \eqclass {m + 1} {\RR_{m, n} }\)

\(=\)







\(\ds \set {m + 1, m + n + 1, m + 2 n + 1, m + 3 n + 1, \ldots}\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \eqclass {m + n - 1} {\RR_{m, n} }\)

\(=\)







\(\ds \set {m + n - 1, m + 2 n - 1, m + 3 n - 1, m + 4 n - 1, \ldots}\)









and it is seen that there are exactly $m + n$ such equivalence classes.


Proof
From Dipper Relation is Equivalence Relation we have that $\RR_{m, n}$ is indeed an equivalence relation.

Let $x < m$.
Then by definition:

$y \in \eqclass x {\RR_{m, n} } \iff x = y$
and so:

$\eqclass x {\RR_{m, n} } = \set x$

Let $m \le x$.
Let $x \mathrel {\RR_{m, n} } y$.
First we note that $m \le y$.

Let $x = y$.
Then $y \in \eqclass x {\RR_{m, n} }$ immediately, and:

$x = y + 0 \times n$
That is:

$\exists k \in \Z: x = y + k n$
where in this instance $k = 0$.

Let $x > y$.
We have that:














\(\ds n\)

\(\divides\)







\(\ds \paren {x - y}\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k n\)

\(=\)







\(\ds x - y\)




















\(\ds x\)

\(=\)







\(\ds y + k n\)










Let $x < y$.
We have that:














\(\ds n\)

\(\divides\)







\(\ds \paren {y - x}\)














\(\ds \leadsto \ \ \)

\(\ds \exists k' \in \Z: \, \)



\(\ds k' n\)

\(=\)







\(\ds y - x\)




















\(\ds x\)

\(=\)







\(\ds y - k' n\)




















\(\ds x\)

\(=\)







\(\ds y + k n\)





where $k = -k'$




Hence when $m \le x$, we have that:

$\eqclass x {\RR_{m, n} } = \set {y \in \N: \paren {m \le y} \land \paren {\exists k \in \Z: x = y + k n} }$
$\blacksquare$





