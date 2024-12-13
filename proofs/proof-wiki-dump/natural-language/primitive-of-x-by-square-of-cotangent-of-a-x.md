# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Cotangent_of_a_x



Theorem
$\ds \int x \cot^2 a x \rd x = \frac {-x \cot a x} a + \frac 1 {a^2} \ln \size {\sin a x} - \frac {x^2} 2 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Primitive of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cot^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cot a x} a - x\)





Primitive of $\cot^2 a x$




Then:














\(\ds \int x \cot^2 a x \rd x\)

\(=\)







\(\ds x \paren {\frac {-\cot a x} a - x} - \int \paren {\frac {-\cot a x} a - x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-x \cot a x} a - x^2 + \int \paren {\frac {\cot a x} a + x} \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-x \cot a x} a - x^2 + \frac 1 a \int \cot a x \rd x + \int x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-x \cot a x} a - x^2 + \frac 1 a \paren {\frac {\ln \size {\sin a x} } a} + \int x \rd x + C\)





Primitive of $\cot a x$














\(\ds \)

\(=\)







\(\ds \frac {-x \cot a x} a - x^2 + \frac 1 {a^2} \ln \size {\sin a x} + \frac {x^2} 2 + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-x \cot a x} a + \frac 1 {a^2} \ln \size {\sin a x} - \frac {x^2} 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \sin^2 a x$
Primitive of $x \cos^2 a x$
Primitive of $x \tan^2 a x$
Primitive of $x \sec^2 a x$
Primitive of $x \csc^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cot a x$: $14.448$




