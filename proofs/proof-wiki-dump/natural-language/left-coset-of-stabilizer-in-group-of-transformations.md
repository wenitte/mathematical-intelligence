# 

Source: https://proofwiki.org/wiki/Left_Coset_of_Stabilizer_in_Group_of_Transformations

Theorem
Let $S$ be a non-empty set.
Let $G$ be a group of permutations of $S$.
Let $t \in G$.
Let $G_t$ be the set defined as:

$G_t = \set {g \in G: \map g t = t}$

Then each left coset of $G_t$ in $G$ consists of the elements of $G$ that map $t$ to some element of $S$.


This article, or a section of it, needs explaining.In particular: The source work does not discuss group actions, but still defines $G_t$ as the stabilizer of $t$ in $G$. This needs to be reviewed and put into the language of group actions as a result related to transformation group action -- but this area of group theory is not as well covered in $\mathsf{Pr} \infty \mathsf{fWiki}$ as it ought to be. I need to dig out my college notes on group actions, which were more comprehensive and understandable than any of the other works I have on my shelf, which will also need to be exploited properly.Hence the second part of this question in Whitelaw is not covered yet.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Let $x \in G$.
Consider the left coset $x G_t$.
Let $\map x t = s$.
Then:














\(\ds y\)

\(\in\)







\(\ds x G_t\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y^{-1} x\)

\(\in\)







\(\ds G_t\)





Element in Left Coset iff Product with Inverse in Subgroup








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {y^{-1} } {\map x t}\)

\(=\)







\(\ds t\)





Definition of $G_t$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {y^{-1} } s\)

\(=\)







\(\ds t\)





Definition of $s$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map y t\)

\(=\)







\(\ds s\)









$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $15$




