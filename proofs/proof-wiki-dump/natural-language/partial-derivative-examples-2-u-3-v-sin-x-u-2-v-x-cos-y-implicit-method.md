# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/2_u_%2B_3_v_%3D_sin_x,_u_%2B_2_v_%3D_x_cos_y/Implicit_Method

Example of Partial Derivative
Consider the simultaneous equations:

$\begin {cases} 2 u + 3 v & = \sin x \\ u + 2 v & = x \cos y \end {cases}$

Then:

$\map {u_1} {\dfrac \pi 2, \pi} = 3$


Proof
By definition of partial derivative:

$\map {u_1} {\dfrac \pi 2, \pi} = \valueat {\dfrac {\partial u} {\partial x} } {x \mathop = \frac \pi 2, y \mathop = \pi}$
hence the motivation for the abbreviated notation on the left hand side.















\(\ds 2 u + 3 v\)

\(=\)







\(\ds \sin x\)














\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \partial {\partial x} } {2 u + 3 v}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {\sin x}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 \dfrac {\partial u} {\partial x} + 3 \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \cos x\)
























\(\ds u + 2 v\)

\(=\)







\(\ds x \cos y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \partial {\partial x} } {u + 2 v}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {x \cos y}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} + 2 \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \cos y\)










Combining $(1)$ and $(2)$ into matrix form:

$\begin {pmatrix} 2 & 3 \\ 1 & 2 \end {pmatrix} \begin {pmatrix} \dfrac {\partial u} {\partial x} \\ \dfrac {\partial v} {\partial x} \end {pmatrix} = \begin {pmatrix} \cos x \\ \cos y \end {pmatrix}$

Hence by Cramer's Rule:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\begin {vmatrix} \cos x & 3 \\ \cos y & 2 \end {vmatrix} } {\begin {vmatrix} 2 & 3 \\ 1 & 2 \end {vmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \cos x - 3 \cos y} {2 \times 2 - 1 \times 3}\)





Definition of Determinant














\(\ds \)

\(=\)







\(\ds 2 \cos x - 3 \cos y\)





simplifying



Hence:














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




