# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Falling_Factorial_Variant



Theorem
Let $r, s \in \R, n \in \Z_{\ge 0}$.
Then:

$\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\underline k} s^{\underline {n-k} } = \paren {r + s}^{\underline n}$


Proof













\(\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\underline k} s^{\underline {n - k} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac {n!} {k! \paren{n - k}!} } \paren{ \dfrac {r!} {\paren {r - k}!} } \paren{ \dfrac {s!} {\paren {s - \paren {n - k} }!} }\)





Definition of Binomial Coefficient and Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds n! \sum_{k \mathop = 0}^n {\dbinom r k} \dbinom s {n - k}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n! \binom {r + s} n\)





Chu-Vandermonde Identity














\(\ds \)

\(=\)







\(\ds n! \dfrac {\paren {r + s}!} {n! \paren {r + s - n}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren{r + s}^{\underline n}\)





Definition of Falling Factorial



$\blacksquare$


Also known as
When $r$ and $s$ are integers, the Chu-Vandermonde identity is more commonly known as Vandermonde's identity, Vandermonde's convolution (formula) or Vandermonde's convolution.
Sometimes it is seen referred to as the Chu-Vandermonde formula, or Vandermonde's theorem.


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Sources
Weisstein, Eric W. "Chu-Vandermonde Identity." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Chu-VandermondeIdentity.html




