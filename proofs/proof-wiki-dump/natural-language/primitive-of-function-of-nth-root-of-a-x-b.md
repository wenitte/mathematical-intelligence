# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Nth_Root_of_a_x_%2B_b

Theorem
$\ds \int \map F {\sqrt [n] {a x + b} } \rd x = \frac n a \int u^{n - 1} \map F u \rd u$
where $u = \sqrt [n] {a x + b}$.


Proof













\(\ds u\)

\(=\)







\(\ds \sqrt [n] {a x + b}\)




















\(\ds u\)

\(=\)







\(\ds \paren {a x + b}^{1/n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {n \paren {\sqrt [n] {a x + b} }^{n - 1} } \map {\frac \d {\d x} } {a x + b}\)





Chain Rule for Derivatives, Derivative of Nth Root














\(\ds \)

\(=\)







\(\ds \frac 1 {n u^{n - 1} } \map {\frac \d {\d x} } {a x + b}\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac a {n u^{n - 1} }\)





Derivative of Function of Constant Multiple: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\sqrt [n] {a x + b} } \rd x\)

\(=\)







\(\ds \int \frac {n u^{n - 1} } a \map F u \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \frac n a \int u^{n - 1} \map F u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.51$




