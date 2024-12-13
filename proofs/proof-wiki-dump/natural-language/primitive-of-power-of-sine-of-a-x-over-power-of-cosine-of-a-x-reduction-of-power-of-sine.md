# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Sine_of_a_x_over_Power_of_Cosine_of_a_x/Reduction_of_Power_of_Sine

Theorem
$\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x = \frac {-\sin^{m - 1} a x} {a \paren {m - n} \cos^{n - 1} a x} + \frac {m - 1} {m - n} \int \frac {\sin^{m - 2} a x} {\cos^n a x} \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac {\sin^{m - 1} a x} {\cos^n a x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\cos^n a x \dfrac {\d} {\d x} \sin^{m - 1} a x - \sin^{m - 1} a x \dfrac {\d} {\d x} \cos^n a x} {\cos^{2 n} a x}\)





Quotient Rule for Derivatives




Thus:














\(\ds \frac \d {\d x} \sin^{m - 1} a x\)

\(=\)







\(\ds a \paren {m - 1} \sin^{m - 2} a x \cos a x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \frac \d {\d x} \cos^n a x\)

\(=\)







\(\ds a n \cos^{n - 1} a x \paren {-\sin a x}\)





Derivative of $\cos a x$, Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -a n \cos^{n - 1} a x \sin a x\)









and so:














\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\cos^n a x \paren {a \paren {m - 1} \sin^{m - 2} a x \cos a x} + \sin^{m - 1} a x \paren {a n \cos^{n - 1} a x \sin a x} } {\cos^{2 n} a x}\)




















\(\ds \)

\(=\)







\(\ds \frac {a \paren {m - 1} \sin^{m - 2} a x \cos^2 a x + a n \sin^m a x} {\cos^{n + 1} a x}\)





simplifying and cancelling $\cos^{n - 1}$














\(\ds \)

\(=\)







\(\ds \frac {a \sin^{m - 2} a x \paren {\paren {m - 1} \cos^2 a x + n \sin^2 a x} } {\cos^{n + 1} a x}\)





factorising














\(\ds \)

\(=\)







\(\ds \frac {a \sin^{m - 2} a x \paren {\paren {m - 1} \paren {1 - \sin^2 a x} + n \sin^2 a x} } {\cos^{n + 1} a x}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \frac {a \sin^{m - 2} a x \paren {\paren {n - m + 1} \sin^2 a x + \paren {m - 1} } } {\cos^{n + 1} a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {a \paren {n - m + 1} \sin^m a x} {\cos^{n + 1} a x} + \frac {a \paren {m - 1} \sin^{m - 2} a x} {\cos^{n + 1} a x}\)





separating




Then let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sin a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cos a x} a\)





Primitive of $\sin a x$




Then:














\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \int \frac {\sin^{m - 1} a x} {\cos^n a x} \sin a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin^{m - 1} a x} {\cos^n a x} } \paren {\frac {-\cos a x} a}\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {-\cos a x} a} \paren {\frac {a \paren {n - m + 1} \sin^m a x} {\cos^{n + 1} a x} + \frac {a \paren {m - 1} \sin^{m - 2} a x} {\cos^{n + 1} a x} } \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x} {a \cos^{n - 1} a x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - m + 1} \int \frac {\sin^m a x} {\cos^n a x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {m - 1} \int \frac {\sin^{m - 2} a x} {\cos^n a x} \rd x + C\)
















\(\ds \leadsto \ \ \)





\(\ds \paren {1 - \paren {n - m + 1} } \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x} {a \cos^{n - 1} a x} + \paren {m - 1} \int \frac {\sin^{m - 2} a x} {\cos^n a x} \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \paren {m - n} \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x} {a \cos^{n - 1} a x} + \paren {m - 1} \int \frac {\sin^{m - 2} a x} {\cos^n a x} \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x} {a \paren {m - n} \cos^{n - 1} a x} + \frac {m - 1} {m - n} \int \frac {\sin^{m - 2} a x} {\cos^n a x} \rd x + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.426$




