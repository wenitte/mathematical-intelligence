# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n



Theorem
$\ds \forall n \in \Z_{\geq 0}: \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i = \delta_{n 0}$
where:

$\dbinom n i$ is a binomial coefficient
$\delta_{n 0}$ denotes the Kronecker delta.
Corollary
$\ds \sum_{i \mathop \in \Z} \paren {-1}^i \binom n i = \delta_{n 0}$


Lemma
$\ds \sum_{i \mathop = 0}^0 \binom 0 0 = 1$
$\Box$


Proof 1
For $n > 0$:














\(\ds \sum_{i \mathop = 0}^n \paren{-1}^i \binom n i\)

\(=\)







\(\ds \binom n 0 + \sum_{i \mathop = 1}^{n - 1} \paren{-1}^i \binom n i + \paren{-1}^n \binom n n\)




















\(\ds \)

\(=\)







\(\ds \binom n 0 + \sum_{i \mathop = 1}^{n - 1} \paren{-1}^i \paren{\binom {n - 1} {i - 1} + \binom {n - 1} i} + \paren{-1}^n \binom n n\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \binom n 0 - \sum_{i \mathop = 1}^{n - 1} \paren{\paren{-1}^{i-1} \binom {n - 1} {i - 1} - \paren{-1}^i \binom {n - 1} i} + \paren{-1}^n \binom n n\)




















\(\ds \)

\(=\)







\(\ds \binom n 0 - \paren{-1}^{1 - 1} \binom {n - 1} {1 - 1} + \paren{-1}^{n - 1} \binom {n - 1} {n - 1} + \paren{-1}^n \binom n n\)





Telescoping Series/Example 1














\(\ds \)

\(=\)







\(\ds 1 - 1 + \paren{-1}^{n - 1} - \paren{-1}^{n - 1}\)





Binomial Coefficient with Zero, Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Proof 2
Let $n > 0$.
From the Binomial Theorem, we have that:

$\ds \forall n \in \Z_{\ge 0}: \paren {x + y}^n = \sum_{i \mathop = 0}^n  \binom n i x^{n - i} y^i$

Putting $x = 1, y = -1$, we get:














\(\ds 0\)

\(=\)







\(\ds \paren {1 - 1}^n\)





which holds for all $n > 0$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \binom n i 1^{n - i} \paren {-1}^i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i\)









$\blacksquare$


Proof 3
Let $n > 0$.
The assertion can be expressed:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom n i = 0$ for all $n > 0$
as $\dbinom n i = 0$ when $i < 0$ by definition of binomial coefficient.

From Alternating Sum and Difference of r Choose k up to n we have:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom r i = \paren {-1}^n \binom {r - 1} n$
Putting $r = n$ we have:

$\ds \sum_{i \mathop \le n} \paren {-1}^i \binom n i = \paren {-1}^n \binom {n - 1} n$
As $n - 1 < n$ it follows from the definition of binomial coefficient that:

$\dbinom {n - 1} n = 0$
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Binomial Coefficients: $3.1.7$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.8$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $3 \ \text{(b)}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $36$




