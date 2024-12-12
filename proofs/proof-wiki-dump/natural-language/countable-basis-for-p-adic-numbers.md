# 

Source: https://proofwiki.org/wiki/Countable_Basis_for_P-adic_Numbers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\tau_p$ be the topology induced by the non-Archimedean norm $\norm {\,\cdot\,}_p$.
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$.

Then:

$\BB_p = \set {\map {B_{p^{-n} } } q : q \in \Q, n \in \Z}$
is a countable basis for $\struct{\Q_p, \tau_p}$.


Corollary 1
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map {B_\epsilon^-} a$ denote the closed $\epsilon$-ball of $a$.

Then:

$\BB_p = \set {\map {B^-_{p^{-n} } } q : q \in \Q, n \in \Z}$
is a countable basis for $\struct{\Q_p, \tau_p}$.


Corollary 2
Let $\Z_p$ be the $p$-adic integers.

Then:

$\BB_p = \set {q + p^n \Z_p : q \in \Q, n \in \Z}$
is a countable basis for $\struct{\Q_p, \tau_p}$.


Proof
From Sequence of Powers of Number less than One, $\sequence{p^{-n}}$ is a real null sequence.
From Null Sequence induces Local Basis in Metric Space, for all $a \in \Q_p$ the set $\set {\map {B_{p^{-n} } } a : n \in \Z}$ is a local basis of $a$.
From Union of Local Bases is Basis, the set:

$\BB' = \ds \bigcup_{a \in \Q_p} \set {\map {B_{p^{-n} } } a : n \in \Z} = \set {\map {B_{p^{-n} } } a : a \in Q_p, n \in \Z}$
is a basis for $\tau_p$.

Let $a \in \Q_p$ and $n \in \Z$.
From Rational Numbers are Dense Subfield of P-adic Numbers:

$\Q$ is everywhere dense in $\Q_p$.
Hence:

$\exists q \in \Q: q \in \map {B_{p^{-n} } } a$
From Characterization of Open Ball in P-adic Numbers,

$\map {B_{p^{-n} } } q = \map {B_{p^{-n} } } a$
Hence:

$\map {B_{p^{-n} } } a \in \BB_p$
Since $q$ and $n$ were arbitrary, then:

$\BB' \subseteq \BB_p$
It follows that $\BB_p$ is a basis for $\tau_p$.

It remains to show that $\BB_p$ is countable.
For all $q \in \Q$, let $\map {\BB_p} q = \set {\map {B_{p^{-n} } } q : n \in \Z}$.
Then: 

$\BB_p = \ds \bigcup_{q \mathop \in \Q} \map {\BB_p} q$
From Integers are Countably Infinite and Surjection from Countably Infinite Set iff Countable:

$\forall q \in \Q: \map {\BB_p} q$ is a countable set.
From Rational Numbers are Countably Infinite:

$\BB_p$ is a countable union of countable sets.
From Countable Union of Countable Sets is Countable:

$\BB_p$ is countable.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.7$




