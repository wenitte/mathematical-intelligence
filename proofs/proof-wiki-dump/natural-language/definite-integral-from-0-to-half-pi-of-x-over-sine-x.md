# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_x_over_Sine_x

Theorem
$\ds \int_0^{\pi/2} \frac x {\sin x} \rd x = 2 G$
where $G$ is Catalan's constant.


Proof
From Definite Integral from $0$ to $1$ of $\dfrac {\arctan x} x$, we have: 

$\ds \int_0^1 \frac {\arctan x} x \rd x = G$
Let: 

$x = \tan \theta$
By Derivative of Tangent Function, we have: 

$\ds \frac {\d x} {\d \theta} = \sec^2 \theta$
We have, by Arctangent of Zero is Zero: 

as $x \to 0$, $\theta \to 0$.
We also have, by Arctangent of One:

as $x \to 1$, $\theta \to \dfrac \pi 4$
We therefore have: 














\(\ds \int_0^1 \frac {\arctan x} x \rd x\)

\(=\)







\(\ds \int_0^{\pi/4} \frac {\sec^2 \theta \map \arctan {\tan \theta} } {\tan \theta} \rd \theta\)





substituting $x = \tan \theta$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \frac \theta {\cos^2 \theta} \times \frac {\cos \theta} {\sin \theta} \rd \theta\)





Definition of Real Secant Function, Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \frac \theta {\sin \theta \cos \theta} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\pi/4} \frac \theta {\frac 1 2 \sin 2 \theta} \rd \theta\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^{\pi/2} \frac \phi {\sin \phi} \rd \phi\)





substituting $\phi = 2 \theta$



giving: 

$\ds \int_0^{\pi/2} \frac \phi {\sin \phi} \rd \phi = 2 G$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.62$




