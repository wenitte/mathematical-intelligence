# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bounded_Metric_Space



Theorem
The following definitions of the concept of Bounded Metric Space are equivalent:

Definition 1
$M'$ is bounded (in $M$) if and only if:

$\exists a \in A, K \in \R: \forall x \in B: \map {d} {x, a} \le K$
That is, there exists an element of $A$ within a finite distance of all elements of $B$.

Definition 2
$M'$ is bounded (in $M$) if and only if:

$\exists K \in \R: \forall x, y \in M': \map {d_B} {x, y} \le K$
That is, there exists a finite distance such that all pairs of elements of $B$ are within that distance.

Definition 3
$M'$ is bounded (in $M$) if and only if:

$\exists x \in A, \epsilon \in \R_{>0}: B \subseteq \map {B_\epsilon} x$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.

That is, $M'$ can be fitted inside an open ball.

Definition 4
Let $a' \in A$.

$M'$ is bounded (in $M$) if and only if:

$\exists K \in \R: \forall x \in B: \map d {x, a'} \le K$


Proof
Let $M = \struct {X, d}$ be a metric space.
Let $M' = \struct {Y, d_Y}$ be a subspace of $M$.


Definition 1 implies Definition 2
Let $M'$ be bounded according to Definition 1:

$\exists a \in X, K \in \R: \forall x \in Y: \map d {x, a} \le K$
Let $x, y \in Y$.
Then:














\(\ds \map d {x, y}\)

\(\le\)







\(\ds \map d {x, a} + \map d {a, y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {x, a} + \map d {y, a}\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(\le\)







\(\ds K + K\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 2 K\)





where $K$



Thus:

$\map d {x, y} \le 2 K$

Thus, setting $r = 2 K$, $M'$ fulfils the conditions to be bounded according to Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $M'$ be bounded according to Definition 2:

$\exists K \in \R: \forall x, y \in M': \map d {x, y} \le K$
Let $a = y$.
Then:

$\map d {x, a} \le K$
and so:

$\exists a \in Y, K \in \R: \forall x \in Y: \map d {x, a} \le K$
As $X \subseteq Y$ it follows by definition of subset that:

$\exists a \in Y \implies \exists a \in X$
and so:

$\exists a \in X, K \in \R: \forall x \in Y: \map d {x, a} \le K$

Thus $M'$ fulfils the conditions to be bounded according to Definition 1.
$\Box$


Definition 1 implies Definition 3
Let $M'$ be bounded according to Definition 1:

$\exists a \in X, K \in \R: \forall x \in Y: \map d {x, a} \le K$

Although not specified, $K \le 0$ for the definition to make sense, as $\map d {x, a} \ge 0$.

Let $\map {B_{K + 1} } a$ be the open $K + 1$-ball of $x$.
By definition of open ball:

$\map {B_{K + 1} } a := \set {x \in M: \map d {x, a} < K + 1}$

Let $y \in S$.
Then by definition:

$\map d {y, a} \le K < K + 1$
and so:

$y \in \map {B_{K + 1} } a$
It follows by the definition of subset that:

$Y \subseteq \map {B_{K + 1} } a$
and so $Y$ can be fitted inside an open ball.

Thus $M'$ fulfils the conditions to be bounded according to Definition 3.
$\Box$


Definition 3 implies Definition 1
Let $M'$ be bounded according to Definition 3:

$\exists x \in A, \epsilon \in \R_{>0}: B \subseteq \map {B_\epsilon} x$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.
Then by definition:

$\forall y \in Y: \map d {x, y} \le \epsilon$
and so the condition for boundedness in $M$ is fulfilled.
Thus $M'$ fulfils the conditions to be bounded according to Definition 1.
$\Box$


Definition 1 implies Definition 4
Suppose:

$\exists x \in M, \epsilon \in \R_{>0}: Y \subseteq \map {B_\epsilon} x$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.
Then by definition:

$\forall y \in Y: \map d {x, y} \le \epsilon$
and so the condition for boundedness in $M$ is fulfilled.
This follows from Element in Bounded Metric Space has Bound.
$\Box$


Definition 4 implies Definition 1
This follows directly.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




