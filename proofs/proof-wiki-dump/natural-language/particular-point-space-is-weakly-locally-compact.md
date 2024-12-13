# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Weakly_Locally_Compact



Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is weakly locally compact.


Proof
By Compact Space in Particular Point Space, $\set p$ is compact in $T$.
But by definition $\set p$ is open in $T$.
So $p$ is contained in a compact neighborhood, that is, $\set p$.

Now let $x \in S: x \ne p$.
Then $\set {x, p}$ is open in $T$.

We have that $\set {x, p}$ trivially has an open cover, that is, $\set {\set {x, p} }$ itself.
Hence any open cover of $\set {x, p}$ has a finite subcover: any one set that contains $x$ and $p$ is a cover for $\set {x, p}$.
So $\set {x, p}$ is a neighborhood of $x$ which is compact in $T$.
So $x$ is contained in a compact neighborhood.
Hence the result, by definition of weakly locally compact.
$\blacksquare$


Also see
Particular Point Space is Locally Compact


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $5$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $15$




