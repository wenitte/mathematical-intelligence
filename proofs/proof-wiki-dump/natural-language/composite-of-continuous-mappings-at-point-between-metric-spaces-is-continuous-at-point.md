# 

Source: https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_at_Point_between_Metric_Spaces_is_Continuous_at_Point

Theorem
Let $M_1 = \struct {X_1, d_1}, M_2 = \struct {X_2, d_2}, M_3 = \struct {X_3, d_3}$ be metric spaces.
Let $f: M_1 \to M_2$ be continuous at $a \in X_1$.
Let $g: M_2 \to M_3$ be continuous at $\map f a \in X_2$.

Then their composite $g \circ f: M_1 \to M_3$ is continuous at $a \in X_1$.


Proof
Let $\epsilon \in \R_{>0}$.
The strategy is to find a $\delta \in \R_{>0}$ such that:

$\map {d_1} {x, a} < \delta \implies \map {d_3} {\map g {\map f x}, \map g {\map f a} } < \epsilon$

As $g$ is continuous at $\map f a$:

$\exists \eta \in \R_{>0}: \forall y \in X_2: \map {d_2} {y, \map f a} < \eta \implies \map {d_3} {\map g y, \map g {\map f a} } < \epsilon$
As $f$ is continuous at $a$:

$\forall \eta \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in X_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \eta$
Hence:

$\map {d_3} {\map g {\map f x}, \map g {\map f a} } < \epsilon$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Theorem $3.6$




