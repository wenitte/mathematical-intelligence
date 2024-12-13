# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/(x%5E2_%2B_2_y%27)_y%27%27_%2B_2_x_y%27_%3D_0

Theorem
The second order ODE:

$(1): \quad \paren {x^2 + 2 y'} y + 2 x y' = 0$
subject to the initial conditions:

$y = 1$ and $y' = 0$ when $x = 0$
has the particular solution:

$y = 1$
or:

$3 y + x^3 = 3$


Proof
The proof proceeds by using Solution of Second Order Differential Equation with Missing Dependent Variable.
Substitute $p$ for $y'$ in $(1)$:














\(\ds \paren {x^2 + 2 p} \dfrac {\d p} {\d x} + 2 x p\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 2 x p \rd x + \paren {x^2 + 2 p} \rd p\)

\(=\)







\(\ds 0\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds p \paren {x^2 + p}\)

\(=\)







\(\ds C_1\)





Bernoulli's Equation: $2 x y \rd x + \paren {x^2 + 2 y} \rd y = 0$




Consider the initial condition:

$y' = p = 0$ when $x = 0$
Hence putting $p = x = 0$ in $(2)$ we get:

$0 \cdot 0^2 + 0^2 = C_1$
$C_1 = 0$
and so $(2)$ becomes:














\(\ds p x^2\)

\(=\)







\(\ds -p^2\)














\(\ds \leadsto \ \ \)





\(\ds p \paren {x^2 - p}\)

\(=\)







\(\ds 0\)










There are two possibilities here:














\(\ds p\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C_2\)










From our initial condition:

$y = 1$ when $x = 0$
gives us:

$C_2 = 1$
and so the solution is obtained:

$y = 1$
$\Box$

The other option is:














\(\ds p = \dfrac {\d y} {\d x}\)

\(=\)







\(\ds -x^2\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\int x^2 \rd x\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds -\frac {x^3} 3 + C_2\)









From our initial condition:

$y = 1$ when $x = 0$
Hence putting $x = 0$ and $y = 1$ in $(3)$ we get:

$1 = - \dfrac {0^3} 3 = C_2$
and so $C_2 = 1$.
Thus we have:

$y + \dfrac {x^3} 3 = 1$
or:

$3 y + x^3 = 3$

Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $2 \ \text{(a)}$




