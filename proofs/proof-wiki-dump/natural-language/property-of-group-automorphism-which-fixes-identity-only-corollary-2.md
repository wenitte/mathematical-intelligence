# 

Source: https://proofwiki.org/wiki/Property_of_Group_Automorphism_which_Fixes_Identity_Only/Corollary_2

Corollary to Property of Group Automorphism which Fixes Identity Only
Let $G$ be a finite group whose identity is $e$.
Let $\phi: G \to G$ be a group automorphism.
Let $\phi$ have the property that:

$\forall g \in G \setminus \set e: \map \phi t \ne t$
That is, the only fixed element of $\phi$ is $e$.

Let:

$\phi^2 = I_G$
where $I_G$ denotes the identity mapping on $G$.
Then:

$\forall g \in G: \map \phi g = g^{-1}$


Proof
Let $g \in G$.
Then:










\(\ds \exists x \in G: \, \)



\(\ds \map \phi g\)

\(=\)







\(\ds \map \phi {x^{-1} \, \map \phi x}\)





Corollary 1














\(\ds \)

\(=\)







\(\ds \paren {\map \phi x}^{-1} x\)




















\(\ds \)

\(=\)







\(\ds g^{-1}\)









$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $26$




