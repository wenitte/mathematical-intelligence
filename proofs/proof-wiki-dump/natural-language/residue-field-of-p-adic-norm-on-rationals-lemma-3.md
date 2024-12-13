# 

Source: https://proofwiki.org/wiki/Residue_Field_of_P-adic_Norm_on_Rationals/Lemma_3

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\Z_{\paren p}$ be the induced valuation ring on $\struct {\Q,\norm {\,\cdot\,}_p}$.
Let $p\Z_{\paren p}$ be the induced valuation ideal on $\struct {\Q,\norm {\,\cdot\,}_p}$.
Let $\phi : \Z \to \Z_{\paren p} / p \Z_{\paren p}$ be the mapping defined by:

$\forall a \in \Z: \map \phi a = a + p \Z_{\paren p}$

Then:

$\phi : \Z \to \Z_{\paren p} / p \Z_{\paren p}$ is a surjection.


Proof
Let $a / b \in \Z_{\paren p}$, where $a / b$ are in canonical form.
Then $p \nmid b$

Let $\F_p$ be the field of integers modulo $p$.
By the definition of a field:

$\exists b' \in \Z: b b' \equiv 1 \pmod p$
By the definition of congruence modulo $p$:

$p \divides b b' - 1$
By Divisor Divides Multiple:

$\forall a \in \Z: p \divides a b b' - a$

By Valuation Ideal of P-adic Norm on Rationals then:

$a b' - \dfrac a b = \dfrac {a b b' - a} b \in p \Z_{\paren p}$
By Element in Left Coset iff Product with Inverse in Subgroup:

$\map \phi {a b'} = a b' + p \Z_{\paren p} = a / b + p \Z_{\paren p}$

It follows that:

$\phi : \Z \to \Z_{\paren p} / p \Z_{\paren p}$ is a surjection.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.4$ Algebra, Proposition $2.4.34$




