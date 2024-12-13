# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/x%5E(x_y)/wrt_y

Example of Partial Derivative
Let $\map f {x, y} = x^{x y}$ be a real function of $2$ variables such that $x, y \in \R_{>0}$.
Then:

$\dfrac {\partial f} {\partial y} = x^{x y + 1} \ln x$


Proof
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




