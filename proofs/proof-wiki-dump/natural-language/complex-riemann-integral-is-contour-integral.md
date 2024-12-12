# 

Source: https://proofwiki.org/wiki/Complex_Riemann_Integral_is_Contour_Integral

Theorem
Let $f: \R \to \C$ be a complex Riemann integrable function over some closed real interval $\closedint a b$.

Then:

$\ds \int_a^b \map f t \rd t = \int_\CC \map f t \rd t$
where:

the integral on the left hand side is a complex Riemann integral
the integral on the right hand side is a contour integral
$\CC$ is a straight line segment along the real axis, connecting $a$ to $b$.


Proof













\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \int_a^b \map f {\map \theta t} \map {\theta'} t \rd t\)





Complex Integration by Substitution: $\map \theta t = t$, $\map {\theta'} t = 1$














\(\ds \)

\(=\)







\(\ds \int_\CC \map f t \rd t\)





Definition of Complex Contour Integral



$\blacksquare$





