# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Logarithm_of_Sine_x/Proof_1

Theorem
$\ds \int_0^{\pi/2} \map \ln {\sin x} \rd x = -\frac \pi 2 \ln 2$


Proof
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





