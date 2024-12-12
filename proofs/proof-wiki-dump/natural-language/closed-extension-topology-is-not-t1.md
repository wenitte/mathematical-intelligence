# 

Source: https://proofwiki.org/wiki/Closed_Extension_Topology_is_not_T1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then $T^*_p$ is not a $T_1$ (Fréchet) space.


Proof
By definition:

$\tau^*_p = \set {U \cup \set p: U \in \tau} \cup \set \O$

Let $x \in S^*_p, x \ne p$.
Let $U = \set p$.
Then $U \in \tau^*_p$ such that $p \in U, x \notin U$.
But there is no $V \in \tau^*_p$ such that $x \in V, p \notin V$, by definition of the closed extension topology.
Hence $T^*_p$ can not be a $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




