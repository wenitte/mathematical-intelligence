# 

Source: https://proofwiki.org/wiki/Dilation_of_Closure_of_Set_in_Topological_Vector_Space_is_Closure_of_Dilation/Proof_2

Theorem
Let $F$ be a topological field.
Let $X$ be a topological vector space over $F$. 
Let $A \subseteq X$.
Let $\lambda \in F \setminus \set {0_F}$.

Then we have: 

$\lambda A^- = \paren {\lambda A}^-$
where $A^-$ denotes the closure of $A$. 


Proof
Let $x \in \lambda A^-$.
Then $\lambda^{-1} x \in A^-$.
From Point in Set Closure iff Limit of Net, there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {y_\mu}_{\mu \mathop \in \Lambda}$ valued in $A$ converging to $\lambda^{-1} x$.
From Scalar Multiple of Convergent Net in Topological Vector Space is Convergent, $\family {\lambda y_\mu}_{\mu \mathop \in \Lambda}$ converges to $x$.
Since $\lambda y_\mu \in \lambda A$ for each $\mu \in \Lambda$, we have that $x \in \paren {\lambda A}^-$ from Point in Set Closure iff Limit of Net.
So $\lambda A^- \subseteq \paren {\lambda A}^-$. 

Now let $x \in \paren {\lambda A}^-$.
From Point in Set Closure iff Limit of Net, there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {y_\mu}_{\mu \mathop \in \Lambda}$ valued in $\lambda A$ converging to $x$.
From Scalar Multiple of Convergent Net in Topological Vector Space is Convergent, $\family {\lambda^{-1} y_\mu}_{\mu \mathop \in \Lambda}$ converges to $\lambda^{-1} x$.
Since $\lambda^{-1} y_\mu \in A$ for each $\mu \in \Lambda$, we have that $\lambda^{-1} x \in A^-$ from Point in Set Closure iff Limit of Net..
So $x \in \lambda A^-$.
Hence we have $\paren {\lambda A}^- \subseteq \lambda A^-$.
Hence we conclude that $\lambda A^- = \paren {\lambda A}^-$.
$\blacksquare$





