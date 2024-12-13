# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Cosine_of_a_x_over_Power_of_Sine_of_a_x/Reduction_of_Power_of_Sine



Theorem
$\ds \int \frac {\cos^m a x} {\sin^n a x} \rd x = \frac {-\cos^{m + 1} a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac {m - n + 2} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + C$


Proof













\(\ds \)

\(\)







\(\ds \frac {-\cos^{m + 1} a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\cos^{m + 2} a x} {\sin^n a x} \rd x\)





Primitive of $\dfrac {\cos^m a x} {\sin^n a x}$: Reduction of Both Powers














\(\ds \)

\(=\)







\(\ds \int \frac {\cos^m a x \paren {1 - \sin^2 a x} } {\sin^n a x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\cos^m a x} {\sin^n a x} \rd x - \int \frac {\cos^m a x \sin^2 a x} {\sin^n a x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\cos^m a x} {\sin^n a x} \rd x - \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x\)





simplifying




Hence, rearranging:














\(\ds \int \frac {\cos^m a x} {\sin^n a x} \rd x\)

\(=\)







\(\ds \frac {-\cos^{m + 1} a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-\cos^{m + 1} a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac {m + 1} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x - \frac {-n + 1} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + C\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {-\cos^{m + 1} a x} {a \paren {n - 1} \sin^{n - 1} a x} - \frac {m - n + 2} {n - 1} \int \frac {\cos^m a x} {\sin^{n - 2} a x} \rd x + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {\sin^m a x} {\cos^n a x}$ : Reduction of $\cos^n$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.427$




