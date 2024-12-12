# 

Source: https://proofwiki.org/wiki/Countable_Basis_for_P-adic_Numbers/Cosets

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\tau_p$ be the topology induced by the non-Archimedean norm $\norm {\,\cdot\,}_p$.
Let $\Z_p$ be the $p$-adic integers.

Then:

$\BB_p = \set {q + p^n \Z_p : q \in \Q, n \in \Z}$
is a countable basis for $\struct{\Q_p, \tau_p}$.


Proof
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon^-} a$ denote the closed $\epsilon$-ball of $a$.
From Closed Balls of P-adic Number:

$\BB_p = \set {q + p^n \Z_p : q \in \Q, n \in \Z} = \set {\map {B^-_{p^{-n} } } q : q \in \Q, n \in \Z}$
From Countable Closed Ball Basis for P-adic Numbers:

$\BB_p$ is a countable basis for $\struct{\Q_p, \tau_p}$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.7$




