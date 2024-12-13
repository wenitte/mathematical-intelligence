# 

Source: https://proofwiki.org/wiki/Norm_Equivalence_Preserves_Completeness

Theorem
Let $R$ be a normed division ring.
Let $X$ be a vector space over $R$. 
Let $\norm \cdot$ and $\norm \cdot'$ be equivalent norms on $X$.

Then $\struct {X, \norm \cdot}$ is a Banach space if and only if $\struct {X, \norm \cdot'}$ is a Banach space. 


Proof
Suppose that $\struct {X, \norm \cdot}$ is a Banach space.
Let $\sequence {x_n}_{n \in \N}$ be a Cauchy sequence in $\struct {X, \norm \cdot'}$.
From Cauchy Sequences in Vector Spaces with Equivalent Norms Coincide, $\sequence {x_n}_{n \in \N}$ is a Cauchy sequence in $\struct {X, \norm \cdot}$.
Since $\struct {X, \norm \cdot}$ is a Banach space, there exists $x \in X$ such that $x_n \to x$ in $\struct {X, \norm \cdot}$.
From Convergent Sequences in Vector Spaces with Equivalent Norms Coincide, we also have $x_n \to x$ in $\struct {X, \norm \cdot'}$.
So if $\struct {X, \norm \cdot}$ is a Banach space, then so is $\struct {X, \norm \cdot'}$.
Swapping $\struct {X, \norm \cdot}$ and $\struct {X, \norm \cdot'}$ in the previous argument shows that if $\struct {X, \norm \cdot'}$ is a Banach space, so is $\struct {X, \norm \cdot}$.
$\blacksquare$





