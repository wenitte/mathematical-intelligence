# 

Source: https://proofwiki.org/wiki/Number_of_Fibonacci_Numbers_between_n_and_2n



Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Then there exists either one or two Fibonacci numbers between $n$ and $2 n$ inclusive.


Proof
First existence is demonstrated.
Let $F_m \ge n$ such that $F_{m - 1} < n$.














\(\ds F_m\)

\(=\)







\(\ds F_{m - 1} + F_{m - 2}\)





Definition of Fibonacci Numbers














\(\ds \)

\(<\)







\(\ds 2 F_{m - 1}\)





as $F_{m - 2} < F_{m - 1}$














\(\ds \)

\(<\)







\(\ds 2 n\)





as $F_{m - 1} < n$



This shows that the smallest Fibonacci number greater than $n$ is less than $2 n$.
Thus there exists at least one Fibonacci number between $n$ and $2 n$.

Aiming for a contradiction, suppose there exist $3$ Fibonacci numbers between $n$ and $2 n$.
Let $F_m \ge n$ be the smallest of those Fibonacci numbers.
Then:














\(\ds F_{m + 2}\)

\(=\)







\(\ds F_m + F_{m + 1}\)





Definition of Fibonacci Numbers














\(\ds \)

\(>\)







\(\ds 2 F_m\)





as $F_m < F_{m + 1}$














\(\ds \)

\(>\)







\(\ds 2 n\)





as $F_m > n$



But $F_{m + 2} < 2 n$ by hypothesis.
Hence by Proof by Contradiction there can be no more than $2$ Fibonacci numbers between $n$ and $2 n$.

Let $n = 2$.
Then between $2$ and $4$ there exist $F_3 = 2$ and $F_4 = 3$.

Let $n = 10$.
Then between $10$ and $20$ there exists $F_7 = 13$ and no other Fibonacci numbers.

Thus it has been demonstrated:

There always exists at least one Fibonacci number between $n$ and $2 n$
There never exist more than $2$ Fibonacci number between $n$ and $2 n$
There exist $n$ such that there exists exactly one Fibonacci number between $n$ and $2 n$
There exist $n$ such that there exist exactly $2$ Fibonacci numbers between $n$ and $2 n$.
The result is complete.
$\blacksquare$


Historical Note
This result is attributed to K. Subba Rao.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




