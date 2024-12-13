# 

Source: https://proofwiki.org/wiki/Residue_Field_of_P-adic_Norm_on_Rationals



Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.

The induced residue field on $\struct {\Q,\norm {\,\cdot\,}_p}$ is isomorphic to the field $\F_p$ of integers modulo $p$.


Proof
By Valuation Ring of P-adic Norm on Rationals:

$\Z_{\ideal p} = \set {\dfrac a b \in \Q : p \nmid b}$
is the induced valuation ring on $\struct {\Q,\norm {\,\cdot\,}_p}$.
By Valuation Ideal of P-adic Norm on Rationals:

$p \Z_{\ideal p} = \set {\dfrac a b \in \Q : p \nmid b, p \divides a}$
is the induced valuation ideal on $\struct {\Q,\norm {\,\cdot\,}_p}$.
By definition, the induced residue field on $\struct {\Q,\norm {\,\cdot\,}_p}$ is the quotient ring $\Z_{\ideal p} / p \Z_{\ideal p}$.
By Quotient Ring of Integers with Principal Ideal, $\F_p$ is isomorphic to $\Z / p \Z$, where $p \Z$ is the principal ideal of $\Z$ generated by $p$.
To complete the proof it is sufficient to show that $\Z / p \Z$ is isomorphic to $\Z_{\ideal p} / p \Z_{\ideal p}$.

By Integers form Subring of Valuation Ring of P-adic Norm on Rationals then $\Z$ is a subring of $\Z_{\ideal p}$.

Let $\phi : \Z \to \Z_{\ideal p} / p \Z_{\ideal p}$ be the mapping defined by:

$\forall a \in \Z: \map \phi a = a + p \Z_{\ideal p}$


Lemma 1
$\phi$ is a homomorphism.
$\Box$


Lemma 2
$p \Z = \map \ker \phi$
$\Box$


Lemma 3
$\phi : \Z \to \Z_{\paren p} / p \Z_{\paren p}$ is a surjection.
$\Box$

Hence $\phi$ is a ring epimorphism with:

$p \Z = \map \ker \phi$
By Quotient Ring of Kernel of Ring Epimorphism then $\Z / p \Z$ is isomorphic to $\Z_{\ideal p} / p \Z_{\ideal p}$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.4$ Algebra: Proposition $2.4.3$



