# 

Source: https://proofwiki.org/wiki/Length_of_Perimeter_of_Cardioid/Proof_2

Theorem
Consider the cardioid $C$ embedded in a polar plane given by its polar equation:

$r = 2 a \paren {1 + \cos \theta}$
where $a > 0$.

The length of the perimeter of $C$ is $16 a$.


Proof
Let $\LL$ denote the length of the perimeter of $C$.
The boundary of the $C$ is traced out where $-\pi \le \theta \le \pi$.

From Arc Length for Polar Curve:

$\ds \LL = \int_{\theta \mathop = -\pi}^{\theta \mathop = \pi} \sqrt {r^2 + \paren {\frac {\d r} {\d \theta} }^2} \rd \theta$
where:

$r = 2 a \paren {1 + \cos \theta}$

Note that we have: 














\(\ds \frac {\d r} {\d \theta}\)

\(=\)







\(\ds 2 a \frac \d {\d \theta} \paren {1 + \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds -2 a \sin \theta\)





Sum Rule for Derivatives, Derivative of Cosine Function



We therefore have: 














\(\ds \LL\)

\(=\)







\(\ds \int_{-\pi}^\pi \sqrt {4 a^2 \paren {1 + \cos \theta}^2 + 4 a^2 \sin^2 \theta} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 a \int_{-\pi}^\pi \sqrt {1 + 2 \cos \theta + \cos^2 \theta + \sin^2 \theta} \rd \theta\)





extracting a factor of $\sqrt {4 a^2} = 2 a$, noting that $a \ge 0$














\(\ds \)

\(=\)







\(\ds 2 a \int_{-\pi}^\pi \sqrt {2 + 2 \cos \theta} \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds 4 a \int_0^\pi \sqrt {4 \cos^2 \frac \theta 2} \rd \theta\)





Definite Integral of Even Function, Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds 8 a \int_0^\pi \size {\cos \frac \theta 2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 8 a \int_0^\pi \cos \frac \theta 2 \rd \theta\)





Definition of Absolute Value, noting that $\cos \theta \ge 0$ for $0 \le \theta \le \dfrac \pi 2$














\(\ds \)

\(=\)







\(\ds 16 a \intlimits {\sin \frac \theta 2} 0 \pi\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds 16 a \paren {\sin \frac \pi 2 - \sin 0}\)




















\(\ds \)

\(=\)







\(\ds 16 a\)





Sine of Right Angle, Sine of Zero is Zero



$\blacksquare$





