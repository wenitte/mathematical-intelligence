# 

Source: https://proofwiki.org/wiki/Existence_of_Subgroup_of_Dipper_Semigroup



Theorem
Let $m, n \in \Z$ be integers such that $m \ge 0, n > 0$.
Let $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ denote the dipper semigroup.
Consider the subset $H \subseteq N_{< \paren {m \mathop + n} }$ defined as:

$H = \set {k \in \N: m \le k < m + n} = \set {m, m + 1, \ldots, m + n - 1}$

Then the substructure $\struct {H, +_{m, n} }$ is a subgroup of $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.


Proof
Recall the definition of the dipper semigroup:
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$
Let $+_{m, n}$ be the dipper operation on $\N_{< \paren {m \mathop + n} }$:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
Let $a, b \in H$.
Then:

$2 m \le a + b \le 2 \paren {m + n - 1}$
Thus in all cases $a + b > m$.

Thus by definition of $+_{m, n}$:

$a +_{m, n} b = a + b - k n$
where $k$ is the largest such that $m + k n < a + b$
Hence:














\(\ds m + k n\)

\(\le\)

\(\, \ds a + b \, \)

\(\, \ds < \, \)



\(\ds m + \paren {k + 1} n\)





Definition of $k$








\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)

\(\, \ds a + b - k n \, \)

\(\, \ds < \, \)



\(\ds m + n\)





subtracting $k n$ from all parts








\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)

\(\, \ds a +_{m, n} b \, \)

\(\, \ds < \, \)



\(\ds m + n\)





Definition of $+_{m, n}$



That is:

$a +_{m, n} b \in H$
and so $\struct {H, +_{m, n} }$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
From Restriction of Associative Operation is Associative, associativity is inherited by $\struct {H, +_{m, n} }$ from $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
We have:

$m \le a < m + n$









\(\ds \forall a \in H: \, \)



\(\ds m\)

\(\le\)

\(\, \ds a \, \)

\(\, \ds < \, \)



\(\ds m + n\)





Group Axiom $\text G 0$: Closure








\(\ds \leadstoandfrom \ \ \)





\(\ds m + n\)

\(\le\)

\(\, \ds a + n \, \)

\(\, \ds < \, \)



\(\ds m + 2 n\)









Hence

$a +_{m, n} n = a$

From Dipper Semigroup is Commutative Semigroup we have that:

$n +_{m, n} a = a +_{m, n} n = n$
Thus $n$ is the identity element of $\struct {H, +_{m, n} }$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $n$ is the identity element of $\struct {H, +_{m, n} }$.
Hence we need to find $x \in H$ such that:

$a +_{m, n} x = n$
That is:

$a + x - k n = n$
So:

$x = \paren {k + 1} n - a$
such that $m \le x < m + n$
where:

$m - n + a \le k n < m + a$
Thus every element $x$ of $\struct {H, +_{m, n} }$ has an inverse $x^{-1}$ where:

$\paren {k + 1} n - a$
such that:

$m - n + a \le k n < m + a$
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {H, +_{m, n} }$ is a group.
$\blacksquare$


Examples
Example: $\struct {H, +_{3, 4} }$
Consider the dipper semigroup $\struct {N_{<7}, +_{3, 4} }$.
Let $H = \set {x \in \N: 3 \le x < 7} = \set {3, 4, 5, 6}$.
Then:

$\struct {H, +_{3, 4} }$ is a subgroup of $\struct {N_{<7}, +_{3, 4} }$
where:

the identity of $\struct {H, +_{3, 4} }$ is $4$
the inverse $a^{-1}$ of $a \in H$ is given by:
$a^{-1} = 4 \paren {k - 1} - a$
such that:
$a - 1 \le 4 k < a + 3$




