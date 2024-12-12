# 

Source: https://proofwiki.org/wiki/Fort_Space_is_Scattered

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on an infinite set $S$.

Then $T$ is a scattered space.


Proof 1
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


Proof 2
Suppose that $H \subseteq T$ has no isolated points of $H$.
So, by definition, $H$ is dense in itself.
We have that:

a Fort Space is $T_1$
a Dense-in-itself Subset of $T_1$ Space is Infinite.
So $H$ is infinite, and so contains more than one point.
So $\exists q \in H: q \ne p$.
But, from Clopen Points in Fort Space, $\set q$ is open in $T$.
So $H \cap \set q = \set q$ and so by definition $q$ is isolated in $H$.
From this contradiction it follows that $H$ is not dense in itself and contains at least one isolated point.
Hence the result, by definition of scattered space.
$\blacksquare$





