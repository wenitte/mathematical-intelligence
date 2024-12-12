# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Proof_2

Theorem
$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$


Proof
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


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.





