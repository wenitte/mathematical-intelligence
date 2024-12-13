# 

Source: https://proofwiki.org/wiki/Positive_Integers_whose_Square_Root_equals_Sum_of_Digits

Theorem
The following positive integers have a square root that equals the sum of their digits:

$0, 1, 81$
and there are no more.


Proof













\(\ds \sqrt 0\)

\(=\)







\(\ds 0\)




















\(\ds \sqrt 1\)

\(=\)







\(\ds 1\)




















\(\ds \sqrt {81}\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(=\)







\(\ds 8 + 1\)










By considering the square roots, we are looking for positive integers with a square for which its sum of digits is equal to the original number.
It is easy to verify the result up to $36$.

We prove that for $n > 36$, the sum of digits of $n^2$ cannot equal $n$.
Let $n$ be a $d$-digit number.
Then $n < 10^d$.
Thus $n^2 < 10^{2 d}$.
Therefore $n^2$ has at most $2 d$ digits.
Hence the sum of digits of $n^2$ is at most $18 d$.

If $n$ is a $2$-digit number, we have $n > 36 = 18 d$.
Now suppose $d \ge 3$.
Then:














\(\ds n\)

\(\ge\)







\(\ds 10^{d - 1}\)




















\(\ds \)

\(=\)







\(\ds 10 \times 10^{d - 2}\)




















\(\ds \)

\(\ge\)







\(\ds 10 \paren {1 + 9 \paren {d - 2} }\)





Bernoulli's Inequality














\(\ds \)

\(=\)







\(\ds 90 d - 170\)




















\(\ds \)

\(\ge\)







\(\ds 18 d + 216 - 170\)





as $d \ge 3$














\(\ds \)

\(>\)







\(\ds 18 d\)









Therefore for $n > 36$, the sum of digits of $n^2$ cannot equal $n$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $81$




