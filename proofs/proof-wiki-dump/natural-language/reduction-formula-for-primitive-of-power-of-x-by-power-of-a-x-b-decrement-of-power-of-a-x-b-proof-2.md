# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Decrement_of_Power_of_a_x_%2B_b/Proof_2

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Decrement of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^n} {\paren {m + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {m + n + 1} a} \int \paren {a x + b}^m \paren {p x + q}^{n - 1} \rd x$

Setting $a := 1, b := 0, p x + q := a x + b$:














\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac {\paren {1 x + 0}^{m + 1} \paren {a x + b}^n} {\paren {m + n + 1} 1} - \frac {n \paren {0 a - 1 b} } {\paren {m + n + 1} 1} \int \paren {1 x + 0}^m \paren {a x + b}^{n - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} - \frac {n b} {\paren {m + n + 1} } \int x^m \paren {a x + b}^{n - 1} \rd x\)









$\blacksquare$





