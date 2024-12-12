# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Logarithm_of_Sine_x/Proof_2

Theorem
$\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x = -\frac \pi 2 \ln 2$


Proof
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
Jack D'Aurizio (https://math.stackexchange.com/users/44121/jack-daurizio), Evaluate $\ds \int_0^{\pi/2} \map \ln {\cos x} \rd x$, URL (version: 2015-08-19): https://math.stackexchange.com/q/690644




