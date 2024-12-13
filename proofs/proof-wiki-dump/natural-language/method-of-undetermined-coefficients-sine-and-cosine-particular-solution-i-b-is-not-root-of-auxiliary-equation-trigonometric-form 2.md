# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sine_and_Cosine/Particular_Solution/i_b_is_not_Root_of_Auxiliary_Equation/Trigonometric_Form

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

We are given that $i b$ is not a root of $(2)$.

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
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.5$ Particular solution: exponential $\map f x$: Example $5$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: The Method of Undetermined Coefficients




