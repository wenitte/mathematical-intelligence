# 

Source: https://proofwiki.org/wiki/Limit_Inferior_of_Restriction_Net_is_Supremum_of_Image_of_Directed_Subset

Theorem
Let $L = \struct {S, \vee_1, \wedge_1, \preceq_1}$ and $\struct {T, \vee_2, \wedge_2, \preceq_2}$ be up-complete lattices.
Let $f: S \to T$ be an increasing mapping.
Let $D \subseteq S$ be a directed subset of $S$.
Let $\struct {D, \preceq'}$ be a directed ordered subset of $L$.
Let $f \restriction D: D \to T$, the restriction of mapping, be a net in $T$.

Then $\map \liminf {f \restriction D} = \map \sup {f \sqbrk D}$


Proof
We will prove that

(lemma): $\forall j \in D: \map {\inf_L} {\paren {f \restriction D} \sqbrk {\map {\preceq'} j} } = \map f j$
Let $j \in D$.
By definitions of image of element and upper closure of element:

$\map {\preceq'} j = j^{\succeq'}$
By Upper Closure in Ordered Subset is Intersection of Subset and Upper Closure:

$j^{\succeq'} = D \cap j^{\succeq_1}$
By Intersection is Subset:

$j^{\succeq'} \subseteq j^{\succeq_1}$
By Image of Subset under Mapping is Subset of Image:

$\paren {f \restriction D} \sqbrk {j^{\succeq'} } \subseteq \paren {f \restriction D} \sqbrk {j^{\succeq_1} }$
By Infimum of Subset and Infimum of Image of Upper Closure of Element under Increasing Mapping:

$\map f j \preceq_2 \map {\inf_L} {\paren {f \restriction D} \sqbrk {\map {\preceq'} j} }$
By definition of reflexivity:

$j \preceq' j$
By definition of image of element:

$j \in \map {\preceq'} j$
By definition of image of set:

$\map f j \in \paren {f \restriction D} \sqbrk {\map {\preceq'} j}$
By definitions of infimum and lower bound:

$\map {\inf_L} {\paren {f \restriction D} \sqbrk {\map {\preceq'} j} } \preceq_2 \map f j$
Thus by definition of antisymmetry:

$\map {\inf_L} {\paren {f \restriction D} \sqbrk {\map {\preceq'} j} } = \map f j$
$\Box$

Thus














\(\ds \map \liminf {f \restriction D}\)

\(=\)







\(\ds \sup \set {\map \inf {\paren {f \restriction D} \sqbrk {\map {\preceq'} j} }: j \in D}\)





Definition of Limit Inferior of Net














\(\ds \)

\(=\)







\(\ds \sup \set {\map f j: j \in D}\)





(lemma)














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk D}\)





Definition of Image of Subset under Mapping



$\blacksquare$


Sources
Mizar article WAYBEL17:10




