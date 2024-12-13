# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Power_of_Cosine_of_b_x/Lemma_1

Lemma for Primitive of $e^{a x} \cos b x$
$\ds \int e^{a x} \cos^{n - 1} b x \sin b x \rd x = \frac {e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x} } {a^2 + n b^2} - \frac {\paren {n - 1} a b} {a^2 + n b^2} \paren {\int e^{a x} \cos^n b x \rd x - \int e^{a x} \cos^{n - 2} b x \rd x} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cos^{n - 1} b x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {n - 1} b \cos^{n - 2} b x \sin b x\)





Derivative of $\cos a x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^{a x} \sin b x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2}\)





Primitive of $e^{a x} \sin b x$




Then:














\(\ds \)

\(\)







\(\ds \int e^{a x} \cos^{n - 1} b x \sin b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\cos^{n - 1} b x} \paren {e^{a x} \sin b x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos^{n - 1} b x} \paren {\frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} } \paren {-\paren {n - 1} b \cos^{n - 2} b x \sin b x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x} } {a^2 + b^2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + b^2} \int e^{a x} \cos^{n - 2} b x \sin^2 b x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} b^2} {a^2 + b^2} \int e^{a x} \cos^{n - 1} b x \sin b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {1 + \frac {\paren {n - 1} b^2} {a^2 + b^2} } \int e^{a x} \cos^{n - 1} b x \sin b x \rd x\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x} } {a^2 + b^2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + b^2} \int e^{a x} \cos^{n - 2} b x \sin^2 b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {a^2 + n b^2} \int e^{a x} \cos^{n - 1} b x \sin b x \rd x\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x}\)





simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \cos^{n - 2} b x \sin^2 b x \rd x + C\)




















\(\ds \)

\(=\)







\(\ds e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \cos^{n - 2} b x \paren {1 - \cos^2 b x} \rd x + C\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x}\)





simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \cos^{n - 2} b x \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {n - 1} a b \int e^{a x} \cos^n b x \rd x + C\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int e^{a x} \cos^{n - 1} b x \sin b x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x} } {a^2 + n b^2}\)





simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + n b^2} \int e^{a x} \cos^{n - 2} b x \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - 1} a b} {a^2 + n b^2} \int e^{a x} \cos^n b x \rd x + C\)









and so rearranging:

$\ds \int e^{a x} \cos^{n - 1} b x \sin b x \rd x = \frac {e^{a x} \cos^{n - 1} b x \paren {a \sin b x - b \cos b x} } {a^2 + n b^2} - \frac {\paren {n - 1} a b} {a^2 + n b^2} \paren {\int e^{a x} \cos^n b x \rd x - \int e^{a x} \cos^{n - 2} b x \rd x} + C$
$\blacksquare$





