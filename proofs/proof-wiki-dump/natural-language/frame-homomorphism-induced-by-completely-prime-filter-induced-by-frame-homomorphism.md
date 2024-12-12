# 

Source: https://proofwiki.org/wiki/Frame_Homomorphism_Induced_by_Completely_Prime_Filter_Induced_by_Frame_Homomorphism


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.

Let $\struct{\mathbf 2, \vee, \wedge, \preceq}$ denote the (Boolean Lattice) $\mathbf 2$.

For every frame homomorphism $\phi : L \to \mathbf 2$, let:

$p_\phi = \map {\phi^{-1}} \top$
where 

$\map {\phi^{-1}} \top$ denotes the preimage of $\top \in \mathbf 2$ under the mapping $\phi$
which is the completely prime filter of $L$ induced by $\phi$ 

For every completely prime filter $p$ of $L$, let:

$\phi_p : L \to \mathbf 2$ be the frame homomorphism defined by:
$\forall a \in L : \map {\phi_p} a = \begin{cases}
\top & : a \in p\\
\bot & : a \notin p 
\end{cases}$

Let $\phi : L \to \mathbf 2$ be a frame homomorphism of $L$ into $\mathbf 2$.

Then:

$\phi_{p_\phi} = \phi$


Proof
From Completely Prime Filter Induced by Frame Homomorphism Onto Two:

For every frame homomorphism $\phi : L \to \mathbf 2$, $p_\phi = \map {\phi^{-1}} \top$ is a completely prime filter of $L$

From Frame Homomorphism Onto Two Induced by Completely Prime Filter:

For every completely prime filter $p$ of $L$, $\phi_p : L \to \mathbf 2$ is a frame homomorphism

We have:










\(\ds \forall a \in L: \, \)



\(\ds \map {\phi_{p_\phi} } a\)

\(=\)







\(\ds \begin{cases} \top & : a \in p_\phi\\ \bot & : a \notin p_\phi \end{cases}\)





Definition of $\phi_{p_\phi}$














\(\ds \)

\(=\)







\(\ds \begin{cases} \top & : a \in \map {\phi^{-1} } \top\\ \bot & : a \notin \map {\phi^{-1} } \top \end{cases}\)





Definition of $p_\phi$














\(\ds \)

\(=\)







\(\ds \begin{cases} \top & : \map \phi a  = \top\\ \bot & : \map \phi a  \ne \top \end{cases}\)





Definition of Inverse Image














\(\ds \)

\(=\)







\(\ds \begin{cases} \top & : \map \phi a  = \top\\ \bot & : \map \phi a  = \bot \end{cases}\)





Definition of Two (Boolean Lattice)














\(\ds \)

\(=\)







\(\ds \map \phi a\)










From Equality of Mappings:

$\phi_{p_\phi} = \phi$
$\blacksquare$





