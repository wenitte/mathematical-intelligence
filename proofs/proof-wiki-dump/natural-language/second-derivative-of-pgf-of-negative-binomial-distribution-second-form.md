# 

Source: https://proofwiki.org/wiki/Second_Derivative_of_PGF_of_Negative_Binomial_Distribution/Second_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (second form) with parameters $n$ and $p$.
Then the second derivative of the PGF of $X$ with respect to $s$ is:

$\dfrac {\d^2} {\d s^2} \map {\Pi_X} s = \paren {\dfrac {p s} {1 - q s} }^{n + 2} \paren {\dfrac {n \paren {n - 1} + 2 n q s} {\paren {p s^2}^2} }$


Proof
The Probability Generating Function of Negative Binomial Distribution (Second Form) is:

$\map {\Pi_X} s = \paren {\dfrac {p s} {1 - q s} }^n$

We have that for a given negative binomial distribution, $n, p$ and $q$ are constant.
From First Derivative of PGF of Negative Binomial Distribution/Second Form:














\(\ds \frac \d {\d s} \map {\Pi_X} s\)

\(=\)







\(\ds n p \paren {\dfrac {\paren {p s}^{n - 1} } {\paren {1 - q s}^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac n {p s^2} \paren {\frac {p s} {1 - q s} }^{n + 1}\)









Thus we have:














\(\ds \frac {\d^2} {\d s^2} \map {\Pi_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\frac n {p s^2} \paren {\frac {p s} {1 - q s} }^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac n {p s^2} \map {\frac \d {\d s} } {\paren {\frac {p s} {1 - q s} }^{n + 1} } + \map {\frac \d {\d s} } {\frac n {p s^2} } \paren {\frac {p s} {1 - q s} }^{n + 1}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac n {p s^2} \paren {\frac {n + 1} {p s^2} \paren {\frac {p s} {1 - q s} }^{n + 2} } + \map {\frac \d {\d s} } {\frac n {p s^2} } \paren {\frac {p s} {1 - q s} }^{n + 1}\)





First Derivative of PGF of Negative Binomial Distribution/Second Form














\(\ds \)

\(=\)







\(\ds \frac n {p s^2} \paren {\frac {n + 1} {p s^2} \paren {\frac {p s} {1 - q s} }^{n + 2} } + \paren {\frac {- 2 n} {p s^3} } \paren {\frac {p s} {1 - q s} }^{n + 1}\)





Power Rule for Derivatives where $n = -2$














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n + 1} } {p^2 s^4} \paren {\frac {p s} {1 - q s} }^{n + 2} + \paren {\frac {- 2 n} {p s^3} } \paren {\frac {p s} {1 - q s} }^{n + 1}\)





dismayingly messy algebra














\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 1} \paren {\frac {n \paren {n + 1} } {p s^3} \paren {\frac 1 {1 - q s} } + \paren {\frac {- 2 n} {p s^3} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 1} \paren {\frac {n \paren {n + 1} - 2 n \paren {1 - q s} } {p s^3 \paren {1 - q s} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 1} \paren {\frac {n^2 + n - 2 n + 2 n q s} {p s^3 \paren {1 - q s} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 1} \paren {\frac {n^2 - n + 2 n q s} {p s^3 \paren {1 - q s} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 1} \paren {\frac {n \paren {n - 1} + 2 n q s} {p s^3 \paren {1 - q s} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 2} \paren {\frac {n \paren {n - 1} + 2 n q s} {p^2 s^4} }\)





multiplying top and bottom by $p s$ and gathering terms














\(\ds \)

\(=\)







\(\ds \paren {\frac {p s} {1 - q s} }^{n + 2} \paren {\frac {n \paren {n - 1} + 2 n q s} {\paren {p s^2}^2} }\)





final tidy up



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




