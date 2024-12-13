# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_tan%5E2_(x%5E2_-_y%5E2)

Theorem
Let:

$\map f {x, y} = \map {\tan^2} {x^2 - y^2}$
Then:














\(\ds \map {f_1} {x, y}\)

\(=\)







\(\ds 4 x \map \tan {x^2 - y^2} \map {\sec^2} {x^2 - y^2}\)




















\(\ds \map {f_2} {1, 2}\)

\(=\)







\(\ds 8 \tan 3 \sec^2 3\)











Proof













\(\ds \map {f_1} {x, y}\)

\(=\)







\(\ds \dfrac \partial {\partial x} {\map {\tan^2} {x^2 - y^2} }\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds 2 \map \tan {x^2 - y^2} \map {\sec^2} {x^2 - y^2} \cdot 2 x\)





Derivative of Square of Tangent, Derivative of Square Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 4 x \map \tan {x^2 - y^2} \map {\sec^2} {x^2 - y^2}\)





simplifying



$\Box$















\(\ds \map {f_2} {x, y}\)

\(=\)







\(\ds \dfrac \partial {\partial y} {\map {\tan^2} {x^2 - y^2} }\)





Definition of Partial Derivative














\(\ds \)

\(=\)







\(\ds 2 \map \tan {x^2 - y^2} \map {\sec^2} {x^2 - y^2} \cdot \paren {-2 y}\)





Derivative of Square of Tangent, Derivative of Square Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -4 y \map \tan {x^2 - y^2} \map {\sec^2} {x^2 - y^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map {f_2} {1, 2}\)

\(=\)







\(\ds -4 \paren 2 \map \tan {1^2 - 2^2} \map {\sec^2} {1^2 - 2^2}\)




















\(\ds \)

\(=\)







\(\ds -8 \map \tan {-3} \map {\sec^2} {-3}\)




















\(\ds \)

\(=\)







\(\ds -8 \paren {-\tan 3} \sec^2 3\)





Tangent Function is Odd, Secant Function is Even














\(\ds \)

\(=\)







\(\ds 8 \tan 3 \sec^2 3\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $3$




