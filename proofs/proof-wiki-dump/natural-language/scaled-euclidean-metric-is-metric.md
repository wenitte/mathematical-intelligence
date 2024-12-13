# 

Source: https://proofwiki.org/wiki/Scaled_Euclidean_Metric_is_Metric



Theorem
Let $\R_{>0}$ be the set of (strictly) positive integers.
Let $\delta: \R_{>0} \times \R_{>0} \to \R$ be the metric on $\R_{>0}$ defined as:

$\forall x, y \in \R_{>0}: \map \delta {x, y} = \dfrac {\size {x - y} } {x y}$

Then $\delta$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map \delta {x, x}\)

\(=\)







\(\ds \dfrac {\size {x - x} } {x^2}\)





Definition of $\delta$














\(\ds \)

\(=\)







\(\ds 0\)





as $\size {x - x} = 0$



So Metric Space Axiom $(\text M 1)$ holds for $\delta$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality













\(\ds \map \delta {x, y} + \map \delta {y, z}\)

\(=\)







\(\ds \frac {\size {x - y} } {x y} + \dfrac {\size {y - z} } {y z}\)





Definition of $\delta$














\(\ds \)

\(=\)







\(\ds \frac {z \size {x - y} + x \size {y - z} } {x y z}\)





Sum of Quotients of Real Numbers














\(\ds \)

\(=\)







\(\ds \frac {\size  {x z - y z} + \size {x y - x z} } {x y z}\)





Valid, as $x, z > 0$














\(\ds \)

\(\ge\)







\(\ds \frac {\size {x z - y z + x y - x z} } {x y z}\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \frac {\size {x y - y z} } {x y z}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\size {x - z} } {x z}\)





simplifying further














\(\ds \)

\(=\)







\(\ds \map \delta {x, z}\)





Definition of $\delta$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $\delta$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map \delta {x, y}\)

\(=\)







\(\ds \frac {\size {x - y} } {x y}\)





Definition of $\delta$














\(\ds \)

\(=\)







\(\ds \frac {\size {y - x} } {y x}\)





Definition of Absolute Value and Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \map \delta {y, x}\)





Definition of $\delta$



So Metric Space Axiom $(\text M 3)$ holds for $\delta$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \size {x - y}\)

\(>\)







\(\ds 0\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \frac {\size {x - y} } {x y}\)

\(>\)







\(\ds 0\)





as $x y > 0$








\(\ds \leadsto \ \ \)





\(\ds \map \delta {x, y}\)

\(>\)







\(\ds 0\)





Definition of $\delta$



So Metric Space Axiom $(\text M 4)$ holds for $\delta$.
$\blacksquare$





