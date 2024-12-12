# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Examples/3_from_4_%2B_5

Example of Use of Chu-Vandermonde Identity
$\ds \binom 9 3 = \binom {4 + 5} 3 = \sum_{k \mathop = 0}^3 \binom 4 k \binom 5 {3 - k}$


Proof 1
From the Chu-Vandermonde Identity:

$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$

The result follows on setting $r = 4$, $s = 5$ and $n = 3$.
$\blacksquare$


Proof 2













\(\ds \binom 9 3\)

\(=\)







\(\ds \binom {4 + 5} 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {9!} {3! \times 6!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {9 \times 8 \times 7} {3 \times 2 \times 1}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds 84\)









$\Box$















\(\ds \sum_{k \mathop = 0}^3 \binom 4 k \binom 5 {3 - k}\)

\(=\)







\(\ds \binom 4 0 \binom 5 3 + \binom 4 1 \binom 5 2 + \binom 4 2 \binom 5 1 + \binom 4 3 \binom 5 0\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \dfrac {4!} {0! \times 4!} \times \dfrac {5!} {3! \times 2!} + \dfrac {4!} {1! \times 3!} \times \dfrac {5!} {2! \times 3!} + \dfrac {4!} {2! \times 2!} \times \dfrac {5!} {1! \times 4!} + \dfrac {4!} {3! \times 1!} \times \dfrac {5!} {0! \times 5!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds 1 \times \dfrac {5 \times 4} {2 \times 1} + \dfrac 4 1 \times \dfrac {5 \times 4} {2 \times 1} + \dfrac {4 \times 3} {2 \times 1} \times \dfrac 5 1 + \dfrac 4 1 \times 1\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds 1 \times 10 + 4 \times 10 + 6 \times 5 + 4 \times 1\)




















\(\ds \)

\(=\)







\(\ds 10 + 40 + 30 + 4\)




















\(\ds \)

\(=\)







\(\ds 84\)









$\blacksquare$





