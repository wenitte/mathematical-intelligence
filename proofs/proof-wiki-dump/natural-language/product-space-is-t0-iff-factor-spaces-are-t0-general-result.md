# 

Source: https://proofwiki.org/wiki/Product_Space_is_T0_iff_Factor_Spaces_are_T0/General_Result



Theorem
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.

Let $\ds T = \struct {S, \tau} = \prod \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.

Then $T$ is a $T_0$ (Kolmogorov) space if and only if each of $\struct{S_\alpha, \tau_\alpha}$ is a $T_0$ (Kolmogorov) space.


Proof
Sufficient Condition
Suppose $\exists \beta: \struct {S_\beta, \tau_\beta}$ is not a $T_0$ space.
Then $\exists a, b \in S_\beta$ such that $\forall U_\beta \in \tau_\beta$, either $a, b \in U_\beta$ or $a, b \notin U_\beta$.
Consider the elements $y, z \in S$ defined as:

$y = \family {x_\alpha} : x_\alpha = \begin {cases}
s_\alpha & : \alpha \ne \beta \\
a & : \alpha = \beta \end {cases}$

$z = \family {x_\alpha} : x_\alpha = \begin {cases}
s_\alpha & : \alpha \ne \beta \\
b & : \alpha = \beta \end {cases}$
That is, $y$ and $z$ match (arbitrarily) on all ordinates except that for $\beta$.
Let $H \subseteq S: y \in H$.
Then $z \in H$ as $\forall U_\beta \in \map {\pr_\beta} H : b \in U_\beta$
Similarly, let $K \subseteq S: z \in K$.
Then $y \in K$ as $\forall U_\beta \in \map {\pr_\beta} H : a \in U_\beta$
So $T$ is not a $T_0$ (Kolmogorov) space.
$\Box$


Necessary Condition
Suppose $T$ is not a $T_0$ (Kolmogorov) space.
Then $\exists a, b \in S, a \ne b$ such that for all $U \in \tau$, either $a, b \in U$ or $a, b \notin U$.
Then $a$ and $b$ are different in at least one ordinate.
Suppose, $a_m = p, b_m = q$ for some ordinate $m$.
Then either $a_m, b_m \in U_m$ or $a_m, b_m \notin U_m$.
It follows that $\struct{S_m, \tau_m}$ is not a $T_0$ (Kolmogorov) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




