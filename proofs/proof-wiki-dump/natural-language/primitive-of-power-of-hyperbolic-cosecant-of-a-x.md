# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Cosecant_of_a_x



Theorem
$\ds \int \csch^n a x \rd x = \frac {-\csch^{n - 2} a x \coth a x} {a \paren {n - 1} } - \frac {n - 2} {n - 1} \int \csch^{n - 2} a x \rd x + C$
for $n \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \csch^{n - 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \paren {n - 2} \csch^{n - 3} a x \csch a x \coth a x\)





Derivative of Power, Derivative of $\csch a x$, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -a \paren {n - 2} \csch^{n - 2} a x \coth a x\)










and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \csch^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\coth a x} a\)





Primitive of $\csch^2 a x$




Then:














\(\ds \int \csch^n a x \rd x\)

\(=\)







\(\ds \int \csch^{n - 2} a x \csch^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \csch^{n - 2} a x \paren {\frac {-\coth a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {-\coth a x} a} \paren {-a \paren {n - 2} \csch^{n - 2} a x \coth a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} a - \paren {n - 2} \int \coth^2 a x \csch^{n - 2} a x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} a - \paren {n - 2} \int \paren {1 + \csch^2 a x} \csch^{n - 2} a x \rd x\)





Difference of $\coth^2$ and $\csch^2$














\(\ds \)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} a - \paren {n - 2} \int \csch^n a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 2} \int \csch^{n - 2} a x \rd x\)




















\(\ds \paren {n - 1} \int \csch^n a x \rd x\)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} a - \paren {n - 2} \int \csch^{n - 2} a x \rd x\)





gathering terms














\(\ds \int \csch^n a x \rd x\)

\(=\)







\(\ds \frac {-\csch^{n - 2} a x \coth a x} {a \paren {n - 1} } - \frac {n - 2} {n - 1} \int \csch^{n - 2} a x \rd x\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\sinh^n a x$
Primitive of $\cosh^n a x$
Primitive of $\tanh^n a x$
Primitive of $\coth^n a x$
Primitive of $\sech^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csch a x$: $14.645$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $134$.




