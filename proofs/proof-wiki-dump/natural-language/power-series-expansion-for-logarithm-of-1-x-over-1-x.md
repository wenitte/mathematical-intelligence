# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_1_%2B_x_over_1_%2B_x

Theorem













\(\ds \frac {\map \ln {1 + x} } {1 + x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} H_n x^n\)




















\(\ds \)

\(=\)







\(\ds x - H_2 x^2 + H_3 x^3 - H_4 x^4 + \cdots\)









where $H_n$ denotes the $n$th harmonic number:

$H_n = \ds \sum_{r \mathop = 1}^n \dfrac 1 r = 1 + \dfrac 1 2 + \dfrac 1 3 \cdots + \dfrac 1 r$
valid for all $x \in \R$ such that $\size x < 1$.


Proof
Let $\map f x = \dfrac {\map \ln {1 + x} } {1 + x}$.
By definition of Maclaurin series:

$(1): \quad \map f x \sim \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!} \map {f^{\paren n} } 0$
where $\map {f^{\paren n} } 0$ denotes the $n$th derivative of $f$ with respect to $x$ evaluated at $x = 0$.

From Nth Derivative of Natural Logarithm by Reciprocal:

$\dfrac {\d^n} {\d x^n} \dfrac {\map \ln {1 + x} } {1 + x} = \paren {-1}^{n + 1} n! \dfrac {H_n - \map \ln {1 + x} } {\paren {1 + x}^{n + 1} }$

The result follows by setting $x = 0$ and substituting for $\map {f^{\paren n} } 0$ in $(1)$.


This needs considerable tedious hard slog to complete it.In particular: Prove the range of convergenceTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.51$




