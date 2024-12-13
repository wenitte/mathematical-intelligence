# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int \cosh^n a x \rd x = \frac {\cosh^{n - 1} a x \sinh a x} {a n} + \frac {n - 1} n \int \cosh^{n - 2} a x \rd x$
for $n \ne 0$.


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cosh^{n - 1} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {n - 1} a \cosh^{n - 2} a x \sinh a x\)





Chain Rule for Derivatives, Derivative of $\cosh a x$, Derivative of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sinh a x} a\)





Primitive of $\cosh a x$




Then:














\(\ds \int \cosh^n a x \rd x\)

\(=\)







\(\ds \int \cosh^{n - 1} a x \cosh a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \cosh^{n - 1} a x \paren {\frac {\sinh a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {\sinh a x} a} \paren {\paren {n - 1} a \cosh^{n - 2} a x \sinh a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\cosh^{n - 1} a x \sinh a x} a\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {n - 1} \cosh^{n - 2} a x \sinh^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\cosh^{n - 1} a x \sinh a x} a\)





Difference of Squares of $\cosh$ and $\sinh$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {n - 1} \cosh^{n - 2} a x \paren {\cosh^2 a x - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\cosh^{n - 1} a x \sinh a x} a + \paren {n - 1} \int \cosh^{n - 2} a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 1} \int \cosh^n a x \rd x\)














\(\ds \leadsto \ \ \)





\(\ds n \int \cosh^n a x \rd x\)

\(=\)







\(\ds \frac {\cosh^{n - 1} a x \sinh a x} a + \paren {n - 1} \int \cosh^{n - 2} a x \rd x\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int \cosh^n a x \rd x\)

\(=\)







\(\ds \frac {\cosh^{n - 1} a x \sinh a x} {a n} + \frac {n - 1} n \int \cosh^{n - 2} a x \rd x\)





dividing both sides by $n$



We note that if $n = 0$, then $\dfrac {n - 1} n$ is undefined, rendering the derivation invalid.
$\blacksquare$


Also see
Primitive of $\sinh^n a x$
Primitive of $\tanh^n a x$
Primitive of $\coth^n a x$
Primitive of $\sech^n a x$
Primitive of $\csch^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.586$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $118$.




