# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_square_of_a_x_squared_plus_b_x_plus_c/Proof_1

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c}^2} = \frac {-1} {c x \paren {a x^2 + b x + c} } - \frac {3 a} c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac {2 b} c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}$


Proof
From Primitive of Reciprocal of Power of x by Power of a x squared plus b x plus c:














\(\ds \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^n}\)

\(=\)







\(\ds \frac {-1} {\paren {m - 1} c x^{m - 1} \paren {a x^2 + b x + c}^{n - 1} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {m + 2 n - 3} a} {\paren {m - 1} c} \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {m - n + 2} b} {\paren {m - 1} c} \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)










Setting $m = n = 2$:














\(\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c}^2}\)

\(=\)







\(\ds \frac {-1} {\paren {2 - 1} c x^{2 - 1} \paren {a x^2 + b x + c}^{2 - 1} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {2 + 2 \times 2 - 3} a} {\paren {2 - 1} c} \int \frac {\d x} {x^{2 - 2} \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {2 - 2 + 2} b} {\paren {2 - 1} c} \int \frac {\d x} {x^{2 - 1} \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {c x \paren {a x^2 + b x + c} } - \frac {3 a} c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac {2 b} c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)





simplifying



$\blacksquare$





