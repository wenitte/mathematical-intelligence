# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_Scattered

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.
Then $T$ is a scattered space.


Proof
By definition, $T$ is scattered if and only if every non-empty subset $H$ of $S$ contains at least one point which is isolated in $H$.

Let $H$ be a non-empty subset of $S$.
Let $x \in H$.
Let $x \ne 0$.
By definition of either-or space, $\set x$ is open in $T$.
So $\set x$ is an open set of $x$ containing only $x$.
Thus by definition $x$ is isolated.
Thus if $H$ is a non-empty subset of $S$ which contains any element other than $0$, $H$ contains at least one isolated point.

The other case is that $H$ contains no $x$ such that $x \ne 0$.
That is: $H = \set 0$.
But from Singleton Point is Isolated, $0$ is an isolated point in $H$.
Thus in all cases $H$ contains at least one point which is isolated in $H$.
So by definition $T$ is a scattered space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $5$




