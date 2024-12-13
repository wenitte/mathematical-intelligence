# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_square_of_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c}^2} = \frac {-1} {c x \paren {a x^2 + b x + c} } - \frac {3 a} c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac {2 b} c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}$


Proof 1
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


Proof 2
First:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \rd x} {c x^2 \paren {a x^2 + b x + c}^2}\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {c \rd x} {x^2 \paren {a x^2 + b x + c}^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {a x^2 + b x + c - a x^2 - b x} {x^2 \paren {a x^2 + b x + c}^2} \rd x\)





adding and subtracting $a x^2 + b x$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x^2 \paren {a x^2 + b x + c}^2} - \frac a c \int \frac {x^2 \rd x} {x^2 \paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {x \rd x} {x^2 \paren {a x^2 + b x + c}^2}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x^2 \paren {a x^2 + b x + c} } - \frac a c \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





simplification














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)










Next, with a view to obtaining an expression in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a x^2 + b x + c}^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {2 a x + b} \paren {a x^2 + b x + c}^{-2}\)





Chain Rule for Derivatives and Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac {-\paren {2 a x + b} } {\paren {a x^2 + b x + c}^2}\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac 1 {\paren {a x^2 + b x + c} } \frac 1 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {a x^2 + b x + c} } \frac {-1} x - \int \frac {-1} x \frac {-\paren {2 a x + b} } {\paren {a x^2 + b x + c}^2} \rd x\)





Integration by Parts




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {-1} {x \paren {a x^2 + b x + c} } - 2 a \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





simplification














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds b \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives




Thus:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x^2 \paren {a x^2 + b x + c} } - \frac a c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac b c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 c \paren {\frac {-1} {x \paren {a x^2 + b x + c} } - 2 a \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - b \int \frac {\d x} {x \paren {a x^2 + b x + c}^2} }\)





from $(2)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac b c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {c x \paren {a x^2 + b x + c} } - \frac {3 a} c \int \frac {\d x} {\paren {a x^2 + b x + c}^2} - \frac {2 b} c \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)





gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + bx + c$: $14.278$




