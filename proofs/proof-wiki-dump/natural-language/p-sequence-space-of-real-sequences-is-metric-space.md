# 

Source: https://proofwiki.org/wiki/P-Sequence_Space_of_Real_Sequences_is_Metric_Space



Theorem
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} x_i^2$ is convergent.
Let $d_p$ be the $p$-sequence metric on $\R$.

Then $\ell^p := \struct {A, d_p}$ is a metric space.


Proof
By definition of the $p$-sequence metric on $\R$:
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} x_i^2$ is convergent.
Then $\ell^p := \struct {A, d_2}$ where $d_p: A \times A: \to \R$ is the real-valued function defined as:

$\ds \forall x = \sequence {x_i}, y = \sequence {y_i} \in A: \map {d_p} {x, y} := \paren {\sum_{k \mathop \ge 0} \size {x_k - y_k}^p}^{\frac 1 p}$


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_p} {x, x}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \size {x_k - x_k}^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} 0^p}^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $z = \sequence {z_i}\in A$.


This article needs to be linked to other articles.In particular: Minkowski's inequality currently only applies to finite sumsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.













\(\ds \map {d_p} {x, y} + \map {d_p} {y, z}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \size {x_k - y_k}^p}^{\frac 1 p} + \paren {\sum_{k \mathop \ge 0} \size {y_k - z_k}^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(\ge\)







\(\ds \paren {\sum_{k \mathop \ge 0} \size {x_k - z_k}^p}^{\frac 1 p}\)





Minkowski's Inequality for Sums














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, z}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_p} {x, y}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \size {x_k - y_k}^p}^{\frac 1 p}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \size {y_k - x_k}^p}^{\frac 1 p}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map {d_p} {y, x}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 3)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \N: \, \)



\(\ds x_k\)

\(\ne\)







\(\ds y_k\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_k - y_k}^p\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop \ge 0} \size {x_k - y_k}^p}^{\frac 1 p}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_p} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_p$



So Metric Space Axiom $(\text M 4)$ holds for $d_p$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.18$




