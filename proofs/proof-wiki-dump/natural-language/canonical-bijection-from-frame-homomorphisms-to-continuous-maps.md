# 

Source: https://proofwiki.org/wiki/Canonical_Bijection_from_Frame_Homomorphisms_to_Continuous_Maps


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a locale.

Let $\map {\operatorname{Sp}} L = \struct{\map {\operatorname{pt}} L, \set{\Sigma_a : a \in L}}$ be the spectrum of $L$ as frame homomorphisms where:

$\quad\map {\operatorname{pt}} L$ denotes the set of points as frame homomorphisms of $L$.
$\quad$for each $a \in L$, $\Sigma_a = \set{\phi \in \map {\operatorname{pt}} L : \map \phi a = \top}$

Let $\Sigma_L = \set{\Sigma_a : a \in L}$

Let $\map {\operatorname{Sp}'} L = \struct{\map {\operatorname{pt}'} L, \set{\Sigma'_a : a \in L}}$ be the spectrum of $L$ as continuous maps where:

$\quad\map {\operatorname{pt}'} L$ denotes the set of points as continuous maps of $L$.
$\quad$for each $a \in L$, $\Sigma'_a = \set{g \in \map {\operatorname{pt}} L : \map {\loweradjoint g} a = \top}$ where:
$\loweradjoint g : L \to 2$ is the frame homomorphism such that $\tuple{g,\loweradjoint g}$ is a Galois connection

Let $\Sigma'_L = \set{\Sigma'_a : a \in L}$

Let $f : \map {\operatorname{pt}} L \to \map {\operatorname{pt}'} L$ be the mapping defined by:

$\forall \phi \in \map {\operatorname{pt}} L : \map f \phi = \upperadjoint \phi$
where $\tuple{\upperadjoint \phi, \phi}$ is a Galois connection

Then:

$f$ is a bijection
$f^\to \restriction_{\Sigma_L}$ is a surjection from $\Sigma_L$ to $\Sigma'_L$


Proof
$f$ is a Bijection
From Frame Homomorphism is Lower Adjoint of Galois Connection and Galois Connection is Unique for Given Lower Adjoint:

$\forall \phi \in \map {\operatorname{pt}} L: \exists !$ Galois connection $\tuple{\upperadjoint \phi, \phi}$
By definiton of continuous map:

$\forall \phi \in \map {\operatorname{pt}} L: \exists !$ continuous map $\upperadjoint \phi : \tuple{\upperadjoint \phi, \phi}$ is a Galois connection
Hence $f$ is a well-defined mapping.

From Galois Connection is Unique for Given Lower Adjoint:

$f$ is an injection

By definition of continuous map:

$f$ is a surjection

Hence $f$ is a bijection by definition.
$\Box$


$f^\to \restriction_{\Sigma_L}$ is a Surjection
We have:










\(\ds \forall a \in L: \, \)



\(\ds \map {f^\to} {\Sigma_a}\)

\(=\)







\(\ds \set{\map f \phi : \phi \in \Sigma_a}\)





Definition of Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \set{\map f \phi : \map \phi a = \top}\)





Definition of $\Sigma_a$














\(\ds \)

\(=\)







\(\ds \set{g \in  \map {\operatorname{pt}'} L : \loweradjoint g \in \map {\operatorname{pt} } L : \map {\loweradjoint g} a = \top}\)





as $f : \map {\operatorname{pt} } L \to \map {\operatorname{pt}'} L$ is a bijection














\(\ds \)

\(=\)







\(\ds \Sigma'_a\)





Definition of $\Sigma'_a$



It follows that $f^\to \restriction_{\Sigma_L}$ is a surjection onto $\Sigma'_L$ by definition.
$\Box$

The result follows.
$\blacksquare$





