# 

Source: https://proofwiki.org/wiki/Asymptotic_Formula_for_Bernoulli_Numbers



Theorem
The Bernoulli numbers with even index can be approximated by the asymptotic formula:

$B_{2 n} \sim \paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\dfrac n {\pi e} }^{2 n}$
where:

$B_n$ denotes the $n$th Bernoulli number
$\sim$ denotes asymptotically equal.


Proof













\(\ds \lim_{n \mathop \to \infty} \frac {B_{2 n} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\paren {-1}^{n + 1} \paren {2 n}! \map \zeta {2 n} } {2^{2 n - 1} \pi^{2 n} \paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} }\)





Riemann Zeta Function at Even Integers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\paren {2 n}! \map \zeta {2 n} } {2^{2 n + 1} \sqrt {\pi n} \paren {\frac n e}^{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {2 \sqrt {\pi n} \paren {\frac {2 n} e}^{2 n} \map \zeta {2 n} } {2^{2 n + 1} \sqrt {\pi n} \paren {\frac n e}^{2 n} }\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \zeta {2 n}\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Also rendered as
This result can also be seen expressed as:

$B_{2 n} \sim \paren {-1}^{n + 1} 4 n^{2 n} \paren {\pi e}^{-2 n} \sqrt {\pi n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 21$: Asymptotic Formula for Bernoulli Numbers: $21.12$
Weisstein, Eric W. "Bernoulli Number." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/BernoulliNumber.html




