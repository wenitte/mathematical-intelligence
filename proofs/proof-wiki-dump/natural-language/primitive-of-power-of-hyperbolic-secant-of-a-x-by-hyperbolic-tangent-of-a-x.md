# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Secant_of_a_x_by_Hyperbolic_Tangent_of_a_x



Theorem
$\ds \int \sech^n a x \tanh a x \rd x = \frac {-\sech^n a x} {n a} + C$
for $n \ne 0$.


Proof













\(\ds z\)

\(=\)







\(\ds \sech a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -a \sech a x \tanh a x\)





Derivative of $\sech a x$








\(\ds \leadsto \ \ \)





\(\ds \int \sech^n a x \tanh a x \rd x\)

\(=\)







\(\ds \int \frac {-z^{n - 1} \rd z} a\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} a \int z^{n - 1} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {-1} a \frac {z^n} n\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-\sech^n a x} {n a} + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\csch^n a x \coth a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.629$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $135$.




