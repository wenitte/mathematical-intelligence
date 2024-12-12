# 

Source: https://proofwiki.org/wiki/First_Order_ODE_in_form_y%27_%3D_F_((a_x_%2B_b_y_%2B_c)_over_(d_x_%2B_e_y_%2B_f))_where_a_e_%3D_b_d/Formulation_2

Theorem
The first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
such that:

$a e = b d$

can be solved by substituting:

$z = d x + e y$

to obtain:

$\dfrac {\d z} {\d x} = e \map F {\dfrac {b z + e c} {e z + e f} } + d$
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














\(\ds d x + e y + f\)

\(=\)







\(\ds d z - d r y + e y + f\)














\(\ds \leadsto \ \ \)





\(\ds a x + b y + c\)

\(=\)







\(\ds a z - a r y + \dfrac {a e} d y + c\)





noting that $b = \dfrac {a e} d$




To make $(1)$ separable: we make:

$e = d r$
and:

$a r = \dfrac {a e} d$
which comes to the same thing: that $r = \dfrac e d$.
So, we can make the substitution:

$z = d x + e y$
so:

$\dfrac {\d z} {\d x} = d + e \dfrac {\d y} {\d x}$
which leaves us with:














\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds e \map F {\dfrac {\frac b e z + c} {z + f} } + d\)




















\(\ds \)

\(=\)







\(\ds e \map F {\dfrac {b z + e c} {e z + e f} } + d\)









$\blacksquare$





