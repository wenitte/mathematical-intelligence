# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Square_of_Sine_x



Theorem
$\ds \int_0^{\frac \pi 2} \sin^2 x \rd x = \frac \pi 4$


Proof 1













\(\ds \int \sin^2 x \rd x\)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 x} 4 + C\)





Primitive of $\sin^2 x$








\(\ds \leadsto \ \ \)





\(\ds \int_0^{\frac \pi 2} \sin^2 x \rd x\)

\(=\)







\(\ds \intlimits {\frac x 2 - \frac {\sin 2 x} 4} 0 {\frac \pi 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac \pi 4 - \frac {\sin \pi} 4} - \paren {\frac 0 2 - \frac {\sin 0} 4}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4\)





Sine of Multiple of Pi and simplifying



$\blacksquare$


Proof 2
We have: 














\(\ds \int_0^{\frac \pi 2} \sin^2 x \rd x\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \sin^2 \paren {\frac \pi 2 - x} \rd x\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \int_0^{\frac \pi 2} \cos^2 x \rd x\)





Sine of Complement equals Cosine



So:














\(\ds 2 \int_0^{\frac \pi 2} \sin^2 x \rd x\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \paren {\sin^2 x + \cos^2 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\frac \pi 2} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Primitive of Constant



giving:

$\ds \int_0^{\frac \pi 2} \sin^2 x \rd x = \frac \pi 4$
$\blacksquare$


Also see
Definite Integral from $0$ to $\dfrac \pi 2$ of $\cos^2 x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.29$




