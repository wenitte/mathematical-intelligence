# 

Source: https://proofwiki.org/wiki/Existence_of_Dyadic_Rational_between_two_Rationals

Theorem
Let $a$ and $b$ be rational numbers such that $a < b$.

Then there exist integers $m$ and $r$ such that:

$a < \dfrac m {2^r} < b$

That is, there exists a dyadic rational between any pair of rational numbers.


Proof
As $a < b$ it follows that $a \ne b$ and so $b - a \ne 0$.
Thus:

$\dfrac 1 {b - a} \in \R$
By the Axiom of Archimedes:

$\exists r \in \N: r > \dfrac 1 {b - a}$
Notice that $2^r > r$.
Thus we also have:

$2^r > \dfrac 1 {b - a}$
Let $M := \set {x \in \Z: x > a 2^r}$.
By Set of Integers Bounded Below has Smallest Element, there exists $m \in \Z$ such that $m$ is the smallest element of $M$.
That is:

$m > a 2^r$
and, by definition of smallest element:

$m - 1 \le a 2^r$

As $2^r > \dfrac 1 {b - a}$, it follows from Ordering of Reciprocals that:

$\dfrac 1 {2^r} < b - a$
Thus:














\(\ds m - 1\)

\(\le\)







\(\ds a 2^r\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)







\(\ds a 2^r + 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac m {2^r}\)

\(\le\)







\(\ds a + \frac 1 {2^r}\)




















\(\ds \)

\(<\)







\(\ds a + \paren {b - a}\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus we have shown that $a < \dfrac m {2^r} < b$.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Exercise $2$




