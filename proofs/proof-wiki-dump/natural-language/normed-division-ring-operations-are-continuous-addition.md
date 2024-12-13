# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Operations_are_Continuous/Addition

Theorem
Let $\struct {R, +, *, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.
Let $p \in \R_{\ge 1} \cup \set \infty$.
Let $d_p$ be the $p$-product metric on $R \times R$.

Then the mapping:

$+ : \struct {R \times R, d_p} \to \struct{R,d}$
is continuous.


Proof
By $p$-Product Metric Induces Product Topology and Continuous Mapping is Continuous on Induced Topological Spaces, it suffices to consider the case $p = \infty$.

Let $\tuple {x_0, y_0} \in R \times R$.
Let $\epsilon > 0$ be given.

Let $\tuple {x, y} \in R \times R$ such that:

$\map {d_\infty} {\tuple {x, y}, \tuple{x_0, y_0} } < \dfrac \epsilon 2$
By the definition of the product metric $d_\infty$ then:

$\max \set {\map d {x, x_0}, \map d {y, y_0} } < \dfrac \epsilon 2$
or equivalently:

$\map d {x, x_0} < \dfrac \epsilon 2$
$\map d {y, y_0} < \dfrac \epsilon 2$
Then:














\(\ds \map d {x_0 + y_0, x + y}\)

\(=\)







\(\ds \norm {\paren {x_0 + y_0} - \paren {x + y} }\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(=\)







\(\ds \norm {\paren {x_0 - x} + \paren {y_0 - y} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_0 - x } + \norm {y_0 - y}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \map d {x_0, x} + \map d {y_0, y}\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










Since $\tuple {x_0, y_0}$ and $\epsilon$ were arbitrary, by the definition of continuity then the mapping:

$+ : \struct {R \times R, d_\infty} \to \struct {R, d}$
is continuous.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology, Problem $43$




