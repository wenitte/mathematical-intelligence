# 

Source: https://proofwiki.org/wiki/Operator_Norm_of_Quotient_Mapping_in_Quotient_Normed_Vector_Space_is_1

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a normed vector space over $\Bbb F$.
Let $N$ be a closed linear subspace of $X$. 
Let $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ be the normed quotient vector space associated with quotient vector space $X/N$.
Let $\pi : X \to X/N$ be the quotient mapping associated with $X/N$. 

Then:

$\norm \pi_{\map B {X, X/N} } = 1$
where $\norm {\, \cdot \,}_{\map B {X, X/N} }$ denotes the norm on the space of bounded linear transformations.


Proof
Let $B_X$ be the unit open ball in $\struct {X, \norm {\, \cdot \,} }$.
Let $B_{X/N}$ be the unit open ball in $\struct {X/N, \norm {\, \cdot \,} }$.
From Quotient Mapping is Bounded in Normed Quotient Vector Space, $\pi$ is bounded.
We have: 














\(\ds \norm \pi_{\map B {X, X/N} }\)

\(=\)







\(\ds \sup_{x \in B_X} \norm {\map \pi x}_{X/N}\)




















\(\ds \)

\(=\)







\(\ds \sup_{q \in \map \pi {B_X} } \norm q_{X/N}\)




















\(\ds \)

\(=\)







\(\ds \sup_{q \in B_{X/N} } \norm q_{X/N}\)





Quotient Mapping Maps Unit Open Ball in Normed Vector Space to Unit Open Ball in Normed Quotient Vector Space














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





