# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_One_minus_x_over_x


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
$\ds \int_0^1 \frac {\map \ln {1 - x} } x \rd x = -\frac {\pi^2} 6$


Proof













\(\ds \int_0^1 \frac {\map \ln {1 - x} } x \rd x\)

\(=\)







\(\ds -\int_0^1 \frac 1 x \paren {\sum_{n \mathop = 1}^\infty \frac {x^n} n} \rd x\)





Power Series Expansion for $\map \ln {1 + x}$: Corollary














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \paren {\frac 1 n  \int_0^1 x^{n - 1} \rd x}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac {\pi^2} 6\)





Basel Problem



$\blacksquare$


Also see
Definite Integral $\ds \int_0^1 \frac {\ln x} {1 - x} \rd x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.94$




