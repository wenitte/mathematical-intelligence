# 

Source: https://proofwiki.org/wiki/Linear_Transformation_is_Isomorphism_iff_Inverse_Equals_Adjoint



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces.
Let $U : \HH \to \KK$ be a bounded linear transformation.

Then the following are equivalent:

$(1): \quad U$ is an isomorphism
$(2): \quad U$ is invertible and $U^{-1} = U^*$, where $U^*$ denotes the adjoint of $U$.


Proof
$(1)$ implies $(2)$
Suppose that:

$U$ is an isomorphism.
That is:

$\innerprod {U g} {U h}_\KK = \innerprod g h_\HH$
for each $g, h \in \HH$.

Let $g, h \in \HH$.
From the definition of the adjoint, we have: 

$\innerprod g h_\HH = \innerprod g {U^* U h}_\KK$
So, from Inner Product is Sesquilinear, we have: 

$\innerprod g {h - U^* U h}_\HH = 0$
Setting $g = h - U^* U h$, we have: 

$\innerprod {h - U^* U h} {h - U^* U h}_\HH = 0$
So from the positiveness of the inner product, we have: 

$h - U^* U h = 0$
so:

$h = U^* U h$
for all $h \in \HH$.
So: 

$U^* U = I_\HH$
where $I_\HH$ is the identity map on $\HH$. 

From Hilbert Space Isomorphism is Bijection, we have that: 

$U$ is a bijection.
So: 

$U$ is invertible.
Let $U^{-1} : \KK \to \HH$ be the inverse of $U$. 
Then, we have: 














\(\ds U^{-1}\)

\(=\)







\(\ds I_\HH U^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {U^* U} U^{-1}\)




















\(\ds \)

\(=\)







\(\ds U^* \paren {U U^{-1} }\)




















\(\ds \)

\(=\)







\(\ds U^*\)









So:

$U$ is invertible with $U^{-1} = U^*$.
$\Box$


$(2)$ implies $(1)$
Suppose that: 

$U$ is invertible with $U^{-1} = U^*$.
By the definition of an isomorphism, we aim to show that: 

$\innerprod {U g} {U h}_\KK = \innerprod g h_\HH$
for each $g, h \in \HH$. 
Let $g, h \in \HH$. 
Then, we have: 














\(\ds \innerprod {U g} {U h}_\KK\)

\(=\)







\(\ds \innerprod g {U^* \paren {U h} }_\HH\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod g {U^{-1} \paren {U h} }_\HH\)





since $U^* = U^{-1}$














\(\ds \)

\(=\)







\(\ds \innerprod g {\paren {U^{-1} U} h}_\HH\)




















\(\ds \)

\(=\)







\(\ds \innerprod g h_\HH\)









So:

$U$ is an isomorphism.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.5$




