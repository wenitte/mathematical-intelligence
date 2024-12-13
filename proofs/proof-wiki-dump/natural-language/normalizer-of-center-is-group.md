# 

Source: https://proofwiki.org/wiki/Normalizer_of_Center_is_Group

Theorem
Let $G$ be a group.
Let $\map Z G$ be the center of $G$.
Let $x \in G$.
Let $\map {N_G} x$ be the normalizer of $x$ in $G$.

Then:

$\map Z G = \set {x \in G: \map {N_G} x = G}$

That is, the center of a group $G$ is the set of elements $x$ of $G$ such that the normalizer of $x$ is the whole of $G$.

Thus:

$x \in \map Z G \iff \map {N_G} x = G$
and so:

$\index G {\map {N_G} x} = 1$
where $\index G {\map {N_G} x}$ is the index of $\map {N_G} x$ in $G$.


Proof
$\map {N_G} x$ is the normalizer of the set $\set x$.
Thus:















\(\ds \map {N_G} x\)

\(=\)







\(\ds G\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall a \in G: \, \)



\(\ds \set x^a\)

\(=\)







\(\ds \set x\)





Definition of Normalizer








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall a \in G: \, \)



\(\ds a x a^{-1}\)

\(=\)







\(\ds x\)





Definition of Conjugate of Group Element








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall a \in G: \, \)



\(\ds a x\)

\(=\)







\(\ds x a\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map Z G\)





Definition of Center of Group



$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 50$




