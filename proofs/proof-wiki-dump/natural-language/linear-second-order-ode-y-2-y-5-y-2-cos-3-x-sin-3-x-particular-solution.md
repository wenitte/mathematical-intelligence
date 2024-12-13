# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_-_5_y_%3D_2_cos_3_x_-_sin_3_x/Particular_Solution



Theorem
The second order ODE:

$(1): \quad y - 2 y' - 5 y = 2 \cos 3 x - \sin 3 x$
has a particular solution:

$y_p = \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$


Proof
From Linear Second Order ODE: $y - 2 y' - 5 y = 0$, we have established that the general solution to $(1)$ is:

$y_g = C_1 \map \exp {\paren {1 + \sqrt 6} x} + C_2 \map \exp {\paren {1 - \sqrt 6} x}$


Solution using Trigonometric Form
We note that $2 \cos 3 x - \sin 3 x$ is not itself a particular solution of $(2)$.

From the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \cos 3 x + B \sin 3 x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \cos 3 x + B \sin 3 x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds -3 A \sin 3 x + 3 B \cos 3 x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -9 A \cos 3 x - 9 B \sin 3 x\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds -9 A \cos 3 x - 9 B \sin 3 x - 2 \paren {-3 A \sin 3 x + 3 B \cos 3 x} - 5 \paren {A \cos 3 x + B \sin 3 x}\)

\(=\)







\(\ds 2 \cos 3 x - \sin 3 x\)














\(\ds \leadsto \ \ \)





\(\ds -9 B \sin 3 x + 6 A \sin 3 x - 5 B \sin 3 x\)

\(=\)







\(\ds \sin 3 x\)





equating coefficients














\(\ds -9 A \cos 3 x - 6 B \cos 3 x - 5 A \cos 3 x\)

\(=\)







\(\ds 2 \cos 3 x\)














\(\ds \leadsto \ \ \)





\(\ds 6 A - 14 B\)

\(=\)







\(\ds 1\)




















\(\ds -6 B - 14 A\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {14^2 + 6^2} A\)

\(=\)







\(\ds -28 - 6\)




















\(\ds \paren {14^2 + 6^2} B\)

\(=\)







\(\ds -12 + 14\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -\dfrac {17} {116}\)




















\(\ds B\)

\(=\)







\(\ds \dfrac 1 {116}\)










Hence the result:

$y_p = \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$
$\blacksquare$


Solution using Exponential Form
We note that $2 \cos 3 x - \sin 3 x$ is not itself a particular solution of $(2)$.

From the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \cos 3 x + B \sin 3 x$
where $A$ and $B$ are to be determined.
The right hand side of $(1)$ is the real part of $\paren {2 + i} e^{3 i x}$.

Thus, to find a particular solution of $(1)$ when the right hand side is $\paren {2 + i} e^{3 i x}$, we substitute $y = A e^{3 i x}$.
Hence:














\(\ds A \paren {\paren {3 i}^2 - 2 \paren {3 i} - 5}\)

\(=\)







\(\ds 2 + i\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds -\dfrac {2 + i} {14 + 6 i}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\paren {2 + i} \paren {14 - 6 i} } {14^2 + 6^2}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {34 + 2 i} {232}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {116} \paren {17 + i}\)










Taking the real part of the corresponding solution $A e^{3 i x}$, we get:














\(\ds y\)

\(=\)







\(\ds \map \Re {-\dfrac 1 {116} \paren {17 + i} \paren {\cos 3 x + i \sin 3 x} }\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {116} \paren {17 \cos 3 x - \sin 3 x}\)










Hence the result:

$y_p = \dfrac 1 {116} \paren {\sin 3 x - 17 \cos 3 x}$
$\blacksquare$





