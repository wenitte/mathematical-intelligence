# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Tangent_of_a_x



Theorem
$\ds \int \tanh^n a x \rd x = \frac {-\tanh^{n - 1} a x} {a \paren {n - 1} } + \int \tanh^{n - 2} a x \rd x + C$


Proof













\(\ds \int \tanh^n a x \rd x\)

\(=\)







\(\ds \int \tanh^{n - 2} a x \tanh^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \tanh^{n - 2} a x \paren {1 - \sech^2 a x} \rd x\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds -\int \tanh^{n - 2} a x \sech^2 a x \rd x + \int \tanh^{n - 2} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-\tanh^{n - 1} a x} {a \paren {n - 1} } + \int \tanh^{n - 2} a x \rd x + C\)





Primitive of $\tanh^n a x \sech^2 a x$



$\blacksquare$


Also see
Primitive of $\sinh^n a x$
Primitive of $\cosh^n a x$
Primitive of $\coth^n a x$
Primitive of $\sech^n a x$
Primitive of $\csch^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tanh a x$: $14.614$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $127$.




