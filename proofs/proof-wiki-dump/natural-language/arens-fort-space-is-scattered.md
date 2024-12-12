# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_Scattered

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is a scattered space.


Proof
Let $H \subseteq T$ such that $H \ne \set {\tuple {0, 0} }$.
Then $\exists x \in H: x \ne \tuple {0, 0}$.
From Clopen Points in Arens-Fort Space, every point of $T$ apart from $\tuple {0, 0}$ is open in $T$.
So $\set x$ is an open set of $T$.
So $H \cap \set x = \set x$ and so $x$ is isolated in $H$.
Thus $H$ contains at least one point which is isolated in $H$.

On the other hand, suppose $H = \set {\tuple {0, 0} }$.
From Singleton Point is Isolated, $\tuple {0, 0}$ is an isolated point in $\set {\tuple {0, 0} } = H$.
So again $H$ contains at least one point which is isolated in $H$.

So for all $H \subseteq S$ we have that $H$ contains at least one point which is isolated in $H$.
Hence the result, by definition of scattered space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $8$




