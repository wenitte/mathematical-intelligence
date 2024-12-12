# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Examples/2_from_e_%2B_pi

Example of Use of Chu-Vandermonde Identity
Let $r = e$, $s = \pi$ and $n = 2$

$\ds \binom {e + \pi} 2 = \sum_{k \mathop = 0}^2 \binom e k \binom \pi {2 - k}$


Proof 1
From the Chu-Vandermonde Identity:

$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$

The result follows on setting $r = e$, $s = \pi$ and $n = 2$.
$\blacksquare$


Proof 2













\(\ds \binom {e + \pi} 2\)

\(=\)







\(\ds \dfrac {\paren {e + \pi} \times \paren {e + \pi - 1} } {2 \times 1}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {e + \pi}^2 - \paren {e + \pi} }\)





multiplying out














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {e^2 + 2e\pi + \pi^2 - e - \pi}\)





simplifying


















\(\ds \sum_{k \mathop = 0}^2 \binom e k \binom \pi {2 - k}\)

\(=\)







\(\ds \binom e 0 \binom {\pi} 2 + \binom e 1 \binom {\pi} 1 + \binom e 2 \binom {\pi} 0\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds 1 \times \dfrac {\paren {\pi} \paren {\pi - 1} } 2 + e \times \pi + \dfrac {\paren {e} \paren {e - 1} } 2 \times 1\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\pi^2 - \pi + 2e\pi + e^2 - e}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {e^2 + 2e\pi + \pi^2 - e - \pi}\)





rearranging














\(\ds \)

\(=\)







\(\ds \binom {e + \pi} 2\)





from above



$\blacksquare$





