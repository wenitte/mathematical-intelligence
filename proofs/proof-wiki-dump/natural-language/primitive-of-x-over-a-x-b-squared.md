# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_squared



Theorem
$\ds \int \frac {x \rd x} {\paren {a x + b}^2} = \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac 1 a \frac {u - b} {a u^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d u} u - \frac b {a^2} \int \frac {\d u} {u^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size u + C - \frac b {a^2} \int \frac {\d u} u\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size u - \frac b {a^2} \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging



$\blacksquare$


Proof 2













\(\ds \int \frac {x \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac {a x \rd x} {a \paren {a x + b}^2}\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - b} \rd x} {a \paren {a x + b}^2}\)





adding and subtracting $b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x + b} \rd x} {\paren {a x + b}^2} - \frac b a \int \frac {\d x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {a x + b} - \frac b a \int \frac {\d x} {\paren {a x + b}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 a \ln \size {a x + b} } - \frac b a \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 a \ln \size {a x + b} } - \frac b a \paren {-\frac 1 {a \paren {a x + b} } } + C\)





Primitive of Reciprocal of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C\)





simplification



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \frac {x \rd x} {\paren {a x + b}^2} = \frac 1 {a^2} \paren {\ln \size {a x + b} + \frac b {a x + b} } + C$


Also see
Primitive of $x$ by $\paren {a x + b}^n$ for general $n$
Primitive of $x$ over $a x + b$ for the case when $n = -1$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.67$




