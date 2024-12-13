# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int \sinh a x \cosh a x \rd x = \frac {\sinh^2 a x} {2 a} + C$


Proof 1













\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \int \frac {\sinh 2 a x} 2 \rd x\)





Double Angle Formula for Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sinh 2 a x \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {\cosh 2 a x} {2 a} } + C\)





Primitive of $\sinh a x$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {1 + 2 \sinh^2 a x} {2 a} } + C\)





Double Angle Formula for Hyperbolic Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + \frac 1 {4 a} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





subsuming $\dfrac 1 {4 a}$ into arbitrary constant



$\blacksquare$


Proof 2













\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \int \cosh a x \sinh a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\cosh^2 a x} {2 a} + C\)





Primitive of $\cosh^n a x \sinh a x$ using $n = 1$














\(\ds \)

\(=\)







\(\ds \frac {1 + \sinh^2 a x} {2 a} + C\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} + \frac {\sinh^2 a x} {2 a} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





subsuming $\dfrac 1 {2 a}$ into arbitrary constant



$\blacksquare$


Proof 3



\(\text {(1)}: \quad\)









\(\ds \int \sinh^n a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^{n + 1} a x} {\paren {n + 1} a} + C\)





Primitive of $\sinh^n a x \cosh a x$








\(\ds \leadsto \ \ \)





\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





setting $n = 1$ in $(1)$



$\blacksquare$


Proof 4
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cosh a x\)





Derivative of $\sinh a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sinh a x} a\)





Primitive of $\cosh a x$




Then:














\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \paren {\sinh a x} \paren {\frac {\sinh a x} a} - \int \paren {\frac {\sinh a x} a} \paren {a \cosh a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} a - \int \sinh a x \cosh a x \rd x + C\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 2 \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^2 a x} a + C\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





simplifying



$\blacksquare$


Proof 5













\(\ds u\)

\(=\)







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cosh a x\)





Derivative of $\sinh a x$








\(\ds \leadsto \ \ \)





\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \int \frac u a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 a \int u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {u^2} 2 + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





substituting for $u$



$\blacksquare$


Also see
Primitive of $\sinh a x \sinh p x$
Primitive of $\cosh a x \cosh p x$
Primitive of $\sinh p x \cosh q x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.590$




