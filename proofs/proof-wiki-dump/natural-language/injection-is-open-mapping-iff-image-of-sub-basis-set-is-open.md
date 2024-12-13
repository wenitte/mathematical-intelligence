# 

Source: https://proofwiki.org/wiki/Injection_is_Open_Mapping_iff_Image_of_Sub-Basis_Set_is_Open



Theorem
Let $\struct {X_1, \tau_1}$ and $\struct {X_2, \tau_2}$ be topological spaces.

Let $\SS \subseteq \powerset {X_1}$ be a sub-basis of $\tau_1$.

Let $f: X_1 \to X_2$ be an injection. 

Then:

$f$ is an open mapping
if and only if:

$\forall U \in \SS: f \sqbrk U \in \tau_2$


Proof
Necessary Condition
Let $f$ be an open mapping.
By definition of open mapping:

$\forall U \in \tau_1 : f \sqbrk U \in \tau_2$
By definition of sub-basis:

$\SS \subseteq \tau_1$
Hence:

$\forall U \in \SS: f \sqbrk U \in \tau_2$
$\Box$


Sufficient Condition
Let $f$ satisfy:

$\forall U \in \SS: f \sqbrk U \in \tau_2$

Let $\ds \BB = \set {\bigcap \FF: \FF \subseteq \SS, \FF \text{ is finite} }$

Let $B \in \BB$.
By definition of $\BB$:

$\ds \exists \FF \subseteq \SS, \FF \text{ is finite} : B = \bigcap \FF$
From Image of Intersection under Injection:














\(\ds f \sqbrk B\)

\(=\)







\(\ds f \sqbrk {\bigcap \set {S : S \in \FF} }\)




















\(\ds \)

\(=\)







\(\ds \bigcap \set {f \sqbrk S : S \in \FF}\)









By assumption:

$\forall S \in \FF : f \sqbrk S \in \tau_2$
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$f \sqbrk B \in \tau_2$
Hence we have shown that:




\(\text {(1)}: \quad\)





\(\ds \forall B \in \BB: \, \)



\(\ds f \sqbrk B\)

\(\in\)







\(\ds \tau_2\)










Let $W \in \tau_1$.
By definition of sub-basis:

$\exists \AA \subseteq \BB : W = \bigcup \AA$
We have:














\(\ds f \sqbrk W\)

\(=\)







\(\ds f \sqbrk {\bigcup \set{B : B \in \AA} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup \set{f \sqbrk B : B \in \AA}\)





From Image of Union under Mapping



From $(1)$ above:

$\forall B \in \AA : f \sqbrk B \in \tau_2$
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$f \sqbrk W \in \tau_2$
Hence we have shown that:

$\forall W \in \tau_1 : f \sqbrk W \in \tau_2$

Hence by definition, $f$ is an open mapping 
$\blacksquare$





