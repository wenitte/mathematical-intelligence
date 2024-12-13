# 

Source: https://proofwiki.org/wiki/Ordering_of_Naturally_Ordered_Semigroup_is_Strongly_Compatible

Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.

Then $\preceq$ is strongly compatible with $\circ$:

$\forall m, n, p \in S: m \preceq n \iff m \circ p \preceq n \circ p$


Proof
The forward implication is immediate from $\preceq$ being compatible with $\circ$:

$\forall m, n, p \in S: m \preceq n \implies m \circ p \preceq n \circ p$

Conversely, suppose that $m \circ p \preceq n \circ p$.
Suppose that $n \prec m$.
Then as $\preceq$ is compatible with $\circ$:

$n \circ p \preceq m \circ p$
Since $\preceq$ is an ordering, this implies:

$n \circ p = m \circ p$
By Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability, it follows that:

$n = m$
contradicting our assumption that $n \prec m$.

Hence, since $\preceq$ is a total ordering:

$m \preceq n$
as desired.
$\blacksquare$


Also see
Strict Ordering of Naturally Ordered Semigroup is Strongly Compatible




