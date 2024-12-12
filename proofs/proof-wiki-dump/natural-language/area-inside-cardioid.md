# 

Source: https://proofwiki.org/wiki/Area_inside_Cardioid

Theorem
Consider the cardioid $C$ embedded in a polar plane given by its polar equation:

$r = 2 a \paren {1 + \cos \theta}$

The area inside $C$ is $6 \pi a^2$.


Proof
Let $\AA$ denote the area inside $C$.
The boundary of $C$ is traced out where $-\pi \le \theta \le \pi$.

Thus:














\(\ds \AA\)

\(=\)







\(\ds \int_{-\pi}^\pi \dfrac {\map {r^2} \theta} 2 \rd \theta\)





Area between Radii and Curve in Polar Coordinates














\(\ds \)

\(=\)







\(\ds \int_{-\pi}^\pi \dfrac {\paren {2 a \paren {1 + \cos \theta} }^2} 2 \rd \theta\)





Equation of Cardioid














\(\ds \)

\(=\)







\(\ds 2 a^2 \int_{-\pi}^\pi \paren {1 + 2 \cos \theta + \cos^2 \theta} \rd \theta\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 a^2 \intlimits {\theta + 2 \sin \theta + \frac \theta 2 + \frac {\sin 2 \theta} 4} {-\pi} \pi\)





Primitive of $\cos a x$, Primitive of Square of Cosine Function














\(\ds \)

\(=\)







\(\ds 2 a^2 \paren {\paren {\pi + 2 \sin \pi + \dfrac \pi 2 + \frac {\sin 2 \pi} 4} - \paren {-\pi + 2 \, \map \sin {-\pi} + \dfrac {-\pi} 2 + \frac {\map \sin {-2 \pi} } 4} }\)





evaluation between $-\pi$ and $\pi$














\(\ds \)

\(=\)







\(\ds 2 a^2 \paren {\pi + \dfrac \pi 2 - \paren {-\pi} - \paren {\dfrac {-\pi} 2} }\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 6 \pi a^2\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Cardioid: $11.13$




