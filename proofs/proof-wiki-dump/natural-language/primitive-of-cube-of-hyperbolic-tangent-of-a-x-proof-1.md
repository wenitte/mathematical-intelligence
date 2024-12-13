# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Hyperbolic_Tangent_of_a_x/Proof_1

Theorem
$\ds \int \tanh^3 a x \rd x = \frac {\ln \size {\cosh a x} } a - \frac {\tanh^2 a x} {2 a} + C$


Proof













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





