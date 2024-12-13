# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/x%5E(x_y)



Example of Partial Derivative
Let $\map f {x, y} = x^{x y}$ be a real function of $2$ variables such that $x, y \in \R_{>0}$.
Then:














\(\ds \dfrac {\partial f} {\partial x}\)

\(=\)







\(\ds x^{x y} \paren {y \ln x + y}\)




















\(\ds \dfrac {\partial f} {\partial y}\)

\(=\)







\(\ds x^{x y + 1} \ln x\)











Proof
With Respect to $x$
By definition, the partial derivative with respect to $x$ is obtained by holding $y$ constant.
Hence Derivative of $x^{a x}$ can be directly used:

$\dfrac \d {\d x} x^{y x} = y x^{y x} \paren {\ln x + 1}$
The result can then be rearranged to match the form given.
$\blacksquare$


With Respect to $y$
By definition, the partial derivative with respect to $y$ is obtained by holding $x$ constant.
From Derivative of Power of Constant:

$\map {D_y} {x^y} = x^y \ln x$
for constant $a$.
Then:














\(\ds \map {D_y} {x^{x y} }\)

\(=\)







\(\ds x \map {D_{x y} } {x^{x y} }\)





Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \paren {x^{x y} } \ln x\)




















\(\ds \)

\(=\)







\(\ds x^{x y + 1} \ln x\)









$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: $1.1$ Partial Derivatives: Example $\text A$




