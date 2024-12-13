# 

Source: https://proofwiki.org/wiki/Number_of_Fibonacci_Numbers_with_Same_Number_of_Decimal_Digits



Theorem
Let $n$ be an integer such that $n > 1$.
When expressed in decimal notation, there are either $4$ or $5$ Fibonacci numbers with $n$ digits.


Proof
Let $F_m$ be an $n$-digit Fibonacci number.
Then $F_m \ge 10^{n - 1} \ge 10$.
We have:














\(\ds F_m\)

\(=\)







\(\ds F_{m - 1} + F_{m - 2}\)





Definition of Fibonacci Numbers














\(\ds \)

\(\le\)







\(\ds 2 F_{m - 1}\)





as $F_{m - 2} \le F_{m - 1}$



Thus:














\(\ds F_{m + 5}\)

\(=\)







\(\ds F_{m - 1} F_5 + F_m  F_6\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds 5 F_{m - 1} + 8 F_m\)




















\(\ds \)

\(>\)







\(\ds 2 F_m + 8 F_m\)





$F_m \le 2 F_{m - 1}$














\(\ds \)

\(\ge\)







\(\ds 10^n\)









So $F_{m + 5}$ is a number of at least $n + 1$ digits.

Therefore there is at most $5$ Fibonacci numbers with $n$ digits: $F_m, F_{m + 1}, F_{m + 2}, F_{m + 3}, F_{m + 4}$.

Similarly, $10 \le F_m < 10^n$.
Suppose $F_m$ is the smallest Fibonacci numbers with $n$ digits.
Then $F_{m - 1} < 10^{n - 1}$.
Thus:














\(\ds F_{m + 3}\)

\(=\)







\(\ds F_{m - 1} F_3 + F_m F_4\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds 2 F_{m - 1} + 3 F_m\)




















\(\ds \)

\(<\)







\(\ds 8 F_{m - 1}\)





$F_m \le 2 F_{m - 1}$














\(\ds \)

\(<\)







\(\ds 10^n\)









So there is at least $4$ Fibonacci numbers with $n$ digits: $F_m, F_{m + 1}, F_{m + 2}, F_{m + 3}$.

Combining the arguments above, there are either $4$ or $5$ Fibonacci numbers with $n$ digits.
$\blacksquare$


Historical Note
This result is attributed to K. Subba Rao.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




