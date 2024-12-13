# 

Source: https://proofwiki.org/wiki/Primitive_of_Logarithm_of_x/Proof_2

Theorem
$\ds \int \ln x \rd x = x \ln x - x + C$


Proof
Note that we have: 














\(\ds \int_0^1 \ln x \rd x\)

\(=\)







\(\ds \int_0^1 x^0 \paren {\ln x}^1 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^1 \map \Gamma 2} {1^2}\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds -1\)





Gamma Function Extends Factorial



We therefore have: 














\(\ds -1\)

\(=\)







\(\ds \int_0^1 \ln x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \map \ln {\frac u a} \rd u\)





substituting $x = \dfrac u a$ where $a > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \paren {\ln u - \ln a} \rd u\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \ln u \rd u - \ln a\)





Primitive of Constant, Fundamental Theorem of Calculus



giving: 

$\ds \frac 1 a \int_0^a \ln u \rd u = \ln a - 1$
so: 

$\ds \int_0^a \ln u \rd u = a \ln a - a$
for all real $a > 0$. 
By Fundamental Theorem of Calculus: First Part, we have that: 

$x \ln x - x$ is a primitive of $\ln x$ on $x > 0$.
We therefore conclude that, by Primitives which Differ by Constant:

$\ds \int \ln x \rd x = x \ln x - x + C$
for $x > 0$.
$\blacksquare$





