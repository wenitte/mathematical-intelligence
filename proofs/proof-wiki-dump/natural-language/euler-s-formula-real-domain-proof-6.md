# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain/Proof_6

Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Proof













\(\ds \int \frac {\d x} {\sqrt {x^2 + 1} }\)

\(=\)







\(\ds \map \ln {\sqrt {x^2 + 1} + x }\)





Primitive of Reciprocal of Root of x squared plus a squared/Logarithm Form and $a = 1$














\(\ds \int \frac {i\cos \theta \rd \theta } {\sqrt {1 - \sin^2 \theta} }\)

\(=\)







\(\ds \map \ln {\sqrt {1 - \sin^2 \theta} + i \sin \theta }\)





$x = i \sin \theta$; $\d x = i\cos \theta \rd \theta$














\(\ds \int \frac {i\cos \theta \rd \theta } {\sqrt {\cos^2 \theta} }\)

\(=\)







\(\ds \map \ln {\sqrt {\cos^2 \theta} + i \sin \theta }\)





Sum of Squares of Sine and Cosine














\(\ds i\int \rd \theta\)

\(=\)







\(\ds \map \ln {\cos \theta + i \sin \theta }\)




















\(\ds i \theta\)

\(=\)







\(\ds \map \ln {\cos \theta + i \sin \theta }\)




















\(\ds e^{i \theta}\)

\(=\)







\(\ds \cos \theta + i \sin \theta\)










$\blacksquare$





