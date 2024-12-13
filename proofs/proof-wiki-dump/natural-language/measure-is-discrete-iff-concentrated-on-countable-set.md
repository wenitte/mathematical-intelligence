# 

Source: https://proofwiki.org/wiki/Measure_is_Discrete_iff_Concentrated_on_Countable_Set



Theorem
Let $\struct {X, \Sigma}$ be a measurable space such that:

$\set x \in \Sigma$ for all $x \in X$.
Let $\mu$ be a measure. 

Then $\mu$ is discrete if and only if:

there exists a countable set $C \subseteq X$ such that $\map \mu {X \setminus C} = 0$.


Proof
Necessary Condition
Suppose that $\mu$ is discrete.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ and a sequence of non-negative real numbers $\sequence {\lambda_n}_{n \mathop \in \N}$ such that:

$\ds \mu = \sum_{n \mathop = 1}^\infty \lambda_n \delta_{x_n}$
where $\delta_{x_n}$ is the dirac measure at $x_n$.
Let:

$C = \set {x_n : n \in \N}$
Then $C$ is countable.
Since $x_n \not \in X \setminus C$ for each $n \in \N$, we have $\map {\delta_{x_n} } {X \setminus C} = 0$.
Hence we have $\map \mu {X \setminus C} = 0$. 
$\Box$

Sufficient Condition
Suppose that:

there exists a countable set $C \subseteq X$ such that $\map \mu {X \setminus C} = 0$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be an enumeration of $C$. 
Now let $S \in \Sigma$. 
Let $\lambda_j = \map \mu {\set {x_j} }$ 
From countable additivity, we have that:

$\ds \map \mu S = \sum_{j : x_j \in S} \map \mu {\set {x_j} } = \sum_{j : x_j \in S} \lambda_j$
We have $x_j \in S$ if and only if $\map {\delta_{x_j} } S = 1$, and $\map {\delta_{x_j} } S = 0$ otherwise, so we have:

$\ds \map \mu S = \sum_{j \mathop = 1}^\infty \lambda_j \map {\delta_{x_j} } S$
So we have the result. 
$\blacksquare$





