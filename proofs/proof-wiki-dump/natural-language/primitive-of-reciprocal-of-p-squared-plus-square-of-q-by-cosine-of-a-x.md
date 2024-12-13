# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_plus_square_of_q_by_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {p^2 + q^2 \cos^2 a x} = \frac 1 {a p \sqrt{p^2 + q^2} } \arctan \frac {p \tan a x} {\sqrt {p^2 + q^2} } + C$

where $C$ is an arbitrary constant.


Proof













\(\ds \int \frac {\d x} {p^2 + q^2 \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\csc^2 a x \rd x} {p^2 \csc^2 a x + q^2 \cot^2 a x}\)





multiplying the numerator and the denominator by $\csc^2 a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\csc^2 a x \rd x} {p^2 + \paren {p^2 + q^2} \cot^2 a x}\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds \int \frac {-\paren {\cot a x}' \rd x} {a p^2 + a \paren {p^2 + q^2} \cot^2 a x}\)





Derivative of Cotangent Function














\(\ds \)

\(=\)







\(\ds \int \frac {-\d t} {a p^2 + a \paren {p^2 + q^2} t^2}\)





putting $t = \cot a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 + q^2} } \int \frac {\d t} {\paren {\tfrac p {\sqrt {p^2 + q^2} } }^2 + t^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 + q^2} } \frac {\sqrt {p^2 + q^2} } p \, \map \arctan {\frac {\sqrt {p^2 + q^2} } p t } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 + q^2} } \map \arctan {\frac {\sqrt {p^2 + q^2} } p t} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 + q^2} } \map \arctan {\frac {\sqrt {p^2 + q^2} } p \cot a x} + C\)





substituting $t = \cot a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 + q^2} } \map \arctan {\frac {\sqrt {p^2 + q^2} } {p \tan a x} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 + q^2} } \map \arccot {\frac {p \tan a x} {\sqrt {p^2 + q^2} } } + C\)





Arctangent of Reciprocal equals Arccotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 + q^2} } \paren {\map \arctan {\frac {p \tan a x} {\sqrt {p^2 + q^2} } } - \frac \pi 2} + C\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 + q^2} } \map \arctan {\frac {p \tan a x} {\sqrt {p^2 + q^2} } } + C\)





absorbing into the arbitrary constant



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p^2 + q^2 \sin^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.392$




