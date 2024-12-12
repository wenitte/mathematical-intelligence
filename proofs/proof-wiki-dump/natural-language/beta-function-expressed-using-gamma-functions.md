# 

Source: https://proofwiki.org/wiki/Beta_Function_expressed_using_Gamma_Functions


It has been suggested that this page or section be merged into Equivalence of Definitions of Beta Function.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\map \Beta {x, y}$ denote the Beta function.
Then:

$\map \Beta {x, y} = \dfrac {\map \Gamma x \, \map \Gamma y} {\map \Gamma {x + y} }$
where $\Gamma$ is the Gamma function:


Proof
From Beta Function of x with y+m+1:

$\map \Beta {x, y} = \dfrac {\map {\Gamma_m} y \, m^x} {\map {\Gamma_m} {x + y} } \map \Beta {x, y + m + 1}$
where $\Gamma_m$ is the partial Gamma function:

$\map {\Gamma_m} y := \dfrac {m^y m!} {y \paren {y + 1} \paren {y + 2} \dotsm \paren {y + m} }$

From Partial Gamma Function expressed as Integral:














\(\ds \map {\Gamma_m} x\)

\(=\)







\(\ds m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds m^x \, \map \Beta {x, m + 1}\)










Thus:

$\ds \lim_{m \mathop \to \infty} m^x \, \map \Beta {x, m + 1} = \map \Gamma x$

As $m^x$ is monotone, it does not matter if $m$ is integer or real.
Thus:

$\ds \lim_{m \mathop \to \infty} \paren {m + y}^x \, \map \Beta {x, m + y + 1} = \map \Gamma x$

Hence:














\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\map {\Gamma_m} y \, m^x} {\map {\Gamma_m} {x + y} } \map \Beta {x, y + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\map {\Gamma_m} y \, m^x} {\map {\Gamma_m} {x + y} } \frac {\map \Gamma x} {\paren {m + y}^x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\map {\Gamma_m} y \, \map \Gamma x} {\map {\Gamma_m} {x + y} }\)





as $\ds \lim_{m \mathop \to \infty} \frac {m^x} {\paren {m + y}^x} = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma y \, \map \Gamma x} {\map \Gamma {x + y} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $41 \ \text{(b)}$




