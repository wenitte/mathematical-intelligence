# 

Source: https://proofwiki.org/wiki/Open_Extension_Topology_is_not_T3

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is not a $T_3$ space.


Proof
As $S$ is (trivially) open in $T$, it is also open in $T^*_{\bar p}$.
As $S^*_p = S \cup \set p$, it follows that $\set p$ is closed in $T^*_{\bar p}$.
But by definition, the only open set of $T^*_{\bar p}$ that contains $\set p$ is $S^*_p$ itself.
So there can be no $x \in S^*_p: x \notin \set p$ contained in an open set of $T^*_{\bar p}$ which is disjoint from $S^*_p$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




