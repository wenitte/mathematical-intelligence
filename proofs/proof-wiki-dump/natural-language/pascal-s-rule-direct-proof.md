# 

Source: https://proofwiki.org/wiki/Pascal%27s_Rule/Direct_Proof



Theorem
For positive integers $n, k$ with $1 \le k \le n$:

$\dbinom n {k - 1} + \dbinom n k = \dbinom {n + 1} k$
This is also valid for the real number definition:

$\forall r \in \R, k \in \Z: \dbinom r {k - 1} + \dbinom r k = \dbinom {r + 1} k$


Proof
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


Source of Name
This entry was named for Blaise Pascal.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: Two important relations
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.11 \ (4)$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem




