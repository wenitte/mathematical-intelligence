# 

Source: https://proofwiki.org/wiki/Finite_Non-Empty_Subset_of_Ordered_Set_has_Maximal_and_Minimal_Elements/Corollary

Theorem
Let $\struct {S, \preceq}$ be a finite ordered set.
Let $x \in S$.

Then there exists a maximal element $M \in S$ and a minimal element $m \in S$ such that:

$m \preceq x \preceq M$


Proof
Let $T = \set{y : x \preceq y}$.
By the reflexivity of the ordering $\preceq$:

$x \preceq x$
So $x \in T$ and $T$ is non-empty.
From Finite Non-Empty Subset of Ordered Set has Maximal and Minimal Elements:

$\struct {T, \preceq}$ has a maximal element $M \in T$

We now show that $M$ is a maximal element in $\struct{S, \preceq}$. 
Let $y \in S$ such that:

$M \preceq y$
By the transitiviy of the ordering $\preceq$:

$x \prec y$
So $y \in T$.
By the definition of a maximal element:

$y = M$

Similarly for $T' = \set {y : y \preceq x}$:

$\struct {T', \preceq}$ has a minimal element $m \in T'$
and $m$ is a minimal element in $\struct {S, \preceq}$.
$\blacksquare$





