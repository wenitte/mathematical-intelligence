# 

Source: https://proofwiki.org/wiki/Canonical_Bijection_from_Completely_Prime_Filters_to_Frame_Homomorphisms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a locale.

Let $\map {\operatorname{Sp}} L = \struct{\map {\operatorname{pt}} L, \set{\Sigma_a : a \in L}}$ be the spectrum of $L$ as completely prime filters where:

$\quad\map {\operatorname{pt}} L$ denotes the set of points as completely prime filters of $L$.
$\quad$for each $a \in L$, $\Sigma_a = \set{p \in \map {\operatorname{pt}} L : a \in p}$

Let $\Sigma_L = \set{\Sigma_a : a \in L}$

Let $\map {\operatorname{Sp}'} L = \struct{\map {\operatorname{pt}'} L, \set{\Sigma'_a : a \in L}}$ be the spectrum of $L$ as frame homomorphisms where:

$\quad\map {\operatorname{pt}'} L$ denotes the set of points as frame homomorphisms of $L$.
$\quad$for each $a \in L$, $\Sigma'_a = \set{\phi \in \map {\operatorname{pt}'} L : \map \phi a = \top}$

Let $\Sigma'_L = \set{\Sigma'_a : a \in L}$

Let $f : \map {\operatorname{pt}} L \to \map {\operatorname{pt}'} L$ be the mapping defined by:

$\forall p \in \map {\operatorname{pt}} L : \map f p$ is the frame homomorphim defined by:
$\forall a \in L : \map {\map f p} a = \begin{cases}
\top & : a \in p\\
\bot & : a \notin p 
\end{cases}$

Then:

$f$ is a bijection
$f^\to \restriction_{\Sigma_L}$ is a surjection from $\Sigma_L$ to $\Sigma'_L$


Proof
$f$ is a Bijection
From Frame Homomorphism Onto Two Induced by Completely Prime Filter:

$f$ is a well-defined mapping

Let $g : \map {\operatorname{pt}'} L \to \map {\operatorname{pt}} L$ be the mapping defined by:

$\forall \phi \in \map {\operatorname{pt}'} L : \map g \phi = \map {\phi^{-1}} \top$
where:

$\map {\phi^{-1}} \top$ denotes the preimage of $\top \in \mathbf 2$ under the mapping $\phi$
From Completely Prime Filter Induced by Frame Homomorphism Onto Two:

$g$ is a well-defined mapping

From Completely Prime Filter Induced by Frame Homomorphism Induced by Completely Prime Filter:

$g \circ f = \operatorname {id}_{\map {\operatorname{pt}} L}$
where $\operatorname {id}_{\map {\operatorname{pt}} L}$ is the identity mapping on $\map {\operatorname{pt}} L$

From Frame Homomorphism Induced by Completely Prime Filter Induced by Frame Homomorphism:

$f \circ g = \operatorname {id}_{\map {\operatorname{pt}'} L}$
where $\operatorname {id}_{\map {\operatorname{pt}} L}$ is the identity mapping on $\map {\operatorname{pt}'} L$

Hence $f$ is a bijection by definition.
$\Box$


$f^\to \restriction_{\Sigma_L}$ is a Surjection
We have:










\(\ds \forall a \in L: \, \)



\(\ds \map {f^\to} {\Sigma_a}\)

\(=\)







\(\ds \set{\map f p : p \in \Sigma_a}\)





Definition of Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \set{\map f p : a \in p}\)





Definition of $\Sigma_a$














\(\ds \)

\(=\)







\(\ds \set{\map f p : \map {\map f p} a = \top}\)





Definition of $\map f p$














\(\ds \)

\(=\)







\(\ds \set{\phi \in  \map {\operatorname{pt}'} L : \map \phi a = \top}\)





as $f : \map {\operatorname{pt} } L \to \map {\operatorname{pt}'} L$ is a bijection














\(\ds \)

\(=\)







\(\ds \Sigma'_a\)





Definition of $\Sigma'_a$




It follows that $f^\to \restriction_{\Sigma_L}$ is a surjection onto $\Sigma'_L$ by definition.
$\Box$

The result follows.
$\blacksquare$





