# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sine_and_Cosine/Particular_Solution/i_b_is_Root_of_Auxiliary_Equation



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

Consider the auxiliary equation to $(1)$:

$(2): \quad m^2 + b^2 = 0$

We have that $i b$ is a root of $(2)$.


Trigonometric Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = x \paren {A \sin b x + B \cos b x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds x \paren {b A \cos b x - b B \sin b x} + \paren {A \sin b x + B \cos b x}\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + \paren {b A \cos b x - b B \sin b x} + \paren {b A \cos b x - b B \sin b x}\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + 2 \paren {b A \cos b x - b B \sin b x}\)










Inserting into $(1)$:














\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + 2 \paren {b A \cos b x - b B \sin b x} + b^2 x \paren {A \sin b x + B \cos b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 \paren {b A \cos b x - b B \sin b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 b A \cos b x\)

\(=\)







\(\ds \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds -2 b B \sin b x\)

\(=\)







\(\ds \alpha \sin b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 b A\)

\(=\)







\(\ds \beta\)














\(\ds \leadsto \ \ \)





\(\ds -2 b B\)

\(=\)







\(\ds \alpha\)










Hence $A$ and $B$ can be expressed in terms of $\alpha$ and $\beta$:








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac \beta {2 b}\)




















\(\ds B\)

\(=\)







\(\ds -\frac \alpha {2 b}\)










Hence:

$y_p = \dfrac {\beta x \sin b x} {2 b} - \dfrac {\alpha x \cos b x} {2 b}$


Exponential Form
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


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.5$ Particular solution: trigonometric $\map f x$




