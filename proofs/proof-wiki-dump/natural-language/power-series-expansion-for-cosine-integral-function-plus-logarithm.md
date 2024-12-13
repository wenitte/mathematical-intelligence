# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Cosine_Integral_Function_plus_Logarithm

Theorem
$\ds \map \Ci x = -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac {x^{2 n} } {\paren {2 n} \times \paren {2 n}!}$
where: 

$\Ci$ denotes the cosine integral function
$\gamma$ denotes the Euler-Mascheroni constant
$x$ is a strictly positive real number.


Proof













\(\ds \map \Ci x\)

\(=\)







\(\ds -\gamma - \ln x + \int_0^x \frac {1 - \cos u} u \rd u\)





Characterization of Cosine Integral Function














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \int_0^x \frac 1 u \paren {1 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {u^{2 n} } {\paren {2 n}!} } \rd u\)





Power Series Expansion for Cosine Function














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \int_0^x \frac {u^{2 n - 1} } {\paren {2 n}!} \rd u\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac {u^{2 n} } {\paren {2 n} \times \paren {2 n}!}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Cosine Integral $\ds \map \Ci x = \int_x^\infty \frac {\cos u} u \rd u$: $35.15$




