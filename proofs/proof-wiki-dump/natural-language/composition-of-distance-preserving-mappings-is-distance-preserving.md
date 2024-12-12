# 

Source: https://proofwiki.org/wiki/Composition_of_Distance-Preserving_Mappings_is_Distance-Preserving


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let:

$\struct {X_1, d_1}$
$\struct {X_2, d_2}$
$\struct {X_3, d_3}$
be metric spaces.
Let:

$\phi: \struct {X_1, d_1} \to \struct {X_2, d_2}$
$\psi: \struct {X_2, d_2} \to \struct {X_3, d_3}$
be distance-preserving mappings.

Then the composite of $\phi$ and $\psi$ is also a distance-preserving mapping.


Proof
Let $x,y \in X_1$.
Then:














\(\ds \map {d_1} {x,y}\)

\(=\)







\(\ds \map {d_2} {\map \phi x, \map \phi y}\)





$\phi$ is a distance-preserving mapping














\(\ds \)

\(=\)







\(\ds \map {d_3} {\map \psi {\map \phi x}, \map \psi {\map \phi y} }\)





$\psi$ is a distance-preserving mapping














\(\ds \)

\(=\)







\(\ds \map {d_3} {\map {\psi \circ \phi} x, \map {\psi \circ \phi} y}\)





Definition of Composition of Mappings



By definition of a distance-preserving mapping, $\psi \circ \phi$ is distance-preserving.
$\blacksquare$





