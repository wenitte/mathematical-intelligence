# 

Source: https://proofwiki.org/wiki/Point_at_Distance_Zero_from_Closed_Set_is_Element



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be an arbitrary subset of $A$.
Let $x \in A$ be arbitrary.
Let $\map d {x, H}$ denote the distance between $x$ and $H$:

$\ds \map d {x, H} = \inf_{y \mathop \in H} \paren {\map d {x, y} }$

Let $H$ be closed in $M$.
Then:

$\map d {x, H} = 0$ if and only if $x \in H$.


Proof
Necessary Condition
Let $x \in H$.
Then from Distance from Subset to Element:

$\map d {x, H} = 0$
whether $H$ is closed or not.
$\Box$


Sufficient Condition
Let $\map d {x, H} = 0$.
From Point at Zero Distance from Subset of Metric Space is Limit Point or Element, either:

$x \in H$
or:

$x$ is a limit point of $H$.
As $H$ is closed in $M$, it follows by definition that:

$H$ contains all its limit points.
Hence if $x$ is a limit point of $H$ it follows that $x \in H$.
In either case it follows that $x \in H$.
$\blacksquare$


Also see
Subset of Metric Space is Closed iff contains all Zero Distance Points, which presents this result as:
$H$ is closed in $M$ if and only if:

$\forall x \in A: \map d {x, H} = 0 \implies x \in H$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 5 \ \text {(a)}$




