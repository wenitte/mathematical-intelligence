# 

Source: https://proofwiki.org/wiki/Lp_Metric_on_Closed_Real_Interval_is_Metric



Theorem
Let $S$ be the set of all real functions which are continuous on the closed interval $\closedint a b$.
Let $p \in \R_{\ge 1}$.
Let $d_p: S \times S \to \R$ be the $L^p$ metric on $\closedint a b$:

$\ds \forall f, g \in S: \map {d_p} {f, g} := \paren {\int_a^b \size {\map f t - \map g t}^p \rd t}^{\frac 1 p}$

Then $d_p$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_p} {f, f}\)

\(=\)







\(\ds \paren {\int_a^b \size {\map f t - \map f t}^p \rd t}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b 0^p \rd t}^{\frac 1 p}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral of Constant



So Metric Space Axiom $(\text M 1)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
It is required to be shown:

$\map {d_p} {f, g} + \map {d_p} {g, h} \ge \map {d_p} {f, h}$
for all $f, g, h \in S$.

Let:

$(1): \quad t \in \closedint a b$
$(2): \quad \size {\map f t - \map g t = \map r t}$
$(3): \quad \size {\map g t - \map h t = \map s t}$
Thus we need to show that:

$\ds \paren {\int_a^b \size {\map f t - \map g t}^p \rd t}^{\frac 1 p} + \paren {\int_a^b \size {\map g t - \map h t}^p \rd t}^{\frac 1 p} \ge \paren {\int_a^b \size {\map f t - \map h t}^p \rd t}^{\frac 1 p}$

We have:














\(\ds \map {d_p} {f, g} + \map {d_p} {g, h}\)

\(=\)







\(\ds \paren {\int_a^b \size {\map f t - \map g t}^p \rd t}^{\frac 1 p} + \paren {\int_a^b \size {\map g t - \map h t}^p \rd t}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\map r t}^p \rd t}^{\frac 1 p} + \paren {\int_a^b \paren {\map s t}^p \rd t}^{\frac 1 p}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {\int_a^b \paren {\map r t + \map s t}^p \rd t}^{\frac 1 p}\)





Minkowski's Inequality for Integrals














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \paren {\size {\map f t - \map g t} + \size {\map g t - \map h t} }^2 \rd t}^{\frac 1 2}\)





Definition of $\map r t$ and $\map s t$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \size {\map f t - \map h t}^2 \rd t}^{\frac 1 2}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \map {d_p} {f, h}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_p} {f, g}\)

\(=\)







\(\ds \paren {\int_a^b \size {\map f t - \map g t}^p \rd t}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\int_a^b \size {\map g t - \map f t}^p \rd t}^{\frac 1 p}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map {d_p} {g, f}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 3)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$









\(\ds \forall t \in \closedint a b: \, \)



\(\ds \map f t\)

\(\ne\)







\(\ds \map g t\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map f t - \map g t}^p\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\int_a^b \size {\map f t - \map g t}^p \rd t}^{\frac 1 p}\)

\(\ge\)







\(\ds 0\)





Sign of Function Matches Sign of Definite Integral



From Zero Definite Integral of Nowhere Negative Function implies Zero Function we have that:

$\map {d_p} {f, g} = 0 \leadsto f = g$
on $\closedint a b$.
So Metric Space Axiom $(\text M 4)$ holds for $d_p$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.18$




