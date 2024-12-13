# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_Cosine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {\cos^n a x} = \frac {x \sin a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cos^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cos^{n - 2} a x} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac x {\cos^{n - 2} a x}\)




















\(\ds \)

\(=\)







\(\ds x \cos^{- n + 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds x \map {\frac \d {\d x} } {\cos^{-n + 2} a x} + \paren {\frac \d {\d x} x} \paren {\cos^{-n + 2} a x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -a x \paren {-n + 2} \cos^{-n + 1} a x \sin a x + \cos^{-n + 2} a x\)





Derivative of $\cos a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {a x \paren {n - 2} \sin a x} {\cos^{n - 1} a x} + \cos^{-n + 2} a x\)





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














\(\ds \int \frac {x \rd x} {\cos^n a x}\)

\(=\)







\(\ds \paren {\frac x {\cos^{n - 2} a x} } \paren {\frac {\tan a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {\tan a x} a} \paren {\frac {a x \paren {n - 2} \sin a x} {\cos^{n - 1} a x} + \cos^{- n + 2} a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} {a \cos^{n - 1} a x} - \int \paren {\frac {x \paren {n - 2} \sin^2 a x} {\cos^n a x} -\frac {\sin a x} {a \cos^{n - 1} a x} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} {a \cos^{n - 1} a x} - \paren {n - 2} \int \frac {x \sin^2 a x} {\cos^n a x} \rd x + \frac 1 a \int \frac {\sin a x}{\cos^{n - 1} a x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} {a \cos^{n - 1} a x}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 2} \int \frac {x \paren {1 - \cos^2 a x} } {\cos^n a x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 a \paren {\frac {-1} {\paren {n - 2} \cos^{n - 2} a x} }\)





Primitive of $\cos^n a x \sin a x$














\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} {a \cos^{n - 1} a x}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 2} \int \frac {x \rd x} {\cos^n a x} + \paren {n - 2} \int \frac {x \rd x} {\cos^{n - 2} a x}\)





Linear Combination of Primitives and simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 a \paren {\frac {-1} {\paren {n - 2} a \cos^{n - 2} a x} }\)










This leads to:














\(\ds \paren {n - 1} \int \frac {x \rd x} {\cos^n a x}\)

\(=\)







\(\ds \frac {x \sin a x} {a \cos^{n - 1} a x} + \paren {n - 2} \int \frac {x \rd x} {\cos^{n - 2} a x} - \frac 1 {a^2 \paren {n - 2} \cos^{n - 2} a x}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\cos^n a x}\)

\(=\)







\(\ds \frac {x \sin a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cos^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {\d x} {\cos^{n - 2} a x} + C\)









$\blacksquare$


Also see
Primitive of $\dfrac x {\sin^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.398$




