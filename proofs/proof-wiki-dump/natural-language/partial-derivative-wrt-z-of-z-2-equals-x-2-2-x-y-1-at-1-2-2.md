# 

Source: https://proofwiki.org/wiki/Partial_Derivative_wrt_z_of_z%5E2_equals_x%5E2_-_2_x_y_-_1_at_(1,_-2,_-2)



Theorem
Let $z^2 = x^2 - 2 x y - 1$.
Then:

$\valueat {\dfrac {\partial z} {\partial x} } {x \mathop = 1, y \mathop = -2, z \mathop = -2} = -\dfrac 3 2$


Proof
First we make sure that $\tuple {1, -2, -2}$ actually satisfies the equation:














\(\ds x^2 - 2 x y - 1\)

\(=\)







\(\ds \paren 1^2 - 2 \paren 1 \paren {-2} - 1\)





at $\tuple {1, -2, -2}$














\(\ds \)

\(=\)







\(\ds 1 + 4 - 1\)




















\(\ds \)

\(=\)







\(\ds 4\)




















\(\ds \)

\(=\)







\(\ds \paren {-2}^2\)




















\(\ds \)

\(=\)







\(\ds z^2\)





at $\tuple {1, -2, -2}$



and it is seen that this is the case.
$\Box$


Explicit Method













\(\ds z^2\)

\(=\)







\(\ds x^2 - 2 x y - 1\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \pm \sqrt {x^2 - 2 x y - 1}\)










When $z = -2$ we have that $\sqrt {x^2 - 2 x y - 1} < 0$.
Hence:

$z = -\sqrt {x^2 - 2 x y - 1}$

Thus we continue:








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial z} {\partial x}\)

\(=\)







\(\ds -\frac 1 {2 \sqrt {x^2 - 2 x y - 1} } \cdot \paren {2 x - 2 y}\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\frac {2 x - 2 y} {2 \sqrt {x^2 - 2 x y - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \paren 1 - 2 \paren {-2} } {2 \sqrt {\paren 1^2 - 2 \paren 1 \paren {-2} - 1} }\)





substituting $x = 1$ and $y = -2$














\(\ds \)

\(=\)







\(\ds -\frac 6 {2 \sqrt 4}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 3 2\)





simplifying



$\blacksquare$


Implicit Method













\(\ds z^2\)

\(=\)







\(\ds x^2 - 2 x y - 1\)




















\(\ds 2 z \dfrac {\partial z} {\partial x}\)

\(=\)







\(\ds 2 x - 2 y\)





Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial z} {\partial x}\)

\(=\)







\(\ds \frac {2 \paren 1 - 2 \paren {-2} } {2 \paren {-2} }\)





substituting $x = 1$, $y = -2$ and $z = -2$














\(\ds \)

\(=\)







\(\ds \frac 6 {-4}\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 3 2\)





simplifying



$\blacksquare$





