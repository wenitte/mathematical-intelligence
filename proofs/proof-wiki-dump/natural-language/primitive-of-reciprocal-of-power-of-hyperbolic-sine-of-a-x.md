# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sinh^n a x} = \frac {-\cosh a x} {a \paren {n - 1} \sinh^{n - 1} a x} - \frac {n - 2} {n - 1} \int \frac {\d x} {\sinh^{n - 2} a x}$
for $n \ne 1$.


Proof













\(\ds \int \frac {\d x} {\sinh^n a x}\)

\(=\)







\(\ds \int \csch^n a x \rd x\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} {a \paren {n - 1} } - \frac {n - 2} {n - 1} \int \csch^{n - 2} a x \rd x\)





Primitive of $\csch^n a x$














\(\ds \)

\(=\)







\(\ds \frac {-\coth a x} {a \paren {n - 1} \sinh^{n - 2} a x} - \frac {n - 2} {n - 1} \int \frac {\d x} {\sinh^{n - 2} a x}\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac {-\cosh a x} {a \sinh a x \left({n - 1}\right) \sinh^{n - 2} a x} - \frac {n - 2} {n - 1} \int \frac {\d x} {\sinh^{n - 2} a x}\)





Definition 2 of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \frac {-\cosh a x} {a \paren {n - 1} \sinh^{n - 1} a x} - \frac {n - 2} {n - 1} \int \frac {\d x} {\sinh^{n - 2} a x}\)





simplifying




We note that when $n = 1$, $\dfrac {n - 2} {n - 1}$ is undefined, rendering this derivation invalid.
$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sinh a x}$ for the case where $n = -1$
Primitive of $\dfrac 1 {\cosh^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.560$




