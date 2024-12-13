# 

Source: https://proofwiki.org/wiki/Lower_Bound_is_Upper_Bound_for_Inverse_Ordering

Definition
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.
Let $m$ be a lower bound for $\struct {T, \preceq}$.
Let $\succeq$ be the dual ordering of $\preceq$.

Then $m$ is an upper bound for $\struct {T, \succeq}$.


Proof
Let $m$ be a lower bound for $\struct {T, \preceq}$.
That is:

$\forall a \in T: m \preceq a$
By definition of dual ordering, it follows that:

$\forall a \in T: a \succeq m$
That is, $M$ is an upper bound for $\struct {T, \succeq}$.
$\blacksquare$


Also see
Upper Bound is Lower Bound for Inverse Ordering




