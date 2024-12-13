# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Countable_Union/Resolution_of_the_Identity


It has been suggested that this page be renamed.In particular: Null Sets Closed under Countable Union/Resolution of the IdentityTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $\set {A_j : j \in \N} \subseteq \map \BB X$ such that:

$\map \EE {A_j} = 0$ for each $j \in \N$.
Let:

$\ds A = \bigcup_{j \mathop = 1}^\infty A_j$

Then $\map \EE A = 0$.


Proof
Let $x \in \HH$. 
Define $\EE_{x, x} : \map \BB X \to \C$ by:

$\map {\EE_{x, x} } A = \innerprod {\map \EE A x} x$
for each $A \in \map \BB X$.
Since $\map \EE {A_j} = 0$ for each $j \in \N$, we have $\map {\EE_{x, x} } {A_j} = 0$ for each $j \in \N$. 
Since $\EE_{x, x}$ is a complex measure, we have:

$\map {\EE_{x, x} } A = 0$
from countable additivity.
From Scalar-Valued Measure associated with Resolution of Identity is Positive Measure if Equal Vectors, we have:

$\map {\EE_{x, x} } A = \norm {\map \EE A x}^2 = 0$
From Norm Axiom $\text N 1$: Positive Definiteness, we have $\map \EE A x = 0$.
Further, $x \in \HH$ is arbitrary so we have $\map \EE A = 0$. 
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $12.19$: Proposition




