# 

Source: https://proofwiki.org/wiki/Area_of_Surface_of_Revolution_from_Astroid

Theorem
Let $H$ be the astroid constructed within a circle of radius $a$.
The surface of revolution formed by rotating $H$ around the $x$-axis:




evaluates to:

$\SS = \dfrac {12 \pi a^2} 5$


Proof
By symmetry, it is sufficient to calculate the surface of revolution of $H$ for $0 \le x \le a$.
From Area of Surface of Revolution, this surface of revolution is given by:

$\ds \SS = 2 \int_0^{\pi / 2} 2 \pi y \, \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$

From Equation of Astroid:

$\begin{cases}
x & = a \cos^3 \theta \\
y & = a \sin^3 \theta
\end{cases}$
so:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds -3 a \cos^2 \theta \sin \theta\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds 3 a \sin^2 \theta \cos \theta\)










Hence:














\(\ds \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2}\)

\(=\)







\(\ds \sqrt {9 a^2 \paren {\sin^4 \theta \cos^2 \theta + \cos^4 \theta \sin^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 3 a \sqrt {\sin^2 \theta \cos^2 \theta \paren {\sin^2 \theta + \cos^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 3 a \sqrt {\sin^2 \theta \cos^2 \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 3 a \sin \theta \cos \theta\)










Thus:














\(\ds \SS\)

\(=\)







\(\ds 2 \int_0^{\pi / 2} 2 \pi a \sin^3 \theta \, 3 a \sin \theta \cos \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 12 \pi a^2 \int_0^{\pi / 2} \sin^4 \theta \cos \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 12 \pi a^2 \intlimits {\frac {\sin^5 \theta} 5} 0 {\pi / 2}\)





Primitive of $\sin^n a x \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {12 \pi a^2} 5 \paren {\sin^5 \theta \frac \pi 2 - \sin^5 \theta 0}\)





evaluating limits of integration














\(\ds \)

\(=\)







\(\ds \frac {12 \pi a^2} 5 \paren {1 - 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {12 \pi a^2} 5\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $8$




