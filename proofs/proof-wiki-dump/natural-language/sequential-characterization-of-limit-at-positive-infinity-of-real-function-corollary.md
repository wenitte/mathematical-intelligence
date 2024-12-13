# 

Source: https://proofwiki.org/wiki/Sequential_Characterization_of_Limit_at_Positive_Infinity_of_Real_Function/Corollary



Corollary
Let $f : \R \to \R$ be a real function. 
Let $L$ be a real number. 

Then: 

$\ds \lim_{x \to \infty} \map f x = L$
if and only if:

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$
where:

$\ds \lim_{x \mathop \to \infty} \map f x$ denotes the limit at $+\infty$ of $f$.


Proof
Necessary Condition
Suppose that: 

$\ds \lim_{x \to \infty} \map f x = L$
Then, from Sequential Characterisation of Limit at Positive Infinity of Real Function, we have: 

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
So, in particular: 

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
$\Box$

Sufficient Condition
Suppose that: 

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a real sequence with $x_n \to \infty$. 
Let $\sequence {x_{n_j} }_{j \mathop \in \N}$ be a subsequence of $\sequence {x_n}_{n \mathop \in \N}$.
From Peak Point Lemma, there exists a monotone subsequence $\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$ of $\sequence {x_{n_j} }_{j \mathop \in \N}$.
From Subsequence of Real Sequence Diverging to Positive Infinity Diverges to Positive Infinity, we have: 

$x_{n_{j_k} } \to \infty$
So, from the hypothesis, we have: 

$\map f {x_{n_{j_k} } } \to L$
So: 

any subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$ has a subsequence converging to $L$.
So, from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit, we have: 

$\map f {x_n} \to L$
$\blacksquare$





