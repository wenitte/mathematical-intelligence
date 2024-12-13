# 

Source: https://proofwiki.org/wiki/Products_of_Open_Sets_form_Local_Basis_in_Product_Space

Theorem
Let $T_1 = \struct {A_1, \tau_1}$ and $T_2 = \struct {A_2, \tau_2}$ be topological spaces.
Let $\struct {T, \tau} = T_1 \times T_2$ be the product space of $T_1$ and $T_2$.
Let $\tuple {x, y} \in A_1 \times A_2$.
Let $W \in \tau$ be an open set of $T$ such that $\tuple {x, y} \in W$.

Then:

$\exists U_1 \in \tau_1, U_2 \in \tau_2: \tuple {x, y} \in U_1 \times U_2 \subseteq W$
That is, products of open sets from $T_1$ and $T_2$ form a local basis at $\tuple {x, y}$.


Proof
Let $W \in \tau$ such that $\tuple {x, y} \in W$.
From Natural Basis of Product Topology of Finite Product, $\tau$ is the topology with basis:

$\BB = \set{U_1 \times U_2: U_1 \in \tau_1, U_2 \in \tau_2}$
Thus $W$ is the union of sets of the form $U_1 \times U_2$ where $U_1 \in \tau_1$ and $U_2 \in \tau_2$.
That is:

$\exists U_1 \in \tau_1, U_2 \in \tau_2: \tuple{x, y} \in U_1 \times U_2 \subseteq W$
which is what was to be proved.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products: Proposition $3.5.2$




