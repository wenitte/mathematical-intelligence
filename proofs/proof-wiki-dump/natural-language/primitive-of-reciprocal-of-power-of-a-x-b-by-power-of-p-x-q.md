# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_a_x_%2B_b_by_Power_of_p_x_%2B_q

Theorem
$\ds \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^n} = \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{m - 1} \paren {p x + q}^{n - 1} } + a \paren {m + n - 2} \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^{n - 1} } }$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Increment of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac 1 {\paren {n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - a \paren {m + n + 2} \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x}$

Setting $m := -m$ and $n := -n$:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^n}\)




















\(\ds \)

\(=\)







\(\ds \int \paren {a x + b}^{-m} \paren {p x + q}^{-n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {-n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{-m + 1} \paren {p x + q}^{-n + 1} - a \paren {-m - n + 2} \int \paren {a x + b}^{-m} \paren {p x + q}^{-n + 1} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{m - 1} \paren {p x + q}^{n - 1} } + a \paren {m + n - 2} \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^{n - 1} } }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.110$




