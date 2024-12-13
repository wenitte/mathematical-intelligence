# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\cosh^n a x} = \frac {\sinh a x} {a \paren {n - 1} \cosh^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cosh^{n - 2} a x} + C$


Proof













\(\ds \int \frac {\d x} {\cosh^n a x}\)

\(=\)







\(\ds \int \sech^n a x \rd x\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \sech^{n - 2} a x \rd x + C\)





Primitive of $\sech^n a x$














\(\ds \)

\(=\)







\(\ds \frac {\tanh a x} {a \paren {n - 1} \cosh^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cosh^{n - 2} a x} + C\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \frac {\sinh a x} {a \cosh a x \paren {n - 1} \cosh^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cosh^{n - 2} a x} + C\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \frac {\sinh a x} {a \paren {n - 1} \cosh^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cosh^{n - 2} a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\d x} {\sinh^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.588$




