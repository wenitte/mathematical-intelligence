# 

Source: https://proofwiki.org/wiki/Monotonic_Sequential_Right-Continuity_is_Equivalent_to_Right-Continuity_in_the_Reals



Theorem
Let $\hointr a b$ be a real interval. 
Let $x \in \hointr a b$. 
Let $f : \hointr a b \to \R$ be a real function.

Then $f$ is right-continuous at $x$ if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to \map f x$


Proof
Necessary Condition
Suppose $f$ is right-continuous at $x$, then: 

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, converging to $x$ we have:
$\map f {x_n} \to \map f x$
from Limit of Function by Convergent Sequences: Corollary.
So in particular: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to \map f x$
$\Box$

Sufficient Condition
Suppose that: 

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to \map f x$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a real sequence, with $x_n > x$ for each $n$, converging to $x$.
Let $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ be a subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$. 
We aim to show that $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ has a subsequence converging to $\map f x$. 
We will then obtain $\map f {x_n} \to \map f x$ from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
From the Peak Point Lemma, $\sequence {x_{n_j} }_{j \mathop \in \N}$ has a monotonic subsequence $\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$.
Since $x_n > x$ for each $n$, we must have $x_{n_{j_k} } > x$ for each $k$. 
Further, $x_{n_{j_k} } \to x$ as $k \to \infty$.
So from hypothesis: 

$\map f {x_{n_{j_k} } } \to \map f x$
So:

$\sequence {\map f {x_{n_{j_k} } } }_{j \mathop \in \N}$ is a subsequence of $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ converging to $\map f x$.
Since $\sequence {\map f {x_{n_j} } }_{j \mathop \in \N}$ was an arbitrary subsequence of $\sequence {\map f {x_n} }_{n \mathop \in \N}$, we have: 

$\map f {x_n} \to \map f x$
from Real Sequence with all Subsequences having Convergent Subsequence to Limit Converges to Same Limit.
Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary, we have:

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$, with $x_n > x$ for each $n$, converging to $x$ we have $\map f {x_n} \to \map f x$.
So, from Limit of Function by Convergent Sequences: Corollary, we have: 

$f$ is right-continuous at $x$.
$\blacksquare$





