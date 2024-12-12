# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cone_Condition_Equivalent_to_Reflexivity

Theorem
Let $(G,\circ)$ be a group with identity $e$.
Let $C$ be a cone compatible with $\circ$.
Let $\mathcal R$ be the compatible relation on $G$ induced by $C$.

Then the following are equivalent:

$\mathcal R$ is reflexive.
$e \in C$
$e \in C^{-1}$
Proof
Suppose that $\mathcal R$ is reflexive.
Then $e \mathrel{\mathcal R} e$.
Thus $e = e \circ e^{-1} \in C$.
Thus $e^{-1} \in C^{-1}$.
Since $e^{-1} = e$, $e \in C^{-1}$.

Suppose instead that $e \in C$.
Let $x \in R$.
Then $x \circ x^{-1} = e \in C$.
Thus $x \mathrel{\mathcal R} x$.

Suppose instead that $e \in C^-1$.
Then $e = e^{-1} \in C$.
$\blacksquare$





