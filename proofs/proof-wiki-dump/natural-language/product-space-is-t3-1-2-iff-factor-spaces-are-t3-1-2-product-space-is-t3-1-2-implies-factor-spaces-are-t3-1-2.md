# 

Source: https://proofwiki.org/wiki/Product_Space_is_T3_1/2_iff_Factor_Spaces_are_T3_1/2/Product_Space_is_T3_1/2_implies_Factor_Spaces_are_T3_1/2

Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of non-empty topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct{S, \tau} = \prod_{\alpha \mathop \in I} \struct{S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.
Let $T$ be a $T_{3 \frac 1 2}$ space.

Then for each $\alpha \in I$, $\struct {S_\alpha, \tau_\alpha}$ is a $T_{3 \frac 1 2}$ space.


Proof
Suppose $T$ is a $T_{3 \frac 1 2}$ space.
Since $S_\alpha \ne \O$ we also have $S \ne \O$ by the axiom of choice.
Let $\alpha \in I$ be arbitrary.
From Subspace of Product Space is Homeomorphic to Factor Space:

$\struct {S_\alpha, \tau_\alpha}$ is homeomorphic to a subspace $T_\alpha$ of $T$.
From $T_{3 \frac 1 2}$ Property is Hereditary:

$T_\alpha$ is $T_{3 \frac 1 2}$.
From $T_{3 \frac 1 2}$ Space is Preserved under Homeomorphism:

$\struct {S_\alpha, \tau_\alpha}$ is $T_{3 \frac 1 2}$.
Because $\alpha \in I$ was arbitrary then the result follows.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





