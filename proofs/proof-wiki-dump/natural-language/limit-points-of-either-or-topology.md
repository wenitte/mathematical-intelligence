# 

Source: https://proofwiki.org/wiki/Limit_Points_of_Either-Or_Topology

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.
Let $H \subseteq S$ be any subset of $S$.

Then no element of $S$ can be a limit point of $H$ except $0$.


Proof
Let $x \in S$ such that $x \ne 0$.
Then, as $0 \notin \set x$, we have by definition of the either-or topology that $x$ is open in $T$.
So whatever $H$ is, $\set x$ never contains any points of $H$ which are different from $x$.
So $x$ can not be a limit point of $H$.

However, every open set of $T$ which contains $0$ also contains the interval $\openint {-1} 1$ and so can contain points of $H$.
It follows that the only non-empty sets of $T$ for which $0$ is not a limit point are $\set {-1}$, $\set 0$ and $\set 1$ and their unions.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $5$




