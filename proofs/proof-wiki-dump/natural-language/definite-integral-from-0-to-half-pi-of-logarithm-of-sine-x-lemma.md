# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Logarithm_of_Sine_x/Lemma

Lemma for Definite Integral from 0 to Half Pi of Logarithm of Sine x
$\ds \int_0^\pi \map \ln {\sin x} \rd x = 2 \int_0^{\pi/2} \map \ln {\sin x} \rd x$


Proof
We have: 














\(\ds \int_{\pi/2}^\pi \map \ln {\sin x} \rd x\)

\(=\)







\(\ds -\int_{\pi/2}^0 \map \ln {\map \sin {\pi - x} } \rd x\)





substituting $x \mapsto \pi - x$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x\)





Reversal of Limits of Definite Integral, Sine of Supplementary Angle



We can therefore write: 














\(\ds \int_0^\pi \map \ln {\sin x} \rd x\)

\(=\)







\(\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x + \int_{\pi/2}^\pi \map \ln {\sin x} \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi/2} \map \ln {\sin x} \rd x\)









$\blacksquare$





