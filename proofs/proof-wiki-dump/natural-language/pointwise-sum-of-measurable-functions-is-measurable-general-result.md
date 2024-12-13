# 

Source: https://proofwiki.org/wiki/Pointwise_Sum_of_Measurable_Functions_is_Measurable/General_Result



Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\sequence {\alpha_n}_{n \mathop \in \N}$ be a sequence of real numbers.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of $\Sigma$-measurable functions $f_n : X \to \overline \R$ such that: 

for each $N \in \N$ and $x \in X$, the sum $\ds \sum_{n \mathop = 1}^N \alpha_n \map {f_n} x$ is well-defined.

Then: 

$\ds \sum_{n \mathop = 1}^N \alpha_n f_n$ is $\Sigma$-measurable.


Proof
We proceed by induction.
For all $N \in \N$ let $\map P N$ be the proposition:

$\ds \sum_{n \mathop = 1}^N \alpha_n f_n$ is $\Sigma$-measurable.


Basis for Induction
From the construction of $\sequence {f_n}_{n \mathop \in \N}$ we have: 

$f_1$ is $\Sigma$-measurable.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\alpha_1 f_1$ is is $\Sigma$-measurable.
This is precisely $\map P 1$. 
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P N$ is true, where $N \ge 1$, then it logically follows that $\map P {N + 1}$ is true.

Our induction hypothesis is:

$\ds \sum_{n \mathop = 1}^N \alpha_n f_n$ is $\Sigma$-measurable.
We aim to show that: 

$\ds \sum_{n \mathop = 1}^{N + 1} \alpha_n f_n$ is $\Sigma$-measurable.


Induction Step
This is our induction step.
We have: 

$\ds \sum_{n \mathop = 1}^{N + 1} \alpha_n f_n = \alpha_{N + 1} f_{N + 1} + \sum_{n \mathop = 1}^N \alpha_n f_n$
From our induction hypothesis, we have: 

$\ds \sum_{n \mathop = 1}^N \alpha_n f_n$ is $\Sigma$-measurable.
From the construction of $\sequence {f_n}_{n \mathop \in \N}$ we have: 

$f_{N + 1}$ is $\Sigma$-measurable.
So from Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\alpha_{N + 1} f_{N + 1}$ is $\Sigma$-measurable.
So, from Pointwise Sum of Measurable Functions is Measurable, we have:

$\ds \alpha_{N + 1} f_{N + 1} + \sum_{n \mathop = 1}^N \alpha_n f_n = \sum_{n \mathop = 1}^{N + 1} \alpha_n f_n$ is $\Sigma$-measurable.
$\blacksquare$





