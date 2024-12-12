# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Normed_Vector_Space)



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.

Then there exists a Banach space $\struct {\widetilde X, \widetilde {\norm {\, \cdot \,} } }$ and a linear isometry $\phi : X \to \widetilde X$ such that $\phi \sqbrk X$ is dense in $\widetilde X$.
Further, the Banach space $\struct {\widetilde X, \widetilde {\norm {\, \cdot \,} } }$ is unique up to isometric isomorphism.


Proof
Proof of Existence
Let $\struct {X^{\ast \ast}, \norm {\, \cdot \,}_{X^{\ast \ast} } }$ be the second normed dual of $\struct {X, \norm {\, \cdot \,} }$.
From Normed Dual Space is Banach Space, $\struct {X^{\ast \ast}, \norm {\, \cdot \,}_{X^{\ast \ast} } }$ is a Banach space. 
Let $\phi : X \to X^{\ast \ast}$ be the evaluation transformation.
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, $\phi$ is a linear isometry. 
Let $\widetilde X = \map \cl {\phi \sqbrk X}$ where $\cl$ denotes the closure in $\struct {X^{\ast \ast}, \norm {\, \cdot \,}_{X^{\ast \ast} } }$.
Let $\widetilde {\norm {\, \cdot \,} }$ be the restriction of $\norm {\, \cdot \,}_{X^{\ast \ast} }$ to $\map \cl {\phi \sqbrk X}$.
From Subspace of Complete Metric Space is Closed iff Complete, $\struct {\widetilde X, \widetilde {\norm {\, \cdot \,} } }$ is a Banach space.
Further, $\phi \sqbrk X$ is dense in $\map \cl {\phi \sqbrk X}$.
So $\struct {\widetilde X, \widetilde {\norm {\, \cdot \,} } }$ satisfies the conditions of the theorem.
$\blacksquare$

Proof of Uniqueness
Let:

$\struct {X_1, \norm {\, \cdot \,}_1}$ and $\struct {X_2, \norm {\, \cdot \,}_2}$ be Banach spaces
$\phi_1 : X \to X_1$, $\phi_2 : X \to X_2$ be linear isometries
such that $\phi_1 \sqbrk X$ and $\phi_2 \sqbrk X$ are everywhere dense in $X_1$ and $X_2$ respectively.
In particular, $\phi_1 : X \to \phi_1 \sqbrk X$ and $\phi_2 : X \to \phi_2 \sqbrk X$ are isometric isomorphisms. 
From Inverse of Linear Isometry is Linear Isometry, $\phi_1^{-1} : \phi_1 \sqbrk X \to X$ is an isometric isomorphism.
From Composition of Linear Isometries is Linear Isometry and Composite of Bijections is Bijection, $\phi_2 \circ \phi_1^{-1} : \phi_1 \sqbrk X \to \phi_2 \sqbrk X$ is an isometric isomorphism.
Since $\phi_1 \sqbrk X$ is dense in $X_1$ and $\struct {X_2, \norm {\, \cdot \,}_2}$ is a Banach space, we obtain:

there exists a unique bounded linear transformation $\psi : X_1 \to X_2$ extending $\phi_2 \circ \phi_1^{-1}$
from Uniformly Continuous Function to Complete Metric Space has Unique Continuous Extension to Closure of Domain.
As shown in Completion Theorem (Metric Space): Lemma $4$, $\psi$ is an isometric isomorphism.
Hence the completion is unique up to isometric isomorphism.
$\blacksquare$





