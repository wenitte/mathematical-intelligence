# 

Source: https://proofwiki.org/wiki/Graph_of_Continuous_Mapping_between_Metric_Spaces_is_Closed_in_Chebyshev_Product



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a continuous mapping.
Let $\AA = A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max \set {\map {d_1} {x_1, y_1}, \map {d_2} {x_2, y_2} }$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.
Let $\Gamma_f$ be the graph of $f$.

Then $\Gamma_f$ is a closed set of $\struct {\AA, d_\infty}$.


Proof
Let $f: A_1 \to A_2$ be continuous.
Then:

$\forall a \in A_1: \ds \lim_{n \mathop \to \infty} x_n = a \implies \lim_{n \mathop \to \infty} \map f {x_n} = \map f a$
This can be extended to ordered pairs and ordered tuples, because:

$\ds \lim_{n \mathop \to \infty} x_n = a \iff \exists N \in \N: n > N \implies x_n \in V$
where $V$ is some neighborhood of $a$.
That is:

$n > N \implies x_n \in \map {B_\delta} a$
for some $N \in \N$ and all $\delta \in \R_{>0}$.
So:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds a\)


















\(\, \ds \land \, \)

\(\ds \lim_{n \mathop \to \infty} \map f {x_n}\)

\(=\)







\(\ds \map f a\)














\(\ds \leadsto \ \ \)

\(\ds \forall \delta \in \R_{>0}: \exists N \in \N: \, \)



\(\ds n > N\)

\(\implies\)







\(\ds \map {d_1} {x_n, x} < \delta \land \map {d_1} {\map f {x_n} \map f x} < \delta\)














\(\ds \leadsto \ \ \)





\(\ds \map d {\tuple {x, \map f x} }, \tuple {x_n, \map f {x_n} }\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \tuple {x_n, \map f {x_n} }\)

\(=\)







\(\ds \tuple {x, \map f x}\)









That is, each sequence of points $\sequence {a_n, b_n}$ such that:

$\map f {a_n} = b_n$
converges to a point $\tuple {a, b}$ such that:

$\map f a = b$
Hence:

$\ds \lim_{n \mathop \to \infty} \tuple {a_n, b_n} = \tuple {a, \map f a} = \Gamma_f$
That is, $\Gamma_f$ contains all its limit points.
Hence the result by definition of closed set.
$\blacksquare$


Also see
Mapping whose Graph is Closed in Chebyshev Product is not necessarily Continuous


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $3$




