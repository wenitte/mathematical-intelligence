# 

Source: https://proofwiki.org/wiki/Frame_of_Topological_Space_is_Frame


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $\map \Omega T$ denote the frame of topological space $T$.

Then:

$\map \Omega T$ is a frame


Proof
Recall that the frame of topological space $T$ is defined to be:

$\map \Omega T = \struct{\tau, \subseteq}$
where $\subseteq$ denotes the subset relation.

From Topology forms Complete Lattice:

$\map \Omega T$ is a complete lattice
Furthermore:

$\forall \TT \subseteq \tau : \sup \TT = \bigcup \TT, \inf \TT = \paren{\bigcap \TT}^\circ$
where $\paren{\bigcap \TT}^\circ$ denotes the interior of $\bigcap \TT$

From Interior of Open Set and Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$\forall U, V \in \tau : \paren{U \cap V}^\circ = U \cap V$
Hence:

$\forall U, V \in \tau : U \wedge V = U \cap V$

From Intersection Distributes over Union (General Result):

$\map \Omega T$ satisfies the infinite join distributive law

Hence $\map \Omega T$ is a frame by definition.
$\blacksquare$


Also see
Frame Homomorphism of Continuous Mapping is Frame Homomorphism
Sources
1982: Peter T. Johnstone: Stone Spaces: Chapter II: Introduction to Locales, $\S1.1$
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 1.3$




