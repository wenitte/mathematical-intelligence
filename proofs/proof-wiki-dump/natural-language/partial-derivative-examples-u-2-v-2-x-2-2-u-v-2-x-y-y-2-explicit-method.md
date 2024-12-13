# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/u%5E2_%2B_v%5E2_%3D_x%5E2,_2_u_v_%3D_2_x_y_%2B_y%5E2/Explicit_Method



Example of Partial Derivative
Consider the simultaneous equations:














\(\ds u^2 + v^2\)

\(=\)







\(\ds x^2\)




















\(\ds 2 u v\)

\(=\)







\(\ds 2 x y + y^2\)









Then:

$\map {u_1} {1, -2} = 1$
at $u = 1$, $v = 0$.


Proof
By definition of partial derivative:

$\map {u_1} {1, -2} = \valueat {\dfrac {\partial u} {\partial x} } {x \mathop = 1, y \mathop = -2}$
hence the motivation for the abbreviated notation on the left hand side.


Lemma
Consider the simultaneous equations:














\(\ds u^2 + v^2\)

\(=\)







\(\ds x^2\)




















\(\ds 2 u v\)

\(=\)







\(\ds 2 x y + y^2\)









Then:

$x = 1$, $y = -2$ is a solution at $u = 1$, $v = 0$.
$\Box$

We have:














\(\ds u^2 + v^2\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds \sqrt {x^2 - v^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac 1 {2 \paren {\sqrt {x^2 - v^2} } } \paren {2 x - 2 v \dfrac {\partial v} {\partial x} }\)





Power Rule for Derivatives, Chain Rule for Derivatives




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {x - v \dfrac {\partial v} {\partial x} } {\sqrt {x^2 - v^2} }\)





simplifying



At this point we investigate the sign of $\sqrt {x^2 - v^2}$ which is needed.
We see that:














\(\ds u\)

\(=\)







\(\ds \sqrt {x^2 - v^2}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds +\sqrt {x^2 - v^2}\)









Hence when we are at the point of plugging in numbers we will need to take the positive square root.

Then we have:














\(\ds 2 u v\)

\(=\)







\(\ds 2 x y + y^2\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \dfrac {2 x y + y^2} {2 u}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial v} {\partial x}\)

\(=\)







\(\ds \dfrac {2 u \map {\dfrac \partial {\partial x} } {2 x y + y^2} - \paren {2 x y + y^2} \map {\dfrac \partial {\partial x} } {2 u} } {\paren {2 u}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {2 u \times 2 x - \paren {2 x y + y^2} 2 \dfrac {\partial u} {\partial x} } {4 u^2}\)





Power Rule for Derivatives, Chain Rule for Derivatives




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {2 u x - \paren {2 x y + y^2} \dfrac {\partial u} {\partial x} } {2 u^2}\)





Power Rule for Derivatives, Chain Rule for Derivatives




Substituting $\dfrac {\partial v} {\partial x}$ from $(2)$ into $(1)$ gives:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {x - v \paren {\dfrac {2 u x - \paren {2 x y + y^2} \dfrac {\partial u} {\partial x} } {2 u^2} } } {\sqrt {x^2 - v^2} }\)










Could rearrange and simplify, but easier to substitute the values of $x$ and $y$ at this point:












\(\ds \)

\(=\)







\(\ds \dfrac {1 - 0 \times \paren {\cdots} } {+\sqrt {1^2 - 0^2} }\)





$v$ vanishes, hence the big parenthesis is irrelevant














\(\ds \)

\(=\)







\(\ds 1\)





simplifying



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $15$




