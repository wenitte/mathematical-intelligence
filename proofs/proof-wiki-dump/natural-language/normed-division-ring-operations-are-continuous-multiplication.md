# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Operations_are_Continuous/Multiplication

Theorem
Let $\struct {R, +, *, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.
Let $p \in \R_{\ge 1} \cup \set \infty$.
Let $d_p$ be the $p$-Product Metric on $R \times R$.

Then the mapping:

$* : \struct {R \times R, d_p} \to \struct {R, d}$
is continuous.


Proof
By $p$-Product Metric Induces Product Topology and Continuous Mapping is Continuous on Induced Topological Spaces, it suffices to consider the case $p = \infty$.

Let $\tuple {x_0, y_0} \in R \times R$.
Let $\epsilon > 0$ be given.

Let $\delta = \min \set {\dfrac \epsilon {1 + \norm {y_0} + \norm {x_0} }, 1}$

Since $1 + \norm {y_0} + \norm {x_0} > 0$ then $\delta > 0$

Let $\tuple {x,y} \in R \times R$ such that:

$\map {d_\infty} {\tuple {x, y}, \tuple{x_0, y_0} } < \delta$
By the definition of the $p$-product metric $d_\infty$:

$\max \set {\map d {x, x_0}, \map d {y, y_0}} < \delta$
or equivalently:

$\map d {x, x_0} < \delta$
$\map d {y, y_0} < \delta$

Then:














\(\ds \norm y\)

\(=\)







\(\ds \norm {y - y_0 + y_0}\)




















\(\ds \)

\(\le\)







\(\ds \norm {y - y_0}  + \norm {y_0}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \map d {y, y_0}  + \norm {y_0}\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(<\)







\(\ds \delta  + \norm {y_0}\)




















\(\ds \)

\(\le\)







\(\ds 1  + \norm {y_0}\)









Hence:














\(\ds \map d {x y, x_0 y_0}\)

\(=\)







\(\ds \norm {x y - x_0 y_0}\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(=\)







\(\ds \norm {x y - x_0 y + x_0 y - x_0 y_0}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x y - x_0 y} + \norm {x_0 y - x_0 y_0}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {x - x_0} \norm y + \norm {x_0} \norm {y - y_0}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds \map d {x, x_0} \norm y + \norm {x_0} \map d {y, y_0}\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(<\)







\(\ds \delta \norm y + \norm {x_0} \delta\)




















\(\ds \)

\(\le\)







\(\ds \delta \paren {\norm y + \norm {x_0} }\)




















\(\ds \)

\(<\)







\(\ds \delta \paren {1 + \norm {y_0} + \norm {x_0} }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac \epsilon {1 + \norm {y_0} + \norm {x_0} } \paren {1 + \norm {y_0} + \norm {x_0} }\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










We have that $\tuple {x_0, y_0}$ and $\epsilon$ are arbitrary.
Hence, by the definition of continuity, the mapping:

$* : \struct {R \times R, d_\infty} \to \struct {R, d}$
is continuous.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology, Problem $43$




