# 

Source: https://proofwiki.org/wiki/First_Order_ODE_in_form_y%27_%3D_F_((a_x_%2B_b_y_%2B_c)_over_(d_x_%2B_e_y_%2B_f))



Theorem
The first order ODE:

$\dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
such that:

$ a e \ne b d$
can be solved by substituting:

$x := z - h$
$y := w - k$
where:

$h = \dfrac {c e - b f} {a e - b d}$
$k = \dfrac {a f - c d} {a e - b d}$
to obtain:

$\dfrac {\d w} {\d z} = \map F {\dfrac {a z + b w} {d z + e w} }$
which can be solved by the technique of Solution to Homogeneous Differential Equation.


Proof
We have:

$\dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
Make the substitutions:

$x := z - h$
$y := w - k$
We have:

$\dfrac {\d x} {\d z} = 1$
$\dfrac {\d y} {\d w} = 1$
Thus:














\(\ds \frac {\d w} {\d z}\)

\(=\)







\(\ds \map F {\frac {a \paren {z - h} + b \paren {w - k} + c} {d \paren {z - h} + e \paren {w - k} + f} }\)




















\(\ds \)

\(=\)







\(\ds \map F {\frac {a z + b w - a h - b k + c} {d z + e w - d h - e k + f} }\)










In order to simplify this appropriately, we wish to reduce it to the form:

$\dfrac {\d w} {\d z} = \map F {\dfrac {a z + b w} {d z + e w} }$
by finding values of $h$ and $k$ such that:

$a h + b k = c$
$d h + e k = f$
So:














\(\ds a h + b k\)

\(=\)







\(\ds c\)




















\(\ds d h + e k\)

\(=\)







\(\ds f\)














\(\ds \leadsto \ \ \)





\(\ds a d h + b d k\)

\(=\)







\(\ds c d\)




















\(\ds a d h + a e k\)

\(=\)







\(\ds a f\)














\(\ds \leadsto \ \ \)





\(\ds k \paren {a e - b d}\)

\(=\)







\(\ds a f - c d\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(=\)







\(\ds \frac {a f - c d} {a e - b d}\)










Similarly:














\(\ds a h + b k\)

\(=\)







\(\ds c\)




















\(\ds d h + e k\)

\(=\)







\(\ds f\)














\(\ds \leadsto \ \ \)





\(\ds a e h + b e k\)

\(=\)







\(\ds c e\)




















\(\ds b d h + b e k\)

\(=\)







\(\ds b f\)














\(\ds \leadsto \ \ \)





\(\ds h \paren {a e - b d}\)

\(=\)







\(\ds c e - b f\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds \frac {c e - b f} {a e - b d}\)










We note that the above works if and only if:

$a e - b d \ne 0 \implies a e \ne b d$
Thus:

$(1): \quad \dfrac {\d w} {\d z} = \map F {\dfrac {a z + b w} {d z + e w} }$

Letting:

$\map M {z, w} = a z + b w$
$\map N {z, w} = d z + e w$
we see:

$\map M {t z, t w} = a t z + b t w = t \paren {a z + b w} = t \, \map M {z, w}$
$\map N {t z, t w} = d t z + e t w = t \paren {d z + e w} = t \, \map N {z, w}$
Thus, by definition, $(1)$ is homogeneous.
$\blacksquare$


Examples
$\dfrac {\d y} {\d x} = \dfrac {x + y + 4} {x - y - 6}$
The first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \dfrac {x + y + 4} {x - y - 6}$
has the general solution:

$\map \arctan {\dfrac {y + 5} {x - 1} } = \ln \sqrt {\paren {x - 1}^2 + \paren {y + 5}^2} + C$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $4 \text{(a)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differential equation: differential equations of the first order and first degree: $(4)$ Equations reducible to homogeneous form
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differential equation: differential equations of the first order and first degree: $(4)$ Equations reducible to homogeneous form




