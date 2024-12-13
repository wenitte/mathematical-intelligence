# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b/Proof_2

Theorem
$\ds \int \frac {x^2 \rd x} {a x + b} = \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C$


Proof
From Reduction Formula for Primitive of $x^m \paren {a x + b}^n$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$
Let $m = 2$ and $n = -1$.

Then:














\(\ds \int \frac {x^2 \rd x} {a x + b}\)

\(=\)







\(\ds \int x^2 \paren {a x + b}^{-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2 \paren {a x + b}^0} {\paren 2 a} - \frac {2 b} {\paren 2 a} \int x^1 \paren {a x + b}^{-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 a} - \frac b a \int \frac {x \rd x} {a x + b}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 a} - \frac b a \paren {\frac x a - \frac b {a^2} \ln \size {a x + b} } + C\)





Primitive of $x$ over $a x + b$














\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 a} - \frac {b x} {a^2} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2} {2 a^3} - \frac {2 a b x} {2 a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2 + 2 a b x} {2 a^3} - \frac {4 a b x} {2 a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2 + 2 a b x + b^2} {2 a^3} - \frac {4 a b x + b^2} {2 a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2 + 2 a b x + b^2} {2 a^3} - \frac {4 a b x + 4 b^2} {2 a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)





subsuminging $\dfrac {3 b^2} {2 a^3}$ into the arbitrary constant














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 a b x + 2 b^2} {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)









$\blacksquare$





