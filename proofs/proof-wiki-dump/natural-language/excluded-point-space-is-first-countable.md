# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_First-Countable

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is first-countable.


Proof
Let $x \in S$ such that $x \ne p$.
By definition, the set $\set x$ is open in $T$.
Let $U \in \tau_{\bar p}: x \in U$.
Then $\set x \subseteq U$ and so $\set {\set x}$ is a local basis at $x$ which is trivially countable.

Now if $x = p$ there is only one $U \in \tau_{\bar p}: p \in U$, and that is $S$.
So $\set S$ is a local basis at $x$ which is trivially countable.

Hence the result, by definition of first-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $6$




