# 

Source: https://proofwiki.org/wiki/Product_Space_is_T1_iff_Factor_Spaces_are_T1



Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.

Let $T = \struct {S, \tau} = \ds \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.

Then $T$ is a $T_1$ (Fréchet) space if and only if each of $\struct {S_\alpha, \tau_\alpha}$ is a $T_1$ (Fréchet) space.


Proof
Necessary Condition
Suppose that for some $\beta$, $\struct {S_\beta, \tau_\beta}$ is not a $T_1$ space.
Then $\exists a, b \in S_\beta$ such that $\forall U_\beta \in \tau_\beta$, $a \in U_\beta \implies b \in U_\beta$.
Consider the elements $y, z \in S$ defined as:














\(\ds y\)

\(=\)







\(\ds \family {x_\alpha}: x_\alpha = \begin {cases} s_\alpha & : \alpha \ne \beta \\ a & : \alpha = \beta \end {cases}\)




















\(\ds z\)

\(=\)







\(\ds \family {x_\alpha}: x_\alpha = \begin {cases} s_\alpha & : \alpha \ne \beta \\ b & : \alpha = \beta \end {cases}\)









That is, $y$ and $z$ match on all coordinates except that for $\beta$.
Let $H \subseteq S: y \in H$ be open.
Then $z \in H$ as $\forall U_\beta \in \map {\pr_\beta} H: a \in U_\beta \implies b \in U_\beta$
So $T$ is not a $T_1$ (Fréchet) space.
$\Box$


Sufficient Condition
Suppose $T$ is not a $T_1$ (Fréchet) space.
Then $\exists a, b \in S, a \ne b$ such that for all $U \in \tau$, $a \in U \implies b \in U$.
Then $a$ and $b$ are different in at least one coordinate.
Suppose, $a_\alpha = p, b_\alpha = q$ for some coordinate $\alpha$.
Then for each $U_\alpha \in \tau_\alpha$:

$\ds a \in U_\alpha \times \prod_{\beta \mathop \ne \alpha} S_\beta \implies b \in U_\alpha \times \prod_{\beta \mathop \ne \alpha} S_\beta$
But:

$\ds a \in U_\alpha \times \prod_{\beta \mathop \ne \alpha} S_\beta$ if and only if $p \in U_\alpha$
$\ds b \in U_\alpha \times \prod_{\beta \mathop \ne \alpha} S_\beta$ if and only if $q \in U_\alpha$
from which we infer, for each $U_\alpha \in \tau_\alpha$:

$p \in U_\alpha \implies q \in U_\alpha$
It follows that $\struct {S_\alpha, \tau_\alpha}$ is not a $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




