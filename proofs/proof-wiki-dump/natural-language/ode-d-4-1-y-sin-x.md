# 

Source: https://proofwiki.org/wiki/ODE/(D%5E4_-_1)_y_%3D_sin_x

Theorem
The second order ODE:

$(1): \quad \paren {D^4 - 1} y' = \sin x$
has a general solution:

$y = C_1 e^x + C_2 e^{-x} + C_3 \sin x + C_4 \cos x + \dfrac {x \cos x} 4$


Proof
First we solve the reduced equation of $(1)$:

$(2): \quad \paren {D^4 - 1} y' = 0$
The auxiliary equation of $(1)$ is:

$(3): \quad: m^4 - 1 = 0$
From Complex $4$th Roots of Unity, the roots of $(2)$ are:

$m_1 = 1$
$m_2 = i$
$m_3 = -1$
$m_4 = -i$
So from Solution of Constant Coefficient Linear nth Order ODE, the general solution of $(2)$ is:

$y_g = C_1 e^x + C_2 e^{-x} + C_3 \sin x + C_4 \cos x$

Because $\sin x$ is already a solution of $(2)$, we try:

$y = A x e^{i x}$
with a view to taking the real part in due course.















\(\ds y\)

\(=\)







\(\ds A x e^{i x}\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds A e^{i x} + A i x e^{i x}\)




















\(\ds \)

\(=\)







\(\ds A \paren {1 + i x} e^{i x}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds A \paren {1 + i x} i e^{i x} + A i e^{i x}\)




















\(\ds \)

\(=\)







\(\ds A \paren {2 i - x} e^{i x}\)














\(\ds \leadsto \ \ \)





\(\ds y^{\paren 3}\)

\(=\)







\(\ds A \paren {2 i - x} i e^{i x} - A e^{i x}\)




















\(\ds \)

\(=\)







\(\ds A \paren {-3 - i x} e^{i x}\)














\(\ds \leadsto \ \ \)





\(\ds y^{\paren 4}\)

\(=\)







\(\ds A \paren {-3 - i x} i e^{i x} - i e^{i x}\)




















\(\ds \)

\(=\)







\(\ds A \paren {x - 4 i} e^{i x}\)









It follows that

$-4 i A - 1$
and so:

$A = -\dfrac 1 4$

Thus a particular solution to $(1)$ can be given as:














\(\ds y_p\)

\(=\)







\(\ds \map \Im {\dfrac 1 4 i x e^{i x} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x \cos x} 4\)









and the general solution is:

$y = C_1 e^x + C_2 e^{-x} + C_3 \sin x + C_4 \cos x + \dfrac {x \cos x} 4$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 3$. Equations of higher order and systems of first order equations: $\S 3.1$ The $n$th order equation: Example $1$




