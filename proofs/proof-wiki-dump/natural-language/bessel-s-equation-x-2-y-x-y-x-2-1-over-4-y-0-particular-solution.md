# 

Source: https://proofwiki.org/wiki/Bessel%27s_Equation/x%5E2_y%27%27_%2B_x_y%27_%2B_(x%5E2_-_(1_over_4))_y_%3D_0/Particular_Solution

Theorem
The special case of Bessel's equation:

$(1): \quad x^2 y + x y' + \paren {x^2 - \dfrac 1 4} y = 0$
has a particular solution:

$y = \dfrac {\sin x} {\sqrt x}$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds \frac {\sin x} {\sqrt x}\)




















\(\ds \)

\(=\)







\(\ds x^{-1/2} \sin x\)














\(\ds \leadsto \ \ \)





\(\ds {y_1}'\)

\(=\)







\(\ds x^{-1/2} \cos x - \frac 1 2 x^{-3/2} \sin x\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_1}\)

\(=\)







\(\ds -x^{-1/2} \sin x - \frac 1 2 x^{-3/2} \cos x - \frac 1 2 x^{-3/2} \cos x + \frac 3 4 x^{-5/2} \sin x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\frac 3 4 x^{-5/2} - x^{-1/2} } \sin x - x^{-3/2} \cos x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 3 {4 x^2} - 1} x^{-1/2} \sin x - x^{-3/2} \cos x\)










Inserting into $(1)$, and gradually simplifying:














\(\ds \)

\(\)







\(\ds x^2 \paren {\paren {\frac 3 {4 x^2} - 1} x^{-1/2} \sin x - x^{-3/2} \cos x} + x \paren {x^{-1/2} \cos x - \frac 1 2 x^{-3/2} \sin x} + \paren {x^2 - \dfrac 1 4} x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 3 4 - x^2} x^{-1/2} \sin x - x^{1/2} \cos x + x^{1/2} \cos x - \frac 1 2 x^{-1/2} \sin x + x^{3/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 x^{-1/2} \sin x - x^{3/2} \sin x - \frac 1 2 x^{-1/2} \sin x + x^{3/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 x^{-1/2} \sin x - \frac 1 2 x^{-1/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds 0\)









hence demonstrating that:

$y_1 = \dfrac {\sin x} {\sqrt x}$
is a particular solution of $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $6$




