# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_T0/Proof_1

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is a $T_0$ (Kolmogorov) space.


Proof
Let $T$ be a trivial space, so that $S = \set p$.
Then the result holds vacuously as there are no two distinct points in $T$.

Now suppose $T$ is not trivial.
Then $\exists x \in S: x \ne p$.
Now we have that $\set p \subseteq T$ is open in $T$ such that $p \in \set p$ but $x \notin \set p$.

Finally, suppose that $x, y \in S: x \ne y, x \ne p, y \ne p$.
Then we have that $\set {p, x} \subseteq T$ is open in $T$ such that $x \in \set {p, x}$ but $y \notin \set {p, x}$.

Hence the result.
$\blacksquare$





