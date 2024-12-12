# 

Source: https://proofwiki.org/wiki/First_Derivative_of_PGF_of_Negative_Binomial_Distribution/Second_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (second form) with parameters $n$ and $p$.
Then the first derivative of the PGF of $X$ with respect to $s$ is:

$\dfrac \d {\d s} \map {\Pi_X} s = n p \paren {\dfrac {\paren {p s}^{n - 1} } {\paren {1 - q s}^{n + 1} } }$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof
The Probability Generating Function of Negative Binomial Distribution (Second Form) is:

$\map {\Pi_X} s = \paren {\dfrac {p s} {1 - q s} }^n$

We have that for a given negative binomial distribution, $n, p$ and $q$ are constant.

Thus we have:














\(\ds \frac \d {\d s} \map {\Pi_X} s\)

\(=\)







\(\ds \frac \d {\d s} \paren {\frac {p s} {1 - q s} }^n\)




















\(\ds \)

\(=\)







\(\ds n \paren {\frac {p s} {1 - q s} }^{n - 1} \frac \d {\d s} \paren {\frac {p s} {1 - q s} }\)





Power Rule for Derivatives and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n \paren {\frac {p s} {1 - q s} }^{n - 1} \paren {\frac {\paren {1 - q s} \frac \d {\d s} \paren {p s} - p s \frac \d {\d s} \paren {1 - q s} } {\paren {1 - q s}^2} }\)





Quotient Rule for Derivatives and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n \paren {\frac {p s} {1 - q s} }^{n - 1} \paren {\frac {\paren {1 - q s} p - p s \paren {-q} } {\paren {1 - q s}^2} }\)





Power Rule for Derivatives where $n = 1$














\(\ds \)

\(=\)







\(\ds n \paren {\frac {p s} {1 - q s} }^{n - 1} \paren {\frac {p - p q s + p q s} {\paren {1 - q s}^2} }\)




















\(\ds \)

\(=\)







\(\ds n \paren {\frac {p s} {1 - q s} }^{n - 1} \paren {\frac p {\paren {1 - q s}^2} }\)




















\(\ds \)

\(=\)







\(\ds n p \paren {\frac {\paren {p s}^{n - 1} } {\paren {1 - q s}^{n + 1} } }\)









Hence the result.
$\blacksquare$





