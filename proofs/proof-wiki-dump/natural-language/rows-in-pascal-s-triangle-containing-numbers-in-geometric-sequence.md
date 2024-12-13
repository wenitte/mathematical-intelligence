# 

Source: https://proofwiki.org/wiki/Rows_in_Pascal%27s_Triangle_containing_Numbers_in_Geometric_Sequence



Theorem
There exist no rows of Pascal's triangle which contain $3$ integers in geometric sequence.


Proof
Suppose $\dbinom n k$, $\dbinom n {k + 1}$ and $\dbinom n {k + 2}$ are in a geometric sequence.
Then:














\(\ds \dbinom n {k + 2} / \dbinom n {k + 1}\)

\(=\)







\(\ds \dbinom n {k + 1} / \dbinom n k\)





Definition of Geometric Sequence














\(\ds \paren {\frac {n!} {\paren {n - k - 2}! \paren {k + 2}!} } \paren {\frac {\paren {n - k - 1}! \paren {k + 1}!} {n!} }\)

\(=\)







\(\ds \paren {\frac {n!} {\paren {n - k - 1}! \paren {k + 1}!} } \paren {\frac {\paren {n - k}! \paren k!} {n!} }\)





Definition of Binomial Coefficient














\(\ds \frac {n - k - 1} {k + 2}\)

\(=\)







\(\ds \frac {n - k} {k + 1}\)




















\(\ds \paren {n - k - 1} \paren {k + 1}\)

\(=\)







\(\ds \paren {n - k} \paren {k + 2}\)




















\(\ds n k - k^2 - k + n -k - 1\)

\(=\)







\(\ds n k + 2 n - k^2 - 2 k\)




















\(\ds n\)

\(=\)







\(\ds -1\)









Since $n \ge 0$, no row of Pascal's triangle contains $3$ integers in geometric sequence.

However, suppose one extends the definition of binomial coefficients to allow $n < 0$.
Then by Negated Upper Index of Binomial Coefficient, we have: 

$\dbinom {-1} k = \paren {-1}^k$
which indeed forms a geometric sequence.
$\blacksquare$


Also see
Rows in Pascal's Triangle containing Numbers in Arithmetic Sequence
Rows in Pascal's Triangle containing Numbers in Harmonic Sequence


Historical Note
This result, along with Rows in Pascal's Triangle containing Numbers in Arithmetic Sequence and Rows in Pascal's Triangle containing Numbers in Harmonic Sequence, was apparently published by Theodore Samuel Motzkin in Volume $12$ of Scripta Mathematica, but details have not been established.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




