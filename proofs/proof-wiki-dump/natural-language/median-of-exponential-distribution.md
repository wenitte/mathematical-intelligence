# 

Source: https://proofwiki.org/wiki/Median_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$. 
Then the median of $X$ is equal to $\beta \ln 2$. 


Proof
Let $M$ be the median of $X$.
From the definition of the exponential distribution, $X$ has probability density function: 

$\map {f_X} x = \dfrac 1 \beta e^{-\frac x \beta}$
Note that $f_X$ is non-zero, so the median is unique.


This article, or a section of it, needs explaining.In particular: Why the above followsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We have by the definition of a median: 

$\ds \map \Pr {X < M} = \frac 1 \beta \int_0^M e^{-\frac x \beta} \rd x = \frac 1 2$
Evaluating this integral:














\(\ds \frac 1 \beta \int_0^M e^{-\frac x \beta} \rd x\)

\(=\)







\(\ds \frac 1 \beta \intlimits {-\beta e^{-\frac x \beta} } 0 M\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds 1 - e^{-\frac M \beta}\)










So: 

$1 - e^{-\frac M \beta} = \dfrac 1 2$
Then: 

$e^{-\frac M \beta} = \dfrac 1 2$
giving: 

$-\dfrac M \beta = \map \ln {\dfrac 1 2}$
So, by Logarithm of Reciprocal: 

$M = \beta \ln 2$
$\blacksquare$





