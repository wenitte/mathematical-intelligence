# 

Source: https://proofwiki.org/wiki/Euler%27s_Number_as_Limit_of_n_over_nth_Root_of_n_Factorial

Theorem
$\ds e = \lim_{n \mathop \to \infty} \dfrac n {\sqrt [n] {n!} }$
where:

$e$ denotes Euler's number
$n!$ denotes $n$ factorial.


Proof













\(\ds \lim_{n \mathop \to \infty} {n!} {n^n \sqrt n e^{-n} }\)

\(=\)







\(\ds \sqrt {2 \pi}\)





Lemma for Stirling's Formula








\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac {n \paren {2 \pi n}^{1 / 2 n} } {\sqrt [n] {n!} }\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac {n \sqrt {\paren {2 \pi n}^{1 / n} } } {\sqrt [n] {n!} }\)









From Limit of Root of Positive Real Number:

$\ds \lim_{n \mathop \to \infty} \paren {2 \pi}^{1 / 2 n} = 1$
and from Limit of Integer to Reciprocal Power:

$n^{1 / n} = 1$
Hence the result.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2 \cdotp 71828 \, 18284 \, 59045 \, 23536 \, 02874 \, 71352 \, 66249 \, 77572 \, 47093 \, 69995 \ldots$




