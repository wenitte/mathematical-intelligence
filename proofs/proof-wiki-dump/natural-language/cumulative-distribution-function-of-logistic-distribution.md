# 

Source: https://proofwiki.org/wiki/Cumulative_Distribution_Function_of_Logistic_Distribution

Theorem
Let $X$ be a continuous random variable with the logistic distribution.
Then the cumulative distribution function of $X$ is:

$\map {F_X} x = \dfrac 1 {1 + \map \exp {- \dfrac {x - \mu} s} }$
Proof
The derivative of $F_X$ is:














\(\ds \map {F'_X} x\)

\(=\)







\(\ds \paren {\frac 1 {1 + \map \exp {- \frac {x - \mu} s} } }'\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren 1' \paren {1 + \map \exp {- \frac {x - \mu} s} } - \paren 1 \paren {1 + \map \exp {- \frac {x - \mu} s} }'} {\paren {1 + \map \exp {- \frac {x - \mu} s} }^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {0 - \paren {\map \exp {-\frac {\paren {x - \mu} } s} }'} {\paren {1 + \map \exp {- \frac {x - \mu} s} }^2}\)





Derivative of Constant, Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {- \map {\exp'} {-\frac {\paren {x - \mu} } s} \paren {-\frac {\paren {x - \mu} } s}'} {\paren {1 + \map \exp {- \frac {x - \mu} s} }^2}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {- \frac {x - \mu} s} \paren {\frac x s - \frac \mu s}'} {\paren {1 + \map \exp {- \frac {x - \mu} s} }^2}\)





Derivative of Exponential Function, Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {- \frac {x - \mu} s} } {s\paren {1 + \map \exp {- \frac {x - \mu} s} }^2}\)





Derivative of Constant Multiple, Derivative of Identity Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds \map {f_X} x\)





Definition of Logistic Distribution



By the Fundamental Theorem of Calculus:

$\ds \int_a^b \map {f_X} x \rd x = \bigintlimits {\map {F_X} x} {x \mathop = a} {x \mathop = b}$
Therefore:














\(\ds \int_{-\infty}^x \map {f_X} \lambda \rd \lambda\)

\(=\)







\(\ds \lim_{a \to -\infty} \int_a^x \map {f_X} \lambda \rd \lambda\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{a \to -\infty} \paren {\map {F_X} x - \map {F_X} a}\)





Result above














\(\ds \)

\(=\)







\(\ds \lim_{a \to -\infty} \map {F_X} x - \lim_{a \to -\infty} \map {F_X} a\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \map {F_X} x - \lim_{a \to -\infty} \frac 1 {1 + \map \exp {- \frac {a - \mu} s} }\)





Limit of Constant Function














\(\ds \)

\(=\)







\(\ds \map {F_X} x - \lim_{b \to \infty} \frac 1 {1 + \map \exp b}\)





Limit to Infinity of Linear Function, where $b = - \frac {a - \mu} s$














\(\ds \)

\(=\)







\(\ds \map {F_X} x - \lim_{c \to \infty} \frac 1 c\)





Exponential Tends to Zero and Infinity, where $c = 1 + \map \exp b$














\(\ds \)

\(=\)







\(\ds \map {F_X} x\)





Limit to Infinity of Reciprocal Function



Hence the result.
$\blacksquare$





