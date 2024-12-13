# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {p + q \sinh a x}  = \frac 1 {a \sqrt{p^2 + q^2} } \ln \size {\frac {q e^{a x} + p - \sqrt {p^2 + q^2} } {q e^{a x} + p + \sqrt {p^2 + q^2} } } + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds e^{a x} = u\)














\(\ds \leadsto \ \ \)





\(\ds \d x\)

\(=\)







\(\ds \dfrac {\d u} u\)










Hence:














\(\ds \int \frac {\d x} {p + q \sinh a x}\)

\(=\)







\(\ds \int \frac {\d x} {p + q \paren {\dfrac {e^{a x} - e^{-a x} } 2} }\)





Definition of Real Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd x} {2 p + q \paren {e^{a x} - e^{-a x} } }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {u \paren {2 p + q u - \frac q u} }\)





Integration by Substitution: $u = e^{a x}$














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {q u^2 + 2 p u - q}\)





simplifying




The discriminant of $q u^2 + 2 p u - q$ is given by:














\(\ds \map {\operatorname {Disc} } {q u^2 + 2 p u - q}\)

\(=\)







\(\ds \paren {2 p}^2 + 4 q^2\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {p^2 + q^2}\)









Hence the sign of $\map {\operatorname {Disc} } {q u^2 + 2 p u - q}$ is always positive.

So:














\(\ds \int \frac {2 \rd u} {q u^2 + 2 p u - q}\)

\(=\)







\(\ds \dfrac 2 {\sqrt {4 p^2 + 4 q^2} } \ln \size {\dfrac {2 q u + 2 p - \sqrt {4 p^2 + 4 q^2} } {2 q u + 2 p + \sqrt {4 p^2 + 4 q^2} } } + C\)





Primitive of $\dfrac 1 {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \ln \size {\dfrac {q u + p - \sqrt {p^2 + q^2} } {q u + p + \sqrt {p^2 + q^2} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \ln \size {\dfrac {q e^{a x} + p - \sqrt {p^2 + q^2} } {q e^{a x} + p + \sqrt {p^2 + q^2} } } + C\)





substituting $u = e^{a x}$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p + q \cosh a x}$
Primitive of $\dfrac 1 {p + q \tanh a x}$
Primitive of $\dfrac 1 {p + q \coth a x}$
Primitive of $\dfrac 1 {q + p \sech a x}$
Primitive of $\dfrac 1 {q + p \csch a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.553$




