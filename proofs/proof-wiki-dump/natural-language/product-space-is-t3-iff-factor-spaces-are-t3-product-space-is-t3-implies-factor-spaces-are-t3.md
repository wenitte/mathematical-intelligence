# 

Source: https://proofwiki.org/wiki/Product_Space_is_T3_iff_Factor_Spaces_are_T3/Product_Space_is_T3_implies_Factor_Spaces_are_T3

Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of non-empty topological spaces for $\alpha$ in some indexing set $I$.

Let $\ds T = \struct{S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.
Let $T$ be a $T_3$ space.

Then for each $\alpha \in I$, $\struct {S_\alpha, \tau_\alpha}$ is a $T_3$ space.


Proof
Suppose $T$ is a $T_3$ space.
As $S_\alpha \ne \O$ we also have $S \ne \O$ by the axiom of choice.
Let $\alpha \in I$.
From Subspace of Product Space is Homeomorphic to Factor Space, $\struct {S_\alpha, \tau_\alpha}$ is homeomorphic to a subspace $T_\alpha$ of $T$.
From $T_3$ property is hereditary, $T_\alpha$ is $T_3$.
From T3 Space is Preserved under Homeomorphism, $\struct {S_\alpha, \tau_\alpha}$ is $T_3$.
As $\alpha \in I$ was arbitrary, the result follows.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





