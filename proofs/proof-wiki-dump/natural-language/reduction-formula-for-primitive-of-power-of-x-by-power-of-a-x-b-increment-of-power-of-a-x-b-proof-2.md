# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Increment_of_Power_of_a_x_%2B_b/Proof_2

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x$


Proof
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





