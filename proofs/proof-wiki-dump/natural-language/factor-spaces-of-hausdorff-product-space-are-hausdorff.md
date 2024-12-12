# 

Source: https://proofwiki.org/wiki/Factor_Spaces_of_Hausdorff_Product_Space_are_Hausdorff

Theorem
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.
Let $T$ be a $T_2$ (Hausdorff) space.

Then:

for each $\alpha \in I$, $\struct {S_\alpha, \tau_\alpha}$ is a $T_2$ (Hausdorff) space.


Proof
Let $\alpha \in I$.
Let $x, y \in S_\alpha$.
By the Axiom of Choice, there exists $z \in S$.
Define $x', y' \in S$ by:

$x'_\beta = \begin{cases} z_\beta & \beta \ne \alpha \\ x & \beta = \alpha \end{cases}$
and

$y'_\beta = \begin{cases} z_\beta & \beta \ne \alpha \\ y & \beta = \alpha \end{cases}$

By definition of a $T_2$ (Hausdorff) space:

$\exists U, V \in \tau : x' \in U, y' \in V$ and $U \cap V = \O$
Recall that the topology on the product space $T$ is the product topology.
By definition of the product topology the natural basis is a basis for the product topology.
Then:

$\exists U', V' \in \BB : x' \in U' \subseteq U, y' \in V' \subseteq V$
where $\BB$ is the natural basis for $\tau$.
From Subsets of Disjoint Sets are Disjoint:

$U' \cap V' = \O$
From Natural Basis of Product Topology:

$\ds U' = \prod_{\beta \mathop \in I} U_\beta$ where:
for all $\beta \in I : U_\beta \in \tau_\beta$
for all but finitely many indices $\beta : U_\beta = X_\beta$
Similarly:

$\ds V' = \prod_{\beta \mathop \in I} V_\beta$ where:
for all $\beta \in I : V_\beta \in \tau_\beta$
for all but finitely many indices $\beta : V_\beta = X_\beta$
From General Case of Cartesian Product of Intersections:

$\ds \paren {\prod_{\beta \mathop \in I} U_\beta} \bigcap \paren{\prod_{\beta \mathop \in I} V_\beta} = \prod_{\beta \mathop \in I} \paren{U_\beta \cap V_\beta}$
Thus:

$\ds \prod_{\beta \mathop \in I} \paren{U_\beta \cap V_\beta} = \O$

Now for all $\beta \in I$ such that $\beta \ne \alpha$:

$z_\beta = x'_\beta \in U_\beta$
and 

$z_\beta = y'_\beta \in V_\beta$
So:

$\forall \beta \in I, \beta \ne \alpha : U_\beta \cap V_\beta \ne \O$
From Cartesian Product of Family is Empty iff Factor is Empty it follows that:

$U_\alpha \cap V_\alpha = \O$

Also we have:

$x = x'_\alpha \in U_\alpha$
and

$y = y'_\alpha \in V_\alpha$
Since $U_\alpha$ and $V_\alpha$ are open in $\struct {S_\alpha, \tau_\alpha}$ then $x$ and $y$ are separated by open sets.
Since $x$ and $y$ were arbitrary, then $\struct {S_\alpha, \tau_\alpha}$ is a $T_2$ (Hausdorff) space by definition.
Since $\alpha \in I$ was arbitrary, then for each $\alpha \in I$, $\struct {S_\alpha, \tau_\alpha}$ is a $T_2$ (Hausdorff) space.
$\blacksquare$





