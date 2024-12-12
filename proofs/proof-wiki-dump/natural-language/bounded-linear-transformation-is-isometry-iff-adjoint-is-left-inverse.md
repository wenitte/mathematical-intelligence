# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Transformation_is_Isometry_iff_Adjoint_is_Left-Inverse

Theorem
Let $\HH, \KK$ be Hilbert spaces.
Let $A \in \map B{\HH, \KK}$ be a bounded linear transformation.

Then $A$ is an isometry if and only if:

$A^*A = I_\HH$
where $A^*$ denotes the adjoint of $A$, and $I_\HH$ the identity operator on $\HH$.


Proof
Let $g, h \in \HH$. Then by the definition of adjoint:

${\innerprod {A g} {A h} }_\KK = {\innerprod {A^* A g} h}_\HH$

From the uniqueness of the adjoint, it follows that:

${\innerprod {A g} {A h} }_\KK = {\innerprod g h}_\HH$
holds if and only if $A^*A = I_\HH$.

Hence the result by definition of isometry.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.17$




