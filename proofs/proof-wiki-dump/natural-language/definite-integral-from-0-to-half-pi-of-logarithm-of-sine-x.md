# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Logarithm_of_Sine_x



Theorem
$\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x = -\frac \pi 2 \ln 2$


Proof 1
By Definite Integral from $0$ to $\dfrac \pi 2$ of $\map \ln {\sin x}$: Lemma, we have: 

$\ds \int_0^\pi \map \ln {\sin x} \rd x = 2 \int_0^{\pi/2} \map \ln {\sin x} \rd x$
We also have: 














\(\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\map \sin {\frac \pi 2 - x} } \rd x\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\cos x} \rd x\)





Sine of Complement equals Cosine



giving: 














\(\ds 2 \int_0^{\pi/2} \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\sin x \cos x} \rd x\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\frac 1 2 \sin 2 x} \rd x\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \map \ln {\frac 1 2} + \int_0^{\pi/2} \map \ln {\sin 2 x} \rd x\)





Primitive of Constant, Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \map \ln {\frac 1 2} + \frac 1 2 \int_0^\pi \map \ln {\sin u} \rd u\)





substituting $u = 2 x$














\(\ds \)

\(=\)







\(\ds -\frac \pi 2 \ln 2 + \int_0^{\pi/2} \map \ln {\sin u} \rd u\)





Logarithm of Reciprocal



Therefore: 

$\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x = -\frac \pi 2 \ln 2$
$\blacksquare$


Proof 2
By Lemma, we have: 

$\ds \int_0^\pi \map \ln {\sin x} \rd x = 2 \int_0^{\pi/2} \map \ln {\sin x} \rd x$
By Product of Sines of Fractions of Pi, we have: 

$\ds \prod_{k \mathop = 1}^{n - 1} \map \sin {\frac {k \pi} n} = \frac n {2^{n - 1} }$
Therefore, we have: 














\(\ds \sum_{k \mathop = 1}^{n - 1} \map \ln {\map \sin {\frac {k \pi} n} }\)

\(=\)







\(\ds \map \ln {\prod_{k \mathop = 1}^{n - 1} \map \sin {\frac {k \pi} n} }\)





Sum of Logarithms: Natural Logarithm














\(\ds \)

\(=\)







\(\ds \map \ln {\frac n {2^{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \ln n - \paren {n - 1} \ln 2\)





Difference of Logarithms



We have: 














\(\ds \int_0^\pi \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac \pi n \sum_{k \mathop = 1}^{n - 1} \map \ln {\map \sin {\frac {\pi k} n} }\)





Definition of Riemann Integral














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac \pi n \ln n - \pi \paren {1 - \frac 1 n} \ln 2}\)









We can show the first term to vanish: 














\(\ds \lim_{n \mathop \to \infty} \frac \pi n \ln n\)

\(=\)







\(\ds \pi \lim_{u \mathop \to \infty} u e^{-u}\)





letting $n = e^u$














\(\ds \)

\(=\)







\(\ds 0\)





Limit to Infinity of $x^n e^{-a x}$



So: 














\(\ds \lim_{n \mathop \to \infty} \paren {\frac \pi n \ln n - \pi \paren {1 - \frac 1 n} \ln 2}\)

\(=\)







\(\ds -\pi \ln 2 \lim_{n \mathop \to \infty} \paren {1 - \frac 1 n}\)





Combined Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds -\pi \ln 2\)









giving:

$\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x = -\frac \pi 2 \ln 2$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.102$




