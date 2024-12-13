# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_over_Sine_of_a_x_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {\cos a x \rd x} {\sin a x - \cos a x} = \frac {-x} 2 + \frac 1 {2 a} \ln \size {\sin a x - \cos a x} + C$


Proof













\(\ds \int \frac {\cos a x \rd x} {\sin a x - \cos a x}\)

\(=\)







\(\ds \int \frac {\paren {\cos a x - \sin a x + \sin a x} \rd x} {\sin a x - \cos a x}\)




















\(\ds \)

\(=\)







\(\ds -\int \frac {\paren {\sin a x - \cos a x} \rd x} {\sin a x - \cos a x} + \int \frac {\sin a x \rd x} {\sin a x - \cos a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\int \rd x + \int \frac {\sin a x \rd x} {\sin a x - \cos a x}\)





simplification














\(\ds \)

\(=\)







\(\ds -x + \int \frac {\sin a x \rd x} {\sin a x - \cos a x} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds -x + \paren {\frac x 2 + \frac 1 {2 a} \ln \size {\sin a x - \cos a x} } + C\)





Primitive of $\dfrac {\sin a x} {\sin a x - \cos a x}$














\(\ds \)

\(=\)







\(\ds \frac {-x} 2 + \frac 1 {2 a} \ln \size {\sin a x - \cos a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cos a x} {\sin a x + \cos a x}$
Primitive of $\dfrac {\sin a x} {\sin a x + \cos a x}$
Primitive of $\dfrac {\sin a x} {\sin a x - \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.414$




