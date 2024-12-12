# 

Source: https://proofwiki.org/wiki/Canonical_Mapping_of_Locale_to_Powerset_of_Points_is_Frame_Homomorphism


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \preceq}$ be a locale.

Let $\map {\operatorname{pt}} L$ denote the points of $L$ as completely prime filters.

For each $a \in L$, let:

$\Sigma_a = \set{p \in \map {\operatorname{pt}} L : a \in p}$

Let $\Sigma : L \to \powerset {\map {\operatorname{pt}} L}$ be the mapping defined by:

$\forall a \in L : \map \Sigma a = \Sigma_a$
where $\powerset {\map {\operatorname{pt}} L}$ denotes  the powerset of $\map {\operatorname{pt}} L$.

Then:

$\Sigma: \struct{L, \preceq} \to \struct{\powerset {\map {\operatorname{pt}} L}, \subseteq}$ is a frame homomorphism.


Proof
$\Sigma$ Preserves Arbitrary Supremums
Let $\set{a_i : i \in I}$ be an indexed family of elements of $L$.

Let $\ds \bigvee_{i \in I} a_i$ denote the supremum of $\set{a_i : i \in I}$.

We have:










\(\ds \forall p \in \map {\operatorname{pt} } L: \, \)



\(\ds p\)

\(\in\)







\(\ds \map \Sigma {\bigvee_{i \in I} a_i}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bigvee_{i \in I} a_i\)

\(\in\)







\(\ds p\)





Definition of $\map \Sigma {\bigvee_{i \in I} a_i}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : a_i\)

\(\in\)







\(\ds p\)





Characterization of Completely Prime Filter in Complete Lattice








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : p\)

\(\in\)







\(\ds \map \Sigma {a_i}\)





Definition of $\Sigma$








\(\ds \leadstoandfrom \ \ \)





\(\ds p\)

\(\in\)







\(\ds \bigcup_{i \in I} \map \Sigma {a_i}\)





Definition of Set Union




By definition of set Equlity:

$\ds \map \Sigma {\bigvee_{i \in I} a_i} = \bigcup_{i \in I} \map \Sigma {a_i}$
It follows that $\Sigma$ is arbitrary join preserving by definition. 
$\Box$


$\Sigma$ Preserves Finite Infimums
Let $\set{a_i : i \in I}$ be an indexed family of elements of $L$ where the indexing set $I$ finite.

Let $\ds \bigwedge_{i \in I} a_i$ denote the infimum of $\set{a_i : i \in I}$.

We have:










\(\ds \forall p \in \map {\operatorname{pt} } L: \, \)



\(\ds p\)

\(\in\)







\(\ds \map \Sigma {\bigwedge_{i \in I} a_i}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bigwedge_{i \in I} a_i\)

\(\in\)







\(\ds p\)





Definition of $\map \Sigma {\bigwedge_{i \in I} a_i}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in I : a_i\)

\(\in\)







\(\ds p\)





Characterization of Completely Prime Filter in Complete Lattice








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in I : p\)

\(\in\)







\(\ds \map \Sigma {a_i}\)





Definition of $\Sigma$








\(\ds \leadstoandfrom \ \ \)





\(\ds p\)

\(\in\)







\(\ds \bigcap_{i \in I} \map \Sigma {a_i}\)





Definition of Set Intersection




By definition of set Equlity:

$\ds \map \Sigma {\bigwedge_{i \in I} a_i} = \bigcap_{i \in I} \map \Sigma {a_i}$
It follows that $\Sigma$ is finite meet preserving by definition. 
$\Box$

It has been shown that $\Sigma$ is both arbitrary join preserving and finite meet preserving and so is a frame homomorphism by definition.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter $\text {II}$: Introduction to locales, $\S 1$ Frames and locales, Lemma $1.3$




