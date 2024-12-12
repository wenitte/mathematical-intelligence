# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Metric_Space_is_Closed

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be a subset of $A$.
Let $H^-$ denote the closure of $H$.

Then $H^-$ is a closed set of $M$.


Proof
Let $\overline {\paren {H^-} }$ denote the complement of $H^-$.

Let $x \in \overline {\paren {H^-} }$.
By definition of the closure of $H$:

$x$ is not a limit point of $H$.
So:

$\exists \epsilon \in \R_{> 0}: \paren {\map {B_\epsilon} x \setminus \set x} \cap H = \O$
From Intersection with Set Difference is Set Difference with Intersection:

$\paren {\map {B_\epsilon} x \cap H} \setminus \set x = \O$
From Set Difference with Superset is Empty Set:

$\map {B_\epsilon} x \cap H \subseteq \set x$
By definition of the closure of $H$:

$x$ is not an isolated point of $H$.
So:

$\map {B_\epsilon} x \cap H \ne \set x$
Thus:

$\map {B_\epsilon} x \cap H = \O$
From Empty Intersection iff Subset of Complement:

$\map {B_\epsilon} x \subseteq \overline {\paren{H^-} }$

It follows that $\overline {\paren{H^-} }$ is open in $M$.
Thus $H^-$ is closed in $M$ by definition.
$\blacksquare$





