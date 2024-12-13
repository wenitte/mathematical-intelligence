# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_x_tan%5E-1_(x%5E2_%2B_y)

Theorem
Let:

$\map f {x, y} = x \map \arctan {x^2 + y}$
Then:














\(\ds \map {f_1} {1, 0}\)

\(=\)







\(\ds \dfrac \pi 4 + 1\)




















\(\ds \map {f_2} {x, y}\)

\(=\)







\(\ds \dfrac x {1 + \paren {x^2 + y}^2}\)











Proof













\(\ds \map {f_1} {x, y}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {x \map \arctan {x^2 + y} }\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds \map \arctan {x^2 + y} \map {\dfrac \partial {\partial x} } x + x \map {\dfrac \partial {\partial x} } {\map \arctan {x^2 + y} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map \arctan {x^2 + y} + x \cdot \dfrac 1 {1 + \paren {x^2 + y}^2} \cdot 2 x\)





Product Rule for Derivatives, Derivative of Arctangent Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map \arctan {x^2 + y} + \dfrac {2 x^2} {1 + \paren {x^2 + y}^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map {f_1} {1, 0}\)

\(=\)







\(\ds \map \arctan {1^2 + 0} + \dfrac {2 \times 1^2} {1 + \paren {1^2 + 0}^2}\)





substituting $x = 1$ and $y = 0$














\(\ds \)

\(=\)







\(\ds \map \arctan 1 + \dfrac 2 2\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac \pi 4 + 1\)





Tangent of $45 \degrees$



$\Box$















\(\ds \map {f_2} {x, y}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial y} } {x \map \arctan {x^2 + y} }\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds x \dfrac 1 {1 + \paren {x^2 + y}^2} \cdot 1\)





Derivative of Identity Function, Derivative of Arctangent Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac x {1 + \paren {x^2 + y}^2}\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $6$




