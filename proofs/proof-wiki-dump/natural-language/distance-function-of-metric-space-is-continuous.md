# 

Source: https://proofwiki.org/wiki/Distance_Function_of_Metric_Space_is_Continuous

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\tau_A$ be the topology on $A$ induced by $d$.
Let $\struct {A \times A, \tau}$ be the product space of $\struct {A, \tau_A}$ and itself.

Then the distance function $d: A \times A \to \R$ is a continuous mapping.


Proof
Let $d_\infty: \paren {A \times A} \times \paren {A \times A} \to \R$ be the metric on $A \times A$ defined by:

$\map {d_\infty} {\tuple {x, y}, \tuple {x', y'} } = \max \set {\map d {x, x'}, \map d {y, y'} }$
By P-Product Metric Induces Product Topology, $\tau$ is the topology on $A \times A$ induced by $d_\infty$.

Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
Let $\tuple {x_0, y_0} \in A \times A$.
Suppose that $\tuple {x, y} \in A \times A$ and $\map {d_\infty} {\tuple{x, y}, \tuple{x_0, y_0} } < \dfrac 1 2 \epsilon$.
Then:














\(\ds \size {\map d {x, y} - \map d {x_0, y_0} }\)

\(\le\)







\(\ds \size {\map d {x, y} - \map d {x_0, y} } + \size {\map d {x_0, y} - \map d {x_0, y_0} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \map d {x, x_0} + \map d {y, y_0}\)





Reverse Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon\)





by the definition of $d_\infty$



The result follows from the definition of a continuous mapping.
$\blacksquare$





