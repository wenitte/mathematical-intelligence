# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_p_x_by_Hyperbolic_Cosine_of_q_x



Theorem
$\ds \int \sinh p x \cosh q x \rd x = \frac {\map \cosh {p + q} x} {2 \paren {p + q} } + \frac {\map \cosh {p - q} x} {2 \paren {p - q} } + C$


Proof













\(\ds \int \sinh p x \cosh q x \rd x\)

\(=\)







\(\ds \int \paren {\frac {\map \sinh {p x + q x} + \map \sinh {p x - q x} } 2} \rd x\)





Werner Formula for Hyperbolic Sine by Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map \sinh {p + q} x \rd x + \frac 1 2 \int \map \sinh {p - q} x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {\map \cosh {p + q} x} {p + q} + \frac 1 2 \frac {\map \cosh {p - q} x} {p - q} + C\)





Primitive of $\sinh a x$














\(\ds \)

\(=\)







\(\ds \frac {\map \cosh {p + q} x} {2 \paren {p + q} } + \frac {\map \cosh {p - q} x} {2 \paren {p - q} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\sinh a x \sinh p x$
Primitive of $\sinh a x \cosh a x$
Primitive of $\cosh a x \cosh p x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.591$




