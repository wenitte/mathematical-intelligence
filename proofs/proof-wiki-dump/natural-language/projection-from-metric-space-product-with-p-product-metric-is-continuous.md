# 

Source: https://proofwiki.org/wiki/Projection_from_Metric_Space_Product_with_P-Product_Metric_is_Continuous

Theorem
Let $M_1 = \struct {A_1, d}$ and $M_2 = \struct {A_2, d'}$ be metric spaces.
Let $\AA := A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.

Let $\MM = \struct {\AA, d_p}$ denote the metric space on $\AA$ where $d_p: \AA \to \R$ is the $p$-product metric on $\AA$:

$\map {d_p} {x, y} := \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.

Let $\pr_1: \MM \to M_1$ and $\pr_2: \MM \to M_2$ denote the first projection and second projection respectively on $\MM$.
Then $\pr_1$ and $\pr_2$ are both ‎continuous on $\MM$.


Proof
We want to show that, for all $a \in \AA$:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall z \in \AA: \map {d_p} {z, a} < \delta \implies \map d {\map {\pr_1} z, \map {\pr_1} a} < \epsilon$
and:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall z \in \AA: \map {d_p} {z, a} < \delta \implies \map {d'} {\map {\pr_2} z, \map {\pr_2} a} < \epsilon$

Let $\epsilon \in \R_{>0}$ be arbitrary.
Let $a = \tuple {x_0, y_0} \in \AA$ also be arbitrary.
Let $\delta = \epsilon$.
Let $z = \tuple {x_1, y_1} \in \AA$ such that $\map {d_p} {x, a} < \delta$.

We have:














\(\ds \map {d_p} {z, a}\)

\(=\)







\(\ds \map {d_p} {x, y} := \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}\)





Definition of $d$














\(\ds \map d {\map {\pr_1} z, \map {\pr_1} a}\)

\(=\)







\(\ds \map d {x_1, x_0}\)





Definition of First Projection














\(\ds \map {d'} {\map {\pr_2} z, \map {\pr_2} a}\)

\(=\)







\(\ds \map {d'} {y_1, y_0}\)





Definition of Second Projection



Then:














\(\ds \paren {\map d {x_1, x_0} }^p + \paren {\map {d'} {y_1, y_0} }^p\)

\(\ge\)







\(\ds \paren {\map d {x_1, x_0} }^p\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}\)

\(\ge\)







\(\ds \map d {x_1, x_0}\)









and similarly:














\(\ds \paren {\map d {x_1, x_0} }^p + \paren {\map {d'} {y_1, y_0} }^p\)

\(\ge\)







\(\ds \paren {\map {d'} {y_1, y_0} }^2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}\)

\(\ge\)







\(\ds \map {d'} {y_1, y_0}\)










Hence:














\(\ds \map {d_p} {z, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}\)

\(<\)







\(\ds \delta\)





Definition of $d_p$








\(\ds \leadsto \ \ \)





\(\ds \map d {x_1, x_0}\)

\(<\)







\(\ds \delta\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \map d {\map {\pr_1} z, \map {\pr_1} a}\)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



and:














\(\ds \map {d_p} {z, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\map d {x_1, y_1} }^p + \paren {\map {d'} {x_2, y_2} }^p}^{1/p}\)

\(<\)







\(\ds \delta\)





Definition of $d_p$








\(\ds \leadsto \ \ \)





\(\ds \map {d'} {y_1, y_0}\)

\(<\)







\(\ds \delta\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds \map {d'} {\map {\pr_2} z, \map {\pr_2} a}\)

\(<\)







\(\ds \epsilon\)





as $\epsilon = \delta$



We have that $a$ and $\epsilon$ are arbitrary.
Hence the result by definition of ‎continuity.
$\blacksquare$





