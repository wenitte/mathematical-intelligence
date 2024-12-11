# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Identity_for_Real_Multiplication



Theorem
Let $\R$ denote the set of real numbers.
Let $\times$ denote multiplication on $\R$.

Then $\left({\R, \times}\right)$ has an identity.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, there exists an identity of $\left({\R, \times}\right)$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.

Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \in \R$.
Then:

$\left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \left[{\!\left[{\left\langle{1}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] = \left[{\!\left[{\left\langle{1}\right\rangle}\right]\!}\right] \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$
Hence, $\left[{\!\left[{\left\langle{1}\right\rangle}\right]\!}\right]$ is the identity of $\left({\R, \times}\right)$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.

Define:

$1^* = \left\{{q \in \Q: q < 1}\right\}$
We show that $1^*$ is the identity of $\left({\R, \times}\right)$.

First, we show that $1^* \in \R$.
We have that $0 < 1$, so $1^*$ is non-empty.
We have that $1 \notin 1^*$, so $1^* \ne \Q$.
Suppose that $q \in 1^*$.
If $p \in \Q$ and $p < q$, then $p \in 1^*$.
We have that $q < \frac 1 2 \left({q + 1}\right) \in 1^*$.

Let $\alpha \in \R$.

We only show that $1^* \alpha = \alpha$; that $\alpha 1^* = \alpha$ follows similarly.

If $\alpha = 0^*$, this is clear.

We consider the case where $\alpha > 0^*$.
Suppose that $q \in 1^* \alpha$.
If $q \le 0$, then $q \in \alpha$.
If $q > 0$, then, by the definition of real multiplication, we can choose $r \in 1^*$, $s \in \alpha$, $r, s > 0$ such that $q = rs$.
Hence, $q = rs < s \in \alpha$, so $q \in \alpha$.
Since $q$ was arbitrary, it follows that $1^* \alpha \subseteq \alpha$.

Suppose that $q' \in \alpha$.
If $q' \le 0$, then $q' \in 1^* \alpha$.
If $q' > 0$, then we can choose $r' > q'$ such that $r' \in \alpha$.
Hence, $q' = \left({\dfrac {q'} {r'}}\right) r' \in 1^* \alpha$.
Since $q'$ was arbitrary, it follows that $\alpha \subseteq 1^* \alpha$.

By the definition of set equality, we have that $1^* \alpha = \alpha$.

If $\alpha < 0^*$, then:

$1^* \alpha = -\left({1^* \left({-\alpha}\right)}\right) = -\left({-\alpha}\right) = \alpha$
$\blacksquare$





