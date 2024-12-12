# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_%2B_y)_dx_%3D_(x_-_y)_dy

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {x + y} \rd x = \paren {x - y} \rd y$

is a homogeneous differential equation with general solution:

$\arctan \dfrac y x = \ln \sqrt {x^2 + y^2} + C$


Proof 1
Let:

$\map M {x, y} =  x + y$
$\map N {x, y} =  x - y$
We have that:

$\map M {t x, t y} =  t x + t y = t \paren {x + y} = t \map M {x, y}$
$\map N {t x, t y} =  t x - t y = t \paren {x - y} = t \map N {x, y}$
Thus both $M$ and $N$ are homogeneous functions of degree $1$.
Thus by definition $(1)$ is a homogeneous differential equation.















\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {x + y} {x - y}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + y / x} {1 - y / x}\)





dividing top and bottom by $x$














\(\ds \)

\(=\)







\(\ds \frac {1 + z} {1 - z}\)





substituting $z$ for $y / x$




By Solution to Homogeneous Differential Equation:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {1, z} = \dfrac {1 + z} {1 - z}$

Hence:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {1 + z} {1 - z} - z}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {1 - z} \rd z} {1 + z - z \paren {1 - z} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {1 - z} \rd z} {1 + z^2}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {1 + z^2} - \int \frac {z \rd z} {1 + z^2}\)




















\(\ds \)

\(=\)







\(\ds \arctan z - \int \frac {z \rd z} {1 + z^2} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \arctan z - \frac 1 2 \map \ln {1 + z^2} + C\)





Primitive of $\dfrac x {x^2 + a^2}$




Substituting $y / x$ for $z$ reveals the solution:

$\arctan \dfrac y x = \ln \sqrt{x^2 + y^2} + C$
$\blacksquare$


Proof 2
We have:














\(\ds \paren {x + y} \rd x\)

\(=\)







\(\ds \paren {x - y} \rd y\)














\(\ds \leadsto \ \ \)





\(\ds x \rd y - y \rd x\)

\(=\)







\(\ds x \rd x + y \rd y\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \frac {x \rd y - y \rd x} {x^2 + y^2}\)

\(=\)







\(\ds \frac {x \rd x + y \rd y} {x^2 + y^2}\)





dividing through by $x^2 + y^2$








\(\ds \leadsto \ \ \)





\(\ds \frac {x \rd y - y \rd x} {x^2 + y^2}\)

\(=\)







\(\ds \frac {\map \d {x^2 + y^2} } {2 \paren {x^2 + y^2} }\)





Differential of Sum of Squares








\(\ds \leadsto \ \ \)





\(\ds \map \d {\arctan \dfrac y x}\)

\(=\)







\(\ds \frac {\map \d {x^2 + y^2} } {2 \paren {x^2 + y^2} }\)





Differential of Arctangent of Quotient








\(\ds \leadsto \ \ \)





\(\ds \arctan \dfrac y x\)

\(=\)







\(\ds \frac {\map \ln {x^2 + y^2} } 2 + C\)





integrating








\(\ds \leadsto \ \ \)





\(\ds \arctan \dfrac y x\)

\(=\)







\(\ds \ln \sqrt {x^2 + y^2} + C\)









$\blacksquare$





