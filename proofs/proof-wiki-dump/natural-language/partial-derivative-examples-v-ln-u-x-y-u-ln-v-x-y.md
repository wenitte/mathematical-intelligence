# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/v_%2B_ln_u_%3D_x_y,_u_%2B_ln_v_%3D_x_-_y



Example of Partial Derivative
Consider the simultaneous equations:

$\begin {cases} v + \ln u = x y \\ u + \ln v = x - y \end {cases}$

Then:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\begin {vmatrix} y u & u \\ v & 1 \end {vmatrix} } {\begin {vmatrix} 1 & u \\ v & 1 \end {vmatrix} }\)

\(\ds = \dfrac {u \paren {y - v} } {1 - u v}\)


















\(\ds \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \dfrac {\begin {vmatrix} 1 & y u \\ v & v \end {vmatrix} } {\begin {vmatrix} 1 & u \\ v & 1 \end {vmatrix} }\)

\(\ds = \dfrac {v \paren {1 - y u} } {1 - u v}\)









Second Partial Derivative
$\dfrac {\partial^2 u} {\partial x^2} = \dfrac {u \paren {\paren {y - v}^2 - v \paren {\paren {1 - y u} + u \dfrac {y - v} {1 - u v} \paren {1 + y - v - y u} } } } {\paren {1 - u v}^2}$


Proof













\(\ds v + \ln u\)

\(=\)







\(\ds x y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \partial {\partial x} } {v + \ln u}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {x y}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial v} {\partial x} + \dfrac 1 u \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds y\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} + u \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds y u\)
























\(\ds u + \ln v\)

\(=\)







\(\ds x - y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \partial {\partial x} } {u + \ln v}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {x - y}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x} + \dfrac 1 v \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds 1\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds v \dfrac {\partial u} {\partial x} +  \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds v\)










and so combining $(1)$ and $(2)$ into matrix form:

$\begin {pmatrix} 1 & u \\ v & 1 \end {pmatrix} \begin {pmatrix} \dfrac {\partial u} {\partial x} \\ \dfrac {\partial v} {\partial x} \end {pmatrix} = \begin {pmatrix} y u \\ v \end {pmatrix}$

Hence by Cramer's Rule:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\begin {vmatrix} y u & u \\ v & 1 \end {vmatrix} } {\begin {vmatrix} 1 & u \\ v & 1 \end {vmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {u \paren {y - v} } {1 - u v}\)





Definition of Determinant



and:














\(\ds \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \dfrac {\begin {vmatrix} 1 & y u \\ v & v \end {vmatrix} } {\begin {vmatrix} 1 & u \\ v & 1 \end {vmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {v \paren {1 - y u} } {1 - u v}\)





Definition of Determinant



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: $1.2$ Implicit Functions: Example $\text C$




