# 

Source: https://proofwiki.org/wiki/Condition_for_Open_Extension_Space_to_be_T0_Space

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is a $T_0$ (Kolmogorov) space if and only if $T$ is.


Proof
By definition:

$\tau^*_{\bar p} = \set {U: U \in \tau} \cup \set {S^*_p}$

Let $T = \struct {S, \tau}$ be a $T_0$ space.
Let $\forall x, y \in S$ such that $x \ne y$.
First, suppose $x \ne p \ne y$.
Then by definition of $T$ as a $T_0$ space:

$\exists U \in \tau: x \in U, y \notin U$
or:

$\exists U \in \tau: y \in U, x \notin U$

Then as $U \in \tau^*_{\bar p}$, it follows that:

$\exists U \in \tau^*_{\bar p}: x \in U, y \notin U$
or:

$\exists U \in \tau^*_{\bar p}: y \in U, x \notin U$
Now suppose that $y = p$.
Then by definition:

$\forall U \in \tau^*_{\bar p}: x \in U, p \notin U$
unless $U = S^*_p$.

So we have shown that:

$\forall x, y \in S^*_p$ such that $x \ne y$, either:
$\exists U \in \tau^*_{\bar p}: x \in U, y \notin U$
or:
$\exists U \in \tau^*_{\bar p}: y \in U, x \notin U$
and so $T^*_{\bar p}$ is a $T_0$ space.

Now suppose that $T = \struct {S, \tau}$ is not a $T_0$ space.
Let $x, y \in S$ such that:

$\forall U \in \tau: x \in U \implies y \in U$
$\forall U \in \tau: y \in U \implies x \in U$
As $U \in \tau^*_{\bar p}$ it follows that:

$\forall U \in \tau^*_{\bar p}: x \in U \implies y \in U$
$\forall U \in \tau^*_{\bar p}: y \in U \implies x \in U$
and if $U = S^*_p$ the same applies.
Hence $T^*_{\bar p}$ is not a $T_0$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




