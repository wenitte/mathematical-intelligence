# 

Source: https://proofwiki.org/wiki/Length_of_Perimeter_of_Cardioid/Proof_1

Theorem
Consider the cardioid $C$ embedded in a polar plane given by its polar equation:

$r = 2 a \paren {1 + \cos \theta}$
where $a > 0$.

The length of the perimeter of $C$ is $16 a$.


Proof
Let $\LL$ denote the length of the perimeter of $C$.
The boundary of the $C$ is traced out where $-\pi \le \theta \le \pi$.

From Arc Length for Parametric Equations:

$\ds \LL = \int_{\theta \mathop = -\pi}^{\theta \mathop = \pi} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
where, from Equation of Cardioid:

$\begin {cases}
x & = 2 a \cos \theta \paren {1 + \cos \theta} \\
y & = 2 a \sin \theta \paren {1 + \cos \theta}
\end {cases}$

We have:














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds 2 a \map {\frac \d {\d \theta} } {\cos \theta + \cos^2 \theta}\)





rearranging














\(\ds \)

\(=\)







\(\ds -2 a \paren {\sin \theta + 2 \cos \theta \sin \theta}\)





Derivative of Cosine Function, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -2 a \paren {\sin \theta + \sin 2 \theta}\)





Double Angle Formula for Sine














\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds 2 a \map {\frac \d {\d \theta} } {\sin \theta + \sin \theta \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 a \paren {\cos \theta + \cos^2 \theta - \sin^2 \theta}\)





Derivative of Sine Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 2 a \paren {\cos \theta + \cos 2 \theta}\)





Double Angle Formula for Cosine




Thus:














\(\ds \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2}\)

\(=\)







\(\ds \sqrt {4 a^2 \paren {\paren {\sin \theta + \sin 2 \theta}^2 + \paren {\cos \theta + \cos 2 \theta}^2} }\)




















\(\ds \)

\(=\)







\(\ds 2 a \sqrt {\sin^2 \theta + 2 \sin \theta \sin 2 \theta + \sin^2 2 \theta + \cos^2 \theta + 2 \cos \theta \cos 2 \theta + \cos^2 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 a \sqrt {2 + 2 \sin \theta \sin 2 \theta + 2 \cos \theta \cos 2 \theta}\)





Sum of Squares of Sine and Cosine in $2$ instances














\(\ds \)

\(=\)







\(\ds 2 a \sqrt {2 + 2 \sin \theta \paren {2 \sin \theta \cos \theta} + 2 \cos \theta \paren {\cos^2 \theta - \sin^2 \theta} }\)





Double Angle Formulas














\(\ds \)

\(=\)







\(\ds 2 a \sqrt {2 + 4 \sin^2 \theta \cos \theta + 2 \cos^3 \theta - 2 \sin^2 \theta \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 a \sqrt {2 + 2 \sin^2 \theta \cos \theta + 2 \cos^3 \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 a \sqrt {2 + 2 \cos \theta \paren {\sin^2 \theta + \cos^2 \theta} }\)




















\(\ds \)

\(=\)







\(\ds 4 a \sqrt {\dfrac {1 + \cos \theta} 2}\)





Sum of Squares of Sine and Cosine and extracting factor




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 4 a \cos \dfrac \theta 2\)





Half Angle Formula for Cosine


















\(\ds \LL\)

\(=\)







\(\ds \int_{\theta \mathop = -\pi}^{\theta \mathop = \pi} \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta\)





Area between Radii and Curve in Polar Coordinates














\(\ds \)

\(=\)







\(\ds \int_{-\pi}^\pi 4 a \cos \dfrac \theta 2 \rd \theta\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 4 a \intlimits {2 \sin \dfrac \theta 2} {-\pi} \pi\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds 8 a \paren {\sin \dfrac \pi 2 - \sin \dfrac {-\pi} 2}\)





evaluation between $-\pi$ and $\pi$














\(\ds \)

\(=\)







\(\ds 8 a \paren {1 - \paren {-1} }\)





Sine of Right Angle, Sine Function is Odd














\(\ds \)

\(=\)







\(\ds 16 a\)









$\blacksquare$





