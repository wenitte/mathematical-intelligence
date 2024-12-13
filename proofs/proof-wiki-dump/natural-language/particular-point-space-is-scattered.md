# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Scattered

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is scattered.


Proof
Let $H \subseteq S$ such that $p \notin H$.
From Subset of Particular Point Space is either Open or Closed, $H$ is closed in $T$.
We have that Closed Set in Particular Point Space has no Limit Points.
So if $p \notin H$ then $H$ has no limit points.
So by definition, every element of such a set $H$ is an isolated point.
So if $p \notin H$ then $H$ is by definition not dense-in-itself.

Now let $H \subseteq S$ such that $p \in H$.
We have that $\set p \in \tau_p$.
That is, $p$ is an open point of $T$.
From Point in Topological Space is Open iff Isolated, $p$ is an isolated point.
So if $p \in H$ then $H$ is by definition not dense-in-itself.

Hence the result, by definition of a scattered space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $9$




