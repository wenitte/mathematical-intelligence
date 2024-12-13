# 

Source: https://proofwiki.org/wiki/Hyperbolic_Cosine_of_Complex_Number



Theorem
Let $a$ and $b$ be real numbers.
Let $i$ be the imaginary unit.
Then:

$\map \cosh {a + b i} = \cosh a \cos b + i \sinh a \sin b$
where:

$\cos$ denotes the real cosine function
$\sin$ denotes the real sine function
$\sinh$ denotes the hyperbolic sine function
$\cosh$ denotes the hyperbolic cosine function


Proof 1













\(\ds \map \cosh {a + b i}\)

\(=\)







\(\ds \cosh a \map \cosh {b i} + \sinh a \map \sinh {b i}\)





Hyperbolic Cosine of Sum














\(\ds \)

\(=\)







\(\ds \cosh a \cos b + \sinh a \map \sinh {b i}\)





Cosine in terms of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \cosh a \cos b + i \sinh a \sin b\)





Sine in terms of Hyperbolic Sine



$\blacksquare$


Proof 2













\(\ds \cosh a \cos b - i \sinh a \sin b\)

\(=\)







\(\ds \frac {e^a + e^{-a} } 2 \frac {e^{i b} + e^{-i b} } 2 + i \frac {e^a - e^{-a} } {2 i} \frac {e^{i b} - e^{-i b} } 2\)





Definition of Hyperbolic Cosine, Euler's Cosine Identity, Definition of Hyperbolic Sine, Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{a + i b} + e^{-a + i b} + e^{a - i b} + e^{-a - i b} + e^{a + i b} - e^{-a + i b} - e^{a - i b} + e^{-a - i b} } 4\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {e^{a + i b} + e^{-\paren {a + i b} } } 2\)





simplifying














\(\ds \)

\(=\)







\(\ds \cosh \paren {a + b i}\)





Definition of Hyperbolic Cosine



$\blacksquare$


Also see
Hyperbolic Sine of Complex Number
Hyperbolic Tangent of Complex Number
Hyperbolic Cosecant of Complex Number
Hyperbolic Secant of Complex Number
Hyperbolic Cotangent of Complex Number



