# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Set_with_Compact_Subspace_is_Compact/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be closed in $T$.
Let $K \subseteq S$ be compact in $T$.

Then $H \cap K$ is compact in $T$.


Proof
Let $\tau_K$ be the subspace topology on $K$.
Let $T_K = \left({K, \tau_K}\right)$ be the topological subspace determined by $K$.
By Closed Set in Topological Subspace, $H \cap K$ is closed in $T_K$.
By Closed Subspace of Compact Space is Compact, $H \cap K$ is compact in $T_K$.
By Compact in Subspace is Compact in Topological Space, $H \cap K$ is compact in $T$.
$\blacksquare$





