# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Modulo_Multiplication



Theorem
The following definitions of the concept of Modulo Multiplication are equivalent:

Definition 1
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$:

$\Z_m = \set {\eqclass 0 m, \eqclass 1 m, \ldots, \eqclass {m - 1} m}$
where $\eqclass x m$ is the residue class of $x$ modulo $m$.

The operation of multiplication modulo $m$ is defined on $\Z_m$ as:

$\eqclass a m \times_m \eqclass b m = \eqclass {a b} m$
Definition 2
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$:

$\Z_m = \set {0, 1, \ldots, m - 1}$

The operation of multiplication modulo $m$ is defined on $\Z_m$ as:

$a \times_m b$ equals the remainder after $a b$ has been divided by $m$.
Definition 3
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$:

$\Z_m = \set {0, 1, \ldots, m - 1}$

The operation of multiplication modulo $m$ is defined on $\Z_m$ as:

$a \times_m b := a b - k m$
where $k$ is the largest integer such that $k m \le a b$.


Proof
$(1)$ implies $(2)$
Let $\times_m$ be the operation of multiplication modulo $m$ by definition $1$.
Then $\times_m$ is defined as:

$\eqclass a m \times_m \eqclass b m = \eqclass {a b} m$

By the Division Theorem:














\(\ds a\)

\(=\)







\(\ds p + k_1 m\)





where $k_1 \in \Z$ and $0 \le p < m$














\(\ds b\)

\(=\)







\(\ds q + k_2 m\)





where $k_2 \in \Z$ and $0 \le q < m$




Hence $p \in \eqclass a m$














\(\ds p\)

\(\in\)







\(\ds \eqclass a m\)




















\(\ds q\)

\(\in\)







\(\ds \eqclass b m\)










Thus:














\(\ds \eqclass {a b} m\)

\(=\)







\(\ds \eqclass a m \times_m \eqclass b m\)





Definition 1 of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds \eqclass p m \times_m \eqclass q m\)





Modulo Multiplication is Well-Defined














\(\ds \)

\(=\)







\(\ds \eqclass {p q} m\)





Definition 1 of Modulo Multiplication



Thus:

$p q \in \eqclass {a b} m$
By the Division Theorem:

$p q = s + k m$
for some $k \in \Z$ and $0 \le s < m$
Then:

$s \in \eqclass {p q} m$
while $s$ equals the remainder after $p q$ has been divided by $m$.
That is:

$p \times_m q$ equals the remainder after $p q$ has been divided by $m$.
Thus $\times_m$ is the operation of multiplication modulo $m$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\times_m$ be the operation of multiplication modulo $m$ by definition $2$.
Then by definition:

$\forall a, b \in \Z_m: a \times_m b$ equals the remainder after $a b$ has been divided by $m$
where:

$\Z_m = \set {0, 1, \ldots, m - 1}$
Thus by definition of residue class:














\(\ds a\)

\(\in\)







\(\ds \eqclass a m\)





Definition of Residue Class














\(\ds b\)

\(\in\)







\(\ds \eqclass b m\)





Definition of Residue Class



Let $s$ equal the remainder after $a b$ has been divided by $m$:

$a b = s + k m$
where $k \in \Z$.

Hence:

$s \in \eqclass {a b} m$
So as Modulo Multiplication is Well-Defined:

$\eqclass a m \times_m \eqclass b m  = \eqclass {a b} m$

Thus $\times_m$ is the operation of multiplication modulo $m$ by definition $1$.
$\Box$


$(2)$ implies $(3)$
Let $\times_m$ be the operation of multiplication modulo $m$ by definition $2$.
Then by definition:

$\forall a, b \in \Z_m: a \times_m b$ equals the remainder after $a b$ has been divided by $m$
where:

$\Z_m = \set {0, 1, \ldots, m - 1}$

Let $s$ equal the remainder after $a b$ has been divided by $m$.
That is, there exists $k \in \Z$ such that:

$a b = s + k m$
where $0 \le s < m$.
It follows that:

$k m \le a b$
but:

$\paren {k + 1} m > a b$
Thus we have:














\(\ds a \times_m b\)

\(=\)







\(\ds s\)




















\(\ds \)

\(=\)







\(\ds a b - k m\)









where $k$ is the largest integer such that $k m \le a b$.

Thus $\times_m$ is the operation of multiplication modulo $m$ by definition $3$.
$\Box$


$(3)$ implies $(2)$
Let $\times_m$ be the operation of multiplication modulo $m$ by definition $3$.
Then by definition:

$a \times_m b := a b - k m$
where $k$ is the largest integer such that $k m \le a b$.
Let $s$ be defined as:

$s = a b - k m$
By definition:

$0 \le s < m$

That is, $s$ equals the remainder after $a b$ has been divided by $m$.

Thus $\times_m$ is the operation of multiplication modulo $m$ by definition $2$.
$\blacksquare$





