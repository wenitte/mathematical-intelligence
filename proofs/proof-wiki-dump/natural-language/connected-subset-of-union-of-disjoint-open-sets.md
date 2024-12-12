# 

Source: https://proofwiki.org/wiki/Connected_Subset_of_Union_of_Disjoint_Open_Sets

Theorem
Let $T = \struct{S, \tau}$ be a topological space.
Let $A$ be a connected set of $T$.
Let $U, V$ be disjoint open sets.
Let $A \subseteq U \cup V$.

Then

either $A \subseteq U$ or $A \subseteq V$.


Proof
Let $U' = A \cap U$ and $V' = A \cap V$.
By definition $U'$ and $V'$ are open sets in the subspace $\struct{A, \tau_A}$. 
From Intersection is Empty Implies Intersection of Subsets is Empty $U'$ and $V'$ are disjoint.
Hence $U'$ and $V'$ are separated sets by definition.

Now














\(\ds A\)

\(=\)







\(\ds A \cap \paren {U \cup V}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {A \cap U} \cup \paren {A \cap V}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds U' \cup V'\)









Since $A$ is connected then one of $U'$ or $V'$ is empty.
Without loss of generality assume that $V' = \O$.
Then














\(\ds A\)

\(=\)







\(\ds U' \cup V'\)




















\(\ds \)

\(=\)







\(\ds U' \cup \O\)




















\(\ds \)

\(=\)







\(\ds U'\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds A \cap U\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds U\)





Intersection with Subset is Subset



$\blacksquare$


Sources
2000: John M. Lee: Introduction to Topological Manifolds: $\S 4$ Connectedness and Compactness, Proposition $4.9 \ \text {(a)}$




