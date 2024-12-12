# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Logarithm_of_Sine_x_by_Cosine_of_2nx

Theorem
For $n \in \N_{>0}$:

$\ds \int_0^{\pi/2} \map \ln {\sin x} \cos 2 n x \rd x = -\frac \pi {4 n}$


Proof
First we have:














\(\ds \lim_{x \mathop \to 0} \map \ln {\sin x} \sin 2 n x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\map \ln {\sin x} } {\csc 2 n x}\)





Definition of Cosecant














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\cot x} {- 2 n \cot 2 n x \csc 2 n x}\)





L'Hôpital's Rule: Corollary $2$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\cos x} {- 2 n \cos 2 n x} \frac {\sin^2 2 n x} {\sin x}\)





Definition of Cosecant, Definition of Cotangent














\(\ds \lim_{x \mathop \to 0} \frac {\sin^2 2 n x} {\sin x}\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {4 n \sin 2 n x \cos 2 n x} {\cos x}\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds 0\)









hence $\ds \lim_{x \mathop \to 0} \map \ln {\sin x} \sin 2 n x = 0$.

Thus:














\(\ds \int_0^{\pi/2} \map \ln {\sin x} \cos 2 n x \rd x\)

\(=\)







\(\ds \frac 1 {2 n} \int_0^{\pi/2} \map \ln {\sin x} \map \rd {\sin 2 n x}\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 n} \paren {\bigintlimits {\map \ln {\sin x} \sin 2 n x} 0 {\pi/2} - \int_0^{\pi/2} \sin n x \map \rd {\map \ln {\sin x} } }\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 n} \int_0^{\pi/2} \sin n x \map \rd {\map \ln {\sin x} }\)





From above














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 n} \int_0^{\pi/2} \sin 2 n x \frac {\cos x} {\sin x} \rd x\)





Primitive of Cotangent Function














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 n} \int_0^{\pi/2} \frac {\sin \paren {2 n + 1} x + \sin \paren {2 n - 1} x} {2 \sin x} \rd x\)





Werner Formula for Sine by Cosine














\(\ds \)

\(=\)







\(\ds -\frac 1 {4 n} \int_0^{\pi} \frac {\sin \paren {\paren {2 n + 1} u/2} + \sin \paren {\paren {2 n - 1} u/2} } {2 \sin \paren {u/2} } \rd u\)





substituting $u = 2 x$














\(\ds \)

\(=\)







\(\ds -\frac 1 {4 n} \int_0^{\pi} \paren {\frac 1 2 + \sum_{k \mathop = 1}^n \map \cos {k u} + \frac 1 2 + \sum_{k \mathop = 1}^{n - 1} \map \cos {k u} } \rd u\)





Lagrange's Cosine Identity














\(\ds \)

\(=\)







\(\ds -\frac 1 {4 n} \int_0^{\pi} 1 \rd u\)





All integrals involving $\cos k u$ evaluate to $0$














\(\ds \)

\(=\)







\(\ds -\frac \pi {4 n}\)





Definite Integral of Constant



$\blacksquare$





