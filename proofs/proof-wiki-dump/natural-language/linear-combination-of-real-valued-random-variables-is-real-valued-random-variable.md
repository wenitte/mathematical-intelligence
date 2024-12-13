# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Real-Valued_Random_Variables_is_Real-Valued_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be real-valued random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\alpha$ and $\beta$ be real numbers.

Then: 

$\alpha X + \beta Y$ is a real-valued random variable.


General Result
Let $n \in \N$. 
Let $\sequence {X_i}_{i \mathop \in \N}$ be a sequence of real-valued random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\sequence {\alpha_i}_{i \mathop \in \N}$ be a sequence of real numbers. 

Then: 

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i$ is a real-valued random variable.


Proof
Since $X$ and $Y$ are real-valued random variables, we have: 

$X$ and $Y$ are $\Sigma$-measurable functions.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\alpha X$ and $\beta Y$ are $\Sigma$-measurable.
From Pointwise Sum of Measurable Functions is Measurable, we have: 

$\alpha X + \beta Y$ is $\Sigma$-measurable.
So:

$\alpha X + \beta Y$ is a real-valued random variable.
$\blacksquare$





