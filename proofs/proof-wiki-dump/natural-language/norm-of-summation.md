# 

Source: https://proofwiki.org/wiki/Norm_of_Summation



Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$.

Then: 

$\ds \norm {\sum_{k \mathop = 1}^n x_k} \le \sum_{k \mathop = 1}^n \norm {x_k}$ for all $n \in \N$.


Proof
The proof proceeds by induction.
For each $n \in \N$, let $\map P n$ be the proposition:

$\ds \norm {\sum_{k \mathop = 1}^n x_k} \le \sum_{k \mathop = 1}^n \norm {x_k}$ for all $n \in \N$.


Basis for the Induction
$\map P 1$ is the case: 

$\ds \norm {\sum_{k \mathop = 1}^1 x_k} \le \sum_{k \mathop = 1}^1 \norm {x_k}$
This is immediate, since: 

$\ds \norm {\sum_{k \mathop = 1}^1 x_k} = \norm {x_1}$
and:

$\ds \sum_{k \mathop = 1}^1 \norm {x_k} = \norm {x_1}$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

So this is the induction hypothesis:

$\ds \norm {\sum_{k \mathop = 1}^n x_k} \le \sum_{k \mathop = 1}^n \norm {x_k}$
from which it is to be shown that: 

$\ds \norm {\sum_{k \mathop = 1}^{n + 1} x_k} \le \sum_{k \mathop = 1}^{n + 1} \norm {x_k}$


Induction Step
This is the induction step:

We have: 














\(\ds \norm {\sum_{k \mathop = 1}^{n + 1} x_k}\)

\(=\)







\(\ds \norm {x_{n + 1} + \sum_{k \mathop = 1}^n x_k}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_{n + 1} } + \norm {\sum_{k \mathop = 1}^n x_k}\)





using the triangle equality for norms














\(\ds \)

\(\le\)







\(\ds \norm {x_{n + 1} } + \sum_{k \mathop = 1}^n \norm {x_k}\)





using the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n + 1} \norm {x_k}\)










So $\map P n \implies \map P {n + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





