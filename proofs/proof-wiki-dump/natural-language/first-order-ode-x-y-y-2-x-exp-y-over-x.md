# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_y%27_%3D_y_%2B_2_x_exp_(-_y_over_x)

Theorem
The first order ordinary differential equation:

$(1): \quad x \dfrac {\d y} {\d x} = y + 2 x e^{-y/x}$

is a homogeneous differential equation with solution:

$e^{y / x} = \ln x^2 + C$


Proof
Let:

$\map M {x, y} = y + 2 x e^{-y/x}$
$\map N {x, y} = x$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds t y + 2 t x e^{-t y / t x}\)




















\(\ds \)

\(=\)







\(\ds t \paren {y + 2 x e^{-y / x} }\)




















\(\ds \)

\(=\)







\(\ds t \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds t x\)




















\(\ds \)

\(=\)







\(\ds t \, \map N {x, y}\)










Thus both $M$ and $N$ are homogeneous functions of degree $1$.
Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {y + 2 x e^{-y / x} } x$

Thus:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {z + 2 e^{-z} } 1 - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^z} 2 \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac {e^z} 2 + C_1\)





Primitive of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds 2 \ln x + C\)

\(=\)







\(\ds e^z\)





putting $C = -\dfrac {C_1} 2$








\(\ds \leadsto \ \ \)





\(\ds e^{y / x}\)

\(=\)







\(\ds \ln x^2 + C\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $1 \ \text{(e)}$




