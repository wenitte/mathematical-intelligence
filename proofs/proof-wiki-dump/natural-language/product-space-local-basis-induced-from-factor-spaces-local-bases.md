# 

Source: https://proofwiki.org/wiki/Product_Space_Local_Basis_Induced_from_Factor_Spaces_Local_Bases

Theorem
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.
Let $\struct {S, \tau} = \ds\prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let $x = \family {x_\alpha} \in S$.
Let $\BB_\alpha$ be a local basis for $x_\alpha$ in the topological space $\struct {S_\alpha, \tau_\alpha}$ for each $\alpha \in I$.

Let $\BB_x$ be the set of all cartesian products of the form $\ds \prod_{\alpha \mathop \in I} U_\alpha$ where:

for all but finitely many indices $\alpha : U_\alpha = S_\alpha$
for all $\alpha \in I : U_\alpha \ne S_\alpha \implies U_\alpha \in \BB_\alpha$

Then $\BB_x$ is a local basis for $x$ in the product space $\struct{S, \tau}$.


Proof
Let $W \in \tau$ such that $x \in W$.

From Natural Basis of Product Topology, the set $\BB$ of cartesian products of the form $\ds \prod_{\alpha \mathop \in I} V_\alpha$ where:

for all $\alpha \in I : V_\alpha \in \tau_\alpha$
for all but finitely many indices $\alpha : V_\alpha = X_\alpha$
is a basis for $\tau$.
Therefore, there exists $V = \ds \prod_{\alpha \mathop \in I} V_\alpha \in \BB$:

$x \in V \subseteq W$

Let $J = \set {\alpha \in I : V_\alpha \ne S_\alpha}$.
By definition of $\BB$, $J$ is finite.

Now for all $\alpha \in J$, $x_\alpha \in V_\alpha$ and $V_\alpha \in \tau_\alpha$.
Since $\BB_\alpha$ is a local basis for $\tau_\alpha$ then for all $\alpha \in J$ there exists $N_\alpha \in \BB_\alpha$:

$x_\alpha \in N_\alpha \subseteq V_\alpha$

For all $\alpha \in I$, let:

$U_\alpha = \begin {cases} N_\alpha & : \alpha \in J \\ S_\alpha & : \alpha \notin J \end {cases}$
Let $U = \ds \prod_{\alpha \mathop \in I} U_\alpha$.

For $\alpha \in J$:

$U_\alpha = N_\alpha \subseteq V_\alpha$
$x_\alpha \in N_\alpha = U_\alpha$
$U_\alpha = N_\alpha \in \BB_\alpha$

For $\alpha \notin J$:

$U_\alpha = S_\alpha = V_\alpha$
$x_\alpha \in S_\alpha = U_\alpha$
Thus:

$x \in U$
$U \subseteq V \subseteq W$
By definition of $\BB_x$ and since $J$ is finite:

$U \in \BB_x$.
The result follows.
$\blacksquare$




