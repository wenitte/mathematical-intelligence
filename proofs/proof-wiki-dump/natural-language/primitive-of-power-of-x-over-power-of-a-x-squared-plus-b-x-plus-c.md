# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:














\(\ds \int \frac {x^m \rd x} {\paren {a x^2 + b x + c}^n}\)

\(=\)







\(\ds \frac {x^{m - 1} } {\paren {2 n - m - 1} a \paren {a x^2 + b x + c}^{n - 1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {m - 1} c} {\paren {2 n - m - 1} a} \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - m} b} {\paren {2 n - m - 1} a} \int \frac {x^{m - 1} \rd x} {\paren {a x^2 + b x + c}^n}\)











Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c}^n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-\paren {2 a x + b} n} {\paren {a x^2 + b x + c}^{n + 1} }\)





Derivative of Power and Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int \frac {x^m \rd x} {\paren {a x^2 + b x + c}^n}\)

\(=\)







\(\ds \int \frac 1 {\paren {a x^2 + b x + c}^n} x^m \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c}^n} \frac {x^{m + 1} } {m + 1} - \int \frac {x^{m + 1} } {m + 1} \frac {-\paren {2 a x + b} n} {\paren {a x^2 + b x + c}^{n + 1} } \rd x\)





Integration by Parts




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {\paren {m + 1} \paren {a x^2 + b x + c}^n} + \frac n {m + 1} \int \frac {\paren {2 a x + b} x^{m + 1} } {\paren {a x^2 + b x + c}^{n + 1} } \rd x\)





simplifying




Meanwhile:














\(\ds \)

\(\)







\(\ds \int \frac {x^m \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} a x^2 \rd x} {\paren {a x^2 + b x + c}^n}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} \paren {a x^2 + b x + c - b x - c} \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^{n - 1} }\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \int \frac {x^{m - 1} \rd x} {\paren {a x^2 + b x + c}^n} - \frac c a \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)





and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac {x^{m - 1} } {\paren {m - 1} \paren {a x^2 + b x + c}^{n - 1} } + \frac {n - 1} {m - 1} \int \frac {\paren {2 a x + b} x^{m - 1} } {\paren {a x^2 + b x + c}^n} \rd x}\)





from $(1)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \int \frac {x^{m - 1} \rd x} {\paren {a x^2 + b x + c}^n} - \frac c a \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)





and simplification














\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {a \paren {m - 1} \paren {a x^2 + b x + c}^{n - 1} } + \frac {2 \paren {n - 1} } {m - 1} \int \frac {x^m} {\paren {a x^2 + b x + c}^n} \rd x\)





multiplying out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {b \paren {n - 1} } {a \paren {m - 1} } \int \frac {x^{m - 1} } {\paren {a x^2 + b x + c}^n} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \int \frac {x^{m - 1} \rd x} {\paren {a x^2 + b x + c}^n} - \frac c a \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {1 - \frac {2 \paren {n - 1} } {m - 1} } \int \frac {x^m \rd x} {\paren {a x^2 + b x + c}^n}\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {a \paren {m - 1} \paren {a x^2 + b x + c}^{n - 1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\frac {b \paren {n - 1} } {a \paren {m - 1} } - \frac b a} \int \frac {x^{m - 1} } {\paren {a x^2 + b x + c}^n} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \int \frac {x^m \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {\paren {2 n - m - 1} a \paren {a x^2 + b x + c}^{n - 1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {m - 1} c} {\paren {2 n - m - 1} a} \int \frac {x^{m - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {\paren {n - m} b} {\paren {2 n - m - 1} a} \int \frac {x^{m - 1} \rd x} {\paren {a x^2 + b x + c}^n}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + bx + c$: $14.275$




