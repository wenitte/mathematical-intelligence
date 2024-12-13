# 

Source: https://proofwiki.org/wiki/Integral_Ideal_iff_Set_of_Integer_Multiples



Theorem
Let $J$ be a non-empty subset of the set of integers $\Z$.

Then:

$J$ is an integral ideal
if and only if:

$\exists m \in \Z: J = m \Z$.


Proof
Sufficient Condition
By definition, $J$ satisfies the following conditions:

$(1): \quad n, m \in J \implies m + n \in J, m - n \in J$
$(2): \quad n \in J, r \in \Z \implies r n \in J$

First note that the null ideal $\set 0$ is an integral ideal.
This is of the form $0 \Z$.

Let $J \ne \set 0$.
Then $\exists a \in J: a \ne 0$.
As $0 \in \Z$ it follows from $(2)$ that:

$0 \times a = 0 \in J$
Thus from $(1)$ we have that:

$0 - a \in J$
so both $a \in J$ and $-a \in J$
Thus there exists $a \in J: a > 0$.

Consider the set $S = \set {x \in J: x > 0}$.
$S$ is bounded below by $0$, for example.
$S$ is not empty, because it has been established that $a \in S$.

By Set of Integers Bounded Below has Smallest Element, $S$ has a smallest element, $m$, say.
Consider $y \in m \Z$.
By definition of $m \Z$, $y = r m$ for some $r \in \Z$.
Thus, by $(2)$, $y \in J$.
So by definition of subset, $m \Z \subseteq J$.

It remains to be demonstrated that $J \subseteq m \Z$.
Aiming for a contradiction, suppose $k \in J: k \notin m \Z$.
As $k \in J$, it follows from $(1)$ that $0 - k = -k \in J$ also.
Either $k > 0$ or $-k > 0$.
Without loss of generality, let $k > 0$.
If $k < m$, then that contradicts the statement that $m \in J$ is the smallest element of $J$ that is (strictly) positive.
So $k > m$.
Consider the set $T = \set {x \in m \Z: x > k}$.
$T$ is not empty, as $m \paren {k + 1}$, for example, is bound to be in $T$ (even if $m = 1$, the smallest it can be).
By Set of Integers Bounded Below has Smallest Element, $T$ has a smallest element, $m s$, say.
Then:

$m \paren {s - 1} < k < m s$
As $k > m$ it follows also that $m \paren {s - 1} > 0$.
Equality cannot happen because $k \notin m \Z$.
But we have that $k \in J$ and so:

$m s - k \in J$
and:

$k - m \paren {s - 1} \in J$
But $m s - k < m$, otherwise $m \paren {s - 1} > k$ which contradicts the statement that $m s \in J$ is the smallest element of $T$
Thus $m s - k \in J$ and $0 < m s - k < m$.
This contradicts the statement that $m$ is the smallest element of $J$ that is (strictly) positive.
Hence by Proof by Contradiction there is no such $k$.
Hence $J \subseteq m \Z$ and the result follows.

$\Box$


Necessary Condition
First note that $m \times 0 \in m \Z$ whatever $m$ may be.
Thus $m \Z \ne \O$.

Let $a, b \in m \Z$.
Then:














\(\ds a + b\)

\(=\)







\(\ds m j + m k\)





for some $j, k \in \Z$ by definition of $m \Z$














\(\ds \)

\(=\)







\(\ds m \paren {j + k}\)




















\(\ds \)

\(\in\)







\(\ds m \Z\)









and:














\(\ds a - b\)

\(=\)







\(\ds m j - m k\)





for some $j, k \in \Z$ by definition of $m \Z$














\(\ds \)

\(=\)







\(\ds m \paren {j - k}\)




















\(\ds \)

\(\in\)







\(\ds m \Z\)










Let $r \in \Z$.
Then:














\(\ds r a\)

\(=\)







\(\ds r \paren {m j}\)





for some $j \in \Z$ by definition of $m \Z$














\(\ds \)

\(=\)







\(\ds m \paren {r j}\)




















\(\ds \)

\(\in\)







\(\ds m \Z\)









Thus the conditions for $m \Z$ to be an integral ideal are fulfilled.
Hence the result.
$\blacksquare$





