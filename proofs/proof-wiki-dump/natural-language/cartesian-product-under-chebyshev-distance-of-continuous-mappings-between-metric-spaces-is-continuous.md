# 

Source: https://proofwiki.org/wiki/Cartesian_Product_under_Chebyshev_Distance_of_Continuous_Mappings_between_Metric_Spaces_is_Continuous

Theorem
Let $n \in \N_{>0}$.
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $N_1 = \struct {B_1, d'_1}, N_2 = \struct {B_2, d'_2}, \ldots, N_n = \struct {B_n, d'_n}$ be metric spaces.
Let $f_i: M_i \to N_i$ be continuous mappings for all $i \in \set {1, 2, \ldots, n}$.

Let $\ds \MM = \prod_{i \mathop = 1}^n M_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $\ds \NN = \prod_{i \mathop = 1}^n N_i$ be the cartesian product of $B_1, B_2, \ldots, B_n$.

Let $d_\infty$ be the Chebyshev distance on $\ds \AA = \prod_{i \mathop = 1}^n A_i$, and $\ds \BB = \prod_{i \mathop = 1}^n B_i$, defined as:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d'_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$ or $\BB$.

Let $F: M \to N$ be the mapping defined as:

$\forall x \in \AA: \map F {x_1, x_2, \ldots, x_n} = \tuple {\map f {x_1}, \map f {x_2}, \ldots, \map f {x_n} }$
Then $F$ is continuous.


Proof
Let $\epsilon \in \R_{>0}$.
Let $x \in \AA$.
Let $k \in \left\{{1, 2, \ldots, n}\right\}$.
Then as $f_k$ is continuous:

$(1): \quad \exists \delta_k \in \R_{>0}: \forall y_k \in A_k: \map {d_k} {x_k, y_k} < \delta_k \implies \map {d'} {\map {f_k} {x_k}, \map {f_k} {y_k} } < \epsilon$

Let $\delta = \max \set {\delta_k: k \in \set {1, 2, \ldots, n} }$.
Then:










\(\ds \forall y \in \AA: \, \)



\(\ds \map {d_\infty} {x, y}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }\)

\(<\)







\(\ds \delta\)





Definition of Chebyshev Distance








\(\ds \leadsto \ \ \)

\(\ds \forall k \in \set {1, 2, \ldots, n}: \, \)



\(\ds \map {d_k} {x_k, y_k}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \map {d'_k} {\map {f_k} {x_k}, \map {f_k} {y_k} }\)

\(<\)







\(\ds \epsilon\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \set {\map {d'_i} {\map {f_i} {x_i}, \map {f_i} {y_i} } }\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {\map F x, \map F y}\)

\(<\)







\(\ds \epsilon\)





Definition of Chebyshev Distance



Thus it has been demonstrated that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall y \in X: \map {d_\infty} {x, y} < \delta \implies \map {d_\infty} {\map F x, \map F y} < \epsilon$
Hence by definition of continuity at a point, $F$ is continuous at $x$.
As $x$ is chosen arbitrarily, it follows that $F$ is continuous for all $x \in X$.
The result follows by definition of continuous mapping.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Exercise $2$




