# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic/Lemma_1

Theorem
Let $\struct {R, \norm {\, \cdot \,} }, \struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be normed division rings.
Let $\phi_1: R \to S_1, \phi_2: R \to S_2$ be distance-preserving ring monomorphisms.
Let $\psi' = \phi_2 \circ \phi_1^{-1}:\phi_1 \paren R \to \phi_2 \paren R$ be the composition of $\phi_1^{-1}$ with $\phi_2$. 
Then $\psi': \struct {\map {\phi_1} R, \norm {\, \cdot \,}_1 } \to \struct {\map {\phi_2} R, \norm {\, \cdot \,}_2 }$ is an isometric ring isomorphism.


Proof
By Monomorphism Image is Isomorphic to Domain, $\phi_1:R \to \map {\phi_1} R$ and $\phi_2:R \to \map {\phi_2} R$ are ring isomorphisms.
By Distance-Preserving Image Isometric to Domain for Metric Spaces, $\phi_1:R \to \map {\phi_1} R$ and $\phi_2:R \to \map {\phi_2} R$ are isometries.
By Inverse of Algebraic Structure Isomorphism is Isomorphism, $\phi_1^{-1}:\map {\phi_1} R \to R$ is a ring isomorphism.
By Inverse of Isometry of Metric Spaces is Isometry, $\phi_1^{-1}:\map {\phi_1} R \to R$ is a ring isomorphism is an isometry.
By Composition of Ring Isomorphisms is Ring Isomorphism, $\psi'$ is a ring isomorphism.
By Composition of Isometries is Isometry, $\psi'$ is an isometry.
$\blacksquare$





