# 

Source: https://proofwiki.org/wiki/Condition_for_Closed_Extension_Space_to_be_T4_Space



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then:

$T^*_p$ is a $T_4$ space if and only if $T$ is a $T_4$ space vacuously
and $T^*_p$ in this case is also a $T_4$ space vacuously.


Proof
Sufficient Condition
Suppose $T^*_p$ is $T_4$.
Then for any two disjoint closed sets $A, B \subseteq S$ there exist disjoint open sets $U, V \in \tau^*_p$ containing $A$ and $B$ respectively.
However, for any non-empty set $U \in \tau^*_p$, $p \in U$.
Hence no non-empty open sets in $T^*_p$ are disjoint.
Therefore $T^*_p$ is a $T_4$ space vacuously: there do not exist two disjoint closed sets.
$\Box$


Necessary Condition
By Closed Sets of Closed Extension Topology, the closed sets of $T^*_p$ (apart from $S^*_p$) are the closed sets of $T$.
Therefore $T^*_p$ does not contain two disjoint closed sets if and only if $T$ does not contain two disjoint closed sets.
Hence $T^*_p$ is a $T_4$ space vacuously if and only if $T$ is a $T_4$ space vacuously.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




