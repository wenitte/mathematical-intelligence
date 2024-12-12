# 

Source: https://proofwiki.org/wiki/Fort_Space_is_Scattered/Proof_1

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on an infinite set $S$.

Then $T$ is a scattered space.


Proof
Let $H \subseteq T$ such that $H \ne \O$ and $H \ne \set p$.
Then $\exists x \in H: x \ne p$.
From Clopen Points in Fort Space, every point of $T$ apart from $p$ is open in $T$.
So $\set x$ is an open set of $T$.
So $H \cap \set x = \set x$ and so $x$ is isolated in $H$.
Thus $H$ contains at least one point which is isolated in $H$.

On the other hand, suppose $H = \set p$.
From Singleton Point is Isolated, $p$ is an isolated point in $\set p = H$.
So again $H$ contains at least one point which is isolated in $H$.

So for all $H \subseteq S$ we have that $H$ contains at least one point which is isolated in $H$.
Hence the result, by definition of scattered space.
$\blacksquare$





