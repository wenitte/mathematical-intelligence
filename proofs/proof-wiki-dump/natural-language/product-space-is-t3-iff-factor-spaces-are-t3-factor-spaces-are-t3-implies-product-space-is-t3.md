# 

Source: https://proofwiki.org/wiki/Product_Space_is_T3_iff_Factor_Spaces_are_T3/Factor_Spaces_are_T3_implies_Product_Space_is_T3

Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of non-empty topological spaces for $\alpha$ in some indexing set $I$.

Let $\ds T = \struct{S, \tau} = \ds \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.
For each $\alpha \in I$, let $\struct {S_\alpha, \tau_\alpha}$ be a $T_3$ space.

Then $T$ is a $T_3$ space.


Proof
Let $U$ be open in $T$ and $x \in U$.

From Natural Basis of Product Topology, there exists $\ds U' = \prod_{\alpha \mathop \in I} U'_\alpha$ such that:

for all $\alpha \in I : U_\alpha \in \tau_\alpha$
$J = \set {\alpha \in I: U_\alpha \ne X_\alpha}$ is finite
$x \in U'$
$U' \subseteq U$

By definition of a $T_3$ space, for all $\alpha \in J$:

$\exists V_\alpha \in \tau_\alpha : x_\alpha \in V_\alpha$ and $V^-_\alpha \subseteq U'_\alpha$
For $\alpha \notin J$ let:

$V_\alpha = X_\alpha$
and let:

$\ds V = \prod_{\alpha \mathop \in I} V_\alpha$
By definition of the Cartesian product V:

$x \in V$
From Natural Basis of Product Topology:

$V$ open in $T$.

Now consider the Cartesian product of closed sets:

$\ds \prod_{\alpha \mathop \in I} V^-_\alpha$
From Product of Closed Sets is Closed, $\ds \prod_{\alpha \mathop \in I} V^-_\alpha$ is closed.
From Underlying Set of Topological Space is Closed, for $\alpha \notin J$:

$V^-_\alpha = X^-_\alpha = X_\alpha$
From Cartesian Product of Family of Subsets, it follows that:

$\ds V = \prod_{\alpha \mathop \in I} V_\alpha \subseteq \prod_{\alpha \mathop \in I} V^-_\alpha \subseteq \prod_{\alpha \mathop \in I} U'_\alpha \subseteq U$
It follows that $T$ is a $T_3$ space by definition.
$\blacksquare$





