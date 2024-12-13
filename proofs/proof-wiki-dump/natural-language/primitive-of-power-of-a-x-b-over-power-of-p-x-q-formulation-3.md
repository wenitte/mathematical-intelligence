# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_a_x_%2B_b_over_Power_of_p_x_%2B_q/Formulation_3

Theorem
$\ds \int \frac {\paren {a x + b}^m} {\paren {p x + q}^n} \rd x = \frac {-1} {\paren {n - 1} p} \paren {\frac {\paren {a x + b}^m} {\paren {p x + q}^{n - 1} } - m a \int \frac {\paren {a x + b}^{m - 1} } {\paren {p x + q}^{n - 1}} \rd x}$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \paren {a x + b}^m\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds m a \paren {a x + b}^m\)





Power Rule for Derivatives and Derivatives of Function of $a x + b$




Then:














\(\ds v\)

\(=\)







\(\ds \frac {\paren {p x + q}^{-\paren {n - 1} } } {-p \paren {n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \paren {p x + q}^n\)





Power Rule for Derivatives and Derivatives of Function of $a x + b$




Thus:














\(\ds \)

\(\)







\(\ds \int \frac {\paren {a x + b}^m} {\paren {p x + q}^n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {a x + b}^m \frac {\paren {p x + q}^{-\paren {n - 1} } } {-p \paren {n - 1} } - \int \frac {\paren {p x + q}^{-\paren {n - 1} } } {-p \paren {n - 1} } m a \paren {a x + b}^m \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} p} \paren {\frac {\paren {a x + b}^m} {\paren {p x + q}^{n - 1} } - m a \int \frac {\paren {a x + b}^{m-1} } {\paren {p x + q}^{n - 1} } \rd x}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.112$




