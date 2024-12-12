# 

Source: https://proofwiki.org/wiki/Condition_for_Closed_Extension_Space_to_be_T0_Space

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then $T^*_p$ is a $T_0$ (Kolmogorov) space if and only if $T$ is.


Proof
By definition:

$\tau^*_p = \set {U \cup \set p: U \in \tau} \cup \set \O$

Let $T = \struct {S, \tau}$ be a $T_0$ space.

Then:

$\forall x, y \in S$ such that $x \ne y$, either:
$\exists U \in \tau: x \in U, y \notin U$
or:
$\exists U \in \tau: y \in U, x \notin U$

Let $x, y \in S^*_p$ such that $x \ne y, x \ne p, y \ne p$.
Then:

$\exists U \in \tau: x \in U, y \notin U$
or:

$\exists U \in \tau: y \in U, x \notin U$
Now let $U^* = U \cup \set p$.
It follows that:

$x \in U^*, y \notin U^*$
or:

$y \in U^*, x \notin U^*$
Now consider $x, p \in S^*_p$ such that $x \ne p$.
We have that:

$\set p \in \tau^*_p: p \in \set p, x \notin \set p$

So we have shown that:

$\forall x, y \in S^*_p$ such that $x \ne y$, either:
$\exists U \in \tau^*_p: x \in U, y \notin U$
or:
$\exists U \in \tau^*_p: y \in U, x \notin U$
and so $T^*_p$ is a $T_0$ space.

Now suppose that $T = \struct {S, \tau}$ is not a $T_0$ space.
Let $x, y \in S$ such that:

$\forall U \in \tau: x \in U \implies y \in U$
$\forall U \in \tau: y \in U \implies x \in U$

Now consider $U^* = U \cup \set p$ for any $U \in \tau$.
Then:

As $x \in U \implies y \in U$ it follows that $x \in U^* \implies y \in U^*$.
As $y \in U \implies x \in U$ it follows that $y \in U^* \implies x \in U^*$.

Hence $T^*_p$ is not a $T_0$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




