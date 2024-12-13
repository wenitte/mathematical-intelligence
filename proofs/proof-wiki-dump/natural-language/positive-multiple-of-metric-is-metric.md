# 

Source: https://proofwiki.org/wiki/Positive_Multiple_of_Metric_is_Metric



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $k \in \R_{>0}$ be a (strictly) positive real number.
Let $d_k: A \times A \to \R$ be the function defined as:

$\forall \tuple {x, y} \in A: \map {d_k} {x, y} = k \cdot \map d {x, y}$

Then $M_k = \struct {A, d_k}$ is a metric space.


Proof
Metric Space Axiom $(\text M 1)$













\(\ds \map {d_k} {x, x}\)

\(=\)







\(\ds k \cdot \map d {x, x}\)





Definition of $d_k$














\(\ds \)

\(=\)







\(\ds 0\)





as $d$ fulfils Metric Space Axiom $(\text M 1)$



So Metric Space Axiom $(\text M 1)$ holds for $d_k$.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality













\(\ds \map {d_k} {x, y} + \map {d_k} {y, z}\)

\(=\)







\(\ds k \cdot \map d {x, y} + k \cdot \map d {y, z}\)





Definition of $d_k$














\(\ds \)

\(=\)







\(\ds k \paren {\map d {x, y} + \map d {y, z} }\)




















\(\ds \)

\(\ge\)







\(\ds k \cdot \map d {x, z}\)





as $d$ fulfils Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_k} {x, z}\)





Definition of $d_k$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_k$.
$\Box$


Metric Space Axiom $(\text M 3)$













\(\ds \map {d_k} {x, y}\)

\(=\)







\(\ds k \cdot \map d {x, y}\)





Definition of $d_k$














\(\ds \)

\(=\)







\(\ds k \cdot \map d {y, x}\)





as $d$ fulfils Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d_k} {y, x}\)





Definition of $d_k$



So Metric Space Axiom $(\text M 3)$ holds for $d_k$.
$\Box$


Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(>\)







\(\ds 0\)





as $d$ fulfils Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds k \cdot \map d {x, y}\)

\(>\)







\(\ds 0\)





as $k > 0$








\(\ds \leadsto \ \ \)





\(\ds \map {d_k} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_k$



So Metric Space Axiom $(\text M 4)$ holds for $d_k$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Exercise $1$




