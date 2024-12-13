# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Half_Logarithm_of_1_%2B_x_over_1_-_x

Theorem













\(\ds \frac 1 2 \map \ln {\frac {1 + x} {1 - x} }\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} 3 + \frac {x^5} 5 + \frac {x^7} 7 + \cdots\)









valid for all $x \in \R$ such that $-1 < x < 1$.


Proof
From Power Series Expansion for $\map \ln {1 + x}$:

$(1): \quad \ds \map \ln {1 + x} = \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n$
for $-1 < x \le 1$.

From Power Series Expansion for $\map \ln {1 + x}$: Corollary:

$(2): \quad \ds \map \ln {1 - x} = - \sum_{n \mathop = 1}^\infty \frac {x^n} n$
for $-1 < x < 1$.

Then we have:














\(\ds \map \ln {1 + x} - \map \ln {1 - x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n + \sum_{n \mathop = 1}^\infty \frac {x^n} n\)





subtracting $(2)$ from $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \paren {-1}^{2 r} \frac {x^{2 r + 1} } {2 r + 1} + \sum_{r \mathop = 1}^\infty \paren {-1}^{2 r - 1} \frac {x^{2 r} } {2 r} + \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1} + \sum_{r \mathop = 1}^\infty \frac {x^{2 r} } {2 r}\)





separating out into odd and even indices














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1} - \sum_{r \mathop = 1}^\infty \frac {x^{2 r} } {2 r} + \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1} + \sum_{r \mathop = 1}^\infty \frac {x^{2 r} } {2 r}\)





$\paren {-1}^{2 r} = 1$, $\paren {-1}^{2 r - 1} = -1$














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1} + \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1}\)





even indices cancel








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\frac {1 + x} {1 - x} }\)

\(=\)







\(\ds 2 \sum_{r \mathop = 1}^\infty \frac {x^{2 r + 1} } {2 r + 1}\)





Difference of Logarithms



Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.18$




