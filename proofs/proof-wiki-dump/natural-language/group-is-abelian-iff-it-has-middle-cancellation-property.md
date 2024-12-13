# 

Source: https://proofwiki.org/wiki/Group_is_Abelian_iff_it_has_Middle_Cancellation_Property



Theorem
Let $G$ be a group.

Then the following are equivalent:

$(1): \quad G$ is abelian
$(2): \quad G$ satisfies the middle cancellation property


Proof
Let us suppress the operation of $G$ for brevity.


$(2) \implies (1)$
Suppose that $G$ satisfies the middle cancellation property.
Then, for all $g, h \in G$:














\(\ds e h\)

\(=\)







\(\ds h e\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds g g^{-1} h\)

\(=\)







\(\ds hg^{-1}g\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g h\)

\(=\)







\(\ds h g\)





Definition of Middle Cancellation Property



Thus $G$ is abelian.
$\Box$


$(1) \implies (2)$
Conversely, suppose $G$ is abelian.
Then, for all $a, b, c, d, x \in G$:














\(\ds a x b\)

\(=\)







\(\ds c x d\)














\(\ds \leadsto \ \ \)





\(\ds a b x\)

\(=\)







\(\ds c d x\)





Definition of Abelian Group








\(\ds \leadsto \ \ \)





\(\ds a b\)

\(=\)







\(\ds c d\)





Right Cancellation Law



Thus the middle cancellation property holds in $G$.
$\blacksquare$





