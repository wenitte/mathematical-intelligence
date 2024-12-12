# 

Source: https://proofwiki.org/wiki/Frame_Homomorphism_of_Continuous_Mapping_is_Frame_Homomorphism


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T_1 = \struct{S_1, \tau_1}, T_2 = \struct{S_2, \tau_2}$ be topological spaces.
Let $f : T_1 \to T_2$ be a continuous mapping.

Let $\map \Omega {T_1} = \struct{\tau_1, \subseteq}$ and $\map \Omega {T_2} = \struct{\tau_2, \subseteq}$ denote the frames of $T_1$ and $T_2$ respectively.
Let $\map \Omega f : \map \Omega {T_2} \to \map \Omega {T_1}$ be the frame homomorphism of $f$

Then:

$\map \Omega f : \map \Omega {T_2} \to \map \Omega {T_1}$ is a frame homomorphism


Proof
Recall the definition of continuous mapping:

$f$ is continuous if and only if $U \in \tau_2 \implies f^{-1} \sqbrk U \in \tau_1$

By definition of frame homomorphism of $f$:

$\map \Omega f$ is the inverse image mapping restricted to $\tau_2 \times \tau_1$
By definition of inverse image mapping:

$\forall U \in \tau_2 : \map {\map \Omega f} U = f^{-1} \sqbrk U$

From Inverse Image Mapping is Mapping:

$\map \Omega f : \tau_2 \to \tau_1$ is a well-defined mapping.


$\map \Omega f$ Preserves All Suprema
Let $\TT \subseteq \tau_2$.
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$\bigcup \TT \in \tau_2$
$\bigcup \set{\map {\map \Omega f} U : U \in \TT} \in \tau_1$

We have














\(\ds \map {\map \Omega f} {\bigcup \TT}\)

\(=\)







\(\ds f^{-1} \sqbrk {\bigcup \TT}\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds \bigcup \set{f^{-1} \sqbrk U : U \in \TT}\)





Preimage of Union under Mapping














\(\ds \)

\(=\)







\(\ds \bigcup \set{\map {\map \Omega f} U : U \in \TT}\)





Definition of Frame Homomorphism of Continuous Mapping




Hence $\map \Omega f$ is arbitrary join preserving.
$\Box$


$\map \Omega f$ Preserves Finite Infima
Let $\FF \subseteq \tau_2$ be finite.
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$\bigcap \FF \in \tau_2$
$\bigcap \set{\map {\map \Omega f} U : U \in \FF} \in \tau_1$

We have














\(\ds \map {\map \Omega f} {\bigcap \FF}\)

\(=\)







\(\ds f^{-1} \sqbrk {\bigcap \FF}\)





Definition of Frame Homomorphism of Continuous Mapping














\(\ds \)

\(=\)







\(\ds \bigcap \set{f^{-1} \sqbrk U : U \in \FF}\)





Preimage of Intersection under Mapping














\(\ds \)

\(=\)







\(\ds \bigcap \set{\map {\map \Omega f} U : U \in \FF}\)





Definition of Frame Homomorphism of Continuous Mapping




Hence $\map \Omega f$ is finite meet preserving.
$\Box$

It follows that $\map \Omega f$ is a frame homomorphism by definition.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter II: Introduction to Locales, $\S1.1$
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 1.3$




