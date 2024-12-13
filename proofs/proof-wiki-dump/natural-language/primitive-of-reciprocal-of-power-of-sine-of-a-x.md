# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin^n a x} = \frac {-\cos a x} {a \paren {n - 1} \sin^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\sin^{n - 2} a x}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\sin^{n - 2} a x}\)




















\(\ds \)

\(=\)







\(\ds \sin^{- n + 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \paren {-n + 2} \sin^{-n + 1} a x \cos a x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-a \paren {n - 2} \cos a x} {\sin^{n - 1} a x}\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {\sin^2 a x}\)




















\(\ds \)

\(=\)







\(\ds \csc^2 a x\)





Cosecant is $\dfrac 1 \sin$








\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cot a x} a\)





Primitive of $\csc^2 a x$




Then:














\(\ds \int \frac {\d x} {\sin^n a x}\)

\(=\)







\(\ds \int \frac {\d x} {\sin^{n - 2} a x \sin^2 a x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {\sin^{n - 2} a x} } \paren {\frac {-\cot a x} a} - \int \paren {\frac {-\cot a x} a} \paren {\frac {-a \paren {n - 2} \cos a x} {\sin^{n - 1} a x} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\cos a x} {a \sin^{n - 1} a x} - \int \frac {\paren {n - 2} \cos^2 a x} {\sin^n a x} \rd x\)





Cotangent is $\dfrac {\cos} {\sin}$














\(\ds \)

\(=\)







\(\ds \frac {-\cos a x} {a \sin^{n - 1} a x} - \int \frac {\paren {n - 2} \paren {1 - \sin^2 a x} } {\sin^n a x} \rd x\)





Sum of $\sin^2$ and $\cos^2$














\(\ds \)

\(=\)







\(\ds \frac {-\cos a x} {a \sin^{n - 1} a x} - \paren {n - 2} \int \frac {\d x} {\sin^n a x} + \paren {n - 2} \int \frac {\d x} {\sin^{n - 2} a x}\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds \paren {n - 1} \int \frac {\d x} {\sin^n a x}\)

\(=\)







\(\ds \frac {-\cos a x} {a \sin^{n - 1} a x} + \paren {n - 2} \int \frac {\d x} {\sin^{n - 2} a x}\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sin^n a x}\)

\(=\)







\(\ds \frac {-\cos a x} {a \paren {n - 1} \sin^{n - 1} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\sin^{n - 2} a x}\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\cos^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.367$




