# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_a_Squared_minus_2_a_b_Cosine_x_plus_b_Squared

Theorem
$\ds \int_0^\pi \map \ln {a^2 - 2 a b \cos x + b^2} \rd x = \begin{cases}2 \pi \ln a & a \ge b > 0 \\ 2 \pi \ln b & b \ge a > 0\end{cases}$


Proof
Note that: 

$\paren {a - b}^2 \ge 0$
so by Square of Sum:

$a^2 - 2 a b + b^2 \ge 0$
So:

$a^2 + b^2 \ge 2 a b = \size {-2 a b}$
so we may apply Definite Integral from $0$ to $\pi$ of $\map \ln {a + b \cos x}$.
We then have:














\(\ds \int_0^\pi \map \ln {a^2 - 2 a b \cos x + b^2} \rd x\)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + \sqrt {\paren {a^2 + b^2}^2 - \paren {2 a b}^2} } 2}\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + \sqrt {a^4 + 2 a^2 b^2 + b^4 - 4 a^2 b^2} } 2}\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + \sqrt {a^4 - 2 a^2 b^2 + b^4} } 2}\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + \sqrt {\paren {a^2 - b^2}^2} } 2}\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + \size {a^2 - b^2} } 2}\)





Definition of Absolute Value



Note that if $a \ge b > 0$ we have:














\(\ds \pi \map \ln {\frac {a^2 + b^2 + \size {a^2 - b^2} } 2}\)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + a^2 - b^2} 2}\)





since $a \ge b > 0$, we have $a^2 \ge b^2$ and $\size {a^2 - b^2} = a^2 - b^2$














\(\ds \)

\(=\)







\(\ds \pi \map \ln {a^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \ln a\)





Logarithm of Power



Note that if $b \ge a > 0$ we have: 














\(\ds \pi \map \ln {\frac {a^2 + b^2 + \size {a^2 - b^2} } 2}\)

\(=\)







\(\ds \pi \map \ln {\frac {a^2 + b^2 + b^2 - a^2} 2}\)





since $a \ge b > 0$, we have $a^2 \ge b^2$ and $\size {a^2 - b^2} = b^2 - a^2$














\(\ds \)

\(=\)







\(\ds \pi \map \ln {b^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \ln b\)





Logarithm of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.108$




