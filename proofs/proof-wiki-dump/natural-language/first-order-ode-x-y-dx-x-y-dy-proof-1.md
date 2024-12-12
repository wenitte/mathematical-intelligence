# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_%2B_y)_dx_%3D_(x_-_y)_dy/Proof_1

Theorem
The first order ordinary differential equation:

$(1): \quad \paren {x + y} \rd x = \paren {x - y} \rd y$

is a homogeneous differential equation with solution:

$\arctan \dfrac y x = \ln \sqrt{x^2 + y^2} + C$


Proof
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


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Example $1$




