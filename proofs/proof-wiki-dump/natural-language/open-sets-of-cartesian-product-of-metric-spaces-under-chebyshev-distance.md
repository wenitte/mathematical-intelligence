# 

Source: https://proofwiki.org/wiki/Open_Sets_of_Cartesian_Product_of_Metric_Spaces_under_Chebyshev_Distance

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

For $i \in \set {1, 2, \ldots, n}$, let $U_i$ be open in $M_i$.

Then $\ds \prod_{i \mathop = 1}^n U_i$ is open in $M = \struct {\AA, d_\infty}$.


Proof
A set $U$ is open if and only if it is the neighborhood of each of its points.
That is:

$\forall a \in U: \exists \delta \in \R_{>0}: \map {B_\delta} a \subseteq U$
where $\map {B_\delta} a$ denotes the open $\delta$-ball of $a$.

Let $I = \set {1, 2, \ldots, n}$.
For all $i \in I$, let $U_i$ be open in $M_i$.

Then:










\(\ds \forall i \in I: \, \)



\(\ds a_i\)

\(\in\)







\(\ds U_i\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_\delta} {a_i}\)

\(\subseteq\)







\(\ds U_i\)














\(\ds \leadsto \ \ \)

\(\ds \forall x_i \in A: \, \)



\(\ds \map d {x_i, a_i}\)

\(\in\)







\(\ds U_i\)














\(\ds \leadsto \ \ \)





\(\ds x_i\)

\(\in\)







\(\ds U_i\)










For all $i \in I$, let $\map d {x_i, a_i} < \delta$.
Then:














\(\ds \max_{i \mathop \in I} \set {\map d {x_i, a_i} }\)

\(<\)







\(\ds \delta\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \family {x_i}\)

\(\in\)







\(\ds \map {B_\delta} a\)





where $a = \family {a_1}$








\(\ds \leadsto \ \ \)





\(\ds x_i\)

\(\in\)







\(\ds U_i\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds \family {x_i}\)

\(\in\)







\(\ds \prod_{i \mathop \in I} U_i\)














\(\ds \leadsto \ \ \)





\(\ds \map {B_\delta} a\)

\(\subseteq\)







\(\ds \prod_{i \mathop \in I} U_i\)









Hence $\ds \prod_{i \mathop \in I} U_i$ is open in $M$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $1$




