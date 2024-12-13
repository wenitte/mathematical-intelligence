# 

Source: https://proofwiki.org/wiki/Metric_Space_Continuity_by_Neighborhood



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.

Then the following definitions of continuity of $f$ at $a$ with respect to $d_1$ and $d_2$ are equivalent:

$\epsilon$-Ball Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.

Definition by Neighborhood
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

for each neighborhood $N'$ of $\map f a$ in $M_2$ there exists a corresponding neighborhood $N$ of $a$ in $M_1$ such that $f \sqbrk N \subseteq N'$.


Proof
$\epsilon$-Ball Definition implies Definition by Neighborhood
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
where $\map {B_\epsilon} {\map f a; d_2}$ denotes the open $\epsilon$-ball of $\map f a$ with respect to the metric $d_2$, and similarly for $\map {B_\delta} {a; d_1}$.

Let $N'$ be a neighborhood of $\map f a$ in $M_2$.
Then:










\(\ds \exists \epsilon \in \R_{>0}: \, \)



\(\ds \map {B_\epsilon} {\map f a; d_2}\)

\(\subseteq\)







\(\ds N'\)





Definition of Neighborhood (Metric Space)








\(\ds \leadsto \ \ \)

\(\ds \exists \delta \in \R_{>0}: \, \)



\(\ds f \sqbrk {\map {B_\delta} {a; d_1} }\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {\map f a; d_2}\)





as $f$ is $\tuple {d_1, d_2}$-continuous at $a$



But by Open Ball is Neighborhood of all Points Inside, $\map {B_\delta} {a; d_1}$ is a neighborhood of $a$ in $M_1$.
Thus letting $N := \map {B_\delta} {a; d_1}$:

$f \sqbrk N \subseteq \map {B_\epsilon} {\map f a; d_2} \subseteq N'$
and so the condition for $f$ to be $\tuple {d_1, d_2}$-continuous at $a$ by Neighborhood is fulfilled.
$\Box$


Definition by Neighborhood implies $\epsilon$-Ball Definition
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

for each neighborhood $N'$ of $\map f a$ in $M_2$ there exists a corresponding neighborhood $N$ of $a$ in $M_1$ such that $f \sqbrk N \subseteq N'$.
Let $\epsilon \in \R_{>0}$.
Consider the open $\epsilon$-ball $\map {B_\epsilon} {\map f a; d_2}$ of $\map f a$.
By Open Ball is Neighborhood of all Points Inside, $\map {B_\epsilon} {\map f a; d_2}$ is a neighborhood of $\map f a$ in $M_2$.
Let $N' := \map {B_\epsilon} {\map f a; d_2}$.
By definition of $\tuple {d_1, d_2}$-continuity at $a$, there exists a neighborhood $N$ of $a$ in $M_1$ such that:

$f \sqbrk N \subseteq N'$
By definition of neighborhood:

$\exists \delta \in \R_{>0}: \map {B_\delta} {a; d_1} \subseteq N$.
Therefore:

$\map f {\map {B_\delta} {a; d_1} } \subseteq \map {B_\epsilon} {\map f a; d_2}$
and so the condition for $f$ to be $\tuple {d_1, d_2}$-continuous at $a$ by open $\epsilon$-ball is fulfilled.
$\blacksquare$


Also see
Metric Space Continuity by Epsilon-Delta


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): $\text{III}$: $\epsilon$-Balls
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Theorem $4.6$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2.3$: Open sets in metric spaces: Definition $2.3.6$




