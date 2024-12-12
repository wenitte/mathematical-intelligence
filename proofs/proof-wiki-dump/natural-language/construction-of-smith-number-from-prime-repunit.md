# 

Source: https://proofwiki.org/wiki/Construction_of_Smith_Number_from_Prime_Repunit

Theorem
Let $R_n$ be a repunit which is prime where $n \ge 3$.
Then $3304 \times R_n$ is a Smith number.

$3304$ is not the only number this works for, neither is it the smallest, but it serves as an example of the technique.


Proof
Let $\map S n$ denote the sum of the digits of a positive integer $n$.
Let $\map {S_p} n$ denote the sum of the digits of the prime decomposition of $n$.
Then $\map S n = \map {S_p} n$ if and only if $n$ is a Smith number.

Let $n \ge 3$.
We have that:

$3304 = 2 \times 2 \times 2 \times 7 \times 59$
and so for a prime repunit $R_n$:

$3304 \times R_n = 2 \times 2 \times 2 \times 7 \times 59 \times \underbrace {111 \ldots 11}_{n \text { ones} }$
and so:

$\map {S_p} {3304 \times R_n} = 2 + 2 + 2 + 7 + 5 + 9 + n \times 1 = n + 27$

Note that:














\(\ds \)

\(\)







\(\ds 3304 \times R_n\)




















\(\ds \)

\(=\)







\(\ds 3304 \sum_{k = 0}^{n - 1} 10^k\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds 3 \sum_{k = 0}^{n - 1} 10^{k + 3} + 3 \sum_{k = 0}^{n - 1} 10^{k + 2} + 4 \sum_{k = 0}^{n - 1} 10^k\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds 3 \sum_{k = 3}^{n + 2} 10^k + 3 \sum_{k = 2}^{n + 1} 10^k + 4 \sum_{k = 0}^{n - 1} 10^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds 3 \times 10^{n + 2} + 6 \times 10^{n + 1} + 6 \times 10^n + 10 \sum_{k = 3}^{n - 1} 10^k + 7 \times 10^2 + 44\)




















\(\ds \)

\(=\)







\(\ds 3 \times 10^{n + 2} + 6 \times 10^{n + 1} + 6 \times 10^n + \sum_{k = 4}^n 10^k + 7 \times 10^2 + 44\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds 3 \times 10^{n + 2} + 6 \times 10^{n + 1} + 7 \times 10^n + \sum_{k = 4}^{n - 1} 10^k + 7 \times 10^2 + 44\)




















\(\ds \)

\(=\)







\(\ds [367 \underbrace {11 \dots 1}_{\paren {n - 4} \text { ones} } 0744]\)





Basis Representation Theorem



This gives:














\(\ds \map S {3304 \times R_n}\)

\(=\)







\(\ds 3 + 6 + 7 + \paren {n - 4} + 0 + 7 + 4 + 4\)




















\(\ds \)

\(=\)







\(\ds n + 27\)




















\(\ds \)

\(=\)







\(\ds \map {S_p} {3304 \times R_n}\)









Hence the result.
$\blacksquare$


Sources
Jan. 1983: Sham Oltikar and Keith Wayland: Construction of Smith Numbers (Math. Mag. Vol. 56, no. 1: pp. 36 – 37)  www.jstor.org/stable/2690265
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4,937,775$




