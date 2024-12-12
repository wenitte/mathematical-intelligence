# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Sine_x_by_Logarithm_of_Sine_x

Theorem
$\ds \int_0^{\pi/2} \sin x \map \ln {\sin x} \rd x = \ln 2 - 1$


Proof













\(\ds \int_0^{\pi/2} \sin x \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \intlimits {\cos x \paren {1 - \map \ln {\sin x} } + \map \ln {\tan \frac x 2} } 0 {\pi/2}\)





Primitive of $\sin x \map \ln {\sin x}$














\(\ds \)

\(=\)







\(\ds \cos \frac \pi 2 \paren {1 - \map \ln {\sin \frac \pi 2} } + \map \ln {\tan \frac \pi 4} - \cos 0 + \lim_{x \mathop \to 0^+} \paren {\map \ln {\sin x} - \map \ln {\tan \frac x 2} }\)




















\(\ds \)

\(=\)







\(\ds -1 + \lim_{x \mathop \to 0^+} \paren {\map \ln {\sin x} - \map \ln {\tan \frac x 2} }\)





Cosine of Right Angle, Tangent of $45 \degrees$, Natural Logarithm of 1 is 0, Cosine of Zero is One



It remains to compute: 

$\ds \lim_{x \mathop \to 0^+} \paren {\map \ln {\sin x} - \map \ln {\tan \frac x 2} }$
We have:














\(\ds \lim_{x \mathop \to 0^+} \paren {\map \ln {\sin x} - \map \ln {\tan \frac x 2} }\)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \paren {\map \ln {2 \sin \frac x 2 \cos \frac x 2} - \map \ln {\sin \frac x 2} + \map \ln {\cos \frac x 2} }\)





Double Angle Formula for Sine, Definition of Real Tangent Function, Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0^+} \paren {\ln 2 + \map \ln {\sin \frac x 2} + \map \ln {\cos \frac x 2} - \map \ln {\sin \frac x 2} + \map \ln {\cos \frac x 2} }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \ln 2 + 2 \lim_{x \mathop \to 0^+} \map \ln {\cos \frac x 2}\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \ln 2 + 2 \map \ln {\lim_{x \mathop \to 0^+} \cos \frac x 2}\)




















\(\ds \)

\(=\)







\(\ds \ln 2 + 2 \ln 1\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \ln 2\)





Natural Logarithm of 1 is 0



giving: 

$\ds \int_0^{\pi/2} \sin x \map \ln {\sin x} \rd x = \ln 2 - 1$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.105$




