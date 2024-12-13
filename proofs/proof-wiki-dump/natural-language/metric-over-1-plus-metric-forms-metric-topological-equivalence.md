# 

Source: https://proofwiki.org/wiki/Metric_over_1_plus_Metric_forms_Metric/Topological_Equivalence

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $d_3: A^2 \to \R$ be the metric on $M$ defined as:

$\forall \tuple {x, y} \in A^2: \map {d_3} {x, y} = \dfrac {\map d {x, y} } {1 + \map d {x, y} }$

$d_3$ is topologically equivalent to $d$.


Proof
That $d_3$ forms a metric on $M$ is demonstrated in Metric over 1 plus Metric forms Metric.

We have that:

$\forall x, y \in A^2: \map {d_3} {x, y} \le \map d {x, y}$
Hence:

$\map {B_\epsilon} {x; d} \subseteq \map {B_\epsilon} {x; d_3}$
where $\map {B_\epsilon} {x; d}$ denotes the open $\epsilon$-ball of $x$ in $\struct {A, d}$.
Hence:

if $U \subseteq A$ is $d_3$-open, the $U$ is $d$-open
where $U$ is a subset of $A$.

Let $U \subseteq A$ be $d$-open.
Let $x \in U$.
Then $\map {B_\epsilon} {x; d} \subseteq U$ for some $\epsilon \in \r_{>0}$.
Let $\delta = \min \set {\dfrac \epsilon 2, \dfrac 1 2}$.
Then:

$\map {d_3} {x, y} < \delta \implies \map {d_3} {x, y} < \dfrac 1 2$
and so:














\(\ds \map d {x, y}\)

\(=\)







\(\ds \dfrac {\map {d_3} {x, y} } {1 - \map {d_3} {x, y} }\)




















\(\ds \)

\(\le\)







\(\ds \map {d_3} {x, y}\)




















\(\ds \)

\(<\)







\(\ds 2 \map {d_3} {x, y}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










Hence:

$\map {B_\epsilon} {x; d_2} = \map {B_\epsilon} {x; d} \subseteq U$
demonstrating that $U$ is $d_2$-open.

Note that $\delta = \dfrac \epsilon {1 + \epsilon}$ is just as good:

$\map f a = \dfrac a {1 + a}$ is strictly increasing for $a \ge 0$
and so:














\(\ds \map {d_3} {x, y}\)

\(<\)







\(\ds \dfrac \epsilon {1 + \epsilon}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map d {x, y}\)

\(<\)







\(\ds \epsilon\)









The result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 20$




