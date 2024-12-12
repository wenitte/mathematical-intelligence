# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cone_Condition_Equivalent_to_Antisymmetry

Theorem
Let $(G,\circ)$ be a group with identity $e$.
Let $C$ be a cone compatible with $\circ$.
Let $\mathcal R$ be the transitive, compatible relation induced by $C$.

Then $\mathcal R$ is antisymmetric iff $C \cap C^{-1} \subseteq \{e\}$, where $C^{-1} = \{ x^{-1}: x \in C \}$.


Proof
Suppose $\mathcal R$ is antisymmetric and suppose that $x \in C \cap C^{-1}$.
Then $x^{-1} \in C$.
Thus $e \mathrel{\mathcal R} x$ and $e \mathrel{\mathcal R} x^{-1}$
By CRG3, $x \mathrel {\mathcal R}e^{-1} = e$, so by antisymmetry $x=e$.
Suppose on the other hand that $C \cap C^{-1} \subseteq \{e\}$.
Let $x,y \in G$.
Let $x \mathrel{\mathcal R} y$ and $y \mathrel{\mathcal R} x$.
Then $y \circ x^{-1} \in C$ and $x \circ y^{-1} \in C$.
But $x \circ y^{-1}$ is the inverse of $y \circ x^{-1}$, so $y \circ x^{-1} = e$.
Thus $y = x$. 
$\blacksquare$





