# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Identity_for_Real_Addition



Theorem
Let $\R$ denote the set of real numbers.
Let $+$ denote addition on $\R$.

Then $\left({\R, +}\right)$ has an identity.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, there exists an identity of $\left({\R, +}\right)$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $+$ denote addition on $\R$.

Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \in \R$.
Then:

$\left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] + \left[{\!\left[{\left\langle{0}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{0}\right\rangle}\right]\!}\right] + \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$
Hence, $\left[{\!\left[{\left\langle{0}\right\rangle}\right]\!}\right]$ is the identity of $\left({\R, +}\right)$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $+$ denote addition on $\R$.

Define:

$0^* = \left\{{q \in \Q: q < 0}\right\}$
We show that $0^*$ is the identity of $\left({\R, +}\right)$.

First, we show that $0^* \in \R$.
We have that $-1 < 0$, so $0^*$ is non-empty.
We have that $0 \notin 0^*$, so $0^* \ne \Q$.
Suppose that $q \in 0^*$.
If $p \in \Q$ and $p < q$, then $p \in 0^*$.
We have that $q < \frac 1 2 q \in 0^*$.

Let $\alpha \in \R$.
We only show that $\alpha + 0^* = \alpha$; the equality $0^* + \alpha = \alpha$ holds similarly.
Suppose that $p \in \alpha$.
If $q \in 0^*$, then $p + q < p$, and so $p + q \in \alpha$.
Hence, $\alpha + 0^* \subseteq \alpha$.
Now, let $p \in \alpha$.
By the definition of a Dedekind cut, we can choose $q \in \alpha$ such that $p < q$.
We have that $-q + p < 0$.
Therefore, $p = q + \left({-q + p}\right) \in \alpha + 0^*$.
Hence, $\alpha \subseteq \alpha + 0^*$.
By definition of set equality, we have $\alpha = \alpha + 0^*$.
$\blacksquare$


Proof 4
Let $\R$ denote the set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $+$ denote addition on $\R$.

By definition, $\left({\R, +}\right)$ is a group.
By the group axioms, $\left({\R, +}\right)$ has an identity.
$\blacksquare$





