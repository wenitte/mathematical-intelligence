# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:














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











Proof
First:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \rd x} {c x^m \paren {a x^2 + b x + c}^n}\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {c \rd x} {x^m \paren {a x^2 + b x + c}^n}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {a x^2 + b x + c - a x^2 - b x} {x^m \paren {a x^2 + b x + c}^n} \rd x\)





adding and subtracting $a x^2 + b x$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x^m \paren {a x^2 + b x + c}^n} - \frac a c \int \frac {x^2 \rd x} {x^m \paren {a x^2 + b x + c}^n}\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {x \rd x} {x^m \paren {a x^2 + b x + c}^n}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^{n - 1} } - \frac a c \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n}\)





simplification














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)










Next, with a view to obtaining an expression in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a x^2 + b x + c}^{-\paren {n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {n - 1} \paren {a x^2 + b x + c}^{-\paren {n - 1} - 1} \paren {2 a x + b}\)





Chain Rule for Derivatives and Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac {-\paren {n - 1} \paren {2 a x + b} } {\paren {a x^2 + b x + c}^n}\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^m}\)




















\(\ds \)

\(=\)







\(\ds x^-m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{-m + 1} } {-m + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {m - 1} x^{m - 1} }\)





simplifying




Then:














\(\ds \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^{n - 1} }\)

\(=\)







\(\ds \int \frac 1 {\paren {a x^2 + b x + c}^{n - 1} } \frac 1 {x^m} \rd x\)





Note the index is $n - 1$














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c}^{n - 1} } \frac {-1} {\paren {m - 1} x^{m - 1} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \frac {-1} {\paren {m - 1} x^{m - 1} } \frac {-\paren {n - 1} \paren {2 a x + b} } {\paren {a x^2 + b x + c}^n} \rd x\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {m - 1} x^{m - 1} \paren {a x^2 + b x + c}^{n - 1} }\)





simplification














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {2 a \paren {n - 1} } {m - 1} \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n}\)





and Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {b \paren {n - 1} } {m - 1} \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)










Thus:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x^m \paren {a x^2 + b x + c}^{n - 1} } - \frac a c \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac b c \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)





$(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 c \paren {\frac {-1} {\paren {m - 1} x^{m - 1} \paren {a x^2 + b x + c}^{n - 1} } - \frac {2 a \paren {n - 1} } {m - 1} \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac {b \paren {n - 1} } {m - 1} \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n} }\)





$(2)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac b c \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {c \paren {m - 1} x^{m - 1} \paren {a x^2 + b x + c}^{n - 1} } - \frac {2 a \paren {n - 1} } {c \paren {m - 1} } \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac {b \paren {n - 1} } {c \paren {m - 1} } \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac b c \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {m - 1} c x^{m - 1} \paren {a x^2 + b x + c}^{n - 1} } - \frac {\paren {m + 2 n - 3} a} {\paren {m - 1} c} \int \frac {\d x} {x^{m - 2} \paren {a x^2 + b x + c}^n} - \frac {\paren {m - n + 2} b} {\paren {m - 1} c} \int \frac {\d x} {x^{m - 1} \paren {a x^2 + b x + c}^n}\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.279$




