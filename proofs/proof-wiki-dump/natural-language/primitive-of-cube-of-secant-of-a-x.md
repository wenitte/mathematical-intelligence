# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Secant_of_a_x


This article is complete as far as it goes, but it could do with expansion.In particular: See Integral of secant cubed for multiple ways of solving this -- it is a classic student's exercise to solve this in as many ways as are available.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
$\ds \int \sec^3 a x \rd x = \frac 1 {2 a} \paren {\sec a x \tan a x + \ln \size {\sec a x + \tan a x} } + C$


Proof 1













\(\ds \int \sec^3 x \rd x\)

\(=\)







\(\ds \frac {\sec a x \tan a x} {2 a} + \frac 1 2 \int \sec a x \rd x\)





Primitive of $\sec^n a x$ where $n = 3$














\(\ds \)

\(=\)







\(\ds \frac {\sec a x \tan a x} {2 a} + \frac 1 2 \paren {\frac 1 a \ln \size {\sec a x + \tan a x} }\)





Primitive of $\sec a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\sec a x \tan a x + \ln \size {\sec a x + \tan a x} } + C\)





simplifying



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sec a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sec a x \tan a x\)





Derivative of Function of Constant Multiple, Derivative of $\sec$




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














\(\ds \int \sec^3 a x \rd x\)

\(=\)







\(\ds \int \sec a x \sec^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sec a x \frac {\tan a x} a - \int \paren {\frac {\tan a x} a} \paren {a \sec a x \tan a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \tan^2 a x \sec a x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \paren {\sec^2 a x - 1} \sec a x \rd x + C\)





Difference of $\sec^2$ and $\tan^2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x - \int \sec^3 a x \rd x + \int \sec a x \rd x + C\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds 2 \int \sec^3 a x \rd x\)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x + \int \sec a x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \sec a x \tan a x + \frac 1 a \ln \size {\sec a x + \tan a x} + C\)





Primitive of $\sec a x$



The result follows.
$\blacksquare$


Also see
Primitive of $\sin^3 a x$
Primitive of $\cos^3 a x$
Primitive of $\tan^3 a x$
Primitive of $\cot^3 a x$
Primitive of $\csc^3 a x$


Sources
1967: Michael Spivak: Calculus: Part $\text {III}$: Derivatives and Integrals: Chapter $18$: Integration in Elementary Terms: Problems $3 \ \text {viii}$
This is a tricky and important integral that often comes up.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.453$




