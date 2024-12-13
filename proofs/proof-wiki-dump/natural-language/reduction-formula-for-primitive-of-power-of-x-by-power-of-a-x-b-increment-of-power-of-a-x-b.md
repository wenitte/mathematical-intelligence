# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Increment_of_Power_of_a_x_%2B_b



Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x$


Proof 1
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$

Substituting $n + 1$ for $n$:














\(\ds \int x^m \paren {a x + b}^{n + 1} \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \frac {\paren {n + 1} b} {m + n + 2} \int x^m \paren {a x + b}^n \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\paren {n + 1} b} {m + n + 2} \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement








\(\ds \leadsto \ \ \)





\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {m + n + 2} {\paren {n + 1} b} \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {m + n + 2} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement








\(\ds \leadsto \ \ \)





\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x\)





rearrangement



$\blacksquare$


Proof 2
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Increment of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac 1 {\paren {n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - a \paren {m + n + 2} \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x}$

Setting $a := 1, b := 0, p x + q := a x + b$:














\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac 1 {\paren {n + 1} \paren {0 a - 1 b} } \paren {\paren {1 x + 0}^{m + 1} \paren {a x + b}^{n + 1} - 1 \paren {m + n + 2} \int \paren {1 x + 0}^m \paren {a x + b} ^{n + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {n + 1} \paren {-b} } \paren {x^{m + 1} \paren {a x + b}^{n + 1} - \paren {m + n + 2} \int x^m \paren {a x + b}^{n + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.83$




