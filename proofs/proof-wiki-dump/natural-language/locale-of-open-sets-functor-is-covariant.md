# 

Source: https://proofwiki.org/wiki/Locale_of_Open_Sets_Functor_is_Covariant



Theorem
Let $\mathbf{Top}$ denote the category of topological spaces.
Let $\mathbf{Loc}$ denote the category of locales.

Then:

the open sets functor $\mathbf \Omega : \mathbf{Top} \to \mathbf{Loc}$ is a covariant functor


Proof
Recall the open sets functor  $\mathbf \Omega : \mathbf{Top} \to \mathbf{Loc}$ is defined by:










Object functor:   









$\map \Omega T := $ the locale of topological space $T$   

  








Morphism functor:   









$\map \Omega f := $ the continuous map induced by continuous mapping $f$   

  



Object Functor is Well-Defined
From Locale of Topological Space is Locale:

given a topological space $T$:
$\map \Omega T$ is a locale.

Hence the object functor is well-defined.
$\Box$


Arrow Functor is Well-Defined
By definition of continuous map induced by continuous mapping:

$\map \Omega f = F^{\operatorname{op}}$
where $F : \map \Omega {T_2} \to \map \Omega {T_1}$ is the frame homomorphism of $f$

From Frame Homomorphism of Continuous Mapping is Frame Homomorphism:

the frame homomorphism of $f$ is a frame homomorphism.

Hence the arrow functor is well-defined.
$\Box$


Arrow Functor Preserves Composites
Let $T_1 = \struct{S_1, \tau_1}, T_2 = \struct{S_2, \tau_2}, T_3 = \struct{S_3, \tau_3}$ be topological spaces.
Let $f : T_1 \to T_2$ and $g : T_2 \to T_3$ be continuous mappings.

Let:

$\map \Omega f = F^{\operatorname{op}}$
where $F : \map \Omega {T_2} \to \map \Omega {T_1}$ is the frame homomorphism of $f$

Let:

$\map \Omega g = G^{\operatorname{op}}$
where $G : \map \Omega {T_3} \to \map \Omega {T_2}$ is the frame homomorphism of $g$

Let:

$\map \Omega {g \circ f} = H^{\operatorname{op}}$
where $H : \map \Omega {T_3} \to \map \Omega {T_1}$ is the frame homomorphism of $g \circ f$

From Frame of Open Sets Functor is Contravariant:

$H = F \circ G$

We have














\(\ds \map \Omega {g \circ f}\)

\(=\)







\(\ds H^{\operatorname{op} }\)





Definition of Continuous Map Induced by Continuous Mapping














\(\ds \)

\(=\)







\(\ds \paren{F \circ G}^{\operatorname{op} }\)





Composite Frame Homomorphism is Frame Homomorphism














\(\ds \)

\(=\)







\(\ds G^{\operatorname{op} } \circ F^{\operatorname{op} }\)





Definition of Dual Category














\(\ds \)

\(=\)







\(\ds \map \Omega g \circ \map \Omega f\)





Definition of Continuous Map Induced by Continuous Mapping




It follows that the arrow functor of $\Omega$ preserves composites. 
$\Box$


Arrow Functor Preserves Identities
Let $T = \struct {S, \tau}$ be a topological space.

Let:

$\map \Omega {\operatorname{id}_S} = F^{\operatorname{op}}$
where $I : \map \Omega T \to \map \Omega T$ is the frame homomorphism of $\operatorname{id}_S$

From Frame of Open Sets Functor is Contravariant:

$I = \operatorname{id}_{\map \Omega T}$

By definition of Definition of Dual Category:

$\paren{\operatorname{id}_{\map \Omega T}}^{\operatorname{op}} = \operatorname{id}_{\map \Omega T}$

Hence:

$\map \Omega {\operatorname{id}_S} = \operatorname{id}_{\map \Omega T}$
It follows that the arrow functor of $\Omega$ preserves identities. 
$\Box$

It follows that $\Omega$ is a covariant functor by definition.
$\blacksquare$


Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 1.3$




