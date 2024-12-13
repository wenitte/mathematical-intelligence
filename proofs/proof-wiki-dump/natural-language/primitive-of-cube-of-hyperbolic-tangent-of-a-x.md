# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Hyperbolic_Tangent_of_a_x



Theorem
$\ds \int \tanh^3 a x \rd x = \frac {\ln \size {\cosh a x} } a - \frac {\tanh^2 a x} {2 a} + C$


Proof 1













\(\ds \int \tanh^3 a x \rd x\)

\(=\)







\(\ds \int \tanh a x \tanh^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \tanh a x \paren {1 - \sech^2 a x} \rd x\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \tanh a x \rd x - \int \tanh a x \sech^2 a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\cosh a x} } a - \int \tanh a x \sech^2 a x \rd x\)





Primitive of $\tanh a x$














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\cosh a x} } a - \frac {\tanh^2 a x} {2 a} + C\)





Primitive of $\tanh^n a x \sech^2 a x$: $n = 1$



$\blacksquare$


Proof 2













\(\ds \int \tanh^3 a x \rd x\)

\(=\)







\(\ds -\frac {\tanh^2 a x} {2 a} + \int \tanh a x \rd x\)





Primitive of Power of $\tanh^n a x$ with $n = 3$














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\cosh a x} } a - \frac {\tanh^2 a x} {2 a} + C\)





Primitive of $\tanh a x$



$\blacksquare$


Also see
Primitive of $\coth^3 a x$
Primitive of $\sech^3 a x$
Primitive of $\csch^3 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tanh a x$: $14.606$




