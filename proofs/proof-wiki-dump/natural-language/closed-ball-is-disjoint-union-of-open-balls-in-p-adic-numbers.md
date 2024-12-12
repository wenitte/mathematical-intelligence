# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Open_Balls_in_P-adic_Numbers

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$:

let $\map { {B_\epsilon}^-} a$ denote the closed $\epsilon$-ball of $a$
and:

let $\map {B_\epsilon} a$ denote the open $\epsilon$-ball of $a$.

Then:

$(1): \quad \forall n \in Z : \map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p - 1} \map {B_{p^{-n} } } {a + i p^n}$
$(2): \quad \forall n \in Z : \set {\map {B_{p^{-n} } } {a + i p^n} : i = 0, \dotsc, p - 1}$ is a set of pairwise disjoint open balls.


Proof
Let $n \in \Z$.
From Closed Ball is Disjoint Union of Smaller Closed Balls in P-adic Numbers:

$\map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p - 1} \map {B^-_{p^{-\paren {n + 1} } } } {a + i p}$
where $\set {\map {B^-_{p^{-\paren {n + 1 } } } } {a + i p^n} : i = 0, \dots, p - 1}$ is a set of pairwise disjoint closed balls.
From Open Ball in P-adic Numbers is Closed Ball:

$\map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p - 1} \map {B_{p^{-n} } } {a + i p}$
where $\set {\map {B_{p^{-n} } } {a + i p^n} : i = 0, \dots, p - 1}$ is a set of pairwise disjoint Open balls.
The result follows.
$\blacksquare$


Also see
Sphere is Disjoint Union of Open Balls in P-adic Numbers




