# 

Source: https://proofwiki.org/wiki/Beta_Function_is_Defined_for_Positive_Reals

Theorem
Let $x, y \in \R$ be real numbers.
Let $\map \Beta {x, y}$ be the Beta function:

$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$

Then $\map \Beta {x, y}$ exists provided that $x, y > 0$.


Proof
Consider the following inequalities, valid for $0 < t < 1$:














\(\ds t^{x - 1} \paren {1 - t}^{y - 1}\)

\(<\)







\(\ds t^{x - 1}\)














\(\ds \leadsto \ \ \)





\(\ds t^{x - 1} \paren {1 - t}^{y - 1}\)

\(<\)







\(\ds \paren {1 - t}^{y - 1}\)









Then:














\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \rd t\)

\(=\)







\(\ds \intlimits {\frac {t^x} x} {\mathop \to 0} {\mathop \to 1}\)




















\(\ds \)

\(=\)







\(\ds x - 0\)









and similarly:














\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \paren {1 - t}^{y - 1} \rd t\)

\(=\)







\(\ds -\intlimits {\frac {\paren {1 - t}^y} y} {\mathop \to 0} {\mathop \to 1}\)




















\(\ds \)

\(=\)







\(\ds y - 0\)









The result follows from the Comparison Test for Improper Integral.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (4)$




