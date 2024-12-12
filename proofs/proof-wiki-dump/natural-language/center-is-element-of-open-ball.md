# 

Source: https://proofwiki.org/wiki/Center_is_Element_of_Open_Ball



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\epsilon \in \R_{>0}$ be a positive real number.
Let $\map {B_\epsilon} a$ be the open $\epsilon$-ball of $a$ in $M$.

Then:

$a \in \map {B_\epsilon} a$


Normed Division Ring
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $a \in R$.
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
Let $\map {B_\epsilon} a$ be the open $\epsilon$-ball of $a$ in $\struct{R, \norm {\,\cdot\,} }$.

Then:

$a \in \map {B_\epsilon} a$


P-adic Numbers
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
Let $\map {B_\epsilon} a$ be the open $\epsilon$-ball of $a$ in $\struct {\Q_p, \norm {\,\cdot\,}_p}$.

Then:

$a \in \map {B_\epsilon} a$


Proof
By Metric Space Axiom $(\text M 1)$:

$\map d {a, a} = 0$
By assumption:

$\epsilon > 0$
Hence:

$\map d {a, a} < \epsilon$
By definition of the open $\epsilon$-ball of $a$ $\map {B_\epsilon} a$ in $M$:

$a \in \map {B_\epsilon} a$
$\blacksquare$





