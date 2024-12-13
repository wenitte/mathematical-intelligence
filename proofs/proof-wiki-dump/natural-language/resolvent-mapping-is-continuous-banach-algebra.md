# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Continuous/Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$. 
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Let $x \in A$.
Let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$.
Define $R : \map {\rho_A} x \to A$ by:

$\map R \lambda = \paren {\lambda {\mathbf 1}_A - x}^{-1}$

Then $R$ is continuous. 


Proof
Lemma
Define $S : \C \to A$ by:

$\map S \lambda = \lambda {\mathbf 1}_A - x$

Then $S$ is continuous.
$\Box$

From the Lemma, we have:

the mapping $S : \C \to A$ defined by:
$\map S \lambda = \lambda {\mathbf 1}_A - x$
for each $\lambda \in \C$, is continuous.
From Restriction of Continuous Mapping is Continuous, $S \restriction_{\map {\rho_A} x}$ is continuous.
From the definition of the resolvent set, we have $S \sqbrk {\map {\rho_A} x} \subseteq \map G A$.
From Inverse Mapping on Group of Units in Unital Banach Algebra is Continuous, the mapping $\phi : \map G A \to \map G A$ defined by:

$\map \phi x = x^{-1}$ for each $x \in \map G A$
is continuous.
From Composite of Continuous Mappings is Continuous, $\phi \circ \paren {S \restriction_{\map {\rho_A} x} } : \map {\rho_A} x \to A$ is continuous.
Since $\phi \circ S = R$, we have that $R$ is continuous.
$\blacksquare$





