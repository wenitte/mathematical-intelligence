# 

Source: https://proofwiki.org/wiki/Limit_Point_of_Subset_of_Metric_Space_is_at_Zero_Distance

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be an arbitrary subset of $A$.
Let $x \in A$ be a limit point of $H$.
Let $\map d {x, H}$ denote the distance between $x$ and $H$:

$\ds \map d {x, H} = \inf_{y \mathop \in H} \paren {\map d {x, y} }$

Then:

$\map d {x, H} = 0$


Proof
Let $x$ be a limit point of $H$.
Aiming for a contradiction, suppose $\map d {x, H} \ne 0$.
By definition of metric, that means:

$\map d {x, H} > 0$
Then:

$\exists \epsilon \in \R_{>0}: \forall y \in H: \map d {x, y} > \epsilon$
That is:

$\forall y \in H: y \notin \map {B_\epsilon} x \setminus \set x$
where $\map {B_\epsilon} x \setminus \set x$ denotes the deleted $\epsilon$-neighborhood of $x$.
That is:

$\paren {\map {B_\epsilon} x \setminus \set x} \cap H = \O$
Hence, by definition, $x$ is not a limit point of $H$.
From this contradiction it follows that it cannot be the case that $\map d {x, H} \ne 0$
That is:

$\map d {x, H} = 0$
$\blacksquare$


Warning
The converse is not necessarily true.
It may be the case that $H$ has no limit points.

The corresponding result is in fact:
If $\map d {x, H} = 0$, then either:

$x$ is a limit point of $H$
or:

$x \in H$
This is demonstrated in Point not in Subset of Metric Space iff Distance from Elements is Greater than Zero.





