# 

Source: https://proofwiki.org/wiki/Basis_for_Particular_Point_Space

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Consider the set $\BB$ defined as:

$\BB = \set {\set {x, p}: x \in S} \cup \set p$
Then $B$ is a basis for $S$.


Proof
Let $H \in \tau_p$ be open in $T$.
Then:

$\forall y \in H: \exists \set {y, p} \in \BB$
which also holds when $y = p$ as $\set {y, p} = \set p \in \BB$.
Thus:

$\ds H = \bigcup_{y \mathop \in H} \set {y, p}$
So $\BB$ is an analytic basis for $T$.
$\blacksquare$

It could equally well be shown that $\BB$ is also a synthetic basis for $T$.





