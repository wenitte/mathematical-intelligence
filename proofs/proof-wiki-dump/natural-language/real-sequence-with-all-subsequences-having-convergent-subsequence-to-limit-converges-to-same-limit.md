# 

Source: https://proofwiki.org/wiki/Real_Sequence_with_all_Subsequences_having_Convergent_Subsequence_to_Limit_Converges_to_Same_Limit

Theorem
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence. 
Let $x \in \R$. 
Suppose that:

every subsequence $\sequence {x_{n_j} }_{j \in \N}$ of $\sequence {x_n}_{n \in \mathop \N}$ has a subsequence $\sequence {x_{n_{j_k} } }_{k \in \N}$ such that:
$x_{n_{j_k} } \to x$

Then: 

$x_n \to x$


Proof
Aiming for a contradiction, suppose, suppose that: 

$x_n$ does not converge to $x$.
Then, there exists some $\epsilon > 0$ such that for every $k \in \N$ there exists $n_k \ge k$ such that: 

$\size {x_{n_k} - x} \ge \epsilon$
Let $\sequence {x_{n_{j_k} } }_{k \in \N}$ be a subsequence of $\sequence {x_{n_j} }_{j \in \N}$.
Then: 

$\size {x_{n_{j_k} } - x} \ge \epsilon$
for each $k \in \N$.
In particular, there exists no $N \in \N$ such that: 

$\size {x_{n_{j_k} } - x} < \epsilon$
for each $k \ge N$, so: 

$\sequence {x_{n_{j_k} } }_{k \mathop \in \N}$ does not converge to $x$.
So:

$\sequence {x_{n_j} }_{j \mathop \in \N}$ is a subsequence of $\sequence {x_n}_{n \mathop \in \N}$, but has a subsequence that does not converge to $x$.
This contradicts our hypothesis on the subsequences of $\sequence {x_n}_{n \mathop \in \N}$. 
So $x_n$ converges to $x$.
$\blacksquare$





