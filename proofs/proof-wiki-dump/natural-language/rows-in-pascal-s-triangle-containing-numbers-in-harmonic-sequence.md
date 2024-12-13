# 

Source: https://proofwiki.org/wiki/Rows_in_Pascal%27s_Triangle_containing_Numbers_in_Harmonic_Sequence



Theorem
There exist no rows of Pascal's triangle which contain $3$ integers in harmonic sequence.


Proof
Suppose $\dbinom n k$, $\dbinom n {k + 1}$ and $\dbinom n {k + 2}$ are in a harmonic sequence.
Then:














\(\ds \dbinom n {k + 2}^{-1} - \dbinom n {k + 1}^{-1}\)

\(=\)







\(\ds \dbinom n {k + 1}^{-1} - \dbinom n k^{-1}\)





Definition of Harmonic Sequence














\(\ds \frac {\paren {n - k - 2}! \paren {k + 2}!} {n!} - \frac {\paren {n - k - 1}! \paren {k + 1}!} {n!}\)

\(=\)







\(\ds \frac {\paren {n - k - 1}! \paren {k + 1}!} {n!} - \frac {\paren {n - k}! \paren k!} {n!}\)





Definition of Binomial Coefficient














\(\ds \paren {k + 2} \paren {k + 1} - \paren {n - k - 1} \paren {k + 1}\)

\(=\)







\(\ds \paren {n - k - 1} \paren {k + 1} - \paren {n - k} \paren {n - k - 1}\)





Multiply both sides by $\dfrac {n!} {\paren {n - k - 2}! \paren k!}$














\(\ds k^2 + 3 k + 2 - n k + k^2 + k - n + k + 1\)

\(=\)







\(\ds n k - k^2 - k + n - k - 1 - n^2 + n k + n + k n - k^2 - k\)




















\(\ds n^2 - \paren {4 k + 3} n + \paren {4 k^2 + 8 k + 4}\)

\(=\)







\(\ds 0\)










This is a quadratic equation in $n$, so we can calculate its discriminant.
Notice that for each $k \ge 0$:

$\paren {4 k + 3}^2 - 4 \paren {4 k^2 + 8 k + 4} = - \paren {8 k + 7} < 0$
By Solution to Quadratic Equation with Real Coefficients, there is no real solution for $n$.
Therefore there is no row of Pascal's triangle which contain $3$ integers in harmonic sequence.
$\blacksquare$


Also see
Rows in Pascal's Triangle containing Numbers in Arithmetic Sequence
Rows in Pascal's Triangle containing Numbers in Geometric Sequence


Historical Note
This result, along with Rows in Pascal's Triangle containing Numbers in Arithmetic Sequence and Rows in Pascal's Triangle containing Numbers in Geometric Sequence, was apparently published by Theodore Samuel Motzkin in Volume $12$ of Scripta Mathematica, but details have not been established.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




