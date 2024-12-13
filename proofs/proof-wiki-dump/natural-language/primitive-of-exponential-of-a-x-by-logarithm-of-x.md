# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Logarithm_of_x



Theorem
$\ds \int e^{a x} \ln x \rd x = \frac {e^{a x} \ln x} a - \frac 1 a \int \frac {e^{a x} } x \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of Natural Logarithm




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int e^{a x} \ln x \rd x\)

\(=\)







\(\ds \ln x \paren {\frac {e^{a x} } a} - \int \paren {\frac {e^{a x} } a} \frac 1 x \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \ln x} a - \frac 1 a \int \frac {e^{a x} } x \rd x + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $\dfrac {e^{a x} } x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.522$




