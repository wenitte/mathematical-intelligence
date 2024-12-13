# 

Source: https://proofwiki.org/wiki/Cosine_of_Complex_Number/Proof_2

Theorem
Let $a$ and $b$ be real numbers.
Let $i$ be the imaginary unit.
Then:

$\cos \left({a + b i}\right) = \cos a \cosh b - i \sin a \sinh b$
where:

$\cos$ denotes the cosine function (real and complex)
$\sin$ denotes the real sine function
$\sinh$ denotes the hyperbolic sine function
$\cosh$ denotes the hyperbolic cosine function


Proof













\(\ds \cos a \cosh b - i \sin a \sinh b\)

\(=\)







\(\ds \frac {e^{i a} + e^{-i a} } 2 \frac {e^b + e^{-b} } 2 - i \frac {e^{i a} - e^{-i a} } {2 i} \frac {e^b - e^{-b} } 2\)





Euler's Cosine Identity, Definition of Hyperbolic Cosine, Euler's Sine Identity, Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac {e^{b + i a} + e^{-b + i a} + e^{b - i a} + e^{-b - i a} - e^{b + i a} + e^{-b + i a} + e^{b - i a} - e^{-b - i a} } 4\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {e^{-b + i a} + e^{b - i a} } 2\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {e^{i \paren {a + b i} } + e^{-i \paren {a + b i} } } 2\)




















\(\ds \)

\(=\)







\(\ds \map \cos {a + b i}\)





Euler's Cosine Identity



$\blacksquare$


Also see
Sine of Complex Number
Tangent of Complex Number
Cosecant of Complex Number
Secant of Complex Number
Cotangent of Complex Number



