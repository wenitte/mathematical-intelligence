# 

Source: https://proofwiki.org/wiki/Residue_Field_of_P-adic_Norm_on_Rationals/Lemma_2

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\Z_{\ideal p}$ be the induced valuation ring on $\struct {\Q, \norm {\,\cdot\,}_p}$.
Let $p \Z_{\ideal p}$ be the induced valuation ideal on $\struct {\Q, \norm {\,\cdot\,}_p}$.
Let $\phi : \Z \to \Z_{\ideal p} / p \Z_{\ideal p}$ be the mapping defined by:

$\forall a \in \Z: \map \phi a = a + p \Z_{\ideal p}$
Then:

$p \Z = \map \ker \phi$


Proof
Let $\map \ker \phi$ denote the kernel of $\phi$.
Then:














\(\ds a\)

\(\in\)







\(\ds \map \ker \phi\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi a\)

\(=\)







\(\ds p \Z_{\ideal p}\)





Definition of Kernel of Ring Homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds a + p \Z_{\ideal p}\)

\(=\)







\(\ds p \Z_{\ideal p}\)





Definition of $\phi$








\(\ds \leadstoandfrom \ \ \)





\(\ds a = a - 0\)

\(\in\)







\(\ds p \Z_{\ideal p}\)





Element in Right Coset iff Product with Inverse in Subgroup








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists a' \in \Z: \, \)



\(\ds a = p a'\)

\(=\)







\(\ds p a'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a\)

\(\in\)







\(\ds p \Z\)









Hence:

$p \Z = \map \ker \phi$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.4$ Algebra, Proposition $2.4.3$




