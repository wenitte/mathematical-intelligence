# 

Source: https://proofwiki.org/wiki/Metric_over_1_plus_Metric_forms_Metric



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $d_3: A^2 \to \R$ be the mapping defined as:

$\forall \tuple {x, y} \in A^2: \map {d_3} {x, y} = \dfrac {\map d {x, y} } {1 + \map d {x, y} }$

Then $d_3$ is a metric for $A$.


Topological Equivalence
$d_3$ is topologically equivalent to $d$.


Proof
It is to be demonstrated that $d_3$ satisfies all the metric space axioms.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_3} {x, x}\)

\(=\)







\(\ds \dfrac {\map d {x, x} } {1 + \map d {x, x} }\)





Definition of $d_3$














\(\ds \)

\(=\)







\(\ds \dfrac 0 {1 + 0}\)





as $d$ fulfils Metric Space Axiom $(\text M 1)$














\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_3$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Note that $\map f x = \dfrac x {1 + x}$ is an increasing function of $x$ for $x = 0$.
In order to simplify the algebra, let $a = \map d {x, y}$, $b = \map d {y, z}$ and $c = \map d {x, z}$.
Then:














\(\ds \map {d_3} {x, y} + \map {d_3} {y, z}\)

\(=\)







\(\ds \dfrac a {1 + a} + \dfrac b {1 + b}\)





Definition of $d_3$














\(\ds \)

\(=\)







\(\ds \dfrac {a \paren {1 + b} + b \paren {1 + a} } {\paren {1 + a} \paren {1 + b} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a + b + 2 a b} {1 + a + b + a b}\)




















\(\ds \)

\(\ge\)







\(\ds \dfrac {a + b + 2 a b} {1 + a + b + 2 a b}\)









But $a + b + 2 a b > c$.
Because $\map f x = \dfrac x {1 + x}$ is an increasing function:

$\dfrac {a + b + 2 a b} {1 + a + b + 2 a b} > \dfrac c {1 + c}$
and it follows by definition of $d_3$ that:

$\map {d_3} {x, y} + \map {d_3} {y, z} \ge \map {d_3} {x, z}$
So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_3$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_3} {x, y}\)

\(=\)







\(\ds \dfrac {\map d {x, y} } {1 + \map d {x, y} }\)





Definition of $d_3$














\(\ds \)

\(=\)







\(\ds \dfrac {\map d {y, x} } {1 + \map d {y, x} }\)





as $d$ fulfils Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d_3} {y, x}\)





Definition of $d_3$



So Metric Space Axiom $(\text M 3)$ holds for $d_3$.
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





\(\ds \dfrac {\map d {y, x} } {1 + \map d {y, x} }\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_3} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_3$



So Metric Space Axiom $(\text M 4)$ holds for $d_3$.
$\Box$

Thus $d_3$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 6$




