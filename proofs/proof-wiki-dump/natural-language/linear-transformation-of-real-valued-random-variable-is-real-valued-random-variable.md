# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Real-Valued_Random_Variable_is_Real-Valued_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$. 
Let $a$ and $b$ be real numbers.

Then: 

$a X + b$ is a real-valued random variable.


Proof
From the definition of a real-valued random variable, we have: 

$X$ is $\Sigma$-measurable.
We want to verify that $a X + b : \Omega \to \R$ is a $\Sigma$-measurable function.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$a X$ is $\Sigma$-measurable.
From Constant Function is Measurable, we have: 

$x \mapsto b$ is $\Sigma$-measurable.
From Pointwise Sum of Measurable Functions is Measurable, we have: 

$a X + b$ is $\Sigma$-measurable.
So:

$a X + b$ is a real-valued random variable.
$\blacksquare$





