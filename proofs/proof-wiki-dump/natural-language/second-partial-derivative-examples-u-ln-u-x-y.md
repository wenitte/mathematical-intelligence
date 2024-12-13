# 

Source: https://proofwiki.org/wiki/Second_Partial_Derivative/Examples/u_%2B_ln_u_%3D_x_y

Examples of Second Partial Derivative
Let $u + \ln u = x y$ be an implicit function.
Then:

$\dfrac {\partial^2 u} {\partial y \partial x} = \dfrac {\partial^2 u} {\partial x \partial y} = \dfrac u {u + 1} + \dfrac {x y u} {\paren {u + 1}^2}$


Proof
From Partial Derivative Examples: u + ln u = x y:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {u y} {u + 1}\)




















\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds \dfrac {u x} {u + 1}\)










Then:














\(\ds \dfrac {\partial^2 u} {\partial y \partial x}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial y} } {\dfrac {u y} {u + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u + 1} \dfrac \partial {\partial y} u y - u y \dfrac \partial {\partial y} \paren {u + 1} } {\paren {u + 1}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u + 1} \paren {y \dfrac {\partial u} {\partial y} + u \dfrac {\partial y} {\partial y} } - u y \dfrac \partial {\partial y} \paren {u + 1} } {\paren {u + 1}^2}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u + 1} \paren {y \dfrac {\partial u} {\partial y} + u} } {\paren {u + 1}^2} - \dfrac {u y \dfrac {\partial u} {\partial y} } {\paren {u + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {u + 1} u} {\paren {u + 1}^2} + \dfrac {\paren {u + 1} y - u y } {\paren {u + 1}^2} \dfrac {\partial u} {\partial y}\)




















\(\ds \)

\(=\)







\(\ds \dfrac u {u + 1} + \dfrac y {\paren {u + 1}^2} \dfrac {\partial u} {\partial y}\)




















\(\ds \)

\(=\)







\(\ds \dfrac u {u + 1} + \dfrac y {\paren {u + 1}^2} \dfrac {u x} {u + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac u {u + 1} + \dfrac {x y u} {\paren {u + 1}^3}\)










Then we have that:

$\dfrac {\partial^2 u} {\partial x \partial y} = \map {\dfrac \partial {\partial x} } {\dfrac {u x} {u + 1} }$
which is exactly the same as:

$\dfrac {\partial^2 u} {\partial y \partial x} = \map {\dfrac \partial {\partial y} } {\dfrac {u y} {u + 1} }$
but with $y$ and $x$ exchanged.

Hence:














\(\ds \dfrac {\partial^2 u} {\partial x \partial y}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {\dfrac {u x} {u + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac u {u + 1} + \dfrac {y x u} {\paren {u + 1}^3}\)









and it is seen that the second partial derivatives are indeed the same.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: $1.3$ Higher Order Derivatives: Example $\text E$




