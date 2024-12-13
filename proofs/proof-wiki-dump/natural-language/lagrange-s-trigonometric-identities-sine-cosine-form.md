# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Trigonometric_Identities/Sine/Cosine_Form

Theorem
$\ds \sum_{k \mathop = 0}^n \sin k \theta = \dfrac {\map \cos {\frac 1 2 \theta} - \map \cos {n \theta + \frac 1 2 \theta} } {2 \map \sin {\frac 1 2 \theta} }$


Proof













\(\ds \map \sin {\alpha} \map \sin {\beta}\)

\(=\)







\(\ds \dfrac {\map \cos {\alpha - \beta} - \map \cos {\alpha + \beta} } 2\)





Werner Formula for Sine by Sine














\(\ds 2 \map \sin {\beta} \map \sin {\alpha}\)

\(=\)







\(\ds \map \cos {\alpha - \beta} - \map \cos {\alpha + \beta}\)





rearranging














\(\ds 2 \map \sin {\frac 1 2 \theta} \cdot \map \sin {k \theta}\)

\(=\)







\(\ds \map \cos {k \theta - \frac 1 2 \theta} - \map \cos {k \theta + \frac 1 2 \theta}\)





setting $\alpha = k \theta$ and $\beta = \frac 1 2 \theta$














\(\ds 2 \map \sin {\frac 1 2 \theta} \cdot  \sum_{k \mathop = 0}^n \map \sin {k \theta}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \map \cos {k \theta - \frac 1 2 \theta} - \map \cos {k \theta + \frac 1 2 \theta}\)





Summing both sides




The right hand side is a telescoping sum. 














\(\ds 2 \map \sin {\frac 1 2 \theta} \cdot  \sum_{k \mathop = 0}^n \map \sin {k \theta}\)

\(=\)







\(\ds \map \cos {\frac {-1} 2 \theta} - \map \cos {n \theta + \frac 1 2 \theta}\)





only two terms survive














\(\ds 2 \map \sin {\frac 1 2 \theta} \cdot  \sum_{k \mathop = 0}^n \map \sin {k \theta}\)

\(=\)







\(\ds \map \cos {\frac 1 2 \theta} - \map \cos {n \theta + \frac 1 2 \theta}\)





Cosine Function is Even














\(\ds \sum_{k \mathop = 0}^n \map \sin {k \theta}\)

\(=\)







\(\ds \frac {\map \cos {\frac 1 2 \theta} - \map \cos {n \theta + \frac 1 2 \theta} }{ 2 \map \sin {\frac 1 2 \theta} }\)





rearranging



$\blacksquare$

Also see
Sine Form of Lagrange's Sine Identity
Lagrange's Cosine Identity
Lagrange's Trigonometric Identities




