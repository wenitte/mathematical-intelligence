# 

Source: https://proofwiki.org/wiki/Property_of_Group_Automorphism_which_Fixes_Identity_Only/Corollary_3

Corollary to Property of Group Automorphism which Fixes Identity Only
Let $G$ be a finite group whose identity is $e$.
Let $\phi: G \to G$ be a group automorphism.
Let $\phi$ have the property that:

$\forall g \in G \setminus \set e: \map \phi t \ne t$
That is, the only fixed element of $\phi$ is $e$.

Let:

$\phi^2 = I_G$
where $I_G$ denotes the identity mapping on $G$.
Then $G$ is an abelian group of odd order.


Proof
Let $s, t \in G$.
Then:














\(\ds \map \phi s \, \map \phi t\)

\(=\)







\(\ds \map \phi {s t}\)




















\(\ds \)

\(=\)







\(\ds \paren {s t}^{-1}\)





Corollary 2














\(\ds \)

\(=\)







\(\ds t^{-1} s^{-1}\)




















\(\ds \)

\(=\)







\(\ds t s\)









$\blacksquare$

Aiming for a contradiction, suppose $G$ is of even order.
Then from Even Order Group has Order 2 Element:










\(\ds \exists y \in G: \, \)



\(\ds y^2\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds y^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi y\)

\(=\)







\(\ds y\)










But this contradicts the condition on $\phi$:

$\forall g \in G \setminus \set e: \map \phi t \ne t$
Hence there is no such element of $G$ of order $2$.
Thus $G$ must be of odd order.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $26$




