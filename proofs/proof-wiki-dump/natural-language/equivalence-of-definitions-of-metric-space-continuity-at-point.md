# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Metric_Space_Continuity_at_Point



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.

The following definitions of the concept of Continuous at Point of Metric Space are equivalent:

$\epsilon$-$\delta$ Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
where $\R_{>0}$ denotes the set of all strictly positive real numbers.

Definition by Limits
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$(1): \quad$ The limit of $\map f x$ as $x \to a$ exists
$(2): \quad \ds \lim_{x \mathop \to a} \map f x = \map f a$.
$\epsilon$-Ball Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.

Definition by Neighborhood
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

for each neighborhood $N'$ of $\map f a$ in $M_2$ there exists a corresponding neighborhood $N$ of $a$ in $M_1$ such that $f \sqbrk N \subseteq N'$.


Proof
$\epsilon$-$\delta$ Definition iff Definition by Limits
This is proved in Metric Space Continuity by Epsilon-Delta.
$\Box$


$\epsilon$-$\delta$ Definition iff $\epsilon$-Ball Definition
This is proved in Metric Space Continuity by Open Ball.
$\blacksquare$


$\epsilon$-Ball Definition iff Definition by Neighborhood
This is proved in Metric Space Continuity by Neighborhood.
$\blacksquare$





