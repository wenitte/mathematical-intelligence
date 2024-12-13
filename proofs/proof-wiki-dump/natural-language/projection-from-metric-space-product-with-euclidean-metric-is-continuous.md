# 

Source: https://proofwiki.org/wiki/Projection_from_Metric_Space_Product_with_Euclidean_Metric_is_Continuous



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\AA := A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.

Let $\MM = \struct {\AA, d}$ denote the metric space on $\AA$ where $d: \AA \to \R$ is the Euclidean metric on $\AA$:

$\map d {x, y} := \sqrt {\paren {\map {d_1} {x_1, y_1} }^2 + \paren {\map {d_2} {x_2, y_2} }^2}$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.

Let $\pr_1: \MM \to M_1$ and $\pr_2: \MM \to M_2$ denote the first projection and second projection respectively on $\MM$.
Then $\pr_1$ and $\pr_2$ are both ‎continuous on $\MM$.


Proof 1
The Euclidean metric is an instance of the $p$-product metric:

$\map {d_p} {x, y} := \paren {\paren {\map {d_1} {x_1, y_1} }^p + \paren {\map {d_2} {x_2, y_2} }^p}^{1/p}$
where $p = 2$.
The result is therefore seen to be an instance of Projection from Metric Space Product with P-Product Metric is Continuous.
$\blacksquare$


Proof 2
We want to show that, for all $a \in \AA$:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall z \in \AA: \map d {z, a} < \delta \implies \map {d_1} {\map {\pr_1} z, \map {\pr_1} a} < \epsilon$
and:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall z \in \AA: \map d {z, a} < \delta \implies \map {d_2} {\map {\pr_2} z, \map {\pr_2} a} < \epsilon$

Let $\epsilon \in \R_{>0}$ be arbitrary.
Let $a = \tuple {x_0, y_0} \in \AA$ also be arbitrary.
Let $\delta = \epsilon$.
Let $z = \tuple {x_1, y_1} \in \AA$ such that $\map d {x, a} < \delta$.

We have:














\(\ds \map d {z, a}\)

\(=\)







\(\ds \sqrt {\paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2}\)





Definition of $d$














\(\ds \map {d_1} {\map {\pr_1} z, \map {\pr_1} a}\)

\(=\)







\(\ds \map {d_1} {x_1, x_0}\)





Definition of First Projection














\(\ds \map {d_2} {\map {\pr_2} z, \map {\pr_2} a}\)

\(=\)







\(\ds \map {d_2} {y_1, y_0}\)





Definition of Second Projection



Then:














\(\ds \paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2\)

\(\ge\)







\(\ds \paren {\map {d_1} {x_1, x_0} }^2\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2}\)

\(\ge\)







\(\ds \map {d_1} {x_1, x_0}\)









and similarly:














\(\ds \paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2\)

\(\ge\)







\(\ds \paren {\map {d_2} {y_1, y_0} }^2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2}\)

\(\ge\)







\(\ds \map {d_2} {y_1, y_0}\)










Hence:














\(\ds \map d {z, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2}\)

\(<\)







\(\ds \delta\)





Definition of $d$








\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x_1, x_0}\)

\(<\)







\(\ds \delta\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {\map {\pr_1} z, \map {\pr_1} a}\)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



and:














\(\ds \map d {z, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {\map {d_1} {x_1, x_0} }^2 + \paren {\map {d_2} {y_1, y_0} }^2}\)

\(<\)







\(\ds \delta\)





Definition of $d$








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {y_1, y_0}\)

\(<\)







\(\ds \delta\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map {\pr_2} z, \map {\pr_2} a}\)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



We have that $a$ and $\epsilon$ are arbitrary.
Hence the result by definition of ‎continuity.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 15$




