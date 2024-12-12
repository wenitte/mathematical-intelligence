# 

Source: https://proofwiki.org/wiki/Derivative_of_Product_of_Real_Function_and_Vector-Valued_Function

Theorem
Let:

$\mathbf z:\R \to \R^n$
be a differentiable vector-valued function, where:

$\mathbf{z} = \begin{bmatrix} z_1 \\ z_2 \\ \vdots \\ z_n \end{bmatrix}$
such that:

$z_1, z_2, \cdots, z_n$
are differentiable real functions.
Let:

$y: \R \to \R$
be a differentiable real function.

Then:

$D_x \left({y \, \mathbf z}\right) = \dfrac {\d y} {\d x} \mathbf z + y \dfrac {\d \mathbf z} {\d x}$


Proof













\(\ds D_x \left({y \, \mathbf{z} }\right)\)

\(=\)







\(\ds D_x \left({\begin{bmatrix} y \ z_1 \\ y \ z_2 \\ \vdots \\ y \ z_n \end{bmatrix} }\right)\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} D_x \left({y \ z_1}\right) \\ D_x \left({y \ z_2 }\right) \\ \vdots \\ D_x \left({y \ z_n }\right) \end{bmatrix}\)





Differentiation of Vector-Valued Function Componentwise














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \dfrac {\d y} {\d x} z_1 + y \dfrac {\d z_1} {\d x} \\ \dfrac {\d y} {\d x}z_2 + y \dfrac {\d z_2} {\d x} \\ \vdots \\ \dfrac {\d y} {\d x} z_n + y \dfrac {\d z_n} {\d x} \end{bmatrix}\)





Product Rule for Derivatives of Real Functions














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \dfrac {\d y} {\d x} z_1 \\ \dfrac {\d y} {\d x} z_2 \\ \vdots \\ \dfrac {\d y} {\d x} z_n \end{bmatrix} + \begin{bmatrix} y \dfrac {\d z_1} {\d x} \\ y \dfrac {\d z_2} {\d x} \\ \vdots \\ y \dfrac {\d z_n} {\d x} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d y} {\d x} \begin{bmatrix} z_1 \\ z_2 \\ \vdots \\ z_n \end{bmatrix} + y \begin{bmatrix} \dfrac {\d z_1} {\d x} \\ \dfrac {\d z_2} {\d x} \\ \vdots \\ \dfrac {\d z_n} {\d x} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d y} {\d x} \mathbf z + y \frac {\d \mathbf z} {\d x}\)





Differentiation of Vector-Valued Function Componentwise



$\blacksquare$


Also see
Derivative of Vector Cross Product of Vector-Valued Functions
Derivative of Dot Product of Vector-Valued Functions




