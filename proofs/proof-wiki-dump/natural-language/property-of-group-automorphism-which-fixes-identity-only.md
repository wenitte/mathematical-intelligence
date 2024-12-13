# 

Source: https://proofwiki.org/wiki/Property_of_Group_Automorphism_which_Fixes_Identity_Only



Theorem
Let $G$ be a finite group whose identity is $e$.
Let $\phi: G \to G$ be a group automorphism.
Let $\phi$ have the property that:

$\forall g \in G \setminus \set e: \map \phi t \ne t$
That is, the only fixed element of $\phi$ is $e$.

Then:

$\forall x, y \in G: x^{-1} \, \map \phi x = y^{-1} \, \map \phi y \implies x = y$


Corollary $1$
$\forall x \in G: \exists g \in G: x = g^{-1} \, \map \phi g$


Corollary $2$
Let:

$\phi^2 = I_G$
where $I_G$ denotes the identity mapping on $G$.
Then:

$\forall g \in G: \map \phi g = g^{-1}$


Corollary $3$
Let:

$\phi^2 = I_G$
where $I_G$ denotes the identity mapping on $G$.
Then $G$ is an abelian group of odd order.


Proof













\(\ds x^{-1} \, \map \phi x\)

\(=\)







\(\ds y^{-1} \, \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds x y^{-1} \, \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x \paren {\map \phi y}^{-1}\)

\(=\)







\(\ds x y^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x \, \map \phi {y^{-1} }\)

\(=\)







\(\ds x y^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {x y^{-1} }\)

\(=\)







\(\ds x y^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x y^{-1}\)

\(=\)







\(\ds e\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $26$




