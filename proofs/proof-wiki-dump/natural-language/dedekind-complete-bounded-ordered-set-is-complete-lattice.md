# 

Source: https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice

Theorem
Let $\struct {L, \preceq}$ be an ordered set.
Let $L$ have a lower bound $\bot$ and an upper bound $\top$.
Let $\struct {L, \preceq}$ be Dedekind-complete.

Then $\struct {L, \preceq}$ is a complete lattice.


Proof
Let $S \subseteq L$.
If $S = \O$, then $S$ has a supremum of $\bot$ and an infimum of $\top$.
Let $S \ne \O$.
$S$ is bounded above by $\top$.
As $\struct {L, \preceq}$ is Dedekind complete, $S$ has a supremum.
$S$ is bounded below by $\bot$.
By Dedekind Completeness is Self-Dual, $S$ has an infimum.
Thus every subset of $L$ has a supremum and an infimum.
So, by definition, $\struct {L, \preceq}$ is a complete lattice.
$\blacksquare$





