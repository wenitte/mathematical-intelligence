# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_x/Formulation_1

Theorem













\(\ds \ln x\)

\(=\)







\(\ds 2 \paren {\sum_{n \mathop = 0}^\infty \frac 1 {2 n + 1} \paren {\frac {x - 1} {x + 1} }^{2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {x - 1} {x + 1} + \frac 1 3 \paren {\frac {x - 1} {x + 1} }^3 + \frac 1 5 \paren {\frac {x - 1} {x + 1} }^5 + \cdots}\)









valid for all $x \in \R$ such that $-1 < x < 1$.


Proof
From Power Series Expansion for $\dfrac 1 2 \map \ln {\dfrac {1 + x} {1 - x} }$:

$(1): \quad \ds \frac 1 2 \map \ln {\frac {1 + x} {1 - x} } = \sum_{n \mathop = 0}^\infty \frac {x^{2 n + 1} } {2 n + 1}$
for $-1 < x < 1$.

Let $z = \dfrac {1 + x} {1 - x}$.
Then:














\(\ds z\)

\(=\)







\(\ds \dfrac {1 + x} {1 - x}\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {1 - x}\)

\(=\)







\(\ds 1 + x\)














\(\ds \leadsto \ \ \)





\(\ds z - z x\)

\(=\)







\(\ds 1 + x\)














\(\ds \leadsto \ \ \)





\(\ds z - 1\)

\(=\)







\(\ds z x + x\)














\(\ds \leadsto \ \ \)





\(\ds x \paren {z + 1}\)

\(=\)







\(\ds z - 1\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {z - 1} {z + 1}\)










Then we have:

$\ds \lim_{x \mathop \to 1^-} \dfrac {1 + x} {1 - x} \to +\infty$
and:

$\ds \lim_{x \mathop \to -1^+} \dfrac {1 + x} {1 - x} \to 0$
Thus when $x \in \openint {-1} 1$ we have that $z \in \openint 0 \to$.

Thus, substituting $z$ for $\dfrac {1 + x} {1 - x}$ in $(1)$ gives the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.19$




