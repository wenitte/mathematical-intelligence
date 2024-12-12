# 

Source: https://proofwiki.org/wiki/F-Sigma_and_G-Delta_Subsets_of_Uncountable_Finite_Complement_Space

Theorem
Let $T = \struct {S, \tau}$ be a finite complement topology on an uncountable set $S$.

Then countably infinite subsets of $S$ are $F_\sigma$ sets and are neither open nor closed sets.
Their relative complements in $S$ are $G_\delta$ sets, and are also neither open nor closed sets.


Proof
Let $U$ be a countably infinite subset of $S$.
Then it can be written as:

$\ds U = \bigcup_{x \mathop \in U} \set x$
But as $\set x$ is a finite subset of $S$, it is by definition the complement of an open set in $T$.
So by definition $\set x$ is closed in $T$.

So:

$\ds U = \bigcup_{x \mathop \in U} \set x$
is a countable union of closed sets of $T$.
That is, by definition, $U$ is an $F_\sigma$ set.

As $U$ is countably infinite, its complement is uncountable, not finite, and so $U$ is not open in $T$.
But as $U$ is also not finite, it is not the complement of an open set and so is not closed in $T$ either.

From Complement of $F_\sigma$ Set is $G_\delta$ Set it follows that the complement of $U$ is a $G_\delta$ set, and similarly neither open nor closed.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $19$. Finite Complement Topology on an Uncountable Space: $3$




