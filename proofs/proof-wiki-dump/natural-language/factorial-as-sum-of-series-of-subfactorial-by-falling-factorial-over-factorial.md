# 

Source: https://proofwiki.org/wiki/Factorial_as_Sum_of_Series_of_Subfactorial_by_Falling_Factorial_over_Factorial



Theorem













\(\ds n!\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac { {!k} \, n^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac { !0 \times n^{\underline 0} } {0!} + \dfrac { {!1} \times n^{\underline 1} } {1!} + \dfrac { {!2} \times n^{\underline 2} } {2!} + \dfrac { {!3} \times n^{\underline 3} } {3!} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + \left({1 - \dfrac 1 {1 !} }\right) n + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} }\right) n \left({n - 1}\right) + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} - \dfrac 1 {3 !} }\right) n \left({n - 1}\right) \left({n - 2}\right) + \cdots\)










Here, we have:

$n^{\underline k}$ denotes the $k$th falling factorial of $n$
$!k$ denotes the $k$th subfactorial
$k!$ denotes the $k$th factorial.


Proof
Let $n$ be a non-negative integer.
We assume a solution of the form:

$(1): \quad n! = a_0 + a_1 n + a_2 n \paren {n - 1} + a_3 n \paren {n - 1} \paren {n - 2} + \cdots$

We can express $(1)$ using binomial coefficients:

$(2): \quad n! = \ds \sum_k \dbinom n k k! a_k$

Then:














\(\ds \sum_n n! \binom m n \paren {-1}^{n - k}\)

\(=\)







\(\ds \sum_n \paren {\sum_k \binom n k k! \, a_k} \binom m n \paren {-1}^{n - k}\)





substituting for $n!$ from $(2)$














\(\ds \)

\(=\)







\(\ds \sum_k k! \, a_k \sum_n \binom n k \binom m n \paren {-1}^{m - n}\)





changing order of summation














\(\ds \)

\(=\)







\(\ds \sum_k k! \, a_k \delta_{k m}\)





Corollary to Sum over $k$ of $\dbinom r k \dbinom {s + k} n \paren {-1}^{r - k}$














\(\ds \)

\(=\)







\(\ds m! \, a_m\)





as the $m$th term is the only one left standing








\(\ds \leadsto \ \ \)





\(\ds a_m\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {-1}^{m - n} \dfrac {n!} {m!} \binom m n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^m \paren {-1}^{m - n} \dfrac {n!} {m!} \dfrac {m!} {n! \, \paren {m - n}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^m \frac {\paren {-1}^{m - n} } {\paren {m - n}!}\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^m \frac {\paren {-1}^n} {n!}\)





Permutation of Indices of Summation



$\blacksquare$


Condition for Convergence
Consider the series:














\(\ds n!\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac { {!k} \, n^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac { !0 \times n^{\underline 0} } {0!} + \dfrac { {!1} \times n^{\underline 1} } {1!} + \dfrac { {!2} \times n^{\underline 2} } {2!} + \dfrac { {!3} \times n^{\underline 3} } {3!} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + \left({1 - \dfrac 1 {1 !} }\right) n + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} }\right) n \left({n - 1}\right) + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} - \dfrac 1 {3 !} }\right) n \left({n - 1}\right) \left({n - 2}\right) + \cdots\)










This converges only when $n \in \Z_{\ge 0}$, that is, when $n$ is a non-negative integer.


Historical Note
This result was established by James Stirling during the course of his attempt extend the factorial to the real numbers.
While it provides an exact value for $n!$ when $n$ is a positive integer, the infinite sum exists only under this condition.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(11)$




