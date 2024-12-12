# 

Source: https://proofwiki.org/wiki/Countable_Basis_for_P-adic_Numbers/Closed_Balls

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\tau_p$ be the topology induced by the non-Archimedean norm $\norm {\,\cdot\,}_p$.
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon^-} a$ denote the closed $\epsilon$-ball of $a$.

Then:

$\BB_p = \set {\map {B^-_{p^{-n} } } q : q \in \Q, n \in \Z}$
is a countable basis for $\struct{\Q_p, \tau_p}$.


Proof
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$.
From Open Ball in P-adic Numbers is Closed Ball:

$\BB_p = \set {\map {B^-_{p^{-n} } } q : q \in \Q, n \in \Z} = \set {\map {B_{p^{-n + 1} } } q : q \in \Q, n \in \Z} = \set {\map {B_{p^{-n} } } q : q \in \Q, n \in \Z}$
From Countable Basis for P-adic Numbers:

$\BB_p$ is a countable basis for $\struct{\Q_p, \tau_p}$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.7$




