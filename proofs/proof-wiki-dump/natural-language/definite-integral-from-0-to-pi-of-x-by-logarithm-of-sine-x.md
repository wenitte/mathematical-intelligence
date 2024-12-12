# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_x_by_Logarithm_of_Sine_x

Theorem
$\ds \int_0^\pi x \map \ln {\sin x} \rd x = -\frac {\pi^2} 2 \ln 2$


Proof













\(\ds \int_0^\pi x \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \int_0^\pi \paren {\pi - x} \map \ln {\map \sin {\pi - x} } \rd x\)





Integral between Limits is Independent of Direction














\(\ds \)

\(=\)







\(\ds \pi \int_0^\pi \map \ln {\sin x} - \int_0^\pi x \map \ln {\sin x} \rd x\)





Sine of Supplementary Angle, Linear Combination of Definite Integrals



So: 














\(\ds 2 \int_0^\pi x \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \pi \int_0^\pi \map \ln {\sin x} \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \int_0^{\pi/2} \map \ln {\sin x} \rd x\)





Definite Integral from $0$ to $\dfrac \pi 2$ of $\map \ln {\sin x}$: Lemma














\(\ds \)

\(=\)







\(\ds -\pi^2 \ln 2\)





Definite Integral from $0$ to $\dfrac \pi 2$ of $\map \ln {\sin x}$



giving: 

$\ds \int_0^\pi x \map \ln {\sin x} \rd x = -\frac {\pi^2} 2 \ln 2$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.104$




