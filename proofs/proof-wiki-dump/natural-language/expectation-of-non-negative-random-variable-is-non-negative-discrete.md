# 

Source: https://proofwiki.org/wiki/Expectation_of_Non-Negative_Random_Variable_is_Non-Negative/Discrete

Theorem
Let $X$ be a discrete random variable. 
Let $\map \Pr {X \ge 0} = 1$. 

Then:

$\expect X \ge 0$
where $\expect X$ denotes the expectation of $X$. 


Proof
Let $\map \supp X$ be the support of $X$. 
Note that since $X$ is discrete, its sample space and hence support is countable. 
Therefore, there exists some sequence $\sequence {x_i}_{i \mathop \in I}$ such that: 

$\map \supp X = \set {x_i \mid i \in I}$
for some $I \subseteq \N$. 
By the definition of a sample space, we have: 

$\map \Pr {X = x_i} \ge 0$
for all $i \in I$. 
Note that since $\map \Pr {X \ge 0} = 1$, we have $\map \Pr {X < 0} = 0$. 
So, for any $x < 0$ we necessarily have $\map \Pr {X = x} = 0$, meaning that $x \notin \map \supp X$. 
We therefore have that any elements of $\map \supp X$ are non-negative.
That is: 

$x_i \ge 0$
for all $i \in I$.
Therefore: 

$x_i \map \Pr {X = x_i} \ge 0$
for all $i \in I$. 
Summing over all $i \in I$, we have: 

$\ds \sum_{i \mathop \in I} x_i \map \Pr {X = x_i} \ge 0$
Hence, by the definition of expectation:

$\expect X \ge 0$
$\blacksquare$





