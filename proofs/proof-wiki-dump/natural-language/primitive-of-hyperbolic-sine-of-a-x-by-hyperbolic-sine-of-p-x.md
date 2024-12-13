# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Sine_of_p_x



Theorem
$\ds \int \sinh a x \sinh p x \rd x = \frac {\map \sinh {a + p} x} {2 \paren {a + p} } - \frac {\map \sinh {a - p} x} {2 \paren {a - p} } + C$


Proof













\(\ds \int \sinh a x \sinh p x \rd x\)

\(=\)







\(\ds \int \paren {\frac {\map \cosh {a x + p x} - \map \cosh {a x - p x} } 2} \rd x\)





Werner Formula for Hyperbolic Sine by Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map \cosh {a + p} x \rd x - \frac 1 2 \int \map \cosh {a - p} x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {\map \sinh {a + p} x} {a + p} - \frac 1 2 \frac {\map \sinh {a - p} x} {a - p} + C\)





Primitive of $\cosh a x$














\(\ds \)

\(=\)







\(\ds \frac {\map \sinh {a + p} x} {2 \paren {a + p} } - \frac {\map \sinh {a - p} x} {2 \paren {a - p} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\cosh a x \cosh p x$
Primitive of $\sinh a x \cosh a x$
Primitive of $\sinh p x \cosh q x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.550$




