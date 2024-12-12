# 

Source: https://proofwiki.org/wiki/Bounds_for_Modulus_of_e%5Ez_on_Circle_x%5E2_%2B_y%5E2_-_2x_-_2y_-_2_%3D_0

Theorem
Consider the circle $C$ embedded in the complex plane defined by the equation:

$x^2 + y^2 - 2 x - 2 y - 2 = 0$
Let $z = x + i y \in \C$ be a point lying on $C$.

Then:

$e^{-1} \le \cmod {e^z} \le e^3$


Proof













\(\ds x^2 + y^2 - 2 x - 2 y - 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {x - 1}^2 - 1} + \paren {\paren {y - 1}^2 - 1} - 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - 1}^2 + \paren {y - 1}^2\)

\(=\)







\(\ds 4\)









This defines a circle whose center is at $1 + i$ and whose radius is $2$.

From Modulus of Exponential is Exponential of Real Part:

$\cmod {e^z} = e^x$
If $z \in C$ then from the geometry of the circle $C$:

$-1 \le x \le 3$
Then from Exponential is Strictly Increasing:

$e^{-1} \le e^x \le e^3$
Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $5$




