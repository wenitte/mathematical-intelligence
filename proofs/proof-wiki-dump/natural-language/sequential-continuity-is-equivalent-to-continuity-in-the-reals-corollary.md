# 

Source: https://proofwiki.org/wiki/Sequential_Continuity_is_Equivalent_to_Continuity_in_the_Reals/Corollary



Theorem
Let $I$ be a real interval. 
Let $x \in I$. 
Let $f : I \to \R$ be a real function.

Then $f$ is continuous at $x$ if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have:
$\map f {x_n} \to \map f x$


Proof
Necessary Condition
Suppose $f$ is continuous at $x$, then: 

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have:
$\map f {x_n} \to \map f x$
from Sequential Continuity is Equivalent to Continuity in the Reals.
So in particular: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have:
$\map f {x_n} \to \map f x$
$\Box$

Sufficient Condition
Suppose that: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have:
$\map f {x_n} \to \map f x$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a real sequence converging to $x$.
Let $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ be a subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$. 
We aim to show that $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ has a subsequence converging to $\map f x$. 
We will then obtain $\map f {x_n} \to \map f x$ from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
From the Peak Point Lemma, $\sequence {x_{n_j} }_{j \mathop \in \N}$ has a monotonic subsequence $\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$.
So from hypothesis: 

$\map f {x_{n_{j_k} } } \to \map f x$
So:

$\sequence {\map f {x_{n_{j_k} } } }_{j \mathop \in \N}$ is a subsequence of $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ converging to $\map f x$.
Since $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ was an arbitrary subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$, we have: 

$\map f {x_n} \to \map f x$
from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have: 

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have $\map f {x_n} \to \map f x$.
So, from Sequential Continuity is Equivalent to Continuity in the Reals:

$f$ is continuous at $x$.
$\blacksquare$





