# 

Source: https://proofwiki.org/wiki/Monotonic_Sequence_Characterization_of_Left_Limit_of_Function



Theorem
Let $\hointl a b$ be a real interval. 
Let $x \in \hointl a b$. 
Let $f : \hointl a b \to \R$ be a real function.
Let $L \in \R$. 

Then:

$\ds \lim_{y \mathop \to x^-} \map f y = L$
if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to L$


Corollary
Let $\hointl a b$ be a real interval. 
Let $x \in \hointl a b$. 
Let $f : \hointl a b \to \R$ be a real function.

Then $f$ is left-continuous at $x$ if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to \map f x$


Proof
Necessary Condition
Suppose that:

$\ds \lim_{y \to x^-} \map f y = L$
then:

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, converging to $x$ we have:
$\map f {x_n} \to L$
from Limit of Function by Convergent Sequences: Corollary.
So in particular: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to L$
$\Box$

Sufficient Condition
Suppose that: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to L$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a real sequence, with $x_n < x$ for each $n$, converging to $x$.
Let $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ be a subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$. 
We aim to show that $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ has a subsequence converging to $L$. 
We will then obtain $\map f {x_n} \to L$ from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
From the Peak Point Lemma, $\sequence {x_{n_j} }_{j \mathop \in \N}$ has a monotonic subsequence $\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$.
Since $x_n < x$ for each $n$, we must have $x_{n_{j_k} } < x$ for each $k$. 
Further, $x_{n_{j_k} } \to x$ as $k \to \infty$.
So from hypothesis: 

$\map f {x_{n_{j_k} } } \to L$
So:

$\sequence {\map f {x_{n_{j_k} } } }_{j \mathop \in \N}$ is a subsequence of $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ converging to $L$.
Since $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ was an arbitrary subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$, we have: 

$\map f {x_n} \to L$
from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have:

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, converging to $x$ we have $\map f {x_n} \to L$.
So, from Limit of Function by Convergent Sequences: Corollary, we have: 

$\ds \lim_{y \to x^-} \map f y = L$
$\blacksquare$





