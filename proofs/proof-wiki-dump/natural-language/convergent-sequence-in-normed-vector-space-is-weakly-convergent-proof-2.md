# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Vector_Space_is_Weakly_Convergent/Proof_2

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $x \in X$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ converging to $x$. 

Then $\sequence {x_n}_{n \mathop \in \N}$ converges weakly to $x$.


Proof
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Then, for each $f \in X^\ast$:














\(\ds \size {\map f {x_n} - \map f x}\)

\(\le\)







\(\ds \norm f_{X^\ast} \norm {x_n - x}_X\)





Fundamental Property of Norm on Bounded Linear Functional














\(\ds \)

\(\)







\(\ds \stackrel{n \to \infty}{\longrightarrow} 0\)









$\blacksquare$





