# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_T0



Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is a $T_0$ (Kolmogorov) space.


Proof 1
Let $T$ be a trivial space.
That is, let $S = \set p$.
Then the result holds vacuously, as there are no two distinct points in $T$.

Now suppose $T$ is not trivial.
Then $\exists x \in S: x \ne p$.
Now we have that $\set x \subseteq T$ is open in $T$ such that $p \notin \set x$ but $x \in \set x$.

Finally, suppose that $x, y \in S: x \ne y, x \ne p, y \ne p$.
Then we have that (for example) $\set x \subseteq T$ is open in $T$ such that $x \in \set x$ but $y \notin \set x$

Hence the result.
$\blacksquare$


Proof 2
We have:

Excluded Point Topology is Open Extension Topology of Discrete Topology
Discrete Space satisfies all Separation Properties (including being a $T_0$ space)

Then by Condition for Open Extension Space to be $T_0$ Space, as a discrete space is $T_0$ then so is its open extension.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $2$




