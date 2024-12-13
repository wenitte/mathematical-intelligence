# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Cartesian_Product_under_Chebyshev_Distance

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

Let $a = \tuple {a_1, a_2, \ldots, a_n} \in \AA$.
Let $\epsilon \in \R_{>0}$.
Let $\map {B_\epsilon} {a; d_\infty}$ be the open $\epsilon$-ball of $a$ in $M = \struct {\AA, d_\infty}$.

Then:

$\ds \map {B_\epsilon} {a; d_\infty} = \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}$


Proof
Let $\epsilon \in \R_{>0}$.
Let $x = \tuple {x_1, x_2, \ldots, x_n} \in \AA$.
Then:














\(\ds x\)

\(\in\)







\(\ds \map {B_\epsilon} {a; d_\infty}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {x, a}\)

\(<\)







\(\ds \epsilon\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, a_i} }\)

\(<\)







\(\ds \epsilon\)





Definition of Chebyshev Distance








\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds \map {d_i} {x_i, a_i}\)

\(<\)







\(\ds \epsilon\)





Definition of Maximum Element








\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds x_i\)

\(\in\)







\(\ds \map {B_\epsilon} {a_i; d_i}\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}\)





Definition of Finite Cartesian Product








\(\ds \leadsto \ \ \)





\(\ds \map {B_\epsilon} {a; d_\infty}\)

\(\subseteq\)







\(\ds \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}\)





Definition of Subset




And then:














\(\ds x\)

\(\in\)







\(\ds \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds x_i\)

\(\in\)







\(\ds \map {B_\epsilon} {a_i; d_i}\)





Definition of Finite Cartesian Product








\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds \map {d_i} {x_i, a_i}\)

\(<\)







\(\ds \epsilon\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, a_i} }\)

\(<\)







\(\ds \epsilon\)





Definition of Maximum Element








\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {x, a}\)

\(<\)







\(\ds \epsilon\)





Definition of Chebyshev Distance








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {B_\epsilon} {a; d_\infty}\)





Definition of Open $\epsilon$-Ball








\(\ds \leadsto \ \ \)





\(\ds \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}\)

\(\subseteq\)







\(\ds \map {B_\epsilon} {a; d_\infty}\)





Definition of Subset



The result follows by definition of set equality.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $7$




