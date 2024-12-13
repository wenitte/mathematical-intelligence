# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Sine_of_a_x_over_Power_of_Cosine_of_a_x/Reduction_of_Power_of_Cosine



Theorem
$\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x = \frac {\sin^{m + 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m - n + 2} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + C$


Proof













\(\ds \)

\(\)







\(\ds \frac {\sin^{m + 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\sin^{m + 2} a x} {\cos^n a x} \rd x\)





Primitive of $\dfrac {\sin^m a x} {\cos^n a x}$: Reduction of Both Powers














\(\ds \)

\(=\)







\(\ds \int \frac {\sin^m a x \paren {1 - \cos^2 a x} } {\cos^n a x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x - \int \frac {\sin^m a x \cos^2 a x} {\cos^n a x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x - \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x\)





simplifying




Hence, rearranging:














\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \frac {\sin^{m + 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin^{m + 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x - \frac {-n + 1} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + C\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {\sin^{m + 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m - n + 2} {n - 1} \int \frac {\sin^m a x} {\cos^{n - 2} a x} \rd x + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {\cos^m a x} {\sin^n a x}$ : Reduction of $\sin^n$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.426$




