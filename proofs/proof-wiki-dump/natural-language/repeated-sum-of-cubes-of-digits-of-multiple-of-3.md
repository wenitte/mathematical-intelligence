# 

Source: https://proofwiki.org/wiki/Repeated_Sum_of_Cubes_of_Digits_of_Multiple_of_3

Theorem
Let $k \in \Z_{>0}$ be a positive integer.
Let $f: \Z_{>0} \to \Z_{>0}$ be the mapping defined as:

$\forall m \in \Z_{>0}: \map f m = $ the sum of the cubes of the digits of $n$.

Let $n_0 \in \Z_{>0}$ be a (strictly) positive integer which is a multiple of $3$.
Consider the sequence:

$s_n = \begin{cases} n_0 & : n = 0 \\
\map f {s_{n - 1} } & : n > 0 \end{cases}$

Then:

$\exists r \in \N_{>0}: s_r = 153$

That is, by performing $f$ repeatedly on a multiple of $3$ eventually results in the pluperfect digital invariant $153$.


Proof
We verify by brute force:

Starting on $n_0 \le 2916 = 4 \times 9^3$, we will end on $153$.
$\Box$

First we prove that if $3 \divides n_0$, then $3 \divides \map f {n_0}$.

From Divisibility by 3:
The sum of digits of $n_0$ is divisible by $3$.

By Fermat's Little Theorem:

$\forall x \in \Z: x^3 \equiv x \pmod 3$
Therefore sum of the cubes of the digits of $n_0$ is also divisible by $3$.
That is the definition of $\map f {n_0}$.
Thus $3 \divides \map f {n_0}$.
$\Box$

It remains to be shown that for every $n_0 > 2916$, $\map f {n_0} < n_0$.

For $n_0 \le 9999$:

$\map f {n_0} \le 9^3 + 9^3 + 9^3 + 9^3 = 2916 < n_0$

Now suppose $n_0$ is a $k$-digit number, where $k \ge 5$.
Then:














\(\ds n_0\)

\(>\)







\(\ds 10^{k - 1}\)





the smallest $k$-digit number














\(\ds \)

\(=\)







\(\ds 10^4 \times 10^{k - 5}\)




















\(\ds \)

\(\ge\)







\(\ds 10^4 \paren {1 + 9 \paren {k - 5} }\)





Bernoulli's Inequality














\(\ds \)

\(>\)







\(\ds 10 \times 9^3 \paren {9 k - 44}\)





$10 > 9$














\(\ds \)

\(>\)







\(\ds 9^3 \paren {90 k - 440}\)




















\(\ds \)

\(\ge\)







\(\ds 9^3 \paren {k + 445 - 440}\)





$k \ge 5$














\(\ds \)

\(>\)







\(\ds 9^3 \times k\)




















\(\ds \)

\(\ge\)







\(\ds \map f {n_0}\)









This shows that $\map f {n_0} < n_0$ for all $n_0 > 2916$.

Thus for any $n_0 > 2916$, $s_n$ is eventually less than $2916$.

Therefore we will eventually reach $153$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $153$
February 1991: Shyam Sunder Gupta: Curious Properties of 153 (Science Reporter )
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $153$




