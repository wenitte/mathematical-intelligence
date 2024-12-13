# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Sine_of_a_x_by_Power_of_Cosine_of_a_x/Reduction_of_Power_of_Sine



Theorem
$\ds \int \sin^m a x \cos^n a x \rd x = \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {m + n} } + \frac {m - 1} {m + n} \int \sin^{m - 2} a x \cos^n a x \rd x + C$
for $n \ne -m$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin^{m - 1} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \paren {m - 1} \sin^{m - 2} a x \cos a x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sin a x \cos^n a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cos^{n + 1} a x} {\paren {n + 1} a}\)





Primitive of $\cos^n a x \sin a x$




Then:














\(\ds \int \sin^m a x \cos^n a x \rd x\)

\(=\)







\(\ds \int \paren {\sin^{m - 1} a x} \paren {\sin a x \cos^n a x} \rd v\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^{m - 1} a x} \paren {\frac {-\cos^{n + 1} a x} {\paren {n + 1} a} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {-\cos^{n + 1} a x} {\paren {n + 1} a} } \paren {a \paren {m - 1} \sin^{m - 2} a x \cos a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {n + 1} } + \frac {m - 1} {n + 1} \int \sin^{m - 2} a x \cos^{n + 2} a x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {n + 1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {m - 1} {n + 1} \int \sin^{m - 2} a x \cos^n a x \paren {1 - \sin^2 a x} \rd x + C\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {n + 1} } + \frac {m - 1} {n + 1} \int \sin^{m - 2} a x \cos^n a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {m - 1} {n + 1} \int \sin^m a x \cos^n a x \rd x + C\)










Hence after rearranging:














\(\ds \)

\(\)







\(\ds \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {n + 1} } + \frac {m - 1} {n + 1} \int \sin^{m - 2} a x \cos^n a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sin^m a x \cos^n a x \rd x + \frac {m - 1} {n + 1} \int \sin^m a x \cos^n a x \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {n + 1} {n + 1} \int \sin^m a x \cos^n a x \rd x + \frac {m - 1} {n + 1} \int \sin^m a x \cos^n a x \rd x + C\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {m + n} {n + 1} \int \sin^m a x \cos^n a x \rd x + C\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \int \sin^m a x \cos^n a x \rd x\)

\(=\)







\(\ds \frac {-\sin^{m - 1} a x \cos^{n + 1} a x} {a \paren {m + n} } + \frac {m - 1} {m + n} \int \sin^{m - 2} a x \cos^n a x \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\sin^m a x \cos^n a x$ : Reduction of Power of Cosine
Primitive of $\tan^n a x$ for $n = -m$.
Primitive of $\cot^n a x$ for $m = -n$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.425$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $68$.




