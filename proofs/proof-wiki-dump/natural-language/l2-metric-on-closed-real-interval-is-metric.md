# 

Source: https://proofwiki.org/wiki/L2_Metric_on_Closed_Real_Interval_is_Metric



Theorem
Let $S$ be the set of all real functions which are continuous on the closed interval $\closedint a b$.
Let $d_2: S \times S \to \R$ be the $L^2$ metric on $\closedint a b$:

$\ds \forall f, g \in S: \map {d_2} {f, g} := \paren {\int_a^b \paren {\map f t - \map g t}^2 \rd t}^{\frac 1 2}$

Then $d_2$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_2} {f, f}\)

\(=\)







\(\ds \paren {\int_a^b \paren {\map f t - \map f t}^2 \rd t}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b 0^2 \rd t}^{\frac 1 2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral of Constant



So Metric Space Axiom $(\text M 1)$ holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
It is required to be shown:

$\map {d_2} {f, g} + \map {d_2} {g, h} \ge d_2 \map {d_2} {f, h}$
for all $f, g, h \in S$.

Let:

$(1): \quad t \in \closedint a b$
$(2): \quad \map f t - \map g t = \map r t$
$(3): \quad \map g t - \map h t = \map s t$
Thus we need to show that:

$\ds \paren {\int_a^b \paren {\map f t - \map g t}^2 \rd t}^{\frac 1 2} + \paren {\int_a^b \paren {\map g t - \map h t}^2 \rd t}^{\frac 1 2} \ge \paren {\int_a^b \paren {\map f t - \map h t}^2 \rd t}^{\frac 1 2}$

We have:














\(\ds \map {d_2} {f, g} + \map {d_2} {g, h}\)

\(=\)







\(\ds \paren {\int_a^b \paren {\map f t - \map g t}^2 \rd t}^{\frac 1 2} + \paren {\int_a^b \paren {\map g t - \map h t}^2 \rd t}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\map r t}^2 \rd t}^{\frac 1 2} + \paren {\int_a^b \paren {\map s t}^2 \rd t}^{\frac 1 2}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {\int_a^b \paren {\map r t + \map s t}^2 \rd t}^{\frac 1 2}\)





Minkowski's Inequality for Integrals














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\map f t - \map g t + \map g t - \map h t}^2 \rd t}^{\frac 1 2}\)





Definition of $\map r t$ and $\map s t$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\map f t - \map h t}^2 \rd t}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \map {d_2} {f, h}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_2} {f, g}\)

\(=\)







\(\ds \paren {\int_a^b \paren {\map f t - \map g t}^2 \rd t}^{\frac 1 2}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\map g t - \map f t}^2 \rd t}^{\frac 1 2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map {d_2} {g, f}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 3)$ holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$









\(\ds \forall t \in \closedint a b: \, \)



\(\ds \map f t - \map g t\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\map f t - \map g t}^2\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\int_a^b \paren {\map f t - \map g t}^2 \rd t}^{\frac 1 2}\)

\(\ge\)







\(\ds 0\)





Sign of Function Matches Sign of Definite Integral



From Zero Definite Integral of Nowhere Negative Function implies Zero Function we have that:

$\map {d_2} {f, g} = 0 \implies f = g$
on $\closedint a b$.
So Metric Space Axiom $(\text M 4)$ holds for $d_2$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.11$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): metric space
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): metric space




