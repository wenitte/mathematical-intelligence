# 

Source: https://proofwiki.org/wiki/Discrete_Space_is_Fully_T4

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Then $T$ is fully $T_4$.


Proof
Consider the set $\CC$ of all singleton subsets of $S$:

$\CC := \set {\set x: x \in S}$
From Discrete Space has Open Locally Finite Cover:

$\CC$ is an open cover of $T$ which is locally finite.

Let $x \in S$.
The star of $x$ with respect to $\CC$ is defined as:

$\ds x^* := \bigcup \set {U \in \CC: x \in U}$
That is, the union of all sets in $\CC$ which contain $x$.
But here the only set of $\CC$ containing $x$ is $\set x$.

Now let $\VV$ be an open cover of $T$.

From the above, it follows that $\CC$ is a cover for $S$ such that:

$\forall x \in S: \exists U \in \VV: x^* \subseteq U$
where $x^* = \set x$ is the star of $x$ with respect to $\CC$.
That is, $\CC$ is a star refinement of $\VV$.
Therefore, by definition, $T$ is fully $T_4$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $6$




