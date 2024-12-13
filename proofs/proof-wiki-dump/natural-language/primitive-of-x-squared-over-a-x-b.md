# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b



Theorem
$\ds \int \frac {x^2 \rd x} {a x + b} = \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C$


Proof 1
Put $u = a x + b$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {u - b} a\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 a\)










Then:














\(\ds \int \frac {x^2 \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^2 \frac {\d u} u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\paren {u - b}^2} u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \paren {u - 2 b + \frac {b^2} u} \rd u\)





multiplying out and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\int u \rd u - \int 2 b \rd u + \int \frac {b^2} u \rd u}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 + C - \int 2 b \rd u + \int \frac {b^2} u \rd u}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + C + \int \frac {b^2} u \rd u}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + C + b^2 \int \frac {\d u} u}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + b^2 \ln \size u} + C\)





Primitive of Reciprocal and subsuming arbitrary constant $C$














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)





substituting for $u$ and simplifying



$\blacksquare$


Proof 2
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


Examples
Primitive of $\dfrac {x^2} {x - 1}$
$\ds \int \dfrac {x^2 \rd x} {x - 1} = \frac {x^2} 2 + x + \ln \size {x - 1} + C$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.61$




