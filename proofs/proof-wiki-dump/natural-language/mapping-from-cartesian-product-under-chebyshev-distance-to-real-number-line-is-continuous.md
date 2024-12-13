# 

Source: https://proofwiki.org/wiki/Mapping_from_Cartesian_Product_under_Chebyshev_Distance_to_Real_Number_Line_is_Continuous

Theorem
Let $M = \struct {A, d'}$ be a metric space.
Let $\ds \AA = A \times A$ be the cartesian product of $A$ with itself.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max \set {\map {d'} {x_1, y_1}, \map {d'} {x_2, y_2} }$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.
Then the mapping:

$d': \struct {A \times A, d_\infty} \to \struct {\R, d}$
where $d$ is the usual metric, is continuous.


Proof
From definition of continuous mapping:
We just need to show that:

$\forall \tuple {a, b} \in A \times A: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall \tuple {x, y} \in A \times A: \map {d_\infty} {\tuple {x, y}, \tuple {a, b}} < \delta \implies \map d {\map {d'} {x, y}, \map {d'} {a, b}} < \epsilon$

Let $\tuple {a, b} \in A \times A$ and $\epsilon \in \R_{>0}$.
Let $\tuple {x, y} \in A \times A$.
Suppose $\map {d_\infty} {\tuple {x, y}, \tuple {a, b}} < \dfrac \epsilon 2$.
Then:














\(\ds \map d {\map {d'} {x, y}, \map {d'} {a, b} }\)

\(=\)







\(\ds \size {\map {d'} {x, y} - \map {d'} {a, b} }\)





Definition of Euclidean Metric on Real Number Line














\(\ds \)

\(\le\)







\(\ds \size {\map {d'} {x, y} - \map {d'} {a, y} } + \size {\map {d'} {a, y} - \map {d'} {a, b} }\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \map {d'} {x, a} + \map {d'} {y, b}\)





Reverse Triangle Inequality on $d'$














\(\ds \)

\(\le\)







\(\ds 2 \max \set {\map {d'} {x, a}, \map {d'} {y, b} }\)




















\(\ds \)

\(\le\)







\(\ds 2 \map {d_\infty} {\tuple {x, y}, \tuple {a, b} }\)





Definition of Chebyshev Distance














\(\ds \)

\(<\)







\(\ds 2 \cdot \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore $d'$ is continuous.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $9$




