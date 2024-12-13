# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/2_u_%2B_3_v_%3D_sin_x,_u_%2B_2_v_%3D_x_cos_y/Explicit_Method

Example of Partial Derivative
Consider the simultaneous equations:

$\begin {cases} 2 u + 3 v & = \sin x \\ u + 2 v & = x \cos y \end {cases}$

Then:

$\map {u_1} {\dfrac \pi 2, \pi} = 3$


Proof
By definition of partial derivative:

$\map {u_1} {\dfrac \pi 2, \pi} = \valueat {\dfrac {\partial u} {\partial x} } {x \mathop = \frac \pi 2, y \mathop = \pi}$
hence the motivation for the abbreviated notation on the left hand side.

We have:

$2 u + 3 v = \sin x$
Thus:














\(\ds u\)

\(=\)







\(\ds \dfrac {\sin x - 3 v} 2\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\cos x} 2 - \dfrac 3 2 \dfrac {\partial v} {\partial x}\)










Then we have:

$u + 2 v = x \cos y$
Thus:














\(\ds v\)

\(=\)







\(\ds \dfrac {x \cos y - u} 2\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \dfrac {\cos y} 2 - \dfrac 1 2 \dfrac {\partial u} {\partial x}\)










Substituting $\dfrac {\partial v} {\partial x}$ from $(2)$ into $(1)$ gives:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\cos x} 2 - \dfrac 3 2 \paren {\dfrac {\cos y} 2 - \dfrac 1 2 \dfrac {\partial u} {\partial x} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\cos x} 2 - \dfrac {3 \cos y} 4 + \dfrac 3 4 \dfrac {\partial u} {\partial x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} \paren {1 - \dfrac 3 4}\)

\(=\)







\(\ds \dfrac {\cos x} 2 - \dfrac {3 \cos y} 4\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds 2 \cos x - 3 \cos y\)














\(\ds \leadsto \ \ \)





\(\ds \map {u_1} {\dfrac \pi 2, \pi}\)

\(=\)







\(\ds 2 \map \cos {\dfrac \pi 2} - 3 \cos \pi\)




















\(\ds \)

\(=\)







\(\ds 2 \times 0 - 3 \times \paren {-1}\)





Cosine of Right Angle, Cosine of Straight Angle














\(\ds \)

\(=\)







\(\ds 3\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $14$




