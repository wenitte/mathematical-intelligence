# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Secant_of_a_x



Theorem
$\ds \int \sech^n a x \rd x = \frac {\sech^{n - 2} a x \tanh a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \sech^{n - 2} a x \rd x + C$
for $n \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sech^{n - 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \paren {n - 2} \sech^{n - 3} a x \sech a x \tanh a x\)





Derivative of Power, Derivative of $\sech a x$, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -a \paren {n - 2} \sech^{n - 2} a x \tanh a x\)










and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sech^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tanh a x} a\)





Primitive of $\sech^2 a x$




Then:














\(\ds \int \sech^n a x \rd x\)

\(=\)







\(\ds \int \sech^{n - 2} a x \sech^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sech^{n - 2} a x \paren {\frac {\tanh a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {\tanh a x} a} \paren {-a \paren {n - 2} \sech^{n - 2} a x \tanh a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} a + \paren {n - 2} \int \tanh^2 a x \sech^{n - 2} a x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} a + \paren {n - 2} \int \paren {1 - \sech^2 a x} \sech^{n - 2} a x \rd x\)





Sum of $\sech^2$ and $\tanh^2$














\(\ds \)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} a - \paren {n - 2} \int \sech^n a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 2} \int \sech^{n - 2} a x \rd x\)




















\(\ds \paren {n - 1} \int \sech^n a x \rd x\)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} a + \paren {n - 2} \int \sech^{n - 2} a x \rd x\)





gathering terms














\(\ds \int \sech^n a x \rd x\)

\(=\)







\(\ds \frac {\sech^{n - 2} a x \tanh a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \sech^{n - 2} a x \rd x\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\sinh^n a x$
Primitive of $\cosh^n a x$
Primitive of $\tanh^n a x$
Primitive of $\coth^n a x$
Primitive of $\csch^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.635$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $133$.




