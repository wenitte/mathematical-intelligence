# 

Source: https://proofwiki.org/wiki/Condition_for_Open_Extension_Space_to_be_Separable

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is a separable space if and only if $T$ is.


Proof
Let $T = \struct {S, \tau}$ be a separable space.
Then there exists a countable subset $H \subseteq S$ which is everywhere dense in $T$.

That is, $H^- = S$ where $H^-$ is the closure of $H$ in $S$.
So in $T_{\bar p}^*$, $S\subseteq H^-=S^-\subseteq S^*_p$.
Hence $H^- = S$ or $H^- = S \cup \set p = S^*_p$.
From Topological Closure is Closed we deduce that $H^-$ is closed in $T_{\bar p}^*$.
From the definition of open extension topology, the closed sets of $T_{\bar p}^*$ are $S^*_p \setminus U$ where $U \in \tau$.
Because $\set p \notin \tau$, $S$ is not closed.
Thus it must be that $H^- = S^*_p$.
Hence $H$ is a countable subset $H \subseteq S^*_p$ which is everywhere dense in $T^*_{\bar p}$.
$\Box$

Aiming for a contradiction, suppose $T^*_{\bar p} = \struct {S^*_p, \tau}$ is separable, but that $T = \struct {S, \tau}$ is not separable.
Let $H \subseteq S^*_p$ be a countable subset which is dense in $T^*_{\bar p}$.
If $H \subseteq S$, then $H^- = S$ in $T$, but this cannot be since $T$ is not separable.
Then $p \in H$.
Consider the subset $V = H \setminus \set p$.
From Topological Closure is Closed we have that $V^-$ is closed in $T_{\bar p}^*$.
From the definition of open extension space, all non-empty closed sets contain the point $p$.
So $V \cup \set p = H \subseteq V^-$. 
From Set Closure is Smallest Closed Set in Topological Space, $S^*_p = H^- \subseteq V^- \implies V$ is dense in $T_{\bar p}^*$.
But because $V \subseteq S$, $V$ is dense in $S$ also.
From Subset of Countably Infinite Set is Countable, $V$ is countable as it is a subset of a countable set.
Thus $T$ is separable, which is a contradiction.
Finally, our assumption is false: $T$ is indeed separable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




