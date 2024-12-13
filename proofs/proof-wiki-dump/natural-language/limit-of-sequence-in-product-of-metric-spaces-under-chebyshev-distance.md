# 

Source: https://proofwiki.org/wiki/Limit_of_Sequence_in_Product_of_Metric_Spaces_under_Chebyshev_Distance

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_k = \struct {A_n, d_k}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^k A_i$ be the cartesian product of $A_1, A_2, \ldots, A_k$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^k \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_k}, y = \tuple {y_1, y_2, \ldots, y_k} \in \AA$.

Let $\sequence {a_n}$ be a sequence of points of $\AA$:

$a_n = \tuple {a_{n 1}, a_{n 2}, \ldots, a_{n k} } \in \AA$
Let $c = \tuple {c_1, c_2, \ldots, c_k} \in \AA$.

Then:

$\ds \lim_{n \mathop \to \infty} a_n = c \iff \forall i \in \set {1, 2, \ldots, k}: \lim_{n \mathop \to \infty} a_{n i} = c_i$
where $\ds \lim_{n \mathop \to \infty}$ denotes a limit.


Proof













\(\ds \lim_{n \mathop \to \infty} a_n\)

\(=\)







\(\ds c\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{n \mathop \to \infty} \map {d_\infty} {a_n, c}\)

\(=\)







\(\ds 0\)





Definition 3 of Convergent Sequence








\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{n \mathop \to \infty} \max_{i \mathop = 1}^k \set {\map {d_i} {a_{n i}, c_i} }\)

\(=\)







\(\ds 0\)





Definition of Chebyshev Distance








\(\ds \leadstoandfrom \ \ \)





\(\ds \max_{i \mathop = 1}^k \set {\lim_{n \mathop \to \infty} \map {d_i} {a_{n i}, c_i} }\)

\(=\)







\(\ds 0\)





Limit of Image of Sequence








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, k}: \, \)



\(\ds \lim_{n \mathop \to \infty} \map {d_i} {a_{n i}, c_i}\)

\(=\)







\(\ds 0\)





Definition of Max Function



$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $1$




