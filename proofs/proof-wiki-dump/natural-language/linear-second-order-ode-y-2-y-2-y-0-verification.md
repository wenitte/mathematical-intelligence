# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_y%27_%2B_2_y_%3D_0/Verification

Theorem
The equation:

$(1): \quad y = e^{-x} \paren {A \cos x + B \sin x}$
is a set of solutions to the second order ODE:

$y + 2 y' + 2 y = 0$


Proof
Differentiating $(1)$ twice with respect to $x$ gives:














\(\ds y'\)

\(=\)







\(\ds -e^{-x} \paren {A \cos x + B \sin x} + e^{-x} \paren {-A \sin x + B \cos x}\)




















\(\ds \)

\(=\)







\(\ds e^{-x} \paren {\paren {B - A} \cos x - \paren {A + B} \sin x}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -e^{-x} \paren {\paren {B - A} \cos x - \paren {A + B} \sin x} + e^{-x} \paren {-\paren {B - A} \sin x - \paren {A + B} \cos x}\)




















\(\ds \)

\(=\)







\(\ds e^{-x} \paren {-2 B \cos x + 2 A \sin x}\)





rearranging




Then:














\(\ds y + 2 y' + 2 y\)

\(=\)







\(\ds e^{-x} \paren {-2 B \cos x + 2 A \sin x} + 2 \paren {e^{-x} \paren {\paren {B - A} \cos x - \paren {A + B} \sin x} } + 2 e^{-x} \paren {A \cos x + B \sin x}\)




















\(\ds \)

\(=\)







\(\ds e^{-x} \paren {\paren {-2 B + 2 \paren {B - A} + 2 A} \cos x - \paren {2 A - 2 \paren {A + B} + 2 B} \sin x}\)





rearranging














\(\ds \)

\(=\)







\(\ds 0\)





simplifying



thus demonstrating that $(1)$ is indeed a solution to the second order ODE given.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.1$ The reduced equation: Example $1$




