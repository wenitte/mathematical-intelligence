# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Negative_Binomial_Distribution/First_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (first form) with parameters $n$ and $p$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = \paren {\dfrac q {1 - p s} }^n$
where $q = 1 - p$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{k \mathop \ge 0} \map {p_X} k s^k$

From the definition of the negative binomial distribution (first form):

$\map {p_X} k = \dbinom {n + k - 1} {n - 1} p^k q^n$
where $q = 1 - p$.

So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {n + k - 1} {n - 1} p^k q^n s^k\)




















\(\ds \)

\(=\)







\(\ds q^n \sum_{k \mathop \ge 0} \binom {n + k - 1} {n - 1} \paren {p s}^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac q {1 - p s} }^n\)









For the third equality, the equation in the second line is rewritten in terms of binomial series.


This article, or a section of it, needs explaining.In particular: Yes all very well, but it's still not trivial.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result.
$\blacksquare$





