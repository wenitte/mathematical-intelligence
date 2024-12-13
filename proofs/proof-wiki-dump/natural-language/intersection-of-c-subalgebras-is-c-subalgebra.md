# 

Source: https://proofwiki.org/wiki/Intersection_of_C*-Subalgebras_is_C*-Subalgebra

Theorem
Let $\tuple {A, \norm {\, \cdot \,}, \ast}$ be a $\text C^\ast$-algebra.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ be an $I$-indexed family of $\text C^\ast$-subalgebras of $A$.
Let:

$\ds B = \bigcap_{\alpha \mathop \in I} A_\alpha$

Then $B$ is a $\text C^\ast$-subalgebra of $A$. 


Proof
From Intersection of *-Subalgebras is *-Subalgebra, $B$ is a $\ast$-subalgebra of $A$. 
By definition, $A_\alpha$ is a complete metric subspace of $A$ for each $\alpha \in I$.
Hence from Subspace of Complete Metric Space is Closed iff Complete, $A_\alpha$ is closed in $A$.
Hence as the intersection of closed sets, $B$  is closed in $A$.
Hence from Closed *-Subalgebra of C*-Algebra is C*-Algebra, $B$ is a $\text C^\ast$-subalgebra of $A$.
$\blacksquare$





