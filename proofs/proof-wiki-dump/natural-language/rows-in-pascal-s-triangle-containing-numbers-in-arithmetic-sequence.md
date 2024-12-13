# 

Source: https://proofwiki.org/wiki/Rows_in_Pascal%27s_Triangle_containing_Numbers_in_Arithmetic_Sequence



Theorem
There are an infinite number of rows of Pascal's triangle which contain $3$ integers in arithmetic sequence.


Proof
Suppose $\dbinom n k$, $\dbinom n {k + 1}$ and $\dbinom n {k + 2}$ are in an arithmetic sequence.
Then:














\(\ds \dbinom n {k + 2} - \dbinom n {k + 1}\)

\(=\)







\(\ds \dbinom n {k + 1} - \dbinom n k\)





Definition of Arithmetic Sequence














\(\ds \frac {n!} {\paren {n - k - 2}! \paren {k + 2}!} - \frac {n!} {\paren {n - k - 1}! \paren {k + 1}!}\)

\(=\)







\(\ds \frac {n!} {\paren {n - k - 1}! \paren {k + 1}!} - \frac {n!} {\paren {n - k}! \paren k!}\)





Definition of Binomial Coefficient














\(\ds \paren {n - k - 1} \paren {n - k} - \paren {n - k} \paren {k + 2}\)

\(=\)







\(\ds \paren {n - k} \paren {k + 2} - \paren {k + 1} \paren {k + 2}\)





Multiply both sides by $\dfrac {\paren {n - k}! \paren {k + 2}!} {n!}$














\(\ds n^2 - k n - k n + k^2 - n + k - n k - 2 n + k^2 + 2 k\)

\(=\)







\(\ds n k + 2 n - k^2 - 2 k - k^2 - 2 k - k - 2\)




















\(\ds n^2 - \paren {4 k + 5} n + \paren {4 k^2 + 8 k + 2}\)

\(=\)







\(\ds 0\)




















\(\ds n\)

\(=\)







\(\ds \frac {4 k + 5 \pm \sqrt {\paren {4 k + 5}^2 - 4 \paren {4 k^2 + 8 k + 2} } } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \frac {4 k + 5 \pm \sqrt {16 k^2 + 40 k + 25 - 16 k^2 - 32 k - 8} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {4 k + 5 \pm \sqrt {8 k + 17} } 2\)









Since $n$ is rational, we require $8 k + 17$ to be a square.
Since $8 k + 17$ is odd, if $8 k + 17$ is square, then $\sqrt {8 k + 17}$ is odd.
Write $\sqrt {8 k + 17} = 2 x + 1$.
Notice that:














\(\ds \paren {2 x + 1}^2\)

\(=\)







\(\ds 4 x^2 + 4 x + 1\)




















\(\ds \)

\(=\)







\(\ds 8 \paren {\frac {x^2 + x - 4} 2} + 17\)









Using the substitution $k = \dfrac {x^2 + x - 4} 2$:














\(\ds n\)

\(=\)







\(\ds \frac {2 x^2 + 2 x - 8 + 5 \pm \paren {2 x + 1} } 2\)




















\(\ds \)

\(=\)







\(\ds x^2 - 2 \text { or } x^2 + 2 x - 1\)




















\(\ds \)

\(=\)







\(\ds x^2 - 2 \text { or } \paren {x + 1}^2 - 2\)









Each $x$ with $k = \dfrac {x^2 + x - 4} 2 > 0$ give a value for $n$.
Therefore there are an infinite number of rows of Pascal's triangle which contain $3$ integers in arithmetic sequence.
$\blacksquare$


Examples
$7, 21, 35$
The integers:

$7, 21, 35$
are in arithmetic sequence and appear in row $7$ of Pascal's triangle.


$1001, 2002, 3003$
The integers:

$1001, 2002, 3003$
are in arithmetic sequence and appear in row $14$ of Pascal's triangle.


$490 \,314, 817 \, 190, 1 \, 144 \, 066$
The integers:

$490 \, 314, 817 \, 190, 1 \, 144 \, 066$
are in arithmetic sequence and appear in row $23$ of Pascal's triangle.


Also see
Rows in Pascal's Triangle containing Numbers in Geometric Sequence
Rows in Pascal's Triangle containing Numbers in Harmonic Sequence


Historical Note
This result, along with Rows in Pascal's Triangle containing Numbers in Geometric Sequence and Rows in Pascal's Triangle containing Numbers in Harmonic Sequence, was apparently published by Theodore Samuel Motzkin in Volume $12$ of Scripta Mathematica, but details have not been established.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




