# 

Source: https://proofwiki.org/wiki/Order_of_Element_in_Quotient_Group

Theorem
Let $G$ be a group, and let $H$ be a normal subgroup of $G$.
Let $G / H$ be the quotient group of $G$ by $H$.

The order of $a H \in G / H$ divides the order of $a \in G$.


Proof
Let $G$ be a group with normal subgroup $H$.
Let $G / H$ be the quotient of $G$ by $H$.
From Quotient Group Epimorphism is Epimorphism, $G / H$ is a homomorphic image of $G$.
Let $q_H: G \to G / H$ given by $\map f a = a H$ be that quotient epimorphism.
Let $a \in G$ such that $a^n = e$ for some integer $n$.
Then, by the morphism property of $q_H$:














\(\ds \map {q_H} {a^n}\)

\(=\)







\(\ds \paren {\map {q_H} a}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {a H}^n\)




















\(\ds \)

\(=\)







\(\ds a^n H\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds e H\)





by hypothesis














\(\ds \)

\(=\)







\(\ds H\)









Hence $\order H$ divides $n$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \delta$




