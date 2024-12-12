# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_T0/Proof_1

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is a $T_0$ (Kolmogorov) space.


Proof
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





