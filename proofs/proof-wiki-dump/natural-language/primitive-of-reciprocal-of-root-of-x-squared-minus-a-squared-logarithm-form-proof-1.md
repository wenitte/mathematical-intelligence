# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_minus_a_squared/Logarithm_Form/Proof_1

Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $0 < a < \size x$.


Proof













\(\ds \int \frac {\d x} {\sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \cosh^{-1} {\frac x a} + C'\)





Primitive of Reciprocal of $\sqrt {x^2 - a^2}$: $\cosh^{-1}$ form














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\paren {\frac x a}^2 - 1} } + C'\)





Definition of Real Inverse Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\frac {x^2 - a^2} {a^2} } } + C'\)





rearrangement














\(\ds \)

\(=\)







\(\ds \map \ln {\frac {x + \sqrt {x^2 - a^2} } a} + C'\)





rearrangement














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - a^2} } - \ln a + C'\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - a^2} } + C\)





putting $C = -\ln a + C'$



$\blacksquare$





