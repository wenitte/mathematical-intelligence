# 

Source: https://proofwiki.org/wiki/Multiple_of_Metric_forms_Metric



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $d_1: A^2 \to \R$ be the mapping defined as:

$\forall \tuple {x, y} \in A^2: \map {d_1} {x, y} = k \map d {x, y}$
for some strictly positive $k \in \R_{>0}$.

Then $d_1$ is a metric for $A$.


Proof
It is to be demonstrated that $d_1$ satisfies all the metric space axioms.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_1} {x, x}\)

\(=\)







\(\ds k \map d {x, x}\)





Definition of $d_1$














\(\ds \)

\(=\)







\(\ds k \times 0\)





as $d$ fulfils Metric Space Axiom $(\text M 1)$














\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_1$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality













\(\ds \map {d_1} {x, y} + \map {d_1} {y, z}\)

\(=\)







\(\ds k \map d {x, y} + k \map d {y, z}\)





Definition of $d_1$














\(\ds \)

\(=\)







\(\ds k \paren {\map d {x, y} + \map d {y, z} }\)




















\(\ds \)

\(\ge\)







\(\ds k \map d {x, z}\)





as $d$ fulfils Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_1} {x, z}\)





Definition of $d_1$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_1$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_1} {x, y}\)

\(=\)







\(\ds k \times \map d {x, y}\)





Definition of $d_1$














\(\ds \)

\(=\)







\(\ds k \times \map d {y, x}\)





as $d$ fulfils Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d_1} {y, x}\)





Definition of $d_1$



So Metric Space Axiom $(\text M 3)$ holds for $d_1$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(>\)







\(\ds 0\)





as $d$ fulfils Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds k \map d {x, y}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_1$



So Metric Space Axiom $(\text M 4)$ holds for $d_1$.
$\Box$

Thus $d_1$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 6$




