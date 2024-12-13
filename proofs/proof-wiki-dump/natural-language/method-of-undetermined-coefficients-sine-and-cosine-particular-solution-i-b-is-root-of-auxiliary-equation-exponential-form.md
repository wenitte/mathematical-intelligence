# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sine_and_Cosine/Particular_Solution/i_b_is_Root_of_Auxiliary_Equation/Exponential_Form


It has been suggested that this page or section be merged into Method of Undetermined Coefficients/Sine and Cosine/Particular Solution/i b is not Root of Auxiliary Equation/Exponential Form.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: The technique for solving the exponential form as presented here is the same for $i b$ both a root and not a root of auxiliar equation. So restructure this so as to keep the cases separate for the trigonometric form only.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y' ' + b^2 y = \alpha \sin b x + \beta \cos b x$

The Method of Undetermined Coefficients can be used to find a particular solution to $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$y' ' + b^2 y = 0$
From General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.

Assume that there is a particular solution to $(1)$ of the form:

$y_p = x \paren {A \sin b x + B \cos b x}$
From Euler's Formula:

$\cos b x + i \sin b x = e^{i b x}$
and so:

$x \paren {A \sin b x + B \cos b x}$ is the real part of $x \paren {A - i B} \paren {\cos b x + i \sin b x} = x \paren {A - i B} e^{i b x}$
It is assumed that $A$, $B$, $p$ and $q$ are all real numbers.

Suppose we have found a solution $y$ of $(1)$ where:

$\map f x = \map {f_1} x + i \, \map {f_2} x$
where $\map y x$ and $\map f x$ are complex-valued.
Letting $\map y x = \map {y_1} x + \map {y_2} x$, where $y_1$ and $y_2$ are the real and imaginary parts of $\map y x$, we have:

${y_1}' ' + p {y_1}' + q y_1 + i \paren { {y_2}' ' + p {y_2}' + q y_2} = \map {f_1} x + i \, \map {f_2} x$
Equating real parts:

${y_1}' ' + p {y_1}' + q y_1 = \map {f_1} x$
Equating imaginary parts:

${y_2}' ' + p {y_2}' + q y_2 = \map {f_2} x$

Thus if $y$ is a particular solution to $(1)$ when the right hand side is $\map f x$:

$\map \Re y$ is a particular solution to $(1)$ when the right hand side is $\map \Re {\map f x}$
$\map \Im y$ is a particular solution to $(1)$ when the right hand side is $\map \Im {\map f x}$
So to find a particular solution when the right hand side is $K \cos x$ or $K \sin x$, we can first find a particular solution when the right hand side is $K e^{i b x}$ and then take its real part or imaginary part as necessary.

Hence, when we have $A \cos b x + B \sin b x$ on the right hand side:

replace it with $x \paren {A - i B} e^{i b x}$
use the Method of Undetermined Coefficients for Exponential functions
and then take its real part.
$\blacksquare$





