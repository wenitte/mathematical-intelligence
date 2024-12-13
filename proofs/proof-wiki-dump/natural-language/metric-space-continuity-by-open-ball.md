# 

Source: https://proofwiki.org/wiki/Metric_Space_Continuity_by_Open_Ball



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.

The following definitions of the concept of continuity of $f$ at $a$ with respect to $d_1$ and $d_2$ are equivalent:

$\epsilon$-$\delta$ Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
where $\R_{>0}$ denotes the set of all strictly positive real numbers.

$\epsilon$-Ball Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.


Proof
$\epsilon$-$\delta$ Definition implies $\epsilon$-Ball Definition
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
where $\R_{>0}$ denotes the set of all strictly positive real numbers.

Let $\epsilon \in \R_{>0}$ be arbitrary.
Let $\delta$ be such that:

$\forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
as is known to exist by hypothesis.

Then:














\(\ds y\)

\(\in\)







\(\ds f \sqbrk {\map {B_\delta} {a; d_1} }\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \map {B_\delta} {a; d_1}: \, \)



\(\ds y\)

\(=\)







\(\ds \map f x\)





Definition 1 of Image of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, a}\)

\(<\)







\(\ds \delta\)





Definition of Open Ball








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map f x, \map f a}\)

\(<\)







\(\ds \epsilon\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {y, \map f a}\)

\(<\)







\(\ds \epsilon\)





as $y = \map f x$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map {B_\epsilon} {\map f a; d_2}\)





Definition of Open Ball








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {\map {B_\delta} {a; d_1} }\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {\map f a; d_2}\)





Definition of Subset




As $\epsilon$ is arbitrary, it follows that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
$\Box$


$\epsilon$-Ball Definition implies $\epsilon$-$\delta$ Definition
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.

Let $\epsilon \in \R_{>0}$ be arbitrary.
Let $\delta$ be such that:

$f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
as is known to exist by hypothesis.

Then:














\(\ds \map {d_1} {x, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {B_\delta} {a; d_1}\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds \map {B_\epsilon} {\map f a; d_2}\)





Definition 1 of Image of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map f x, \map f a}\)

\(<\)







\(\ds \epsilon\)





Definition of Open $\epsilon$-Ball




As $\epsilon$ is arbitrary, it follows that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
$\blacksquare$


Also see
Metric Space Continuity by Epsilon-Delta


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: $\varepsilon$-Balls
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Theorem $4.2$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Definition $2.3.6$




