# 

Source: https://proofwiki.org/wiki/Limit_of_H%C3%B6lder_Mean_as_Exponent_tends_to_Infinity

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{\ge 0}$ be real numbers.
For $p \in \R_{\ne 0}$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.

Then:

$\ds \lim_{p \mathop \to +\infty} \map {M_p} {x_1, x_2, \ldots, x_n} = \max \set {x_1, x_2, \ldots, x_n}$


Proof
Let $p \in \R$ such that $p \ne 0$.
Let it be assumed (or arranged) that:

$x_1 \ge x_2 \ge \cdots \ge x_n$
Then:














\(\ds \lim_{p \mathop \to +\infty} \map {M_p} {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \lim_{p \mathop \to +\infty} \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to +\infty} \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_1}^p \paren {\dfrac {x_k} {x_1} }^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{p \mathop \to +\infty} x_1 \paren {\frac 1 n \sum_{k \mathop = 1}^n \paren {\dfrac {x_k} {x_1} }^p}^{1 / p}\)





taking $p$th root of ${x_1}^p$ and moving it outside the parenthesis














\(\ds \)

\(=\)







\(\ds x_1 \lim_{p \mathop \to +\infty} \paren {\frac 1 n \sum_{k \mathop = 1}^n \paren {\dfrac {x_k} {x_1} }^p}^{1 / p}\)





Multiple Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds x_1\)






This article, or a section of it, needs explaining.In particular: Somehow we equate $\ds \lim_{p \mathop \to +\infty} \paren {\frac 1 n \sum_{k \mathop = 1}^n \paren {\dfrac {x_k} {x_1} }^p}^{1 / p}$ to $1$, not sure how this is justifiedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.














\(\ds \)

\(=\)







\(\ds \max \set {x_1, x_2, \ldots, x_n}\)





by hypothesis: $x_1 \ge x_2 \ge \cdots \ge x_n$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Generalized Mean: $3.1.16$




