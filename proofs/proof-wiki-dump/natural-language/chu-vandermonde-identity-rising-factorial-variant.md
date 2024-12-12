# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Rising_Factorial_Variant



Theorem
Let $r, s \in \R, n \in \Z_{\ge 0}$.
Then:

$\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\overline k} s^{\overline {n-k} } = \paren {r + s}^{\overline n}$


Proof
From Rising Factorial as Factorial by Binomial Coefficient, we have:














\(\ds r^{\overline k}\)

\(=\)







\(\ds k! \dbinom {r + k - 1} k\)




















\(\ds s^{\overline {n - k} }\)

\(=\)







\(\ds \paren{n - k}! \dbinom {s + n - k - 1} {n - k}\)




















\(\ds \paren{r + s}^{\overline n}\)

\(=\)







\(\ds n! \dbinom {r + s + n - 1} n\)









Therefore:














\(\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\overline k} s^{\overline {n - k} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {n!} {k! \paren{n - k}!} } \paren{ {k! \dbinom {r + k - 1} k} } \paren{ {\paren{n - k}! \dbinom {s + n - k - 1} {n - k} } }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n! \sum_{k \mathop = 0}^n {\dbinom {r + k - 1} k} \dbinom {s + n - k - 1} {n - k}\)





$k!$ and $\paren{n - k}!$ cancel














\(\ds \)

\(=\)







\(\ds n! \sum_{k \mathop = 0}^n {\paren{-1}^k \dbinom {-r} k} \paren{-1}^{n - k} \dbinom {-s} {n - k}\)





Negated Upper Index of Binomial Coefficient/Corollary 2














\(\ds \)

\(=\)







\(\ds {\paren{-1}^n n! \sum_{k \mathop = 0}^n \dbinom {-r} k} \dbinom {-s} {n - k}\)





Product of Powers $\paren{-1}^k \times \paren{-1}^{n - k} = \paren{-1}^n$














\(\ds \)

\(=\)







\(\ds \paren{-1}^n n! \binom {-\paren{r + s} } n\)





Chu-Vandermonde Identity














\(\ds \)

\(=\)







\(\ds n! \dbinom {r + s + n - 1} n\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren{r + s}^{\overline n}\)





Rising Factorial as Factorial by Binomial Coefficient



$\blacksquare$


Also known as
When $r$ and $s$ are integers, the Chu-Vandermonde identity is more commonly known as Vandermonde's identity, Vandermonde's convolution (formula) or Vandermonde's convolution.
Sometimes it is seen referred to as the Chu-Vandermonde formula, or Vandermonde's theorem.


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Sources
Weisstein, Eric W. "Chu-Vandermonde Identity." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Chu-VandermondeIdentity.html




