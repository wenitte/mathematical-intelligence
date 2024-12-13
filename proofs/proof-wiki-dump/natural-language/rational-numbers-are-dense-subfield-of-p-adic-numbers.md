# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Dense_Subfield_of_P-adic_Numbers


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $p$ be any prime number.
Let $\norm {\,\cdot\,}^{\Q}_p$ be the p-adic norm on the rational numbers $\Q$.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\phi: \Q \to \Q_p$ be the mapping defined by:

$\map \phi r = \eqclass {r, r, r, \dotsc} {}$
where $\eqclass {r, r, r, \dotsc} {}$ is the left coset in $\Q_p$ that contains the constant sequence $\sequence {r, r, r, \dotsc}$.

Then:

$\struct{\Q, \norm {\,\cdot\,}^{\Q}_p }$ is isometrically isomorphic to $\map \phi \Q$ which is a dense subfield of $\Q_p$.

That is, $\struct{\Q, \norm {\,\cdot\,}^{\Q}_p }$ can be identified as a dense subfield of $\struct {\Q_p, \norm {\,\cdot\,}_p}$ and $\norm {\,\cdot\,}_p$ as an extension of $\norm {\,\cdot\,}^\Q_p$.

Proof
From P-adic Numbers form Completion of Rational Numbers with P-adic Norm:

$\struct {\Q_p, \norm {\,\cdot\,}_p}$ is a completion of $\struct {\Q, \norm {\,\cdot\,}^\Q_p}$
From Embedding Division Ring into Quotient Ring of Cauchy Sequences:

the mapping $\phi: \Q \to \Q_p$ is a distance-preserving monomorphism.
From Normed Division Ring is Dense Subring of Completion:

$\struct {\Q, \norm {\, \cdot \,}^\Q_p }$ is isometrically isomorphic to $\struct {\map \phi \Q, \norm {\, \cdot \,}_p }$ which is a dense subfield of $\struct {\Q_p, \norm {\, \cdot \,}_p }$.
$\blacksquare$





