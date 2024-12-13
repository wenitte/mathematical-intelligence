# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_b_y%27_%2B_a%5E2_y_%3D_K_cosine_omega_x/b_less_than_a

Theorem
The second order ODE:

$(1): \quad y + 2 b y' + a^2 y = K \cos \omega x$ where $b^2 < a^2$
has the general solution:

$y = e^{-b x} \paren {C_1 \cos \alpha x + C_2 \sin \alpha x} + \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega x - \phi}$
where:

$\alpha = \sqrt {a^2 - b^2}$
$\phi = \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = 2 b$
$q = a^2$
$\map R x = K \cos \omega x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 2 b y' + a^2 y = 0$
From Linear Second Order ODE: $y + 2 b y' + a^2 y = 0: b < a$, this has the general solution:

$y_g = e^{-b x} \paren {C_1 \, \map \cos {\sqrt {a^2 - b^2} } x + C_2 \, \map \sin {\sqrt {a^2 - b^2} } x}$
Substituting $\alpha = \sqrt {a^2 - b^2}$, this can be written more compactly as:

$y_g = e^{-b x} \paren {C_1 \cos \alpha x + C_2 \sin \alpha x}$

We have that:

$\map R x = K \cos \omega x$

It is noted that $K \cos \omega x$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Sine and Cosine:

$y_p = A \sin \omega x + B \cos \omega x$
where $A$ and $B$ are to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A \sin \omega x + B \cos \omega x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds \omega A \cos \omega x - \omega B \sin \omega x\)





Derivative of Sine Function, Derivative of Cosine Function








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -\omega^2 A \sin \omega x - \omega^2 B \cos \omega x\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds -\omega^2 \paren {A \sin \omega x + B \cos \omega x} + 2 b \omega \paren {A \cos \omega x - B \sin \omega x} + a^2 \paren {A \sin \omega x + B \cos \omega x}\)

\(=\)







\(\ds K \cos \omega x\)














\(\ds \leadsto \ \ \)





\(\ds -\omega^2 A \sin \omega x - 2 b \omega B \sin \omega x + a^2 A \sin \omega x\)

\(=\)







\(\ds 0\)





equating coefficients














\(\ds -\omega^2 B \cos \omega x + 2 b \omega A \cos \omega x + a^2 B \cos \omega x\)

\(=\)







\(\ds K \cos \omega x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 - \omega^2} A - 2 b \omega B\)

\(=\)







\(\ds 0\)




















\(\ds \paren {a^2 - \omega^2} B + 2 b \omega A\)

\(=\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 b \omega B} {a^2 - \omega^2}\)

\(=\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 - \omega^2} B + 2 b \omega \frac {2 b \omega B} {a^2 - \omega^2}\)

\(=\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {\frac {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2} {a^2 - \omega^2} }\)

\(=\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds K \frac {a^2 - \omega^2} {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2}\)

\(=\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 b \omega} {a^2 - \omega^2} K \frac {a^2 - \omega^2} {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2}\)

\(=\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds K \frac {2 b \omega} {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2}\)

\(=\)







\(\ds A\)










Hence:














\(\ds y_p\)

\(=\)







\(\ds K \frac {2 b \omega} {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2} \sin \omega x + K \frac {a^2 - \omega^2} {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2} \cos \omega x\)




















\(\ds \)

\(=\)







\(\ds \frac K {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2} \paren {2 b \omega \sin \omega x + \paren {a^2 - \omega^2} \cos \omega x}\)










From Multiple of Sine plus Multiple of Cosine: Cosine Form:














\(\ds \)

\(\)







\(\ds 2 b \omega \sin \omega x + \paren {a^2 - \omega^2} \cos \omega x\)




















\(\ds \)

\(=\)







\(\ds \sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} \map \cos {\omega x + \map \arctan {\dfrac {-2 b \omega} {a^2 - \omega^2} } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} \map \cos {\omega x - \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} } }\)





Tangent Function is Odd




and so:














\(\ds y_p\)

\(=\)







\(\ds \frac {K \sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } {\paren {a^2 - \omega^2}^2 + 4 b^2 \omega^2} \map \cos {\omega x - \phi}\)





where $\phi = \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }$














\(\ds \)

\(=\)







\(\ds \frac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega x - \phi}\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = e^{-b x} \paren {C_1 \cos \alpha x + C_2 \sin \alpha x} + \dfrac K {\sqrt {4 b^2 \omega^2 + \paren {a^2 - \omega^2}^2} } \map \cos {\omega x - \phi}$
where:

$\phi = \map \arctan {\dfrac {2 b \omega} {a^2 - \omega^2} }$
$\blacksquare$





