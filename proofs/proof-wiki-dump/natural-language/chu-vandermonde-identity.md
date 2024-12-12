# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity



Theorem
Let $r, s \in \R, n \in \Z_{\ge 0}$.
Then:

$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$
where $\dbinom r k$ is a binomial coefficient.

Rising Factorial Variant
$\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\overline k} s^{\overline {n-k} } = \paren {r + s}^{\overline n}$


Falling Factorial Variant
$\ds \sum_{k \mathop = 0}^n \dbinom n k r^{\underline k} s^{\underline {n-k} } = \paren {r + s}^{\underline n}$


Extended Chu-Vandermonde Identity
Let $r, s, \alpha, \beta \in \C$ be complex numbers.

Then:

$\ds \sum_{k \mathop \in \Z} \dbinom r {\alpha + k} \dbinom s {\beta - k} = \dbinom {r + s} {\alpha + \beta}$
where $\dbinom r {\alpha + k}$ denotes a binomial coefficient.


Proof 1













\(\ds \sum_{n \mathop = 0}^{r + s} \binom {r + s} n x^n\)

\(=\)







\(\ds \paren {1 + x}^{r + s}\)





Binomial Theorem - Integral Index














\(\ds \)

\(=\)







\(\ds \paren {1 + x}^r \paren {1 + x}^s\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \binom r k x^k \sum_{k \mathop = 0}^s \binom s k x^k\)





Binomial Theorem - Integral Index














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^{r + s} \paren {\sum_{k \mathop = 0}^n \binom r k \binom  s {n - k} } x^n\)





Product of Absolutely Convergent Series



Therefore:

$\ds \binom {r + s} n = \sum_{k \mathop = 0}^n \binom r k \binom s {n - k}$
$\blacksquare$


Proof 2
The Chu-Vandermonde Identity is a special case of Gauss's Hypergeometric Theorem:

$\map { {}_2F_1} {a, b; c; 1} = \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }$
when:

$\map \Re {c - a - b} \gt 0$
where:

$\map { {}_2F_1} {a, b; c; 1}$ is the hypergeometric series: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

Starting on the left hand side:














\(\ds \map { {}_2F_1} {-n, b; c; 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-n}^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-n}^{\overline k} b^{\overline k} } { k! c^{\overline k} }\)





$1^k = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k \paren n^{\underline k} b^{\overline k} } { k! c^{\overline k} }\)





Rising Factorial in terms of Falling Factorial of Negative














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k n! b^{\overline k} } {k! \paren {n - k}! c^{\overline k} }\)





Falling Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \dfrac {b^{\overline k} } {c^{\overline k} }\)





Definition of Binomial Coefficient, $\dbinom n k = 0$ when $k > n$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \dfrac {b^{\overline k} } {c^{\overline k} } \dfrac {c^{\overline n} } {c^{\overline n} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \dfrac {b^{\overline k} c^{\overline n} } {c^{\overline k} }\)





moving $\dfrac 1 { c^{\overline n} }$ outside the sum














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \dfrac {\paren {b - 1 + k}!} {\paren {b - 1}!} \dfrac {\dfrac {\paren {c - 1 + n}!} {\paren {c - 1}!} } {\dfrac {\paren {c - 1 + k}!} {\paren {c - 1}!} }\)





Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \paren {-1}^k \dbinom n k \dfrac {\paren {b - 1 + k}!} {\paren {b - 1}!} \times \dfrac {k!} {k!} \times  \dfrac {\paren {c - 1 + k + \paren {n - k} }!} {\paren {c - 1 + k}!}\)





multiplying by $1$ and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \paren {-1}^k k! \dbinom n k \dbinom {b - 1 + k} k  \paren {c - 1 + k}^{\overline {n - k} }\)





Definition of Binomial Coefficient and Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n k! \dbinom n k \dbinom {-b} k \paren {c - 1 + k}^{\overline {n - k} }\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n k! \dbinom n k \dfrac {-b!} {k! \paren {-b - k}!} \paren {c - 1 + k}^{\overline {n - k} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \dbinom n k \dfrac {-b!} {\paren {-b - k}!} \paren {c - 1 + k}^{\overline {n - k} }\)





$k!$ cancels














\(\ds \)

\(=\)







\(\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \dbinom n k \paren {1 - b - k}^{\overline k} \paren {c - 1 + k}^{\overline {n - k} }\)





Rising Factorial as Quotient of Factorials



Moving to the right hand side, we let $a = -n$:














\(\ds \map { {}_2F_1} {-n, b; c; 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - \paren {-n} - b} } {\map \Gamma {c - \paren {-n} } \map \Gamma {c - b} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - b + n} } {\map \Gamma {c + n} \map \Gamma {c - b} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {\map \Gamma {c - b + n} } {\map \Gamma {c - b} } } {\dfrac {\map \Gamma {c + n} } {\map \Gamma c} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {c - b}^{\overline n} } {c^{\overline n} }\)





Rising Factorial as Quotient of Factorials



Finally, setting the left hand side equal to the right hand side, we see the Chu-Vandermonde Identity:

$\ds \dfrac 1 {c^{\overline n} } \sum_{k \mathop = 0}^n \dbinom n k \paren {1 - b - k}^{\overline k} \paren {c - 1 + k}^{\overline {n - k} } = \dfrac {\paren {c - b}^{\overline n} } {c^{\overline n} }$
$\blacksquare$


Proof 3 (Informal)
The right hand side can be thought of as the number of ways to select $n$ people from among $r$ men and $s$ women.
Each term in the left hand side is the number of ways to choose $k$ of the men and $n - k$ of the women.
$\blacksquare$


Proof 4
From Sum over $k$ of $\dbinom {r - t k} k \dbinom {s - t \paren{n - k}} {n - k} \dfrac r {r - t k}$:

Let $r, s, t \in \R, n \in \Z$.
Then:

$\ds \sum_{k \mathop \ge 0} \binom {r - t k} k \binom {s - t \paren {n - k} } {n - k} \frac r {r - t k} = \binom {r + s - t n} n$

where $r, s, t \in \R, n \in \Z$.

Setting $t = 0$:

$\ds \sum_{k \mathop \ge 0} \binom r k \binom s {n - k} = \binom {r + s} n$
which is the result required.
$\blacksquare$


Examples
$3$ from $4 + 5$
$\ds \binom 9 3 = \binom {4 + 5} 3 = \sum_{k \mathop = 0}^3 \binom 4 k \binom 5 {3 - k}$


$2$ from $e + \pi$
Let $r = e$, $s = \pi$ and $n = 2$

$\ds \binom {e + \pi} 2 = \sum_{k \mathop = 0}^2 \binom e k \binom \pi {2 - k}$


Also known as
When $r$ and $s$ are integers, the Chu-Vandermonde identity is more commonly known as Vandermonde's identity, Vandermonde's convolution (formula) or Vandermonde's convolution.
Sometimes it is seen referred to as the Chu-Vandermonde formula, or Vandermonde's theorem.


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Historical Note
The Chu-Vandermonde Identity first appeared in Chu Shih-chieh's The Precious Mirror of the Four Elements in $1303$.
It was rediscovered by Alexandre-Théophile Vandermonde and published in $1772$.


Sources
1303: Chu Shih-chieh: The Precious Mirror of the Four Elements
1772: Alexandre-Théophile Vandermonde: Mémoire sur les Irrationels de différens ordres avec une application au cercle (Histoire de l'Académie Royale des Sciences, avec les Mémoires de Mathématique et de Physique Vol. 1772: pp. 489 – 498)
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.13$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text {I} \ (21)$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Vandermonde's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Vandermonde's convolution formula




