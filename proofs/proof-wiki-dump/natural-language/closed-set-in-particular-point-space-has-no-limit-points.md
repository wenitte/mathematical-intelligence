# 

Source: https://proofwiki.org/wiki/Closed_Set_in_Particular_Point_Space_has_no_Limit_Points

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.
Let $H \subsetneq S$ be closed in $T$.

Then $H$ has no limit points.


Proof
Let $H$ be closed in $T$.
Then by definition $p \notin H$.

Let $x \in H$.
By definition, $x$ is a limit point of $H$ if every open set $U \in \tau$ such that $x \in U$ contains some point of $H$ other than $x$.

Consider the set $U_x := \set {x, p} \subseteq S$.
As $p \in U_x$ we have that $U_x$ is open in $T$.
But there is no $y \in U_x: y \in H, y \ne x$ and so $x$ is not a limit point of $H$.

So $H$ has no limit points.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $9$




