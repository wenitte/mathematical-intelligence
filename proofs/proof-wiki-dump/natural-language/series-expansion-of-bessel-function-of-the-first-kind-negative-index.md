# 

Source: https://proofwiki.org/wiki/Series_Expansion_of_Bessel_Function_of_the_First_Kind/Negative_Index



Theorem
Let $n \in \Z_{\ge 0}$ be a (strictly) non-negative integer.
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.
Then:














\(\ds \map {J_{-n} } x\)

\(=\)







\(\ds \dfrac {x^{-n} } {2^{-n} \, \map \Gamma {1 - n} } \paren {1 - \dfrac {x^2} {2 \paren {2 - 2 n} } + \dfrac {x^4} {2 \times 4 \paren {2 - 2 n} \paren {4 - 2 n} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {k + 1 - n} } \paren {\dfrac x 2}^{2 k - n}\)











Proof
From Series Expansion of Bessel Function of the First Kind:




\(\text {(1)}: \quad\)









\(\ds \map {J_n} x\)

\(=\)







\(\ds \dfrac {x^n} {2^n \, \map \Gamma {n + 1} } \paren {1 - \dfrac {x^2} {2 \paren {2 n + 2} } + \dfrac {x^4} {2 \times 4 \paren {2 n + 2} \paren {2 n + 4} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac x 2}^{n + 2 k}\)









The result follows by substituting $-n$ for $n$ in $1$ and simplifying.
$\blacksquare$


Also see
Bessel Function of the First Kind of Negative Integer Order for when $n \in \set {-1, -2, -3, \ldots}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 24$: Bessel Functions: Bessel Function of the First Kind of Order $n$: $24.3$




