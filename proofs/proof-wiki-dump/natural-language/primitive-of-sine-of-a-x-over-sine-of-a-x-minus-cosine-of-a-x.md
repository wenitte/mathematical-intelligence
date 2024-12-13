# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_over_Sine_of_a_x_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {\sin a x \rd x} {\sin a x - \cos a x} = \frac x 2 + \frac 1 {2 a} \ln \size {\sin a x - \cos a x} + C$


Proof
First note that:




\(\text {(1)}: \quad\)









\(\ds \map {\frac {\d} {\d x} } {\sin a x - \cos a x}\)

\(=\)







\(\ds a \paren {\cos a x + \sin a x}\)





Derivative of $\sin a x$ and Derivative of $\cos a x$




Then:














\(\ds \int \frac {\sin a x \rd x} {\sin a x - \cos a x}\)

\(=\)







\(\ds \int \frac {\paren {\sin a x - \cos a x + \cos a x} \rd x} {\sin a x - \cos a x}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {\sin a x - \cos a x} \rd x} {\sin a x - \cos a x} + \int \frac {\cos a x \rd x} {\sin a x - \cos a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \rd x + \int \frac {\cos a x \rd x} {\sin a x - \cos a x}\)





simplification














\(\ds \)

\(=\)







\(\ds \int \rd x + \int \frac {\paren {\cos a x + \sin a x - \sin a x} \rd x} {\sin a x - \cos a x}\)




















\(\ds \)

\(=\)







\(\ds \int \rd x + \int \frac {\paren {\cos a x + \sin a x} \rd x} {\sin a x - \cos a x} - \int \frac {\sin a x \rd x} {\sin a x - \cos a x}\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds 2 \int \frac {\sin a x \rd x} {\sin a x - \cos a x}\)

\(=\)







\(\ds \int \rd x + \int \frac {\paren {\cos a x + \sin a x} \rd x} {\sin a x - \cos a x}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\sin a x \rd x} {\sin a x + \cos a x}\)

\(=\)







\(\ds \frac 1 2 \int \rd x + \frac 1 {2 a} \int \frac {a \paren {\cos a x + \sin a x} \rd x} {\sin a x - \cos a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x 2 + \frac 1 {2 a} \int \frac {a \paren {\cos a x + \sin a x} \rd x} {\sin a x - \cos a x} + C\)





Primitive of Constant




Then from $(1)$:












\(\ds \)

\(=\)







\(\ds \frac x 2 + \frac 1 {2 a} \ln \size {\sin a x - \cos a x} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} {\sin a x + \cos a x}$
Primitive of $\dfrac {\cos a x} {\sin a x + \cos a x}$
Primitive of $\dfrac {\cos a x} {\sin a x - \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.413$




