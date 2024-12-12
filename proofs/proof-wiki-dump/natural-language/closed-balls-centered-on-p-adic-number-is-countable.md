# 

Source: https://proofwiki.org/wiki/Closed_Balls_Centered_on_P-adic_Number_is_Countable



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.

Then the set of all closed balls centered on $a$ is the countable set:

$\BB^- = \set {\map {B^-_{p^{-n} } } a: n \in \Z}$


Corollary
Then the set of all open balls centered on $a$ is the countable set:

$\BB = \set {\map {B_{p^{-n} } } a : n \in \Z}$


Proof
Let $\epsilon \in \R_{>0}$.

Lemma
$\exists n \in \Z : p^{-n} \le \epsilon < p^{-\paren {n - 1} }$

From Closed Ball contains Smaller Closed Ball:

$\map {B^-_{p^{-n}}} a \subseteq \map {B^-_\epsilon} a$
From Open Ball contains Strictly Smaller Closed Ball:

$\map {B^-_\epsilon} a \subseteq \map {B_{p^{-\paren {n - 1} } } } a$
From Open Ball in P-adic Numbers is Closed Ball

$\map {B_{p^{-\paren{n-1}}}} a = \map {B^-_{p^{-n} } } a$
Hence:

$\map {B^-_\epsilon} a \subseteq \map {B^-_{p^{-n} } } a$
By definition of set equality:

$\map {B^-_\epsilon} a = \map {B^{\, -}_{p^{-n} } } a$

Since $\epsilon \in \R_{>0}$ was arbitrary then:

$\forall \epsilon \in \R_{>0} : \exists n \in \Z : \map {B^-_\epsilon} a = \map {B^-_{p^{-n} } } a$
Hence the set of all closed balls centered on $a$ is:

$\BB^- = \set {\map {B^-_{p^{-n} } } a : n \in \Z}$
From Surjection from Countably Infinite Set iff Countable, it follows that $\BB^-$ is a countable set.
$\blacksquare$





