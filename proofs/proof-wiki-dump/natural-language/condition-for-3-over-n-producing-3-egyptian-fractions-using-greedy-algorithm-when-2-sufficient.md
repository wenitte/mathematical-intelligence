# 

Source: https://proofwiki.org/wiki/Condition_for_3_over_n_producing_3_Egyptian_Fractions_using_Greedy_Algorithm_when_2_Sufficient

Theorem
Consider proper fractions of the form $\dfrac 3 n$ expressed in canonical form.
Let Fibonacci's Greedy Algorithm be used to generate a sequence $S$ of Egyptian fractions for $\dfrac 3 n$.
Then $S$ consists of $3$ terms, where $2$ would be sufficient if and only if the following conditions hold:

$n \equiv 1 \pmod 6$
$\exists d: d \divides n$ and $d \equiv 2 \pmod 3$


Corollary
The smallest $n$ for which $S$ consists of $3$ terms, where $2$ would be sufficient, is $25$.


Proof
By Upper Limit of Number of Unit Fractions to express Proper Fraction from Greedy Algorithm, $S$ consists of no more than $3$ terms.
Suppose $n$ has our desired property.
Since $\dfrac 3 n$ is proper, $n \ge 4$.
Since $\dfrac 3 n$ is in canonical form, $3 \nmid n$.
We also have that $S$ consists of at least $2$ terms.

Consider the case $n = 3 k - 1$.

$\dfrac 3 n = \dfrac 1 k + \dfrac 1 {k \paren {3 k - 1} } \quad$ as $\ceiling {\dfrac n 3} = \ceiling {k - \dfrac 1 3} = k$
Fibonacci's Greedy Algorithm produces $2$ terms only.
hence it must be the case that $n = 3 k - 2$.
$\Box$

We have:

$\dfrac 3 n = \dfrac 1 k + \dfrac 2 {k \paren {3 k - 2} } \quad$ as $\ceiling {\dfrac n 3} = \ceiling {k - \dfrac 2 3} = k$
If $k$ is even, $\dfrac 1 {\paren {k / 2} \paren {3 k - 2} }$ is an Egyptian fraction.
Then Fibonacci's Greedy Algorithm would produce $2$ terms only.
hence it must be the case that $k$ is odd.
This happens if and only if $n$ is odd.
$\Box$

We have shown that for Fibonacci's Greedy Algorithm to produce $3$ terms, $n$ must be odd and $n = 3 k - 2$.
By Chinese Remainder Theorem, these conditions can be merged into:

$n \equiv 1 \pmod 6$
We need find when Fibonacci's Greedy Algorithm gives minimum terms.

Write:














\(\ds \frac 3 n\)

\(=\)







\(\ds \frac 1 x + \frac 1 y\)




















\(\ds \)

\(=\)







\(\ds \frac {x + y} {x y}\)









Since $\dfrac 3 n$ is in canonical form, $x y \divides n$.
By Divisor of Product, we can find $p, q \in \N$ such that:

$p \divides x$, $q \divides y$
$p q = n$

Rewrite:














\(\ds \frac 3 n\)

\(=\)







\(\ds \frac 1 {p a} + \frac 1 {q b}\)




















\(\ds \)

\(=\)







\(\ds \frac {q b + p a} {p q a b}\)














\(\ds \leadsto \ \ \)





\(\ds p a + q b\)

\(=\)







\(\ds 3 a b\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(=\)







\(\ds \frac {b \paren {3 a - q} } a\)










If $\exists d: d \divides n$ and $d \equiv 2 \pmod 3$, set $q = 1$ and $a = \dfrac {d + 1} 3$.
Then $p = n$ and $b = \dfrac {a n} {3 a - 1} = \dfrac {n \paren {d + 1} } {3 d}$, which is a solution:

$\dfrac 3 n = \dfrac 3 {n \paren {d + 1} } + \dfrac {3 d} {n \paren {d + 1} }$
$\Box$

Now suppose $d$ does not exist.
Then any divisor of $n$ is equivalent to $1 \pmod 3$.
Hence $q \equiv 1 \pmod 3$.
Thus $3 a - q \equiv 2 \pmod 3$.

Let $r = \gcd \set {3 a - q, a}$.
We have:

$a \divides b \paren {3 a - q} = b r \paren {\dfrac {3 a - q} r}$
Thus:

$\dfrac a r \divides b \paren {\dfrac {3 a - q} r}$
By Integers Divided by GCD are Coprime:

$\dfrac a r \perp \dfrac {3 a - q} r$
Finally, by Euclid's Lemma:

$\dfrac a r \divides b$
Hence $\dfrac {3 a - q} r, \dfrac {b r} a \in \Z$, and $p = \paren {\dfrac {3 a - q} r} \paren {\dfrac {b r} a}$.

Thus we also have:

$\dfrac {3 a - q} r \divides p \divides n$
$r = \gcd \set {q, a} \divides q \divides n$
Hence:

$\dfrac {3 a - q} r \equiv 1 \pmod 3$
$r \equiv 1 \pmod 3$
Taking their product:














\(\ds 3 a - q\)

\(=\)







\(\ds \frac {3 a - q} r \times r\)




















\(\ds \)

\(\equiv\)







\(\ds 1 \times 1\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)







which is a contradiction.
Therefore $n$ cannot be expressed as the sum of $2$ Egyptian fractions.

Hence the result.
$\blacksquare$





