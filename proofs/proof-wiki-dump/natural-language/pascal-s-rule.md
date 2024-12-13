# 

Source: https://proofwiki.org/wiki/Pascal%27s_Rule

  This article was Featured Proof between 19 October 2008 and 26 October 2008.


Theorem
Let $\dbinom n k$ be a binomial coefficient.

For positive integers $n, k$ with $1 \le k \le n$:

$\dbinom n {k - 1} + \dbinom n k = \dbinom {n + 1} k$
This is also valid for the real number definition:

$\forall r \in \R, k \in \Z: \dbinom r {k - 1} + \dbinom r k = \dbinom {r + 1} k$

Thus the binomial coefficients can be defined using the following recurrence relation:

$\dbinom n k = \begin{cases}
1 & : k = 0 \\
0 & : k > n \\
\dbinom {n - 1} {k - 1} + \dbinom {n - 1} k & : \text{otherwise}
\end{cases}$


Complex Numbers
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $w$ an integer:

$\dbinom z {w - 1} + \dbinom z w = \dbinom {z + 1} w$
where $\dbinom z w$ is a binomial coefficient.


Direct Proof
Let $n, k \in \N$ with $1 \le k \le n$.














\(\ds \binom n k + \binom n {k - 1}\)

\(=\)







\(\ds \frac {n!} {k! \, \paren {n - k}!} + \frac {n!} {\paren {k - 1}! \, \paren {n - \paren {k - 1} }!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {n! \, \paren {n - \paren {k - 1} } } {k! \, \paren {n - k}! \, \paren {n - \paren {k - 1} } } + \frac {n! \, k} {\paren {k - 1}! \, \paren {n - \paren {k - 1} }! \ k}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \frac {n! \, \paren {n - k + 1} } {k! \, \paren {n - k + 1}!} + \frac {n! \, k} {k! \, \paren {n - k + 1}!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {n! \, \paren {n - k + 1} + n! \, k} {k! \, \paren {n - k + 1}!}\)





Addition of Fractions














\(\ds \)

\(=\)







\(\ds \frac {n! \, \paren {n - k + 1 + k} } {k! \, \paren {n - k + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {n! \, \paren {n + 1} } {k! \, \paren {n - k + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1}!} {k! \, \paren {n + 1 - k}!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \binom {n + 1} k\)





Definition of Binomial Coefficient



$\blacksquare$


Combinatorial Proof
Suppose you were a member of a club with $n + 1$ members (including you).
Suppose it were time to elect a committee of $k$ members from that club.
From Cardinality of Set of Subsets, there are $\dbinom {n + 1} k$ ways to select the members to form this committee.

Now, you yourself may or may not be elected a member of this committee.

Suppose that, after the election, you are not a member of this committee.
Then, from Cardinality of Set of Subsets, there are $\dbinom n k$ ways to select the members to form such a committee.

Now suppose you are a member of the committee. Apart from you, there are $k - 1$ such members.
Again, from Cardinality of Set of Subsets, there are $\dbinom n {k - 1}$ ways of selecting the other $k - 1$ members so as to form such a committee.

In total, then, there are $\dbinom n k + \dbinom n {k - 1}$ possible committees.
Hence the result.
$\blacksquare$


Proof for Real Numbers













\(\ds \left({r + 1}\right) \binom r {k - 1} + \left({r + 1}\right) \binom r k\)

\(=\)







\(\ds \left({r + 1}\right) \binom r {k - 1} + \left({r + 1}\right) \binom r {r - k}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds k \binom {r + 1} k + \left({r - k + 1}\right) \binom {r + 1} {r - k + 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds k \binom {r + 1} k + \left({r - k + 1}\right) \binom {r + 1} k\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \left({r + 1}\right) \binom {r + 1} k\)









Dividing by $\left({r + 1}\right)$ yields the result.
$\blacksquare$


Also known as
Some sources give this as Pascal's identity.


Also presented as
Some sources present this as:

$\dbinom n k + \dbinom n {k + 1} = \dbinom {n + 1} {k + 1}$


Also see
Definition:Pascal's Triangle


Source of Name
This entry was named for Blaise Pascal.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Binomial Coefficients: $3.1.4$: Binomial Coefficients
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.10$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.6$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.18$: Sequences Defined Inductively: Exercise $3 \ \text{(c)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $12$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.30$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Pascal's triangle
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): selection




