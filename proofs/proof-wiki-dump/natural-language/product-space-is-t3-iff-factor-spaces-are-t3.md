# 

Source: https://proofwiki.org/wiki/Product_Space_is_T3_iff_Factor_Spaces_are_T3



Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of non-empty topological spaces for $\alpha$ in some indexing set $I$.

Let $\ds T = \struct{S, \tau} = \prod_{\alpha \mathop \in I} \struct{S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.

Then $T$ is a $T_3$ space if and only if each of $\struct {S_\alpha, \tau_\alpha}$ is a $T_3$ space.


Proof
Necessary Condition
Suppose $T$ is a $T_3$ space.
As $S_\alpha \ne \O$ we also have $S \ne \O$ by the axiom of choice.
Let $\alpha \in I$.
From Subspace of Product Space is Homeomorphic to Factor Space, $\struct {S_\alpha, \tau_\alpha}$ is homeomorphic to a subspace $T_\alpha$ of $T$.
From $T_3$ property is hereditary, $T_\alpha$ is $T_3$.
From T3 Space is Preserved under Homeomorphism, $\struct {S_\alpha, \tau_\alpha}$ is $T_3$.
As $\alpha \in I$ was arbitrary, the result follows.
$\Box$


Sufficient Condition
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


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




