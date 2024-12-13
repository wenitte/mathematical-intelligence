# 

Source: https://proofwiki.org/wiki/Limit_of_H%C3%B6lder_Mean_as_Exponent_tends_to_Negative_Infinity

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{\ge 0}$ be real numbers.
For $p \in \R_{\ne 0}$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.

Then:

$\ds \lim_{p \mathop \to -\infty} \map {M_p} {x_1, x_2, \ldots, x_n} = \min \set {x_1, x_2, \ldots, x_n}$


Proof
Let $p \in \R$ such that $p \ne 0$.
Let it be assumed (or arranged) that:

$x_1 \ge x_2 \ge \cdots \ge x_n$
Then:














\(\ds \lim_{p \mathop \to -\infty} \map {M_p} {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \dfrac 1 {\ds \lim_{p \mathop \to +\infty} \map {M_p} {\dfrac 1 {x_1}, \dfrac 1 {x_2}, \ldots, \dfrac 1 {x_n} } }\)






This article, or a section of it, needs explaining.In particular: Justify this stepYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {\dfrac 1 {x_n} } }\)





Limit of Hölder Mean as Exponent tends to Infinity














\(\ds \)

\(=\)







\(\ds x_n\)




















\(\ds \)

\(=\)







\(\ds \min \set {x_1, x_2, \ldots, x_n}\)





by hypothesis: $x_1 \ge x_2 \ge \cdots \ge x_n$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Generalized Mean: $3.1.17$




