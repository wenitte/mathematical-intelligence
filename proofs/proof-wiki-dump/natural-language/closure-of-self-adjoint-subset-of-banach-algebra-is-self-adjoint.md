# 

Source: https://proofwiki.org/wiki/Closure_of_Self-Adjoint_Subset_of_Banach_*-Algebra_is_Self-Adjoint

Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$.
Let $S \subseteq A$ be self-adjoint.

Then the closure $S^-$ of $S$ is self-adjoint.


Proof
Let $x \in S^-$. 
From Point in Closure of Subset of Metric Space iff Limit of Sequence, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$ with $x_n \to x$. 
Since $S$ is self-adjoint, we have $x_n^\ast \in S$. 
From Star of Convergent Sequence in Banach *-Algebra Converges, we have $x_n^\ast \to x^\ast$. 
From Point in Closure of Subset of Metric Space iff Limit of Sequence, we have $x^\ast \in S^-$. 
Hence if $x \in S^-$, we have $x^\ast \in S^-$. 
So $S^-$ is self-adjoint.
$\blacksquare$





