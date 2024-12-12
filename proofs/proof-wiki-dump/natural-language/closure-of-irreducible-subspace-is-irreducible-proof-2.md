# 

Source: https://proofwiki.org/wiki/Closure_of_Irreducible_Subspace_is_Irreducible/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $Y \subseteq S$ be a subset of $S$ which is irreducible in $T$.

Then its closure $Y^-$ in $T$ is also irreducible in $T$.


Proof
In view of Definition of Irreducible Subset, it suffices to show that for all closed sets $A_1$ and $A_2$ in $T$:

$Y^- \subseteq A_1 \cup A_2 \implies \exists i_0 \in \set {1, 2} : Y^- \subseteq A_{i_0}$

To this end, let $A_1$ and $A_2$ be closed sets in $T$ such that:

$Y^- \subseteq A_1 \cup A_2$
Then, in particular:

$Y \subseteq A_1 \cup A_2$
Since $Y \subseteq S$ is an irreducible subset:

$\exists i_0 \in \set {1, 2} : Y \subseteq A_{i_0}$
By Closure of Subset of Closed Set of Topological Space is Subset:

$Y^- \subseteq A_{i_0}$
$\blacksquare$





