# 

Source: https://proofwiki.org/wiki/Frame_Homomorphism_Onto_Two_Induced_by_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.

Let $\struct{\mathbf 2, \vee, \wedge, \preceq}$ denote the (Boolean Lattice) $\mathbf 2$.

Let $p$ be a completely prime filter of $L$.
Let $\phi_p : L \to \mathbf 2$ be the mapping defined by:

$\forall a \in L : \map {\phi_p} a = \begin{cases}
\top & : a \in p\\
\bot & : a \notin p 
\end{cases}$

Then:

$\phi_p$ is a frame homomorphism


Proof
$\phi_p$ is Arbitrary Join Preserving
Let $\set{a_i : i \in I}$ be an indexed subset of elements of $L$.
We have:














\(\ds \map {\phi_p} {\bigvee_{i \in I} a_i}\)

\(=\)







\(\ds \top\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bigvee_{i \in I} a_i\)

\(\in\)







\(\ds p\)





Definition of $\phi_p$








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : a_i\)

\(\in\)







\(\ds p\)





Characterization of Completely Prime Filter in Complete Lattice








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists i \in I : \map {\phi_p} {a_i}\)

\(=\)







\(\ds \top\)





Definition of $\phi_p$








\(\ds \leadstoandfrom \ \ \)





\(\ds \bigvee_{i \in I} \map {\phi_p} {a_i}\)

\(=\)







\(\ds \top\)





Definition of (Boolean Lattice) 2




It follows that $\phi_p$ is arbitrary join preserving.
$\Box$


$\phi_p$ is Finite Meet Preserving
Let $\set{a_i : i \in F}$ be a finite indexed subset of elements of $L$.
We have:














\(\ds \map {\phi_p} {\bigwedge_{i \in F} a_i}\)

\(=\)







\(\ds \top\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bigwedge_{i \in F} a_i\)

\(\in\)







\(\ds p\)





Definition of $\phi_p$








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in F : a_i\)

\(\in\)







\(\ds p\)





Characterization of Completely Prime Filter in Complete Lattice








\(\ds \leadstoandfrom \ \ \)





\(\ds \forall i \in F : \map {\phi_p} {a_i}\)

\(=\)







\(\ds \top\)





Definition of $\phi_p$








\(\ds \leadstoandfrom \ \ \)





\(\ds \bigwedge_{i \in F} \map {\phi_p} {a_i}\)

\(=\)







\(\ds \top\)





Definition of (Boolean Lattice) 2




It follows that $\phi_p$ is finite meet preserving.
$\Box$

Hence $\phi_p$ is a frame homomorphim by definition.
$\blacksquare$





