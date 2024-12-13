# 

Source: https://proofwiki.org/wiki/Interior_of_Cartesian_Product_is_Product_of_Interiors

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $H \subseteq T_1$ and $K \subseteq T_2$.

Then:

$\Int {H \times K} = \Int H \times \Int K$
where $\Int H$, for example, denotes the interior of $H$.


Proof
By definition of interior, both $\Int H$ and $\Int K$ are open in $T_1$ and $T_2$ respectively.
By Projection from Product Topology is Continuous, it follows that $\Int {H \times K}$ is an open set of $T$.

It remains to be shown that $\Int {H \times K}$ is the largest open subset of $H \times K$.
Let $H' \times K'$ be an open set of $T$ such that $H' \times K' \subseteq H \times K$.
Then from Projection from Product Topology is Open, $H'$ and $K'$ are open sets of $T_1$ and $T_2$ respectively such that $H' \subseteq H$ and $K' \subseteq K$.
By definition of interior, $\Int H$ and $\Int K$ are the largest open sets of $T_1$ and $T_2$ respectively such that $\Int H \subseteq H$ and $\Int K \subseteq K$.
Hence $H' \subseteq \Int H$ and $K' \subseteq \Int K$.
Hence by Cartesian Product of Subsets:

$H' \times K' \subseteq \Int H \times \Int K$
That is, any open subset of $H \times K$ is also a subset of $\Int {H \times K}$.
Hence $\Int {H \times K}$ is the largest open subset of $H \times K$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 35 \ \text {(i)}$




