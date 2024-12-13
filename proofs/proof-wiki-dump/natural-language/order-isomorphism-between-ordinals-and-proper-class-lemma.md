# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_between_Ordinals_and_Proper_Class/Lemma


This article needs to be linked to other articles.In particular: one or twoYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma for Order Isomorphism between Ordinals and Proper Class
Suppose the following conditions are met:
Let $A$ be a class.
We allow $A$ to be a proper class or a set.
Let $\struct {A, \prec}$ be a strict well-ordering.
Let every $\prec$-initial segment be a set, not a proper class.
Let $\Img x$ denote the image of a subclass $x$.
Let $G$ equal the class of all ordered pairs $\tuple {x, y}$ satisfying:

$y \in A \setminus \Img x$
The initial segment $A_y$ of $\struct {A, \prec}$ is a subset of $\Img x$
Let $F$ be a mapping with a domain of $\On$.
Let $F$ also satisfy:

$\map F x = \map G {F \restriction x}$

Then:

$G$ is a mapping
$\map G x \in A \setminus \Img x \iff A \setminus \Img x \ne \O$

Note that only the first four conditions need hold: we may construct classes $F$ and $G$ satisfying the other conditions using the First Principle of Transfinite Recursion.


This article, or a section of it, needs explaining.In particular: Far too woolly. If it is important to the statement of the theorem, then it needs to be expounded properly. If it is not, then it needs to be put somewhere else, either in a separate section, or as a separate proof, or be deleted.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof













\(\ds \tuple {x, y}\)

\(\in\)







\(\ds G\)


















\(\, \ds \land \, \)

\(\ds \tuple {x, z}\)

\(\in\)







\(\ds G\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds A \setminus \Img x\)





Definition of $G$












\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds A \setminus \Img x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\notin\)







\(\ds A_z\)





$A_y$ is disjoint with $A \setminus \Img x$. Same with $A_z$.












\(\, \ds \land \, \)

\(\ds y\)

\(\notin\)







\(\ds A_y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\nprec\)







\(\ds z\)





Definition of Initial Segment












\(\, \ds \land \, \)

\(\ds z\)

\(\nprec\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds z\)





$\prec$ is a strict well-ordering



Therefore, we may conclude, that $G$ is a single-valued relation and therefore a mapping.

For the second part:














\(\ds A \setminus \Img x\)

\(\ne\)







\(\ds \O\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists y \in A \setminus \Img x: \, \)



\(\ds \paren {A \cap A_y} \setminus \Img x\)

\(=\)







\(\ds \O\)





Proper Well-Ordering Determines Smallest Elements








\(\ds \leadsto \ \ \)





\(\ds \map G x\)

\(=\)







\(\ds y\)





Conditions are satisfied for $\tuple {x, y} \in G$. Follows from first part.








\(\ds \leadsto \ \ \)





\(\ds \map G x\)

\(\in\)







\(\ds A \setminus \Img x\)





equation $(1)$, $y \in A \setminus \Img x$



Furthermore:

$\map G x \in A \setminus \Img x \implies A \setminus \Img x \ne \O$ by the definition of non-empty.
$\blacksquare$


Also see
Transfinite Recursion Theorem
Condition for Injective Mapping on Ordinals
Maximal Injective Mapping from Ordinals to a Set


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.48$




