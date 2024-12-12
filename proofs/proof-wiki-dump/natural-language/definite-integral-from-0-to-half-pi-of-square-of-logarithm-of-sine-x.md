# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Square_of_Logarithm_of_Sine_x

Theorem
$\ds \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x = \frac \pi 2 \paren {\ln 2}^2 + \frac {\pi^3} {24}$


Proof
From Fourier Series for $\map \ln {\sin x}$ from $0$ to $\pi$:

$\ds \map \ln {\sin x} = -\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n$
Then, by Parseval's Theorem:














\(\ds \frac 2 \pi \int_0^\pi \paren {\map \ln {\sin x} }^2 \rd x\)

\(=\)







\(\ds 2 \paren {\ln 2}^2 + \sum_{n = 1}^\infty \frac 1 {n^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\ln 2}^2 + \frac {\pi^2} 6\)





Basel Problem



We then have: 














\(\ds \int_0^\pi \paren {\map \ln {\sin x} }^2 \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x + \int_{\pi/2}^\pi \paren {\map \ln {\sin x} }^2 \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x + \int_0^{\pi/2} \paren {\map \ln {\map \sin {\pi - x} } }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x\)





Sine of Supplementary Angle




So: 

$\ds \frac 4 \pi \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x = 2 \paren {\ln 2}^2 + \frac {\pi^2} 6$
Multiplying by $\dfrac \pi 4$: 

$\ds \int_0^{\pi/2} \paren {\map \ln {\sin x} }^2 \rd x = \frac \pi 2 \paren {\ln 2}^2 + \frac {\pi^3} {24}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.103$




