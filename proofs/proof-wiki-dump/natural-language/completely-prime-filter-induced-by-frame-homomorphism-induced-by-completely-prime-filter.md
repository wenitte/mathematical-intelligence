# 

Source: https://proofwiki.org/wiki/Completely_Prime_Filter_Induced_by_Frame_Homomorphism_Induced_by_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.

Let $\struct{\mathbf 2, \vee, \wedge, \preceq}$ denote the (Boolean Lattice) $\mathbf 2$.

For every completely prime filter $p$ of $L$, let:

$\phi_p : L \to \mathbf 2$ be the frame homomorphism defined by:
$\forall a \in L : \map {\phi_p} a = \begin{cases}
\top & : a \in p\\
\bot & : a \notin p 
\end{cases}$

For every frame homomorphism $\phi : L \to \mathbf 2$, let:

$p_\phi = \map {\phi^{-1}} \top$
where 

$\map {\phi^{-1}} \top$ denotes the preimage of $\top \in \mathbf 2$ under the mapping $\phi$
which is the completely prime filter of $L$ induced by $\phi$ 

Let $p$ be a completely prime filter of $L$.

Then:

$p_{\phi_p} = p$


Proof
From Frame Homomorphism Onto Two Induced by Completely Prime Filter:

For every completely prime filter $p$ of $L$, $\phi_p : L \to \mathbf 2$ is a frame homomorphism

From Completely Prime Filter Induced by Frame Homomorphism Onto Two:

For every frame homomorphism $\phi : L \to \mathbf 2$, $p_\phi = \map {\phi^{-1}} \top$ is a completely prime filter of $L$

We have:














\(\ds p_{\phi_p}\)

\(=\)







\(\ds \map {\paren{\phi_p}^{-1} } \top\)





Definition of $p_{\phi_p}$














\(\ds \)

\(=\)







\(\ds \set{a \in L : \map {\phi_p} a = \top}\)





Definition of Inverse Image














\(\ds \)

\(=\)







\(\ds \set{a \in L : a \in p}\)





Definition of $\phi_p$














\(\ds \)

\(=\)







\(\ds p\)





Definition of Subset



$\blacksquare$





