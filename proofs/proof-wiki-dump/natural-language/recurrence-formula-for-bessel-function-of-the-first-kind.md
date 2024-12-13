# 

Source: https://proofwiki.org/wiki/Recurrence_Formula_for_Bessel_Function_of_the_First_Kind

Theorem
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.

Then:

$\map {J_{n + 1} } x = \dfrac {2 n} x \map {J_n} x - \map {J_{n - 1} } x$
And: 

$\map {J_{n + 1} } x = -2 \map {J_n'} x + \map {J_{n - 1} } x$

This page has been identified as a candidate for refactoring of basic complexity.In particular: page per resultUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof
From Generating Function for Bessel Function of the First Kind of Order n of x we have:

$\ds \map \exp {\dfrac x 2 \paren {t - \dfrac 1 t} } = \sum_{n \mathop = - \infty}^\infty \map {J_n} x t^n$

Differentiating both sides of the equation with respect to $t$:














\(\ds \dfrac x 2 \paren {1 + \dfrac 1 {t^2} } \map \exp {\dfrac x 2 \paren {t - \dfrac 1 t} }\)

\(=\)







\(\ds \sum_{m \mathop = - \infty}^\infty n \map {J_n} x t^{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac x 2 \paren {1 + \dfrac 1 {t^2} } \sum_{n \mathop = - \infty}^\infty \map {J_n} x t^n\)

\(=\)







\(\ds \sum_{n \mathop = - \infty}^\infty n \map {J_n} x t^{n - 1}\)





Generating Function for Bessel Function of the First Kind of Order n of x








\(\ds \leadsto \ \ \)





\(\ds \dfrac x 2 \paren {\sum_{n \mathop = - \infty}^\infty \map {J_n} x t^n + \sum_{n \mathop = - \infty}^\infty \map {J_n} x t^{n - 2} }\)

\(=\)







\(\ds \sum_{n \mathop = - \infty}^\infty n \map {J_n} x t^{n - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac x 2 \paren {\sum_{n \mathop = - \infty}^\infty \map {J_{n - 1} } x t^{n - 1} + \sum_{n \mathop = - \infty}^\infty \map {J_{n + 1} } x t^{n - 1} }\)

\(=\)







\(\ds \sum_{n \mathop = - \infty}^\infty n \map {J_n} x t^{n - 1}\)





Translation of Index Variable of Summation








\(\ds \leadsto \ \ \)





\(\ds \dfrac x 2 \paren {\map {J_{n - 1} } x + \map {J_{n + 1} } x}\)

\(=\)







\(\ds n \map {J_n} x\)





by comparing coefficients








\(\ds \leadsto \ \ \)





\(\ds \map {J_{n - 1} } x + \map {J_{n + 1} } x\)

\(=\)







\(\ds \dfrac {2n} x \map {J_n} x\)














\(\ds \leadsto \ \ \)





\(\ds \map {J_{n + 1} } x\)

\(=\)







\(\ds \dfrac {2n} x \map {J_n} x - \map {J_{n - 1} } x\)









This is the first recurrence formula.
$\Box$

We prove the second recurrence formula by differentiating both sides of the original equation with respect to $x$:














\(\ds \dfrac 1 2 \paren {t - \dfrac 1 t} \map \exp {\dfrac x 2 \paren {t - \dfrac 1 t} }\)

\(=\)







\(\ds \sum_{m \mathop = - \infty}^\infty \map {J_n'} x t^n\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 2 \paren {t - \dfrac 1 t} \sum_{m \mathop = - \infty}^\infty \map {J_n} x t^n\)

\(=\)







\(\ds \sum_{m \mathop = - \infty}^\infty \map {J_n'} x t^n\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 2 \paren {\sum_{m \mathop = - \infty}^\infty \map {J_n} x t^{n + 1} - \sum_{m \mathop = - \infty}^\infty \map {J_n} x t^{n - 1} }\)

\(=\)







\(\ds \sum_{m \mathop = - \infty}^\infty \map {J_n'} x t^n\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 2 \paren {\sum_{m \mathop = - \infty}^\infty \map {J_{n - 1} } x t^n - \sum_{m \mathop = - \infty}^\infty \map {J_{n + 1} } x t^n}\)

\(=\)







\(\ds \sum_{m \mathop = - \infty}^\infty \map {J_n'} x t^n\)





Translation of Index Variable of Summation








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 2 \paren {\map {J_{n - 1} } x - \map {J_{n + 1} } x}\)

\(=\)







\(\ds \map {J_n'} x\)





by comparing coefficients








\(\ds \leadsto \ \ \)





\(\ds \map {J_{n - 1} } x - \map {J_{n + 1} } x\)

\(=\)







\(\ds 2 \map {J_n'} x\)














\(\ds \leadsto \ \ \)





\(\ds \map {J_{n + 1} } x\)

\(=\)







\(\ds - 2 \map {J_n'} x + \map {J_{n - 1} } x\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {II}$. Bessel functions: $2$




