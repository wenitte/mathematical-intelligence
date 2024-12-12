# 

Source: https://proofwiki.org/wiki/Decay_Equation


This page has been identified as a candidate for refactoring of intermediate complexity.In particular: separate out into definition and proofUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
The first order ordinary differential equation:

$\dfrac {\d y} {\d x} = k \paren {y_a - y}$
where $k \in \R: k > 0$
has the general solution:

$y = y_a + C e^{-k x}$
where $C$ is an arbitrary constant.

If $y = y_0$ at $x = 0$, then:

$y = y_a + \paren {y_0 - y_a} e^{-k x}$

This differential equation is known as the decay equation.


Proof













\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds -k \paren {y - y_a}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d y} {y - y_a}\)

\(=\)







\(\ds -\int k \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \map \ln {y - y_a}\)

\(=\)







\(\ds -k x + C_1\)





Primitive of Reciprocal and Derivatives of Function of $a x + b$








\(\ds \leadsto \ \ \)





\(\ds y - y_a\)

\(=\)







\(\ds e^{-k x + C_1}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds y_a + C e^{-k x}\)





where we put $C = e^{C_1}$



This is our general solution.
$\Box$

Suppose we have the initial condition:

$y = y_0$ when $x = 0$
Then:

$y_0 = y_a + C e^{-k \cdot 0} = y_a + C$
and so:

$C = y_0 - y_a$
Hence the solution:

$y = y_a + \paren {y_0 - y_a} e^{-k x}$
$\blacksquare$


Also see
Newton's Law of Cooling
First-Order Reaction




