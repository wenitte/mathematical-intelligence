# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sine_and_Cosine/Particular_Solution/i_b_is_not_Root_of_Auxiliary_Equation



Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y + p y' + q y = \map R x$
Let $\map R x$ be a linear combination of sine and cosine:

$\map R x = \alpha \sin b x + \beta \cos b x$

such that $i b$ is not a root of the auxiliary equation to $(1)$.

The Method of Undetermined Coefficients can be used to find a particular solution to $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$y + p y' + q y = 0$
From General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.
Let $\map R x = \alpha \sin b x + \beta \cos b x$.

Consider the auxiliary equation to $(1)$:

$(2): \quad m^2 + p m + q = 0$

We have that $i b$ is not a root of $(2)$.


Trigonometric Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A \sin b x + B \cos b x$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds b A \cos b x - b B \sin b x\)





Derivative of Sine Function, Derivative of Cosine Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds -b^2 A \sin b x - b^2 B \cos b x\)





Derivative of Sine Function, Derivative of Cosine Function



Inserting into $(1)$:














\(\ds -b^2 \paren {A \sin b x + B \cos b x} + b p \paren {A \cos b x - B \sin b x} + q \paren {A \sin b x + B \cos b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {-A b^2 - B b p + A q} \sin b x + \paren {-B b^2 + A b p + B q} \cos b x\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)









Hence $A$ and $B$ can be expressed in terms of $\alpha$ and $\beta$:








\(\ds \leadsto \ \ \)





\(\ds -A b^2 - B b p + A q\)

\(=\)







\(\ds \alpha\)




















\(\ds -B b^2 + A b p + B q\)

\(=\)







\(\ds \beta\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {q - b^2}\)

\(=\)







\(\ds \alpha + B b p\)




















\(\ds B \paren {q - b^2}\)

\(=\)







\(\ds \beta - A b p\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {\alpha + B b p} {q - b^2}\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {q - b^2}\)

\(=\)







\(\ds \beta - \frac {\alpha + B b p} {q - b^2} b p\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {q - b^2}^2\)

\(=\)







\(\ds \beta \paren {q - b^2} - \paren {\alpha + B b p} b p\)




















\(\ds \)

\(=\)







\(\ds \beta \paren {q - b^2} - \alpha b p - B b^2 p^2\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {\paren {q - b^2}^2 + b^2 p^2}\)

\(=\)







\(\ds \beta \paren {q - b^2} - \alpha b p\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {\beta \paren {q - b^2} - \alpha b p} {\paren {q - b^2}^2 + b^2 p^2}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {\alpha \paren {q - b^2} + \beta b p} {\paren {q - b^2}^2 + b^2 p^2}\)





similarly




Hence:

$y_p = \dfrac {\alpha \paren {q - b^2} + \beta b p} {\paren {q - b^2}^2 + b^2 p^2} \sin b x + \dfrac {\beta \paren {q - b^2} - \alpha b p} {\paren {q - b^2}^2 + b^2 b^2} \cos b x$
$\Box$


Exponential Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A \sin b x + B \cos b x$
From Euler's Formula:

$\cos b x + i \sin b x = e^{i b x}$
and so:

$A \sin b x + B \cos b x$ is the real part of $\paren {A - i B} \paren {\cos b x + i \sin b x} = \paren {A - i B} e^{i b x}$
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

replace it with $\paren {A - i B} e^{i b x}$
use the Method of Undetermined Coefficients for Exponential functions
and then take its real part.
$\blacksquare$





