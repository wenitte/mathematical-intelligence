# 

Source: https://proofwiki.org/wiki/Expectation_of_Negative_Binomial_Distribution/First_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (first form) with parameters $n$ and $p$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac {n p} q$
where $q = 1 - p$.


Proof
From Probability Generating Function of Negative Binomial Distribution (First Form):

$\map {\Pi_X} s = \paren {\dfrac q {1 - p s} }^n$

From Expectation of Discrete Random Variable from PGF:

$\expect X = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\paren {\dfrac q {1 - p s} }^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n p} q \paren {\dfrac q {1 - p s} }^{n + 1}\)





First Derivative of PGF of Negative Binomial Distribution/First Form




Plugging in $s = 1$:














\(\ds \map {\Pi'_X} 1\)

\(=\)







\(\ds \frac {n p} q \paren {\frac q {1 - p} }^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {n p} q \paren {\frac q q}^{n + 1}\)





as $p = 1 - q$








\(\ds \leadsto \ \ \)





\(\ds \expect X\)

\(=\)







\(\ds \frac {n p} q\)





simplifying



$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions

There is believed to be a mistake here, possibly a typo.In particular: The mistake may be in Clapham & Nicholson. They list the NBD while describing it as the second form, but they quote its expectation as its first form. Variance given is that for second form, but at this stage it is not clear whether the variances are the same for first and second forms. Research needed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




