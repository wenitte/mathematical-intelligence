# 

Source: https://proofwiki.org/wiki/Existence_of_Lowest_Common_Multiple/Proof_1

Theorem
Let $a, b \in \Z: a b \ne 0$.
The lowest common multiple of $a$ and $b$, denoted $\lcm \set {a, b}$, always exists.


Proof
We prove its existence thus:
$a b \ne 0 \implies \size {a b} \ne 0$

Also $\size {a b} = \pm a b = a \paren {\pm b} = \paren {\pm a} b$.
So the lowest common multiple definitely exists, and we can say that:

$0 < \lcm \set {a, b} \le \size {a b}$

Now we prove it is the lowest.
That is:

$a \divides n \land b \divides n \implies \lcm \set {a, b} \divides n$

Let $a, b \in \Z: a b \ne 0, m = \lcm \set {a, b}$.
Let $n \in \Z: a \divides n \land b \divides n$.
We have:

$n = x_1 a = y_1 b$
$m = x_2 a = y_2 b$

As $m > 0$, we have:














\(\ds n\)

\(=\)







\(\ds m q + r: 0 \le r < \size m = m\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds n - m q\)




















\(\ds \)

\(=\)







\(\ds 1 \times n + \paren {-q} \times m\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds x_1 a + \paren {-q} x_2 a\)




















\(\ds \)

\(=\)







\(\ds y_1 b + \paren {-q} y_2 b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds r\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\divides\)







\(\ds r\)










Since $r < m$, and $m$ is the smallest positive common multiple of $a$ and $b$, it follows that $r = 0$.
So:

$\forall n \in \Z: a \divides n \land b \divides n: \lcm \set {a, b} \divides n$
That is, $\lcm \set {a, b}$ divides any common multiple of $a$ and $b$.
$\blacksquare$





