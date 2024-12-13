# 

Source: https://proofwiki.org/wiki/Product_Space_is_T0_iff_Factor_Spaces_are_T0



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $T = T_A \times T_B$ be the product space formed from $T_A$ and $T_B$.

Then $T$ is a $T_0$ (Kolmogorov) space if and only if $T_A$ and $T_B$ are themselves both $T_0$ (Kolmogorov) spaces.


General Result
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.

Let $\ds T = \struct {S, \tau} = \prod \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.

Then $T$ is a $T_0$ (Kolmogorov) space if and only if each of $\struct{S_\alpha, \tau_\alpha}$ is a $T_0$ (Kolmogorov) space.


Proof
Necessary Condition
Let $T$ be a $T_0$ (Kolmogorov) space.
From:

Subspace of Product Space is Homeomorphic to Factor Space
Separation Properties Preserved in Subspace
Separation Axioms Preserved under Homeomorphism
it follows that $T_A$ and $T_B$ are both $T_0$.
$\Box$


Sufficient Condition
Now suppose that $T$ is not $T_0$.
Then $\exists p, q \in S_A \times S_B$ such that:

$p \ne q$
and:

$\forall U \in \tau: \set {p, q} \subseteq U$ or $\set {p, q} \cap U = \O$
If $p \ne q$, then they are different in at least one coordinate.
Without loss of generality, let $p_A \ne q_A$.
Let $V \in \tau_A$ such that $p_A \in V$.
Then from Projection from Product Topology is Continuous:

$\pr_A^{-1} \sqbrk V \in \tau$.
Since $p \in \pr_A^{-1} \sqbrk V$, we have that:

$q \in \pr_A^{-1} \sqbrk V$
From Projection is Surjection:

$\map {\pr_i} q = q_A \in V$
So:

$\forall V \in \tau_A: \set {p_A, q_A} \subseteq V$
or:

$\set {p_A, q_A} \cap V = \O$
Thus, by definition, $T_A$ is not $T_0$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




