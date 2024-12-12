# 

Source: https://proofwiki.org/wiki/Condition_for_Point_being_in_Closure/Metric_Space



Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $H \subseteq S$.
Let $\map \cl H$ denote the closure of $H$ in $M$.

Let $x \in S$.
Then $x \in \map \cl H$ if and only if:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball of $x$.


Proof
By definition of closure of $H$ in $M$:

$\map \cl H = H^i \cup H'$
where:

$H^i$ denotes the set of isolated points of $H$
$H'$ denotes the set of limit points of $H$.


Sufficient Condition
Let $x \in \map \cl H$.

Suppose $x \in H^i$.
By definition of isolated point:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H = \set a$
But also by definition of isolated point, we do at least have that:

$x \in H$
and from Center is Element of Open Ball, we have that:

$\forall \epsilon \in \R_{>0}: x \in \map {B_\epsilon} x$
and so:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$

Suppose $x \in H'$:
By definition of limit point:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} x \setminus \set x} \cap H \ne \O$
and so:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$

So in both cases:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$
$\Box$


Necessary Condition
Let $x$ be such that:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$

To show that $x \in \map \cl H$, it is sufficient to show that either:

$x \in H^i$
or that:

$x \in H'$

There are $2$ cases to consider.

$(1): \quad$ Suppose that:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H = \set x$
Then $x$ is by definition an isolated point of $H$.
That is:

$x \in H^i$

$(2): \quad$ Suppose that:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \set x$
Let $\epsilon$ be arbitrary.
As $\map {B_\epsilon} x \cap H \ne \O$, it must follow that:

$\exists y \in \map {B_\epsilon} x \cap H: y \ne x$
and so:

$y \in \paren {\map {B_\epsilon} x \setminus \set x} \cap H$
Hence:

$\paren {\map {B_\epsilon} x \setminus \set x} \cap H \ne \O$
Then $x$ is by definition a limit point of $H$.
That is:

$x \in H'$

Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.12$




