# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_Sine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {\sin^n a x} = \frac {-x \cos a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sin^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {x \rd x} {\sin^{n - 2} a x}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac x {\sin^{n - 2} a x}\)




















\(\ds \)

\(=\)







\(\ds x \sin^{-n + 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds x \map {\frac {\d} {\d x} } {\sin^{-n + 2} a x} + \paren {\frac {\d} {\d x} x} \paren {\sin^{-n + 2} a x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds a x \paren {-n + 2} \sin^{-n + 1} a x \cos a x + \sin^{-n + 2} a x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {-a x \paren {n - 2} \cos a x} {\sin^{n - 1} a x} + \frac 1 {\sin^{n - 2} a x}\)





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














\(\ds \int \frac {x \d x} {\sin^n a x}\)

\(=\)







\(\ds \paren {\frac x {\sin^{n - 2} a x} } \paren {\frac {-\cot a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {-\cot a x} a} \paren {\frac {-a x \paren {n - 2} \cos a x} {\sin^{n - 1} a x} + \frac 1 {\sin^{n - 2} a x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-x \cos a x} {a \sin^{n - 1} a x} - \int \paren {\frac {x \paren {n - 2} \cos^2 a x} {\sin^n a x} - \frac {\cos a x} {a \sin^{n - 1} a x} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-x \cos a x} {a \sin^{n - 1} a x} - \paren {n - 2} \int \frac {x \cos^2 a x} {\sin^n a x} \rd x + \frac 1 a \int \frac {\cos a x} {\sin^{n - 1} a x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-x \cos a x} {a \sin^{n - 1} a x}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 2} \int \frac {x \paren {1 - \sin^2 a x} } {\sin^n a x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 a \paren {\frac {-1} {\paren {n - 2} a \sin^{n - 2} a x} }\)





Primitive of $\sin^n a x \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {-x \cos a x} {a \sin^{n - 1} a x}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 2} \int \frac {x \rd x} {\sin^n a x} + \paren {n - 2} \int \frac {x \rd x} {\sin^{n - 2} a x}\)





Linear Combination of Primitives and simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 a \paren {\frac {-1} {\paren {n - 2} a \sin^{n - 2} a x} }\)










This leads to:














\(\ds \paren {n - 1} \int \frac {x \rd x} {\sin^n a x}\)

\(=\)







\(\ds \frac {-x \cos a x} {a \sin^{n - 1} a x} + \paren {n - 2} \int \frac {x \rd x} {\sin^{n - 2} a x} - \frac 1 {a^2 \paren {n - 2} \sin^{n - 2} a x}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\sin^n a x}\)

\(=\)







\(\ds \frac {-x \cos a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sin^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {x \rd x} {\sin^{n - 2} a x}\)









$\blacksquare$


Also see
Primitive of $\dfrac x {\cos^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.368$




