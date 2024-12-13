# 

Source: https://proofwiki.org/wiki/Primitive_of_Logarithm_of_x



Theorem
$\ds \int \ln x \rd x = x \ln x - x + C$


Corollary
$\ds \int \map \ln {1 - x} \rd x = \paren {x - 1} \map \ln {1 - x} - x + C$


Proof 1
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \ln x \rd x\)

\(=\)







\(\ds x \ln x - \int x \paren {\frac 1 x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \ln x - \int \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \ln x - x + C\)





Primitive of Constant



$\blacksquare$


Proof 2
Note that we have: 














\(\ds \int_0^1 \ln x \rd x\)

\(=\)







\(\ds \int_0^1 x^0 \paren {\ln x}^1 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^1 \map \Gamma 2} {1^2}\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds -1\)





Gamma Function Extends Factorial



We therefore have: 














\(\ds -1\)

\(=\)







\(\ds \int_0^1 \ln x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \map \ln {\frac u a} \rd u\)





substituting $x = \dfrac u a$ where $a > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \paren {\ln u - \ln a} \rd u\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 a \int_0^a \ln u \rd u - \ln a\)





Primitive of Constant, Fundamental Theorem of Calculus



giving: 

$\ds \frac 1 a \int_0^a \ln u \rd u = \ln a - 1$
so: 

$\ds \int_0^a \ln u \rd u = a \ln a - a$
for all real $a > 0$. 
By Fundamental Theorem of Calculus: First Part, we have that: 

$x \ln x - x$ is a primitive of $\ln x$ on $x > 0$.
We therefore conclude that, by Primitives which Differ by Constant:

$\ds \int \ln x \rd x = x \ln x - x + C$
for $x > 0$.
$\blacksquare$


Also presented as
Some sources present this result as:

$\ds \int \ln x \rd x = x \paren {\ln x - 1} + C$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.525$
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $10$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




