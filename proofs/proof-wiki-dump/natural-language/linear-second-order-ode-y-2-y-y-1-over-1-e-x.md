# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_y_%3D_1_over_1_%2B_e%5Ex

Theorem
The second order ODE:

$(1): \quad y - 2 y' + y = \dfrac 1 {1 + e^x}$
has a particular solution:

$y = 1 + e^x \ds \int \map \ln {1 + e^{-x} } \rd x$


Proof













\(\ds \paren {D^2 - 2 D + 1} y\)

\(=\)







\(\ds \dfrac 1 {1 + e^x}\)





expressing $(1)$ in a different form








\(\ds \leadsto \ \ \)





\(\ds \paren {D^2 - 1}^2 y\)

\(=\)







\(\ds \dfrac 1 {1 + e^x}\)





and in a different form again








\(\ds \leadsto \ \ \)





\(\ds \paren {D - 1} z\)

\(=\)







\(\ds \dfrac 1 {1 + e^x}\)





putting $\paren {D - 1} y = z$








\(\ds \leadsto \ \ \)





\(\ds \map D {z e^{-x} }\)

\(=\)







\(\ds \dfrac {e^{-x} } {1 + e^x}\)





Solution to Linear First Order ODE with Constant Coefficients: integrating factor $e^x$














\(\ds \)

\(=\)







\(\ds \dfrac {e^{-2 x} } {1 + e^{-x} }\)





multiplying top and bottomof right hand side by $e^{-x}$








\(\ds \leadsto \ \ \)





\(\ds z e^{-x}\)

\(=\)







\(\ds \int \dfrac {e^{-2 x} } {1 + e^{-x} } \rd x\)





integrating both sides with respect to $x$














\(\ds \)

\(=\)







\(\ds -\int \dfrac u {1 + u} \rd u\)





Integration by Substitution: setting $e^{-x} = u$














\(\ds \)

\(=\)







\(\ds -\int 1 - \dfrac 1 {1 + u} \rd u\)




















\(\ds \)

\(=\)







\(\ds -u + \map \ln {1 + u}\)





Primitive of Constant, Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds -e^{-x} + \map \ln {1 + e^{-x} }\)





substituting back for $u$




Then we need to solve:














\(\ds \paren {D - 1}y\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \map D {y e^{-x} }\)

\(=\)







\(\ds z e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds y e^{-x}\)

\(=\)







\(\ds e^{-x} + \int \map \ln {1 + e^{-x} } \rd x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 1 + e^x \int \map \ln {1 + e^{-x} } \rd x\)









and so on.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.8$ Recapitulation: Example $10$




