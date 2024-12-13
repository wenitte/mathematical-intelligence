# 

Source: https://proofwiki.org/wiki/Hilbert_Sequence_Space_is_Metric_Space



Theorem
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} {x_i}^2$ is convergent.
Let $\ell^2 = \struct {A, d_2}$ be the Hilbert sequence space on $\R$.

Then $\ell^2$ is a metric space.


Proof 1
$\ell^2$ is a particular instance of the general $p$-sequence space $\ell^p$.
Hence $p$-Sequence Space of Real Sequences is Metric Space can be applied directly.
$\blacksquare$


Proof 2
By definition of the Hilbert sequence space on $\R$:
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} {x_i}^2$ is convergent.
Then $\ell^2 := \struct {A, d_2}$ where $d_2: A \times A: \to \R$ is the real-valued function defined as:

$\ds \forall x = \sequence {x_i}, y = \sequence {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{k \mathop \ge 0} \paren {x_k - y_k}^2}^{\frac 1 2}$

From Convergence of Square of Linear Combination of Sequences whose Squares Converge we have that $\ds \sum_{k \mathop \ge 0} \paren {x_k - y_k}^2$ does actually converge.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_2} {x, x}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {x_k - x_k}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} 0^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $z = \sequence {z_i} \in A$.


This article needs to be linked to other articles.In particular: Minkowski's inequality currently only applies to finite sumsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.













\(\ds \map {d_2} {x, y} + \map {d_2} {y, z}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {x_k - y_k}^2}^{\frac 1 2} + \paren {\sum_{k \mathop \ge 0} \paren {y_k - z_k}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(\ge\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {x_k - z_k}^2}^{\frac 1 2}\)





Minkowski's Inequality for Sums: index $2$














\(\ds \)

\(=\)







\(\ds \map {d_2} {x, z}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_2} {x, y}\)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {x_k - y_k}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {y_k - x_k}^2}^{\frac 1 2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map {d_2} {y, x}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 3)$ holds for $d_2$.
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





\(\ds \paren {x_k - y_k}^2\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{k \mathop \ge 0} \paren {x_k - y_k}^2}^{\frac 1 2}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_2$



So Metric Space Axiom $(\text M 4)$ holds for $d_2$.
$\blacksquare$





