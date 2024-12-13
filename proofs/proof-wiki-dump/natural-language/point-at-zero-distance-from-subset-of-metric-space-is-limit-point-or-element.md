# 

Source: https://proofwiki.org/wiki/Point_at_Zero_Distance_from_Subset_of_Metric_Space_is_Limit_Point_or_Element



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be an arbitrary subset of $A$.
Let $x \in A$ be arbitrary.
Let $\map d {x, H}$ denote the distance between $x$ and $H$:

$\ds \map d {x, H} = \inf_{y \mathop \in H} \paren {\map d {x, y} }$

Then:

$\map d {x, H} = 0$
if and only if:

either $x \in H$ or $x$ is a limit point of $H$.


Proof
Necessary Condition
Let $x$ be such that either $x \in H$ or $x$ is a limit point of $H$.
If $x \in H$ then:

$\map d {x, H} = 0$
from Distance from Subset to Element.
Otherwise $x$ is a limit point of $H$.
Then from Limit Point of Subset of Metric Space is at Zero Distance‎:

$\map d {x, H} = 0$
$\Box$


Sufficient Condition
Let $\map d {x, H} = 0$.
Aiming for a contradiction, suppose neither $x \in H$ nor is $x$ a limit point of $H$.
Because $x \notin H$ it follows from Point not in Subset of Metric Space iff Distance from Elements is Greater than Zero that:

$\forall y \in H: \map d {x, y} > 0$
By definition of limit point, it is not the case that:

$\forall \epsilon \in \R_{>0}: \set {y \in H: 0 < \map d {y, x} < \epsilon} \ne \O$
So:

$\exists \epsilon \in \R_{>0}: \set {y \in H: 0 < \map d {y, x} < \epsilon} = \O$
which means either that $x = y$ or:

$\exists \epsilon \in \R_{>0}: \forall y \in H: \map d {y, x} \ge \epsilon$
But we know that $x \notin H$ so it cannot be the case that $x = y$.
Hence it follows that:

$\ds \inf_{y \mathop \in H} \paren {\map d {x, y} } \ge \epsilon$
By definition of the distance between $x$ and $H$:

$\map d {x, H} \ge \epsilon > 0$
From this contradiction it follows that it cannot be the case that neither $x \in H$ nor is $x$ a limit point of $H$.
That is:

either $x \in H$ or $x$ is a limit point of $H$.
$\blacksquare$





