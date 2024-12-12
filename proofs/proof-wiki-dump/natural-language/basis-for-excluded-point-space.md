# 

Source: https://proofwiki.org/wiki/Basis_for_Excluded_Point_Space

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Consider the set $\BB$ defined as:

$\BB = \set {\set x: x \in S \setminus \set p} \cup \set S$
Then $B$ is a basis for $S$.


Proof
Let $H \in \tau_{\bar p}$ be open in $T$.
If $H = S$ then trivially $H$ is the union of elements of $\BB$.
So suppose $H \ne S$.
Then by definition $p \notin H$ and so:

$\forall y \in H: \exists \set y \in \BB$
Thus:

$\ds H = \bigcup_{y \mathop \in H} \set y$
So $\BB$ is an analytic basis for $T$.
$\blacksquare$

It could equally well be shown that $\BB$ is also a synthetic basis for $T$.





