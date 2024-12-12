# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(2_x_%2B_3_y_%2B_1)_dx_%2B_(2_y_-_3_x_%2B_5)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {2 x + 3 y + 1} \rd x + \paren {2 y - 3 x + 5} \rd y = 0$
has the general solution:

$3 \, \map \arctan {\dfrac {y + 1} {x - 1} } = \map \ln {\paren {y + 1}^2 + \paren {x - 1}^2} + C$


Proof
Rewriting $(1)$ as:

$\dfrac {\d y} {\d x} = -\dfrac {2 x + 3 y + 1} {-3 x + 2 y + 5}$
we note that it is in the form:

$\dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
where:

$a e = -4 \ne b d = 9$
Hence we can use:

First Order ODE in form $y' = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
which can be solved by substituting:

$x := z - h$
$y := w - k$
where:

$h = \dfrac {c e - b f} {a e - b d}$
$k = \dfrac {a f - c d} {a e - b d}$

So let:

$x = z - h$ where $h = \dfrac {\paren {1 \times 2} - \paren {3 \times 5} } {\paren {2 \times 2} - \paren {3 \times -3} } = \dfrac {-13} {13} = -1$
$y = w - k$ where $k = \dfrac {\paren {2 \times 5} - \paren {1 \times -3} } {\paren {2 \times 2} - \paren {3 \times -3} } = \dfrac {13} {13} = 1$
Then $(1)$ is transformed into:

$(2): \quad \dfrac {\d w} {\d z} = -\dfrac {2 z + 3 w} {3 z - 2 w}$

Let:

$\map M {w, z} =  2 z + 3 w$
$\map N {w, z} =  3 z - 2 w$
We have that:

$\map M {t w, t z} =  2 t z + 3 t w = t \paren {2 z + 3 w} = t \, \map M {x, y}$
$\map N {t w, t z} =  3 t z - 2 t w = t \paren {3 z - 2 w} = t \, \map N {x, y}$
Thus both $M$ and $N$ are homogeneous functions of degree $1$.
Thus by definition $(2)$ is a homogeneous differential equation.

So:














\(\ds \frac {\d w} {\d z}\)

\(=\)







\(\ds \frac {2 z + 3 w} {3 z - 2 w}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 + 3 w / z} {3 - 2 w / z}\)





dividing top and bottom by $x$














\(\ds \)

\(=\)







\(\ds \frac {2 + 3 u} {3 - 2 u}\)





substituting $u$ for $w / z$




By Solution to Homogeneous Differential Equation:

$\ds \ln z = \int \frac {\d u} {\map f {1, u} - u} + C$
where:

$\map f {1, u} = \dfrac {2 + 3 u} {3 - 2 u}$

Hence:














\(\ds \ln z\)

\(=\)







\(\ds \int \frac {\d u} {\dfrac {2 + 3 u} {3 - 2 u} - u} + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {3 - 2 u} \rd z} {2 + 3 u - u \paren {3 - 2 u} } + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {3 - 2 u} \rd v} {2 \paren {1 + u^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 3 2 \int \dfrac {\d u} {1 + u^2} - \int \dfrac {u \rd u} {1 + u^2} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 3 2 \arctan u - \dfrac 1 2 \, \map \ln {1 + u^2} + C\)










Replacing all the substitutions:

$\map \ln {x - 1} = \dfrac 3 2 \, \map \arctan {\dfrac {y + 1} {x - 1} } - \dfrac 1 2 \, \map \ln {1 + \paren {\dfrac {y + 1} {x - 1} } } + C$
Tidying up and reassigning constants appropriately:

$3 \, \map \arctan {\dfrac {y + 1} {x - 1} } = \map \ln {\paren {y + 1}^2 + \paren {x - 1}^2} + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $3$




