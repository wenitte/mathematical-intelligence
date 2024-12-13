# 

Source: https://proofwiki.org/wiki/Infinite_Series_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of $\Sigma$-measurable functions $f_n : X \to \overline \R$ such that: 

for each $N \in \N$ and $x \in X$, the summation $\ds \sum_{n \mathop = 1}^N \map {f_n} x$ is well-defined.

Then: 

the series $\ds \sum_{n \mathop = 1}^\infty f_n$ is $\Sigma$-measurable.


Proof
From Pointwise Sum of Measurable Functions is Measurable: General Result, we have: 

$\ds \sum_{n \mathop = 1}^N f_n$ is $\Sigma$-measurable for each $N \in \N$.
Then, from Pointwise Limit of Measurable Functions is Measurable, we have: 

$\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N f_n$ is $\Sigma$-measurable.
From the definition of infinite series, we have: 

$\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N f_n = \sum_{n \mathop = 1}^\infty f_n$
so that: 

$\ds \sum_{n \mathop = 1}^\infty f_n$ is $\Sigma$-measurable.
$\blacksquare$





