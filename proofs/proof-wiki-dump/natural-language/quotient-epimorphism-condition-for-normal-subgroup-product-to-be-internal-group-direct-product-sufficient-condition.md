# 

Source: https://proofwiki.org/wiki/Quotient_Epimorphism_Condition_for_Normal_Subgroup_Product_to_be_Internal_Group_Direct_Product/Sufficient_Condition

Theorem
Let $\struct {G, \odot}$ be a group
Let $\struct {H, \odot}$ and $\struct {K, \odot}$ be normal subgroups of $\struct {G, \odot}$.

Let $\struct {G, \odot}$ be the internal group direct product of $\struct {H, \odot}$ and $\struct {K, \odot}$.
Then:

the restriction of the quotient epimorphism $q_H$ to $K$ is an isomorphism from $K$ onto the quotient group $G / H$
and:

the restriction of the quotient epimorphism $q_K$ to $H$ is an isomorphism from $H$ onto the quotient group $G / K$.


Proof
Recall that the quotient epimorphism $q_H: G \to G / H$ is defined as:

$\forall x \in G: \map {q_H} x = x \odot H$

From Restriction of Homomorphism is Homomorphism:

the restriction of $q_H$ to $K$ is a homomorphism.

From Lagrange's Theorem (Group Theory):

$\card {G / H} = \card K$
Then we have:










\(\ds \forall a, b \in K: \, \)



\(\ds \map {q_H} a\)

\(=\)







\(\ds \map {q_H} b\)





by assumption








\(\ds \leadsto \ \ \)





\(\ds a \odot H\)

\(=\)







\(\ds b \odot H\)





Definition of Quotient Group Epimorphism








\(\ds \leadsto \ \ \)

\(\ds \exists h, h' \in H: \, \)



\(\ds a \odot \paren {a^{-1} \odot h \odot a}\)

\(=\)







\(\ds b \odot \paren {b^{-1} \odot h' \odot b}\)





as $H$ is a normal subgroup of $G$








\(\ds \leadsto \ \ \)





\(\ds h \odot a\)

\(=\)







\(\ds h' \odot b\)





where $h, h' \in H$ and $a, b \in K$



But by definition of internal group direct product, a representation of $g \in G$ in the form $h \odot k$ where $h \in H$ and $k \in K$ is unique.
That is:














\(\ds h\)

\(=\)







\(\ds h'\)




















\(\ds a\)

\(=\)







\(\ds b\)









Hence the restriction of $q_H$ to $K$ is an injection.

Hence by Injection to Equivalent Finite Set is Bijection, it follows that:

$q_H$ is a bijection.
A bijective homomorphism is an isomorphism by definition.
$\Box$

Similarly, the quotient epimorphism $q_K: G \to G / K$ is defined as:

$\forall x \in G: \map {q_K} x = x \odot K = K \odot x$
as $K$ is a normal subgroup of $G$

From Restriction of Homomorphism is Homomorphism:

the restriction of $q_K$ to $H$ is a homomorphism.

From Lagrange's Theorem (Group Theory):

$\card {G / K} = \card H$

Then we have:










\(\ds \forall a, b \in K: \, \)



\(\ds \map {q_K} a\)

\(=\)







\(\ds \map {q_K} b\)





by assumption








\(\ds \leadsto \ \ \)





\(\ds K \odot a\)

\(=\)







\(\ds K \odot b\)





Definition of Quotient Group Epimorphism








\(\ds \leadsto \ \ \)

\(\ds \exists k, k' \in K: \, \)



\(\ds \paren {a \odot k \odot a^{-1} } \odot a\)

\(=\)







\(\ds \paren {b \odot k' \odot b^{-1} } \odot b\)





as $K$ is a normal subgroup of $G$








\(\ds \leadsto \ \ \)





\(\ds a \odot k\)

\(=\)







\(\ds b \odot k'\)





where $a, b \in H$ and $k, k' \in K$



But by definition of internal group direct product, a representation of $g \in G$ in the form $h \odot k$ where $h \in H$ and $k \in K$ is unique.
That is:














\(\ds k\)

\(=\)







\(\ds k'\)




















\(\ds a\)

\(=\)







\(\ds b\)









Hence the restriction of $q_K$ to $H$ is an injection.

Hence by Injection to Equivalent Finite Set is Bijection, it follows that:

$q_K$ is a bijection.
A bijective homomorphism is an isomorphism by definition.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.9 \ \text{(a)}$




