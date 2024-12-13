# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sine_and_Cosine/Particular_Solution/i_b_is_Root_of_Auxiliary_Equation/Trigonometric_Form

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
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: The Method of Undetermined Coefficients




