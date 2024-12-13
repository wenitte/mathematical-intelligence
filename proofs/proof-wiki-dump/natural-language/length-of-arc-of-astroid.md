# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Astroid

  This article was Featured Proof between 28th May 2016 and 10th December 2016.
Theorem
The total length of the arcs of an astroid constructed within a deferent of radius $a$ is given by:

$\LL = 6 a$


Proof
Let $H$ be embedded in a cartesian plane with its center at the origin and its cusps positioned on the axes.




We have that $\LL$ is $4$ times the length of one arc of the astroid.
From Arc Length for Parametric Equations:

$\ds \LL = 4 \int_{\theta \mathop = 0}^{\theta \mathop = \pi/2} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
where, from Equation of Astroid:

$\begin{cases}
x & = a \cos^3 \theta \\
y & = a \sin^3 \theta
\end{cases}$

We have:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds -3 a \cos^2 \theta \sin \theta\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds 3 a \sin^2 \theta \cos \theta\)










Thus:














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




















\(\ds \)

\(=\)







\(\ds \frac {3 a \sin 2 \theta} 2\)





Double Angle Formula for Sine




Thus:














\(\ds \LL\)

\(=\)







\(\ds 4 \frac {3 a} 2 \int_0^{\pi / 2} \sin 2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 6 a \intlimits {\frac {-\cos 2 \theta} 2} 0 {\pi / 2}\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds 6 a \paren {-\frac {\cos \pi} 2 + \frac {\cos 0} 2}\)





evaluating limits of integration














\(\ds \)

\(=\)







\(\ds 6 a \frac {-\paren {-1} + 1} 2\)




















\(\ds \)

\(=\)







\(\ds 6 a\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Hypocycloid with Four Cusps: $11.11$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $7$




