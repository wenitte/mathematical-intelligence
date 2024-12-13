# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Power_of_Sine_of_b_x



Theorem
$\ds \int e^{a x} \sin^n b x \rd x = \frac {e^{a x} \sin^{n - 1} b x} {a^2 + n^2 b^2} \paren {a \sin b x - n b \cos b x} + \frac {n \paren {n - 1} b^2} {a^2 + n^2 b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin^n b x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds n b \sin^{n - 1} b x \cos b x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int e^{a x} \sin^n b x \rd x\)

\(=\)







\(\ds \sin^n b x \paren {\frac {e^{a x} } a} - \int \paren {\frac {e^{a x} } a} n b \sin^{n - 1} b x \cos b x \rd x + C\)





Integration by Parts




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^n b x} a - \frac {n b} a \int e^{a x} \sin^{n - 1} b x \cos b x \rd x + C\)





Primitive of Constant Multiple of Function




From Primitive of $e^{a x} \sin^{n - 1} b x \cos b x$: Lemma 1:

$\ds \int e^{a x} \sin^{n - 1} b x \cos b x \rd x = \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + n b^2} + \frac {\paren {n - 1} a b} {a^2 + n b^2} \paren {\int e^{a x} \sin^n b x \rd x - \int e^{a x} \sin^{n - 2} b x \rd x} + C$

Hence:














\(\ds \)

\(\)







\(\ds \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^n b x} a - \frac {n b} a \int e^{a x} \sin^{n - 1} b x \cos b x \rd x + C\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^n b x} a - \frac {n b} {a \paren {a^2 + n b^2} } e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)





Primitive of $e^{a x} \sin^n b x$: Lemma 1














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {n \paren {n - 1} b^2} {a^2 + n b^2} \int e^{a x} \sin^n b x \rd x + \frac {n \paren {n - 1} b^2} {a^2 + n b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {1 + \frac {n \paren {n - 1} b^2} {a^2 + n b^2} } \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^n b x} a - \frac {n b} {a \paren {a^2 + n b^2} } e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {n \paren {n - 1} b^2} {a^2 + n b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \frac {a^2 + n b^2 + n^2 b^2 - n b^2} {a^2 + n b^2} \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^n b x} a - \frac {n b} {a \paren {a^2 + n b^2} } e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {n \paren {n - 1} b^2} {a^2 + n b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {a^2 + n^2 b^2} \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 + n b^2} a e^{a x} \sin^n b x - \frac {n b} a e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n \paren {n - 1} b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {a^2 + n^2 b^2} \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \sin^{n - 1} b x \paren {a \sin b x - n b \cos b x}\)





Primitive of $e^{a x} \sin^n b x$: Lemma 2














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n \paren {n - 1} b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int e^{a x} \sin^n b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^{n - 1} b x} {a^2 + n^2 b^2} \paren {a \sin b x - n b \cos b x} + \frac {n \paren {n - 1} b^2} {a^2 + n^2 b^2} \int e^{a x} \sin^{n - 2} b x \rd x + C\)









$\blacksquare$


Also see
Primitive of $e^{a x} \cos^n b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.523$




