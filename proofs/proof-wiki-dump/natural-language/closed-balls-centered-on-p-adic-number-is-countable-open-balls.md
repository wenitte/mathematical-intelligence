# 

Source: https://proofwiki.org/wiki/Closed_Balls_Centered_on_P-adic_Number_is_Countable/Open_Balls

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.

Then the set of all open balls centered on $a$ is the countable set:

$\BB = \set {\map {B_{p^{-n} } } a : n \in \Z}$


Proof
Let $\epsilon \in \R_{\ge 0}$.


Lemma
$\exists n \in \Z : p^{-\paren {n + 1} } < \epsilon \le p^{-n}$

From Open Ball contains Smaller Open Ball:

$\map {B_\epsilon} a \subseteq \map {B_{p^{-n} } } a$
From Open Ball contains Strictly Smaller Closed Ball:

$\map {B^-_{p^{-\paren {n + 1} } } } a \subseteq \map {B_\epsilon} a$
From Open Ball in P-adic Numbers is Closed Ball

$\map {B_{p^{-n} } } a = \map {B^-_{p^{-\paren {n + 1} } } } a$
Hence:

$\map {B_{p^{-n} } } a \subseteq \map {B_\epsilon} a$
By definition of set equality:

$\map {B_\epsilon} a = \map {B_{p^{-n} } } a$

Since $\epsilon \in \R_{>0}$ was arbitrary then:

$\forall \epsilon \in \R_{>0} : \exists n \in \Z : \map {B_\epsilon} a = \map {B_{p^{-n} } } a$
Hence the set of all open balls centered on $a$ is:

$\BB = \set {\map {B_{p^{-n} } } a : n \in \Z}$
From Surjection from Countably Infinite Set iff Countable, it follows that $\BB$ is a countable set.
$\blacksquare$





