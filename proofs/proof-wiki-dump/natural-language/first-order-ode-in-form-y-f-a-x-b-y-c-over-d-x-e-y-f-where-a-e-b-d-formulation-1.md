# 

Source: https://proofwiki.org/wiki/First_Order_ODE_in_form_y%27_%3D_F_((a_x_%2B_b_y_%2B_c)_over_(d_x_%2B_e_y_%2B_f))_where_a_e_%3D_b_d/Formulation_1

Theorem
The first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
such that:

$a e = b d$

can be solved by substituting:

$z = a x + b y$

to obtain:

$\dfrac {\d z} {\d x} = b \map F {\dfrac {a z + a c} {d z + f} } + a$
which can be solved by Solution to Separable Differential Equation.


Proof
When $a e = b d$, it is not possible to make the substitutions:

$x := z - h$
$y := w - k$
where:

$h = \dfrac {c e - b f} {a e - b d}$
$k = \dfrac {a f - c d} {a e - b d}$
and so to use the technique of First Order ODE in form $y' = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$.
So, we consider what needs to be done to make $(1)$ separable.

Let us make the substitution:

$z = x + r y$
Consider what, if any, value of $r$ would make $(1)$ separable.
We have:














\(\ds a x + b y + c\)

\(=\)







\(\ds a z - a r y + b y + c\)














\(\ds \leadsto \ \ \)





\(\ds d x + e y + f\)

\(=\)







\(\ds d z - d r y + \frac {b d} a y + f\)





noting that $e = \dfrac {b d} a$




To make $(1)$ separable: we make:

$b = a r$
and:

$d r = \dfrac {b d} a$
which comes to the same thing: that $r = \dfrac b a$.
So, we can make the substitution:

$z = a x + b y$
so:

$\dfrac {\d z} {\d x} = a + b \dfrac {\d y} {\d x}$
which leaves us with:














\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds b \map F {\dfrac {z + c} {\frac d a z + f} } + a\)




















\(\ds \)

\(=\)







\(\ds b \map F {\dfrac {a z + a c} {d z + f} } + a\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differential equation: differential equations of the first order and first degree: $(4)$ Equations reducible to homogeneous form
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differential equation: differential equations of the first order and first degree: $(4)$ Equations reducible to homogeneous form




