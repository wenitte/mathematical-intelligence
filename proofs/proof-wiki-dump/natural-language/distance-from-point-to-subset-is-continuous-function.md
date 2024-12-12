# 

Source: https://proofwiki.org/wiki/Distance_from_Point_to_Subset_is_Continuous_Function

Theorem
Let $M = \struct {X, d}$ be a metric space.
Let $A \subseteq X$ be a non-empty subset of $X$.

Let $f: X \to \R$ be the function defined as:

$\forall x \in X: \map f x = \map d {x, A}$
where $\map d {x, A}$ denotes the distance from $x$ to $A$.

Then $f$ is continuous.


Proof
$\forall x, y \in X, \forall z \in A$, by the definition of the distance from $x$ to $A$, we have:

$\map d {x, A} \le \map d {x, z} \le \map d {x, y} + \map d {y, z}$
From Triangle Inequality on Distance from Point to Subset:

$\map d {x, A} \le \map d {x, y} + \map d {y, A}$
and:

$\map d {y, A} \le \map d {x, y} + \map d {x, A}$
Therefore:

$\norm {\map d {x, A} - \map d {y, A} } \le \map d {x, y}$
We can conclude that $f$ is continuous.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $7$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 5 \ \text {(c)}$




