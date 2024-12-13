# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^n \paren {a x^2 + b x + c} } = \frac {-1} {\paren {n - 1} c x^{n - 1} } - \frac b c \int \frac {\d x} {x^{n - 1} \paren {a x^2 + b x + c} } - \frac a c \int \frac {\d x} {x^{n - 2} \paren {a x^2 + b x + c} }$


Proof













\(\ds \int \frac {\d x} {x^{n - 2} \paren {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {x^{-n + 2} \rd x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-n + 1} } {\paren {-n + 1} a} - \frac b a \int \frac {x^{-n + 1} \rd x} {a x^2 + b x + c} - \frac c a \int \frac {x^{-n} \rd x} {a x^2 + b x + c}\)





Primitive of $\dfrac {x^m} {a x^2 + b x + c}$








\(\ds \leadsto \ \ \)





\(\ds \frac c a \int \frac {\d x} {x^n \paren {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} a x^{n - 1} } - \frac b a \int \frac {\d x} {x^{n - 1} \paren {a x^2 + b x + c} } - \int \frac {\d x} {x^{n - 2} \paren {a x^2 + b x + c} }\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^n \paren {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} c x^{n - 1} } - \frac b c \int \frac {\d x} {x^{n - 1} \paren {a x^2 + b x + c} } - \frac a c \int \frac {\d x} {x^{n - 2} \paren {a x^2 + b x + c} }\)





multiplying by $\dfrac a c$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.271$




