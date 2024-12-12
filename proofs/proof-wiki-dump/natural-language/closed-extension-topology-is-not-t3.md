# 

Source: https://proofwiki.org/wiki/Closed_Extension_Topology_is_not_T3

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then $T^*_p$ is not a $T_3$ space.


Proof
By Underlying Set of Topological Space is Closed, $S$ is closed in $T$.
By Closed Sets of Closed Extension Topology, $S$ is closed in $T^*_p$.
Definition of Closed Extension Space gives:

$p \notin S$
Every open set in $T^*_p$ is either $\O$ or it contains $p$.
Thus no open set containing $S$ is disjoint from $\set p$.
This shows that $T^*_p$ is not a $T_3$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




