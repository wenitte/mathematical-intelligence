# 

Source: https://proofwiki.org/wiki/First_Derivative_of_PGF_of_Negative_Binomial_Distribution/First_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (first form) with parameters $n$ and $p$.
Then the first derivative of the PGF of $X$ with respect to $s$ is:

$\dfrac \d {\d s} \map {\Pi_X} s = \dfrac {n p} q \paren {\dfrac q {1 - p s} }^{n + 1}$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof
The Probability Generating Function of Negative Binomial Distribution (First Form) is:

$\map {\Pi_X} s = \paren {\dfrac q {1 - p s} }^n$

We have that for a given negative binomial distribution, $n, p$ and $q$ are constant.

Thus we have:














\(\ds \frac \d {\d s} \map {\Pi_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\paren {\dfrac q {1 - p s} }^n}\)




















\(\ds \)

\(=\)







\(\ds n \paren {\frac q {1 - p s} }^{n - 1} \map {\frac \d {\d s} } {\frac q {1 - p s} }\)





Power Rule for Derivatives and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n \paren {\frac q {1 - p s} }^{n - 1} \paren {-p} \paren {\frac {-q} {\paren {1 - p s}^2} }\)





Power Rule for Derivatives and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {n p} q \paren {\frac q {1 - p s} }^{n + 1}\)





simplifying



Hence the result.
$\blacksquare$





