# 

Source: https://proofwiki.org/wiki/Residue_Field_of_P-adic_Norm_on_Rationals/Lemma_1

Theorem
Let $\norm {\, \cdot \,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\Z_{\paren p}$ be the induced valuation ring on $\struct {\Q, \norm {\, \cdot \,}_p}$.
Let $p \, \Z_{\paren p}$ be the induced valuation ideal on $\struct {\Q, \norm {\, \cdot \,}_p}$.
Let $\phi: \Z \to \Z_{\paren p} / p \, \Z_{\paren p}$ be the mapping defined by:

$\forall a \in \Z: \map \phi a = a + p \, \Z_{\paren p}$

Then:

$\phi$ is a homomorphism.


Proof
Since $p \nmid 1$ then for all $a \in \Z$, $a = \dfrac a 1 \in \Z_{\paren p}$.
Hence $\Z \subset \Z_{\paren p}$ is a subring of $\Z_{\paren p}$.

Let $i: \Z \to \Z_{\paren p}$ be the inclusion mapping defined by:

$\map i a = a$
By Inclusion Mapping is Monomorphism then $i$ is a ring monomorphism.

Let $q: \Z_{\paren p} \to \Z_{\paren p} / p \, \Z_{\paren p}$ be the quotient ring epimorphism from $\Z_{\paren p}$ to $\Z_{\paren p} / p \, \Z_{\paren p}$.
By Quotient Ring Epimorphism is Epimorphism, $q$ is a epimorphism.

By definition, $\phi = q \circ i$ is the composition of $i$ with $q$.
By Composition of Ring Homomorphisms is Ring Homomorphism, $\phi$ is a homomorphism.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.4$ Algebra, Proposition $2.4.3$




