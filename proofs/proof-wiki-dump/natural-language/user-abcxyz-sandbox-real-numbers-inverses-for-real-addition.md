# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Inverses_for_Real_Addition



Theorem
Let $\R$ denote the set of real numbers.
Let $+$ denote addition on $\R$.

Then every element of $\R$ has an inverse for $+$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, every element of $\R$ has an inverse for $+$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $+$ denote addition on $\R$.

Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \in \R$.
We have the result Inverse for Rational Addition.
We have that $\left\langle{-x_n}\right\rangle$ is a Cauchy sequence.
It follows that $\left[{\!\left[{\left\langle{-x_n}\right\rangle}\right]\!}\right] \in \R$, and:

$\left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] + \left[{\!\left[{\left\langle{-x_n}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{0}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{-x_n}\right\rangle}\right]\!}\right] + \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$
From Identity for Real Addition, it follows that $\left[{\!\left[{\left\langle{-x_n}\right\rangle}\right]\!}\right]$ is the inverse of $\left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$ for $+$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $+$ denote addition on $\R$.

Define:

$0^* = \left\{{q \in \Q: q < 0}\right\}$
From Identity for Real Addition, $0^*$ is the identity of $\left({\R, +}\right)$.

Let $\alpha \in \R$.
Define:

$\beta = \left\{{q \in \Q: \exists r \in \Q_{>0}: -q - r \notin \alpha}\right\}$

First, we show that $\beta \in \R$.
If $p \in \Q \setminus \alpha$, then $-p - 1 \in \beta$.
Hence, $\beta$ is non-empty.
If $p \in \alpha$, then, by the definition of a Dedekind cut, $\forall r \in \Q_{>0}: p - r \in \alpha$.
Hence, $-p \notin \beta$, so $\beta \ne \Q$.
Let $q \in \beta$.
Then we can choose $r \in \Q_{>0}$ such that $-q - r \notin \alpha$.
We have that $-q - r = -\left({q + \frac 1 2 r}\right) - \frac 1 2 r \notin \alpha$.
It follows that $q < q + \frac 1 2 r \in \beta$.
Suppose that $p \in \Q$, $p < q$.
Then $-q - r < -p - r$, so $-p - r \notin \alpha$.
Hence, $p \in \beta$.

We show that $\alpha + \beta \subseteq 0^*$.
Suppose that $p \in \alpha$, $q \in \beta$.
Then we can choose $r \in \Q_{>0}$ such that $-q - r \notin \alpha$.
It follows that $p < -q - r$.
Therefore, $p + q \in 0^*$.

We show that $0^* \subseteq \alpha + \beta$.
Suppose that $s \in 0^*$.
Choose $p \in \alpha$, $q \notin \alpha$.
We have that $\left({\Q, +, \le}\right)$ is an Archimedean totally ordered group.
Therefore, we can choose $n \in \N$ such that $n \left({-s}\right) > 2 \left({q - p}\right)$.
It follows that $p - \frac 1 2 n s \notin \alpha$.
By the Well-Ordering Principle, there exists a smallest $m \in \N$ such that $p - \frac 1 2 m s \notin \alpha$.
We have that $m \ne 0$.
It follows that:

$u = p - \frac 1 2 \left({m - 1}\right) s \in \alpha$
$v = -\left({p - \frac 1 2 m s}\right) + \frac 1 2 s \in \beta$
Hence, $u + v = s \in \alpha + \beta$.

Therefore, by definition of set equality, it follows that $\alpha + \beta = 0^*$.
$\blacksquare$


Proof 4
Let $\R$ denote the set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $+$ denote addition on $\R$.

By definition, $\left({\R, +}\right)$ is a group.
By the group axioms, every element of $\R$ has an inverse for $+$.
$\blacksquare$





