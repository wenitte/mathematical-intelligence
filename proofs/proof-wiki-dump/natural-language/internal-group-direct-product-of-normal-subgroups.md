# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_of_Normal_Subgroups

Theorem
Let $G$ be a group whose identity is $e$.
Let $H_1$ and $H_2$ be normal subgroups of $G$ such that $H_1 \cap H_2 = \set e$.
Let $\phi: H_1 \times H_2 \to G$ be a mapping defined by $\map \phi {h_1, h_2} = h_1 h_2$.

Then $\phi$ is a (group) homomorphism.


Proof
Let $H_1$ and $H_2$ be normal subgroups of $G$.
Let $h_1 \in H_1, h_2 \in H_2$.
Consider $x \in G: x = h_1 h_2 h_1^{-1} h_2^{-1}$.














\(\ds x\)

\(=\)







\(\ds h_1 h_2 h_1^{-1} h_2^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {h_1 h_2 h_1^{-1} } h_2^{-1}\)










As $H_2$ is normal, we have $h_1 h_2 h_1^{-1} \in H_2$ and thus $x \in H_2$.
Similarly, we can show that $x \in H_1$ and so $x \in H_1 \cap H_2$ and thus $x = e$.
From Product of Commuting Elements with Inverses, $h_1 h_2 h_1^{-1} h_2^{-1} = e$ if and only if $h_1$ and $h_2$ commute.
Thus $h_1 h_2 = h_2 h_1$. 
As $h_1$ and $h_2$ are arbitrary elements of $H_1$ and $H_2$, it follows that every element of $H_1$ commutes with every element of $H_2$.
Thus from Induced Group Product is Homomorphism iff Commutative, $\phi$ is a homomorphism.
$\blacksquare$





