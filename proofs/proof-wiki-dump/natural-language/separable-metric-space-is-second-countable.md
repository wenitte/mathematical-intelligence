# 

Source: https://proofwiki.org/wiki/Separable_Metric_Space_is_Second-Countable

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be separable.

Then $M$ is second-countable.


Proof
By the definition of separability, we can choose a subset $S \subseteq X$ that is countable and everywhere dense.

Define:

$\BB = \set {\map {B_{1/n} } x: x \in S, \, n \in \N_{>0} }$
where $\map {B_\epsilon } x$ denotes the open $\epsilon$-ball of $x$ in $M$.
We have that Cartesian Product of Countable Sets is Countable.
Hence, by Image of Countable Set under Mapping is Countable, it follows that $\BB$ is countable.

Let $\tau$ denote the topology on $X$ induced by the metric $d$.
It suffices to show that $\BB$ is an analytic basis for $\tau$.

From Open Ball of Metric Space is Open Set, we have that $\BB \subseteq \tau$.

We use Equivalence of Definitions of Analytic Basis.
Let $y \in U \in \tau$.
By the definition of an open set, there exists a strictly positive real number $\epsilon$ such that $\map {B_\epsilon} y \subseteq U$.
By the Axiom of Archimedes, there exists a natural number $n > \dfrac 2 \epsilon$.
That is:

$\dfrac 2 n < \epsilon$
and so:

$\map {B_{2/n} } y \subseteq \map {B_\epsilon} y$.
From Subset Relation is Transitive, we have $\map {B_{2/n} } y \subseteq U$.
By the definition of everywhere denseness, and by Equivalence of Definitions of Adherent Point, there exists an $x \in S \cap \map {B_{1/n} } y$.
By Metric Space Axiom $(\text M 3)$, it follows that $y \in \map {B_{1/n} } x$.
For all $z \in \map {B_{1/n} } x$, we have:














\(\ds \map d {z, y}\)

\(\le\)







\(\ds \map d {z, x} + \map d {x, y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {z, x} + \map d {y, x}\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(<\)







\(\ds \frac 2 n\)









That is:

$\map {B_{1/n} } x \subseteq \map {B_{2/n} } y$
From Subset Relation is Transitive, we have:

$y \in \map {B_{1/n} } x \subseteq U$

Hence the result.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: Exercise $2.23$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 37$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces




