# 

Source: https://proofwiki.org/wiki/Difference_between_Odd_Squares_is_Divisible_by_8

Theorem
Let $a$ and $b$ be odd integers.
Then $a^2 - b^2$ is divisible by $8$.


Proof
Let $a = 2 m + 1$, $b = 2 n + 1$.
Then:














\(\ds a^2 - b^2\)

\(=\)







\(\ds \paren {2 m + 1}^2 - \paren {2 n + 1}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {4 m^2 + 4 m + 1} - \paren {4 n^2 + 4 n - 1}\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {m^2 - n^2} + 4 \paren {m - n}\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {m + n} \paren {m - n} + 4 \paren {m - n}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 4 \paren {m + n + 1} \paren {m - n}\)










Suppose $m - n$ is even such that $m - n = 2 k$.
Then:

$a^2 - b^2 = 4 \paren {2 k} \paren {m + n + 1} = 8 k \paren {m + n + 1}$
and so is divisible by $8$.

Suppose $m - n$ is odd such that $m - n = 2 k + 1$.
Then:

$m + n + 1 = m + \paren {2 k + 1 + m} + 1 = 2 m + 2 k = 2 \paren {m + k}$
and so:

$a^2 - b^2 = 4 \paren {2 k + 1} 2 \paren {m + k} = 8 \paren {2 k + 1} \paren {m + k}$
and so is again divisible by $8$.
The result follows.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Exercise $6$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $15 \ \text {(b)}$




