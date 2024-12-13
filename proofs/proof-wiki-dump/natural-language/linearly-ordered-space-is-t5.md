# 

Source: https://proofwiki.org/wiki/Linearly_Ordered_Space_is_T5

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.
Then $T$ is a $T_5$ space.


Proof
Let $A$ and $B$ be separated sets of $T$.
Let $A^*$ and $B^*$ be defined as:

$A^* := \ds \bigcup \set {\closedint a b: a, b \in A, \closedint a b \cap B^- = \O}$
$B^* := \ds \bigcup \set {\closedint a b: a, b \in B, \closedint a b \cap A^- = \O}$
where $A^-$ and $B^-$ denote the closure of $A$ and $B$ in $T$.
Let $A^*$, $B^*$ and $\complement_S \left({A^* \cup B^*}\right)$ be expressed as the union of convex components of $S$:

$\ds A^* = \bigcup A_\alpha, \quad B^* = \bigcup B_\beta, \quad \relcomp S {A^* \cup B^*} = \bigcup C_\gamma$
where $\relcomp S X$ denotes the complement of $X$ with respect to $S$.
Let $M$ be the linearly ordered set:

$M = \set {A_\alpha, B_\beta, C_\gamma}$
as defined in Partition of Linearly Ordered Space by Convex Components is Linearly Ordered Set.

Let:

$S_\alpha$ be the set of strict upper bounds for $A_\alpha$.
$S_\beta$ be the set of strict upper bounds for $B_\beta$.
From Successor Sets of Linearly Ordered Set Induced by Convex Component Partition:

each of the sets $A_\alpha \in M$ has an immediate successor in $M$ if $A_\alpha$ intersects the closure of $S_\alpha$
each of the sets $B_\beta \in M$ has an immediate successor in $M$ if $B_\beta$ intersects the closure of $S_\beta$
that immediate successor ${C_\alpha}^+$ to $A_\alpha$ is an element in $\set {C_\gamma}$.

For each $\gamma$, let $k_\gamma \in C_\gamma$ be selected and fixed.


This article, or a section of it, needs explaining.In particular: We probably need AoC for this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $A_\alpha \cap {S_\alpha}^- \ne \O$.
Then there exists a unique ${k_\alpha}^+ \in {C_\alpha}^+$.
In such cases, let $I_\alpha = \hointr p { {k_\alpha}^+}$ where $p \in A \cap {S_\alpha}^-$.

The other case is when $A_\alpha \cap {S_\alpha}^- = \O$.
In this case, let $I_\alpha = \O$.

Let $J_\alpha$ be defined similarly for the strict lower bounds of $A_\alpha$, using the same set of points $k_\gamma \in C_\gamma$.
Then:

For each $\alpha$, let $U_\alpha = J_\alpha \cup A_\alpha \cup I_\alpha$.
For each $\beta$, let $V_\beta = J_\beta \cup A_\beta \cup I_\beta$.
Each $U_\alpha$ and $V_\beta$ is a convex open set in $S$ containing $A_\alpha$ and $B_\beta$ respectively.
Thus $\ds U = \bigcup U_\alpha$ and $\ds V = \bigcup V_\beta$ are open sets in $T$ containing $A^*$ and $B^*$ respectively.
We have that:

no $A_\alpha$ intersects no $B_\beta$
the same $K_\gamma$ being used throughout implies that no $J_\beta$ or $I_\beta$ can intersect any $J_\alpha$ or $I_\alpha$.
Thus no $U_\alpha$ can intersect any $V_\beta$.
Thus $U \cap V = \O$.
So we have two disjoint open sets $U, V$ in $S$ containing the two separated sets $A$ and $B$ respectively.
As $A$ and $B$ are arbitrary, it follows that such $U$ and $V$ can be found whatever $A$ and $B$ are, provided they are separated.
Hence the result by definition of $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $6$




