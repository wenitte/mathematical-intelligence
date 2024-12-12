# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cone_Compatible_with_Ring_Induces_Transitive_Compatible_Relation

Theorem
Let $(R,+,\circ)$ be a ring.
Let $C$ be a cone in $R$ compatible with $(R,+,\circ)$.
Let $\mathcal R$ be the transitive relation on $R$ induced by $C$.

Then $\mathcal R$ is compatible with $(R,+,\circ)$


Proof
By the definition of a cone compatible with a ring and the fact that a cone compatible with a group operation induces a compatible relation, $\mathcal R$ is compatible with $+$.
We need to show that if $0 \mathrel{\mathcal R} x,y$ then $0 \mathrel{\mathcal R} x \circ y$
Suppose that $0 \mathrel{\mathcal R} x,y$.
Then 
$x = x+(-0) \in C$ and, similarly, $y \in C$.
Thus $x\circ y \in C$, so $x\circ y + (-0) \in C$, so $0 \mathrel{\mathcal R} x \circ y$ 
$\blacksquare$





