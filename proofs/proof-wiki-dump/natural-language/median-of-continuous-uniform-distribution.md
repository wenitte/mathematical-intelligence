# 

Source: https://proofwiki.org/wiki/Median_of_Continuous_Uniform_Distribution

Theorem
Let $X$ be a continuous random variable which is uniformly distributed on a closed real interval $\closedint a b$. 
Then the median $M$ of $X$ is given by: 

$M = \dfrac {a + b} 2$


Proof
From the definition of the continuous uniform distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {b - a}$
Note that $f_X$ is non-zero, so the median is unique. 
We have by the definition of a median: 

$\ds \map \Pr {X < M} = \int_a^M \frac 1 {b - a} \rd x = \frac 1 2$

This article, or a section of it, needs explaining.In particular: Reconcile the fact that the definition of the median is actually taken from $-\infty$ not $a$. A bit of fancy footwork needed to get the lower limit in place.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We have, by Primitive of Constant: 

$\dfrac {M - a} {b - a} = \dfrac 1 2$
So: 














\(\ds M\)

\(=\)







\(\ds a + \frac {b - a} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {b - a + 2 a} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {b + a} 2\)









$\blacksquare$





