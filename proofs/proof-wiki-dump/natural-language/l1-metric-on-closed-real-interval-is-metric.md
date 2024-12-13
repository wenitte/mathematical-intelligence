# 

Source: https://proofwiki.org/wiki/L1_Metric_on_Closed_Real_Interval_is_Metric



Theorem
Let $S$ be the set of all real functions which are continuous on the closed interval $\closedint a b$.
Let $d: S \times S \to \R$ be the $L^1$ metric on $\closedint a b$:

$\ds \forall f, g \in S: \map d {f, g} := \int_a^b \size {\map f t - \map g t} \rd t$

Then $d$ is a metric.


Proof
Metric Space Axiom $(\text M 1)$













\(\ds \map d {f, f}\)

\(=\)







\(\ds \int_a^b \size {\map f t - \map f t} \rd t\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \int_a^b 0 \rd t\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral of Constant



So Metric Space Axiom $(\text M 1)$ holds for $d$.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality













\(\ds \size {\map f t - \map g t} + \size {\map g t - \map h t}\)

\(\ge\)







\(\ds \size {\map f t - \map h t}\)





Triangle Inequality for Real Numbers








\(\ds \leadsto \ \ \)





\(\ds \int_a^b \size {\map f t - \map g t} \rd t + \int_a^b \size {\map g t - \map h t} \rd t\)

\(\ge\)







\(\ds \int_a^b \size {\map f t - \map h t} \rd t\)





Relative Sizes of Definite Integrals








\(\ds \leadsto \ \ \)





\(\ds \map d {f, g} + \map d {g, h}\)

\(\ge\)







\(\ds \map d {f, h}\)





Definition of $d$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d$.
$\Box$


Metric Space Axiom $(\text M 3)$













\(\ds \map d {f, g}\)

\(=\)







\(\ds \int_a^b \size {\map f t - \map g t} \rd t\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \int_a^b \size {\map g t - \map f t} \rd t\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map d {g, f}\)





Definition of $d$



So Metric Space Axiom $(\text M 3)$ holds for $d$.
$\Box$


Metric Space Axiom $(\text M 4)$









\(\ds \forall t \in \closedint a b: \, \)



\(\ds \size {\map f t - \map g t}\)

\(\ge\)







\(\ds 0\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \int_a^b \size {\map f t - \map g t} \rd t\)

\(\ge\)







\(\ds 0\)





Sign of Function Matches Sign of Definite Integral



From Zero Definite Integral of Nowhere Negative Function implies Zero Function we have that:

$\map d {f, g} = 0 \implies f = g$
on $\closedint a b$.
So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Exercise $4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.9$




