# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y%27_-_f_(y)_phi%27_(x)_over_f%27_(y)_%3D_phi_(x)_phi%27_(x)_over_f%27_(y)

Theorem
Let $\map f y$ and $\map \phi x$ be known real functions of $y$ and $x$ respectively.
The general solution of:

$(1): \quad \dfrac {\d y} {\d x} - \dfrac {\map f y} {\map {f'} y} \map {\phi'} x = \dfrac {\map \phi x \map {\phi'} x} {\map {f'} y}$
is:

$\map f y = C e^{\map \phi x} - \map \phi x - 1$


Proof
Let $u = \map f y$
Then by the Chain Rule for Derivatives:

$\dfrac {\d u} {\d x} = \map {f'} y \dfrac {\d y} {\d x}$

Then:














\(\ds \dfrac {\d y} {\d x} - \dfrac {\map f y} {\map {f'} y} \map {\phi'} x\)

\(=\)







\(\ds \dfrac {\map \phi x \map {\phi'} x} {\map {f'} y}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} y \dfrac {\d y} {\d x} - \map f y \map {\phi'} x\)

\(=\)







\(\ds \map \phi x \map {\phi'} x\)





multiplying $(1)$ by $\map {f'} y$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x} - u \map {\phi'} x\)

\(=\)







\(\ds \map \phi x \map {\phi'} x\)





substituting $u$ for $\map f y$



This is a linear first order ordinary differential equation in the form:

$\dfrac {\d u} {\d x} + \map P x u = \map Q x$
whose general solution from Solution to Linear First Order Ordinary Differential Equation is:

$\ds u e^{\int P \rd x} = \int Q e^{\int P \rd x} \rd x + C$
In this instance:

$\map P x = -\map {\phi'} x$
and:

$\map Q x = \map \phi x \map {\phi'} x$
Thus:














\(\ds \int P \rd x\)

\(=\)







\(\ds -\int \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\map \phi x + A\)










Hence:

$\ds u e^{-\map \phi x + A} = \int \map \phi x \map {\phi'} x e^{-\map \phi x + A} \rd x + C$

Let $v = \map \phi x$.
Then by Integration by Substitution:














\(\ds \int \map \phi x \map {\phi'} x e^{-\map \phi x + A} \rd x\)

\(=\)







\(\ds \int v e^{-v + A} \rd v\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int v e^{-v} e^A \rd v\)




















\(\ds \)

\(=\)







\(\ds e^A \int v e^{-v} \rd v\)




















\(\ds \)

\(=\)







\(\ds - e^A e^{-v} \paren {v + 1} + C'\)





Primitive of $x e^{a x}$




This leaves us with:

$u e^{-\map \phi x + A} = - e^A e^{-v} \paren {v + 1} + C$
subsuming $C'$ into $C$.
Substituting back in, the general solution is seen to be:

$\map f y e^{-\map \phi x + A} = - e^{-\map \phi x + A} \paren {\map \phi x + 1} + C$
and so multiplying both sides by $e^{\map \phi x - A}$:














\(\ds \map f y\)

\(=\)







\(\ds \paren {-\map \phi x - 1} + C e^{\map \phi x - A}\)




















\(\ds \)

\(=\)







\(\ds C e^{-A} e^{\map \phi x} - \map \phi x - 1\)




















\(\ds \)

\(=\)







\(\ds C e^{\map \phi x} - \map \phi x - 1\)





by absorbing the constant factor $e^{-A}$ into $C$



Hence the result.
$\blacksquare$


Sources
1896: Joseph Edwards: Integral Calculus for Beginners: With an Introduction to the Study of Differential Equations: Exercise $18 \ (4)$




