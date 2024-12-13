# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Frame_Homomorphism_Preserves_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L_1 = \struct{S_1, \preceq_1}$ and $L_2 = \struct{S_2, \preceq_2}$ be frames.

Let $\phi : L_1 \to L_2$ be a frame homomorphism.
Let $\phi^\gets$ denote the inverse image mapping of $\phi$.

Let $F$ be a completely prime filter of $L_2$.

Then:

$\map {\phi^\gets} F$ is a completely prime filter of $L_1$


Proof
From Characterization of Completely Prime Filter in Complete Lattice it is sufficient to show:

$(1)\quad\forall A \subseteq L : \bigvee A \in \map {\phi^\gets} F \iff \paren{\exists a \in A : a \in \map {\phi^\gets} F}$
$(2)\quad\forall $ finite $A \subseteq L : \bigwedge A \in \map {\phi^\gets} F \iff \paren{\forall a \in A : a \in \map {\phi^\gets} F}$


$\map {\phi^\gets} F$ satisfies Statement $(1)$
Let $\set{a_i : i \in I}$ be an indexed subset of elements of $L$.
We have:














\(\ds \bigvee_{i \in I} a_i\)

\(\in\)







\(\ds \map {\phi^\gets } F\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi {\bigvee_{i \in I} a_i}\)

\(\in\)







\(\ds F\)





Definition of Preimage of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \bigvee_{i \in I} \map \phi {a_i}\)

\(\in\)







\(\ds F\)





Definition of Frame Homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : \map \phi {a_i}\)

\(\in\)







\(\ds F\)





Characterization of Completely Prime Filter in Complete Lattice applied to $F$








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : a_i\)

\(\in\)







\(\ds \map {\phi^\gets } F\)





Definition of Preimage of Mapping




It follows that $\map {\phi^\gets} F$ satisfies statement $(1)$.
$\Box$


$\map {\phi^\gets} F$ satisfies Statement $(2)$
Let $\set{a_i : i \in J}$ be a finite indexed subset of elements of $L$.
We have:














\(\ds \bigwedge_{i \in J} a_i\)

\(\in\)







\(\ds \map {\phi^\gets } F\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi {\bigwedge_{i \in J} a_i}\)

\(\in\)







\(\ds F\)





Definition of Preimage of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \bigwedge_{i \in J} \map \phi {a_i}\)

\(\in\)







\(\ds F\)





Definition of Frame Homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in J : \map \phi {a_i}\)

\(\in\)







\(\ds F\)





Characterization of Completely Prime Filter in Complete Lattice applied to $F$








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in J : a_i\)

\(\in\)







\(\ds \map {\phi^\gets } F\)





Definition of Preimage of Mapping




It follows that $\map {\phi^\gets} F$ satisfies statement $(2)$.
$\Box$

The result follows from Characterization of Completely Prime Filter in Complete Lattice.
$\blacksquare$





