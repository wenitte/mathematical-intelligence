# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_x_by_Power_of_a_x_%2B_b/Increment_of_Power_of_x/Proof_2

Theorem
$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Increment of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac 1 {\paren {n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - a \paren {m + n + 2} \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x}$

Setting $p := 1, q := 0, m := n, n := m$:














\(\ds \int x^m \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac 1 {\paren {m + 1} \paren {b 1 - a 0} } \paren {\paren {a x + b}^{n + 1} \paren {1 x + 0}^{m + 1} - a \paren {m + n + 2} \int \paren {a x + b}^n \paren {0 x + 1}^{m + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {m + 1} b} \paren {\paren {a x + b}^{n + 1} x^{m + 1} - a \paren {m + n + 2} \int \paren {a x + b}^n x^{m + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x\)









$\blacksquare$





