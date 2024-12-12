# 

Source: https://proofwiki.org/wiki/Adjoining_Commutes_with_Inverting

Theorem
Let $\HH$ and $\KK$ be Hilbert spaces.
Let $\map \BB {\HH, \KK}$ be the set of bounded linear transformations from $\HH$ to $\KK$.
Let $A \in \map \BB {\HH, \KK}$ be a bounded linear transformation on $\HH$.

Let $A^{-1} \in \map \BB {\KK, \HH}$ be an inverse for $A$.
Let $A^*$ denote the adjoint of $A$.

Then $A^*$, is invertible, and:

$\paren {A^*}^{-1} = \paren {A^{-1} }^*$


Proof
By definition of inverse, one has $A A^{-1} = I_\KK$, where $I_\KK$ is the identity operator on $\KK$.
From Adjoint of Composition of Linear Transformations is Composition of Adjoints and Adjoint of Identity Transformation:

$I_\KK = {I_\KK}^* = \paren {A A^{-1} }^* = \paren {A^{-1} }^*A^*$
Similarly:

$I_\HH = {I_\HH}^* = \paren {A^{-1} A}^* = A^* \paren {A^{-1} }^*$

Hence, by definition of inverse:

$\paren {A^*}^{-1} = \paren {A^{-1} }^*$
Hence, by definition, $A^*$ is invertible.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.6 \ \text {(d)}$




