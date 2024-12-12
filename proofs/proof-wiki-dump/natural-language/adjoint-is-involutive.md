# 

Source: https://proofwiki.org/wiki/Adjoint_is_Involutive

Theorem
Let $\mathbb F \in \set {\R, \C}$.
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot}$ be Hilbert spaces over $\mathbb F$.
Let $A : \HH \to \KK$ be a bounded linear transformation. 

Define:

$A^{\ast \ast} = \paren {A^\ast}^\ast$
where $A^*$ denotes the adjoint of $A$. 

Then $\ast$ is an involutive operation in the sense that:

$A^{\ast \ast} = A$


Proof
Let $x \in \HH$ and $y \in \KK$. 
By the definition of the adjoint, we have: 

$\innerprod {A y} x_\HH = \innerprod y {A^\ast x}_\KK$
Taking complex conjugates, we have: 

$\overline {\innerprod {A y} x_\HH} = \overline {\innerprod y {A^\ast x}_\KK}$
Using the conjugate symmetry of the inner product, we have: 

$\innerprod x {A y}_\HH = \innerprod {A^\ast x} y_\KK$
So by the definition of the adjoint:

$\innerprod x {A y}_\HH = \innerprod x {\paren {A^\ast}^\ast y}_\KK$
From the uniqueness of the adjoint, we obtain: 

$\paren {A^\ast}^\ast = A$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.6 \ \text {(c)}$




