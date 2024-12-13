# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Secant_of_a_x



Theorem
$\ds \int \sec^n a x \rd x = \frac {\sec^{n - 2} a x \tan a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \sec^{n - 2} a x \rd x$
where $n \ne 1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u}{\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sec^{n - 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \paren {n - 2} \sec^{n - 3} a x \sec a x \tan a x\)





Derivative of Power, Derivative of $\sec$, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a \paren {n - 2} \sec^{n - 2} a x \tan a x\)










and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sec^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tan a x} a\)





Primitive of $\sec^2 a x$




Then:














\(\ds \int \sec^n a x \rd x\)

\(=\)







\(\ds \int \sec^{n - 2} a x \sec^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sec^{n - 2} a x \paren {\frac {\tan a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {\tan a x} a} \paren {a \paren {n - 2} \sec^{n - 2} a x \tan a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sec^{n - 2} a x \tan a x} a - \paren {n - 2} \int \tan^2 a x \sec^{n - 2} a x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sec^{n - 2} a x \tan a x} a - \paren {n - 2} \int \paren {\sec^2 a x - 1} \sec^{n - 2} a x \rd x\)





Difference of $\sec^2$ and $\tan^2$














\(\ds \)

\(=\)







\(\ds \frac {\sec^{n - 2} a x \tan a x} a - \paren {n - 2} \int \sec^n a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 2} \int \sec^{n - 2} a x \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {n - 1} \int \sec^n a x \rd x\)

\(=\)







\(\ds \frac {\sec^{n - 2} a x \tan a x} a + \paren {n - 2} \int \sec^{n - 2} a x \rd x\)





gathering terms














\(\ds \int \sec^n a x \rd x\)

\(=\)







\(\ds \frac {\sec^{n - 2} a x \tan a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \sec^{n - 2} a x \rd x\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\sec a x$ for the case where $n = 1$
Primitive of $\sin^n a x$
Primitive of $\cos^n a x$
Primitive of $\tan^n a x$
Primitive of $\cot^n a x$
Primitive of $\csc^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.460$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $92$.




