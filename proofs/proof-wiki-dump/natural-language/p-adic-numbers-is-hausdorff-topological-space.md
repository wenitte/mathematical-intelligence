# 

Source: https://proofwiki.org/wiki/P-adic_Numbers_is_Hausdorff_Topological_Space

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\tau_p$ be the topology induced by the non-Archimedean norm $\norm {\,\cdot\,}_p$.

Then the topological space $\struct{\Q_p, \tau_p}$ is Hausdorff.


Proof 1
Let $d_p$ be the metric induced by the norm $\norm {\,\cdot\,}_p$.
By definition of the topology induced by the non-Archimedean norm $\norm {\,\cdot\,}_p$, $\tau_p$ is the topology induced by the metric $d_p$.
From Metric Space is Hausdorff, it follows that $\struct{\Q_p, \tau_p}$ is Hausdorff.
$\blacksquare$


Proof 2
Let $x, y \in \Q_p$ such that $x \ne y$.
By Non-Archimedean Norm Axiom $\text N 1$: Positive Definiteness:

$r := \norm {x - y}_p > 0$
Then, for all $z\in\Q_p$ we have:














\(\ds \max\set {\norm {x - z}_p, \norm {z - y}_p}\)

\(\ge\)







\(\ds \norm {(x-z) + (z-y)} _p\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality














\(\ds \)

\(=\)







\(\ds \norm {x - y} _p\)




















\(\ds \)

\(=\)







\(\ds r\)









Therefore, the $r$-open balls $\map {B_r} x$ and $\map {B_r} y$ are disjoint.
$\blacksquare$





