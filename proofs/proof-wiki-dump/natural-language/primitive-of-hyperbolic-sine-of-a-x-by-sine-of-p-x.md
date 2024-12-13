# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_by_Sine_of_p_x



Theorem
$\ds \int \sinh a x \sin p x \rd x = \frac {a \cosh a x \sin p x - p \sinh a x \cos p x} {a^2 + p^2} + C$


Proof













\(\ds \int \sinh a x \sin p x \rd x\)

\(=\)







\(\ds \int \paren {\frac {e^{a x} - e^{-a x} } 2} \sin p x \rd x\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int e^{a x} \sin p x \rd x - \frac 1 2 \int e^{- a x} \sin p x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {e^{a x} \paren {a \sin p x - p \cos p x} } {a^2 + p^2} } - \frac 1 2 \paren {\frac {e^{-a x} \paren {-a \sin p x - p \cos p x} } {a^2 + p^2} } + C\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a^2 + p^2} } \paren {a \paren {\frac {e^{a x} + e^{-a x} } 2} \sin p x - p \paren {\frac {e^{a x} - e^{-a x} } 2} \cos p x} + C\)





factoring














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a^2 + p^2} } \paren {a \cosh a x \sin p x - p \paren {\frac {e^{a x} - e^{-a x} } 2} \cos p x} + C\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a^2 + p^2} } \paren {a \cosh a x \sin p x - p \sinh a x \cos p x} + C\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac {a \cosh a x \sin p x - p \sinh a x \cos p x} {a^2 + p^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\sinh a x \cos p x$
Primitive of $\cosh a x \sin p x$
Primitive of $\cosh a x \cos p x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.551$




