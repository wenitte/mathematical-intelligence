# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Arcsine_of_x_over_x

Theorem
$\ds \int_0^1 \frac {\arcsin x} x = \frac \pi 2 \ln 2$


Proof
Let: 

$x = \sin \theta$
By Derivative of Sine Function, we have: 

$\dfrac {\d x} {\d \theta} = \cos \theta$
We have, by Arcsine of Zero is Zero: 

as $x \to 0$, $\theta \to \arcsin 0 = 0$.
By Arcsine of One is Half Pi, we have: 

as $x \to 1$, $\theta \to \arcsin 1 = \dfrac \pi 2$.
We have:














\(\ds \int_0^1 \frac {\arcsin x} x \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \frac {\cos \theta \map \arcsin {\sin \theta} } {\sin \theta} \rd \theta\)





substituting $x = \sin \theta$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \theta \cot \theta \rd \theta\)





Definition of Real Arcsine, Definition of Real Cotangent Function



By Primitive of Cotangent Function:

$\ds \int \cot \theta \rd \theta = \map \ln {\sin \theta} + C$
So:














\(\ds \int_0^{\pi/2} \theta \cot \theta \rd \theta\)

\(=\)







\(\ds \bigintlimits {\theta \map \ln {\sin \theta} } 0 {\frac \pi 2} - \int_0^{\pi/2} \map \ln {\sin \theta} \rd \theta\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \map \ln {\sin \frac \pi 2} - \lim_{\theta \to 0^+} \paren {\theta \map \ln {\sin \theta} } + \frac \pi 2 \ln 2\)





Definite Integral from 0 to $\dfrac \pi 2$ of $\map \ln {\sin x}$














\(\ds \)

\(=\)







\(\ds -\lim_{\theta \to 0^+} \paren {\theta \map \ln {\sin \theta} } + \frac \pi 2 \ln 2\)





Sine of Right Angle, Natural Logarithm of 1 is 0



We have: 














\(\ds \lim_{\theta \to 0^+} \paren {\theta \map \ln {\sin \theta} }\)

\(=\)







\(\ds \lim_{\theta \to 0^+} \paren {\theta \map \ln {\frac {\sin \theta} \theta \theta} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\theta \to 0^+} \paren {\theta \map \ln {\frac {\sin \theta} \theta} } + \lim_{\theta \to 0^+} \theta \ln \theta\)





Sum of Logarithms, Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \paren {\lim_{\theta \to 0^+} \theta} \paren {\map \ln {\lim_{\theta \to 0^+} \frac {\sin \theta} \theta} } + \lim_{\theta \to 0^+} \theta \ln \theta\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds 0 \ln 1 + 0\)





Limit of $\dfrac {\sin x} x$ at Zero, Limit of $x^n \paren {\ln x}^m$














\(\ds \)

\(=\)







\(\ds 0\)









giving: 

$\ds \int_0^{\pi/2} \theta \cot \theta \rd \theta = \frac \pi 2 \ln 2$
hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.64$




