# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_over_Power_of_p_plus_q_of_Cosine_of_a_x



Theorem
$\ds \int \frac {\sin a x \rd x} {\paren {p + q \cos a x}^n} = \frac 1 {a q \paren {n - 1} \paren {p + q \cos a x}^{n - 1} } + C$


Proof













\(\ds z\)

\(=\)







\(\ds p + q \cos a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -a q \sin a x\)





Derivative of $\cos a x$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\sin a x \rd x} {\paren {p + q \cos a x}^n}\)

\(=\)







\(\ds \int \frac {\d z} {-a q z^n}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} {a q} \int z^{-n} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {-1} {a q} \frac {z^{-n + 1} } {-n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a q \paren {n - 1} z^{n - 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a q \paren {n - 1} \paren {p + q \cos a x}^{n - 1} } + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\dfrac {\cos a x} {\paren {p + q \sin a x}^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.417$




