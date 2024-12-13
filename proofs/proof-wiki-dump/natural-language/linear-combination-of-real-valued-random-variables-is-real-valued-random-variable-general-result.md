# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Real-Valued_Random_Variables_is_Real-Valued_Random_Variable/General_Result



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $n \in \N$. 
Let $\sequence {X_i}_{i \mathop \in \N}$ be a sequence of real-valued random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\sequence {\alpha_i}_{i \mathop \in \N}$ be a sequence of real numbers. 

Then: 

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i$ is a real-valued random variable.


Proof
We proceed by induction.
For all $n \in \N$ let $\map P n$ be the proposition:

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i$ is $\Sigma$-measurable.


Basis for Induction
From the construction of $\sequence {X_i}_{i \mathop \in \N}$ we have: 

$X_1$ is $\Sigma$-measurable.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\alpha_1 X_1$ is is $\Sigma$-measurable.
This is precisely $\map P 1$. 
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

Our induction hypothesis is:

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i$ is $\Sigma$-measurable.
We aim to show that: 

$\ds \sum_{i \mathop = 1}^{n + 1} \alpha_i X_i$ is $\Sigma$-measurable.


Induction Step
This is our induction step.
We have: 

$\ds \sum_{i \mathop = 1}^{n + 1} \alpha_i X_i = \alpha_{n + 1} X_{n + 1} + \sum_{i \mathop = 1}^N \alpha_i X_i$
From our induction hypothesis, we have: 

$\ds \sum_{i \mathop = 1}^n \alpha_i X_i$ is $\Sigma$-measurable.
From the construction of $\sequence {X_i}_{i \mathop \in \N}$ we have: 

$X_{n + 1}$ is $\Sigma$-measurable.
So from Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\alpha_{n + 1} X_{n + 1}$ is $\Sigma$-measurable.
So, from Pointwise Sum of Measurable Functions is Measurable, we have:

$\ds \alpha_{n + 1} X_{n + 1} + \sum_{i \mathop = 1}^n \alpha_i X_i = \sum_{i \mathop = 1}^{n + 1} \alpha_i X_i$ is $\Sigma$-measurable.
$\blacksquare$





