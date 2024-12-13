# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Root_of_a_x_%2B_b

Theorem
$\ds \int \map F {\sqrt {a x + b} } \rd x = \frac 2 a \int u \map F u \rd u$
where $u = \sqrt {a x + b}$.


Proof













\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)




















\(\ds u\)

\(=\)







\(\ds \paren {a x + b}^{1/2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 2 \paren {a x + b}^{-1/2} \map {\frac \d {\d x} } {a x + b}\)





Chain Rule for Derivatives, Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 u} \map {\frac \d {\d x} } {a x + b}\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac a {2 u}\)





Derivative of Function of Constant Multiple: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\sqrt {a x + b} } \rd x\)

\(=\)







\(\ds \int \frac {2 u} a \map F u \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \frac 2 a \int u \map F u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.50$




