# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\cos^n a x} = \frac {\sin a x} {a \paren {n - 1} \cos^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cos^{n - 2} a x}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\cos^{n - 2} a x}\)




















\(\ds \)

\(=\)







\(\ds \cos^{- n + 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \paren {-n + 2} \cos^{-n + 1} a x \sin a x\)





Derivative of $\cos a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {a \paren {n - 2} \sin a x} {\cos^{n - 1} a x}\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {\cos^2 a x}\)




















\(\ds \)

\(=\)







\(\ds \sec^2 a x\)





Secant is $\dfrac 1 \cos$








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tan a x} a\)





Primitive of $\sec^2 a x$




Then:














\(\ds \int \frac {\d x} {\cos^n a x}\)

\(=\)







\(\ds \int \frac {\d x} {\cos^{n - 2} a x \cos^2 a x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {\cos^{n - 2} a x} } \paren {\frac {\tan a x} a} - \int \paren {\frac {\tan a x} a} \paren {\frac {a \paren {n - 2} \sin a x} {\cos^{n - 1} a x} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} {a \cos^{n - 1} a x} - \int \frac {\paren {n - 2} \sin^2 a x} {\cos^n a x} \rd x\)





Tangent is $\dfrac {\sin} {\cos}$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} {a \cos^{n - 1} a x} - \int \frac {\paren {n - 2} \paren {1 - \cos^2 a x} } {\cos^n a x} \rd x\)





Sum of $\sin^2$ and $\cos^2$














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} {a \cos^{n - 1} a x} - \paren {n - 2} \int \frac {\d x} {\cos^n a x} + \paren {n - 2} \int \frac {\d x} {\cos^{n - 2} a x}\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds \paren {n - 1} \int \frac {\d x} {\cos^n a x}\)

\(=\)







\(\ds \frac {\sin a x} {a \cos^{n - 1} a x} + \paren {n - 2} \int \frac {\d x} {\cos^{n - 2} a x}\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\cos^n a x}\)

\(=\)







\(\ds \frac {\sin a x} {a \paren {n - 1} \cos^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cos^{n - 2} a x}\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sin^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.397$




