# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Power_of_Sine_of_b_x/Lemma_1

Lemma for Primitive of $e^{a x} \sin^n b x \cos b x$
$\ds \int e^{a x} \sin^{n - 1} b x \cos b x \rd x = \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + n b^2} + \frac {\paren {n - 1} a b} {a^2 + n b^2} \paren {\int e^{a x} \sin^n b x \rd x - \int e^{a x} \sin^{n - 2} b x \rd x} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin^{n - 1} b x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {n - 1} b \sin^{n - 2} b x \cos b x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^{a x} \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)





Primitive of $e^{a x} \cos b x$




Then:














\(\ds \)

\(\)







\(\ds \int e^{a x} \sin^{n - 1} b x \cos b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\sin^{n - 1} b x} \paren {e^{a x} \cos b x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^{n - 1} b x} \paren {\frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} } \paren {\paren {n - 1} b \sin^{n - 2} b x \cos b x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + b^2} \int e^{a x} \sin^{n - 2} b x \cos^2 b x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} b^2} {a^2 + b^2} \int e^{a x} \sin^{n - 1} b x \cos b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {1 + \frac {\paren {n - 1} b^2} {a^2 + b^2} } \int e^{a x} \sin^{n - 1} b x \cos b x \rd x\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + b^2} \int e^{a x} \sin^{n - 2} b x \cos^2 b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {a^2 + n b^2} \int e^{a x} \sin^{n - 1} b x \cos b x \rd x\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \sin^{n - 2} b x \cos^2 b x \rd x + C\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \sin^{n - 2} b x \paren {1 - \sin^2 b x} \rd x + C\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x}\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \sin^{n - 2} b x \rd x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \sin^n b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int e^{a x} \sin^{n - 1} b x \cos b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + n b^2}\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + n b^2} \int e^{a x} \sin^{n - 2} b x \rd x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + n b^2} \int e^{a x} \sin^n b x \rd x + C\)









and so rearranging:

$\ds \int e^{a x} \sin^{n - 1} b x \cos b x \rd x = \frac {e^{a x} \sin^{n - 1} b x \paren {a \cos b x + b \sin b x} } {a^2 + n b^2} + \frac {\paren {n - 1} a b} {a^2 + n b^2} \paren {\int e^{a x} \sin^n b x \rd x - \int e^{a x} \sin^{n - 2} b x \rd x} + C$
$\blacksquare$





