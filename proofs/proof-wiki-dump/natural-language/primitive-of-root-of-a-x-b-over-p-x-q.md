# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_p_x_%2B_q

Theorem
$\ds \int \frac {\sqrt{a x + b} } {p x + q} \rd x = \begin{cases}
\dfrac {2 \sqrt{a x + b} } p + \dfrac {\sqrt {b p - a q} } {p \sqrt p} \ln \size {\dfrac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } & : b p - a q > 0 \\
\dfrac {2 \sqrt{a x + b} } p - \dfrac {\sqrt {a q - b p} } {p \sqrt p} \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } & : b p - a q < 0 \\
\end{cases}$


Proof
From Primitive of Power of $a x + b$ over Power of $p x + q$: Formulation 2:

$\ds \int \frac {\paren {a x + b}^m} {\paren {p x + q}^n} \rd x = \frac {-1} {\paren {n - m - 1} p} \paren {\frac {\paren {a x + b}^m} {\paren {p x + q}^{n - 1} } + m \paren {b p - a q} \int \frac {\paren {a x + b}^{m - 1} } {\paren {p x + q}^n} \rd x}$

Setting $m := \dfrac 1 2$ and $n = 1$:














\(\ds \int \frac {\paren {a x + b}^{1/2} } {\paren {p x + q}^n} \rd x\)

\(=\)







\(\ds \frac {-1} {\paren {1 - \frac 1 2 - 1} p} \paren {\frac {\paren {a x + b}^{1/2} } {\paren {p x + q}^0} + \frac 1 2 \paren {b p - a q} \int \frac {\paren {a x + b}^{1/2 - 1} } {\paren {p x + q} } \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } p + \frac {b p - a q} p \int \frac {\d x} {\sqrt {a x + b} \paren {p x + q} }\)










From Primitive of Reciprocal of $p x + q$ by Root of $a x + b$:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt{a x + b} } = \begin{cases}
\dfrac 1 {\sqrt {b p - a q} \sqrt p} \ln \size {\dfrac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } & : b p - a q > 0 \\
\dfrac 2 {\sqrt {a q - b p} \sqrt p} \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } & : b p - a q < 0 \\
\end{cases}$

The result follows by substitution.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.115$




