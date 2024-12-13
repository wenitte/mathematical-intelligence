# 

Source: https://proofwiki.org/wiki/Metric_Space_Continuity_by_Inverse_of_Mapping_between_Open_Balls

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.

$f$ is continuous at $a$ with respect to the metrics $d_1$ and $d_2$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \map {B_\delta} {a; d_1} \subseteq f^{-1} \sqbrk {\map {B_\epsilon} {\map f a; d_2} }$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.


Proof
By definition, $f$ is continuous at $a$ with respect to the metrics $d_1$ and $d_2$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$

For a mapping $f: X \to Y$ we have:

$f \sqbrk U \subseteq V \iff U \subseteq f^{-1} \sqbrk V$
where $U \subseteq X$ and $V \subseteq Y$.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Theorem $4.3$




