# 

Source: https://proofwiki.org/wiki/Open_Extension_Topology_is_not_T1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is not a $T_1$ (Fréchet) space.


Proof
By definition:

$\tau^*_{\bar p} = \set {U: U \in \tau} \cup \set {S^*_p}$

Let $x \in S^*_p, x \ne p$.
Let $U = \set x$.
Then $U \in \tau^*_p$ such that $x \in U, p \notin U$.
But the only $v \in \tau^*_p$ such that $p \in V$ is the set $S^*_p$, and we have that $x \in S^*_p$.
So there is no $V \in \tau^*_p$ such that $x \notin V, p \in V$, by definition of the open extension topology.
Hence $T^*_{\bar p}$ can not be a $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




