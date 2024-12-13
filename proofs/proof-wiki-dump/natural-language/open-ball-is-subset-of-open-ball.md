# 

Source: https://proofwiki.org/wiki/Open_Ball_is_Subset_of_Open_Ball

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x, y$ be points of $A$.

Then:

$\epsilon-\delta \ge \map d {x, y} \implies \map {B_\delta} y \subseteq \map {B_\epsilon} x$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball in $M = \struct {A, d}$.


Proof
Let $\epsilon - \delta \ge \map d {x, y}$.
Then $\epsilon \ge \map d {x, y} + \delta$.
If $z \in \map {B_\delta} y$, then $\map d {y, z} < \delta$.
So:














\(\ds \map d {x, z}\)

\(\le\)







\(\ds \map d {x, y} + \map d {y, z}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \map d {x, y} + \delta\)





Definition of Open Ball of Metric Space














\(\ds \)

\(\le\)







\(\ds \epsilon\)









Thus $z \in \map {B_\epsilon} x$.
So $\map {B_\delta} y \subseteq \map {B_\epsilon} x$.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_5:22




