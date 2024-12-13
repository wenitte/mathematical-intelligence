# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_x/Formulation_2

Theorem













\(\ds \ln x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac 1 n \paren {\frac {x - 1} x}^n\)




















\(\ds \)

\(=\)







\(\ds \frac {x - 1} x + \frac 1 2 \paren {\frac {x - 1} x}^2 + \frac 1 3 \paren {\frac {x - 1} x}^3 + \cdots\)









valid for all $x \in \R$ such that $x \ge \dfrac 1 2$.


Proof
From the corollary to Power Series Expansion for $\map \ln {1 + x}$:














\(\ds \map \ln {1 - x}\)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {x^n} n\)





for $-1 \le x < 1$.




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \ln {\frac 1 {1 - x} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {x^n} n\)





Logarithm of Reciprocal




Let $z = \dfrac 1 {1 - x}$.
Then:














\(\ds z\)

\(=\)







\(\ds \dfrac 1 {1 - x}\)














\(\ds \leadsto \ \ \)





\(\ds z \paren {1 - x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds z - z x\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds z x\)

\(=\)







\(\ds z - 1\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {z - 1} z\)










Then we have:

$\ds \lim_{x \mathop \to 1^-} \dfrac 1 {1 - x} \to +\infty$
and:

$\ds \lim_{x \mathop \to -1^+} \dfrac 1 {1 - x} \to \frac 1 2$
Thus when $x \in \hointr {-1} 1$ we have that $z \in \hointr {\dfrac 1 2} \to$.
Thus, substituting $z$ for $\dfrac 1 {1 - x}$ in $(1)$ gives the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.20$




