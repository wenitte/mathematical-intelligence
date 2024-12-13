# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_x_ln_y%5E2_%2B_y_e%5Ez

Theorem
Let:

$\map f {x, y, z} = x \ln y^2 + y e^z$
Then:














\(\ds \map {f_1} {1, -1, 0}\)

\(=\)







\(\ds 0\)




















\(\ds \map {f_2} {x, x y, y + z}\)

\(=\)







\(\ds \dfrac 2 y + e^{y + z}\)











Proof













\(\ds \map {f_1} {x, y, z}\)

\(=\)







\(\ds \ln y^2\)





Derivative of Constant Multiple, Derivative of Identity Function, holding $y$ and $z$ constant








\(\ds \leadsto \ \ \)





\(\ds \map {f_1} {1, -1, 0}\)

\(=\)







\(\ds \map \ln {\paren {-1}^2}\)





substituting $\tuple {1, -1, 0}$ for $\tuple {x, y, z}$














\(\ds \)

\(=\)







\(\ds \ln 1\)





simplifying














\(\ds \)

\(=\)







\(\ds 0\)





Natural Logarithm of 1 is 0



$\Box$















\(\ds \map {f_2} {x, y, z}\)

\(=\)







\(\ds \map {\dfrac \partial {\partial y} } {x \ln y^2 + y e^z}\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds \dfrac x {y^2} \cdot 2 y + e^z\)





Derivative of Natural Logarithm, Power Rule for Derivatives, Chain Rule for Derivatives, holding $x$ and $z$ constant














\(\ds \)

\(=\)







\(\ds \dfrac {2 x} y + e^z\)





simplification








\(\ds \leadsto \ \ \)





\(\ds \map {f_2} {x, x y, y + z}\)

\(=\)







\(\ds \dfrac {2 x} {x y} + e^{y + z}\)





substituting $\tuple {x, x y, y + z}$ for $\tuple {x, y, z}$














\(\ds \)

\(=\)







\(\ds \dfrac 2 y + e^{y + z}\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $7$




