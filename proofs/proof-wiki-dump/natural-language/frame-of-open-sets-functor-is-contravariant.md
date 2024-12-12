# 

Source: https://proofwiki.org/wiki/Frame_of_Open_Sets_Functor_is_Contravariant


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Top}$ denote the category of topological spaces.
Let $\mathbf{Frm}$ denote the category of frames.

Then:

the open sets functor $\mathbf \Omega : \mathbf{Top} \to \mathbf{Frm}$ is a contravariant functor
Proof
Recall the open sets functor $\mathbf \Omega : \mathbf{Top} \to \mathbf{Frm}$ is defined by:










Object functor:   









$\map \Omega T := $ the frame of topological space $T$   

  








Morphism functor:   









$\map \Omega f := $ the frame homomorphism of continuous mapping $f$   

  



Object Functor is Well-Defined
From Frame of Topological Space is Frame:

given a topological space $T$:
$\map \Omega T$ is a frame.

Hence the object functor is well-defined.
$\Box$

Arrow Functor is Well-Defined
From Frame Homomorphism of Continuous Mapping is Frame Homomorphism:

given a continuous mapping $f : T_1 \to T_2$ between topological spaces $T_1$ and $T_2$:
$\map \Omega f : \map \Omega {T_2} \to \map \Omega {T_1}$ is a frame homomorphism.

Hence the arrow functor is well-defined.
$\Box$

Arrow Functor Preserves Composition
Let $T_1 = \struct{S_1, \tau_1}, T_2 = \struct{S_2, \tau_2}, T_3 = \struct{S_3, \tau_3}$ be topological spaces.
Let $f : T_1 \to T_2$ and $g : T_2 \to T_3$ be continuous mappings.

We have










\(\ds \forall U \in \tau_3: \, \)



\(\ds \map {\map \Omega {g \circ f} } U\)

\(=\)







\(\ds \paren{g \circ f}^{-1} \sqbrk U\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds f^{-1} \sqbrk {g^{-1} \sqbrk U}\)





Preimage of Subset under Composite Mapping














\(\ds \)

\(=\)







\(\ds f^{-1} \sqbrk {\map {\map \Omega g} U}\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds \map {\map \Omega f} {\map {\map \Omega g} U}\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren{ {\map \Omega f} \circ {\map \Omega g} } } U\)





Definition of Composite Mapping




It follows that:

$\forall f, g : \map \Omega {g \circ f} = {\map \Omega f} \circ {\map \Omega g}$
$\Box$

Arrow Functor Preserves Identities
Let $T = \struct{S, \tau}$ be a topological space.

By definition of frame of topological space:

$\map \Omega T = \struct{\tau, \subseteq}$

We have










\(\ds \forall U \in \tau: \, \)



\(\ds \map {\map \Omega {\operatorname{id}_T} } U\)

\(=\)







\(\ds \map {\map \Omega {\operatorname{id}_S} } U\)





Definition of Identity Mapping in Category of Topological Spaces $\mathbf {Top}$














\(\ds \)

\(=\)







\(\ds \operatorname{id}_S^{-1} \sqbrk U\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds U\)





Preimage of Subset under Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {\operatorname{id}_\tau} U\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map {\operatorname{id}_{\map \Omega T} } U\)





Definition of Identity Mapping in category of frames $\mathbf {Frm}$




It follows that:

$\forall T : \map \Omega {\operatorname{id}_T } = \operatorname{id}_{\map \Omega T}$
$\Box$

It follows that $\Omega$ is a contravariant functor by definition.
$\blacksquare$

Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 1.3$




