# 

Source: https://proofwiki.org/wiki/Area_inside_Astroid

Theorem
The area inside an astroid $H$ constructed within a circle of radius $a$ is given by:

$\AA = \dfrac {3 \pi a^2} 8$


Proof
Let $H$ be embedded in a cartesian plane with its center at the origin and its cusps positioned on the axes.




By symmetry, it is sufficient to evaluate the area shaded yellow and to multiply it by $4$.
By Equation of Astroid:

$\begin{cases}
x & = a \cos^3 \theta \\
y & = a \sin^3 \theta
\end{cases}$
Thus:














\(\ds \AA\)

\(=\)







\(\ds 4 \int_0^a y \rd x\)




















\(\ds \)

\(=\)







\(\ds 4 \int_{x \mathop = 0}^{x \mathop = a} y \frac {\d x} {\d \theta} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 4 \int_{x \mathop = 0}^{x \mathop = a} a \sin^3 \theta \, 3 a \cos^2 \theta \paren {-\sin \theta} \rd \theta\)





differentiating $a \cos^3 \theta$ with respect to $\theta$














\(\ds \)

\(=\)







\(\ds 4 \int_{\theta \mathop = \pi / 2}^{\theta \mathop = 0} a \sin^3 \theta \, 3 a \cos^2 \theta \paren {-\sin \theta} \rd \theta\)





$x = 0$ when $\theta = \pi / 2$, $x = a$ when $\theta = 0$














\(\ds \)

\(=\)







\(\ds 12 a^2 \int_0^{\pi / 2} \sin^4 \theta \cos^2 \theta \rd \theta\)





simplifying




Simplifying the integrand:














\(\ds \sin^4 \theta \cos^2 \theta\)

\(=\)







\(\ds \frac {\paren {2 \sin \theta \cos \theta}^2} 4 \frac {2 \sin^2 \theta} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin^2 2 \theta} 4 \frac {2 \sin^2 \theta} 2\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac {\sin^2 2 \theta} 4 \frac {1 - \cos 2 \theta} 2\)





Square of Sine














\(\ds \)

\(=\)







\(\ds \frac {\sin^2 2 \theta - \sin^2 2 \theta \cos 2 \theta} 8\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - \cos 4 \theta} {16} - \frac {\sin^2 2 \theta \cos 2 \theta} 8\)





Square of Sine




Thus:














\(\ds \AA\)

\(=\)







\(\ds 12 a^2 \int_0^{\pi / 2} \paren {\frac {1 - \cos 4 \theta} {16} - \frac {\sin^2 2 \theta \cos 2 \theta} 8} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 a^2 \int_0^{\pi / 2} \paren {1 - \cos 4 \theta} \rd \theta - \frac 3 2 a^2 \int_0^{\pi / 2} \sin^2 2 \theta \cos 2 \theta \rd \theta\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \frac 3 4 a^2 \intlimits {\theta - \frac {\sin 4 \theta} 4} 0 {\pi / 2} - \frac 3 2 a^2 \int_0^{\pi / 2} \sin^2 2 \theta \cos 2 \theta \rd \theta\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac 3 4 a^2 \intlimits {\theta - \frac {\sin 4 \theta} 4} 0 {\pi / 2} - \frac 3 2 a^2 \intlimits {\frac {\sin^3 2 \theta} 6} 0 {\pi / 2}\)





Primitive of $\sin^n a x \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {3 \pi a^2} 8 - \frac {3 a^2} {16} \sin 2 \pi  - \frac {3 a^2} {12} \sin^3 \pi\)





evaluating limits of integration














\(\ds \)

\(=\)







\(\ds \frac {3 \pi a^2} 8\)





$\sin 2 \pi = 0$ and $\sin^3 \pi = 0$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Hypocycloid with Four Cusps: $11.10$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $6$




