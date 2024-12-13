# 

Source: https://proofwiki.org/wiki/Local_Basis_of_P-adic_Number



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.

Then the set of open balls $\set {\map {B_{p^{-n} } } a : n \in Z}$ is a local basis of $a$ consisting of clopen sets.


Corollary 1
Then the set of closed balls $\set {\map {B^-_{p^{-n} } } a: n \in Z}$ is a local basis of $a$ consisting of clopen sets.


Corollary 2
Let $\Z_p$ be the $p$-adic integers.

Then the set $\set {a + p^n \Z_p: n \in Z}$ is a local basis of $a$ consisting of clopen sets.


Proof
Let $\BB_a$ be the set of all open balls of $Q_p$ centered on $a$.
That is:

$\BB_a = \set{\map {B_\epsilon} a : \epsilon \in \R_{>0}}$
From Open Balls Centered on P-adic Number is Countable:

$\BB_a = \set {\map {B_{p^{-n} } } a : n \in Z}$
From Open Balls form Local Basis for Point of Metric Space, $\BB_a$ is a local basis of $a$.

From P-adic Numbers form Non-Archimedean Valued Field:

the $p$-adic numbers is a non-Archimedean division ring.
From Open Balls are Clopen In Non-Archimedean Division Ring:

the set $\BB_a = \set {\map {B_{p^{-n} } } a : n \in \Z}$ is a local basis of clopen sets.
$\blacksquare$





