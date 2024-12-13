# 

Source: https://proofwiki.org/wiki/Positive_Power_Function_on_Non-negative_Reals_is_Strictly_Increasing


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $a \in \Q_{> 0}$ be a strictly positive rational number.
Let $f_a: \R_{\ge 0} \to \R$ be the real function defined as:

$\map {f_a} x = x^a$

Then $f_a$ is strictly increasing.


Real Index
If $a \in \R_{>0}$ is a strictly positive real number, then the same result applies. Just use the real index variations of the theorems used to prove this one.
However, this result is specifically stated for a rational index, as this page is used to prove something else.


Proof
By the power rule for derivatives:

$\map {D_x} {x^a} = a x^{a - 1}$

By power of positive real number is positive, it is seen that:

$x > 0 \implies x^{a - 1} > 0$

By Strictly Positive Real Numbers are Closed under Multiplication, it follows that $\map {D_x} {x^a} > 0$ for all $x \in \openint 0 {+\infty}$.

Hence by Derivative of Monotone Function, $f_a$ is strictly increasing
$\blacksquare$





