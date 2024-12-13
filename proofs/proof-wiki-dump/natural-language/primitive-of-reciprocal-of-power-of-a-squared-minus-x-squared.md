# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_a_squared_minus_x_squared



Theorem
$\ds \int \frac {\d x} {\paren {a^2 - x^2}^n} = \frac x {2 \paren {n - 1} a^2 \paren {a^2 - x^2}^{n - 1} } + \frac {2 n - 3} {\paren {2 n - 2} a^2} \int \frac {\d x} {\paren {a^2 - x^2}^{n - 1} }$
for $x^2 > a^2$.


Proof
Aiming for an expression in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \ \frac {\d u} {\d x} \rd x$
in order to use the technique of Integration by Parts, let:














\(\ds v\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives




Thus:














\(\ds u\)

\(=\)







\(\ds \frac 1 {\paren {a^2 - x^2}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a^2 - x^2}^{-\paren {n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {n - 1} \paren {-2 x} \paren {a^2 - x^2}^{-\paren {n - 1} - 1}\)





Power Rule for Derivatives and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 2 \paren {n - 1} x \paren {a^2 - x^2}^{-n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n - 2} x} {\paren {a^2 - x^2}^n}\)









Then:














\(\ds \int \frac {\d x} {\paren {a^2 - x^2}^{n - 1} }\)

\(=\)







\(\ds \frac 1 {\paren {a^2 - x^2}^{n - 1} } x - \int x \frac {\paren {2 n - 2} x} {\paren {a^2 - x^2}^n} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac x {\paren {a^2 - x^2}^{n - 1} } - \paren {2 n - 2} \int \frac {x^2} {\paren {a^2 - x^2}^n} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x {\paren {a^2 - x^2}^{n - 1} } - \paren {2 n - 2} \int \frac {x^2 - a^2 + a^2} {\paren {a^2 - x^2}^n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac x {\paren {a^2 - x^2}^{n - 1} } - \paren {2 n - 2} \int \frac {-\paren {a^2 - x^2} } {\paren {a^2 - x^2}^n} \rd x - \paren {2 n - 2} a^2 \int \frac {\d x} {\paren {a^2 - x^2}^n}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x {\paren {a^2 - x^2}^{n - 1} } + \paren {2 n - 2} \int \frac {\d x} {\paren {a^2 - x^2}^{n - 1} } - \paren {2 n - 2} a^2 \int \frac {\d x} {\paren {a^2 - x^2}^n}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 - \paren {2 n - 2} } \int \frac {\d x} {\paren {a^2 - x^2}^{n - 1} }\)

\(=\)







\(\ds \frac x {\paren {a^2 - x^2}^{n - 1} } + \paren {2 n - 2} a^2 \int \frac {\d x} {\paren {a^2 - x^2}^n}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {a^2 - x^2}^n}\)

\(=\)







\(\ds \frac x {2 \paren {n - 1} a^2 \paren {a^2 - x^2}^{n - 1} } + \frac {2 n - 3} {\paren {2 n - 2} a^2} \int \frac {\d x} {\paren {a^2 - x^2}^{n - 1} }\)









$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {x^2 - a^2}^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.177$




