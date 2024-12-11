# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Inverses_for_Real_Multiplication



Theorem
Let $\R$ denote the set of real numbers.
Let $\times$ denote multiplication on $\R$.

Then every non-zero element of $\R$ has an inverse for $\times$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, every non-zero element of $\R$ has an inverse for $\times$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\times$ denote multiplication on $\R$.

Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \in \R$, $x \ne 0$.
Then $\left\langle{x_n}\right\rangle \not \sim \left\langle{0}\right\rangle$.
Hence, we can choose a strictly positive rational number $\epsilon_0 \in \Q_{>0}$ such that, for all $N \in \N$:

$\exists n > N: \left\vert{x_n}\right\vert \ge 2 \epsilon_0$
Since $\left\langle{x_n}\right\rangle$ is a Cauchy sequence, we can choose $M \in \N$ such that, for all $m, n \in \N$:

$m, n \ge M \implies \left\vert{x_m - x_n}\right\vert < \epsilon_0$
We can choose $m \in \N$, $m > M$, such that $\left\vert{x_m}\right\vert \ge 2 \epsilon_0$.
Let $n \in \N$, $n > M$.
Then, by the Triangle Inequality for Real Numbers:

$\left\vert{x_n}\right\vert \ge \left\vert{x_m}\right\vert - \left\vert{x_m - x_n}\right\vert > \epsilon_0$

Define the sequence $\left\langle{y_n}\right\rangle$ as:

$\displaystyle y_n = \begin{cases}
0 & :n \le M \\
x_n^{-1} & :n > M
\end{cases}$
We show that $\left\langle{y_n}\right\rangle$ is a Cauchy sequence.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Since $\left\langle{x_n}\right\rangle$ is a Cauchy sequence, there exists an $M' \in \N$ such that, for all $m, n \in \N$:

$m, n \ge M' \implies \left\vert{x_m - x_n}\right\vert < \epsilon_0^2 \epsilon$
Let $N = \max {\left\{{M, M'}\right\}} \in \N$.
Then, for all $m, n \in \N$:

$\displaystyle m, n \ge N \implies \left\vert{y_m - y_n}\right\vert = \frac {\left\vert{x_m - x_n}\right\vert} {\left\vert{x_m}\right\vert \left\vert{x_n}\right\vert} \le \frac {\left\vert{x_m - x_n}\right\vert} {\epsilon_0^2} < \epsilon$
Thus $\left\langle{y_n}\right\rangle$ is a Cauchy sequence.

Define $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$; we have that $y \in \R$.
It is clear that:

$xy = \left[{\!\left[{\left\langle{1}\right\rangle}\right]\!}\right] = yx$
Hence, $y$ is the inverse of $x$ for $\times$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $\times$ denote multiplication on $\R$.

Let $\alpha \in \R$, $\alpha \ne 0^*$.

We consider the case where $\alpha > 0^*$.
Define:

$\beta = \Q_{\le 0} \cup \left\{{q \in \Q_{>0}: \exists r \in \Q_{>0}: q^{-1} - r \notin \alpha}\right\}$

First, we show that $\beta \in \R$.
Choose $p_0 \in \Q \setminus \alpha$. Then $p_0 > 0$ and $\frac 1 2 p_0^{-1} \in \beta$.
Hence, $\beta$ is non-empty.
If $p \in \alpha$ and $p > 0$, then, by the definition of a Dedekind cut, $\forall r \in \Q_{>0}: p - r \in \alpha$.
Hence, $p^{-1} \notin \beta$, so $\beta \ne \Q$.
Let $q \in \beta$.
If $q \le 0$, then $q < \frac 1 2 p_0^{-1} \in \beta$.
If $q > 0$, we can choose $r \in \Q_{>0}$ such that $q^{-1} - r \notin \alpha$.
Then $q < \left({q^{-1} - \frac 1 2 r}\right)^{-1} \in \beta$.
Suppose that $p \in \Q$, $p < q$.
If $p \le 0$, then $p \in \beta$.
If $p > 0$, then $q > 0$ and $q^{-1} - r < p^{-1} - r \notin \alpha$.
Hence, $p \in \beta$.

We only show that $\alpha \beta = 1^*$; that $\beta \alpha = 1^*$ follows similarly.

We show that $\alpha \beta \subseteq 1^*$.
Suppose that $p \in \alpha$, $q \in \beta$, $p, q > 0$.
We can choose $r \in \Q_{>0}$ such that $q^{-1} - r \notin \alpha$.
It follows that $p < q^{-1} - r$.
Therefore, $pq < 1 - rq < 1$.

We show that $1^* \subseteq \alpha \beta$.
Suppose that $s \in 1^*$.
Choose $p \in \alpha$, $p > 0$.
If $s \le 0$, then $s = p \left({\dfrac s p}\right) \in \alpha \beta$.
If $s > 0$, then choose $q \notin \alpha$.
Let $\Delta = p \left({s^{-1} - 1}\right) > 0$.
We have that $\left({\Q, +, \le}\right)$ is an Archimedean totally ordered group.
Therefore, we can choose $n \in \N$ such that $n \Delta > 2 \left({q - p}\right)$.
It follows that $p + \frac 1 2 n \Delta \notin \alpha$.
By the Well-Ordering Principle, there exists a smallest $m \in \N$ such that $p + \frac 1 2 m \Delta \notin \alpha$.
We have that $m \ne 0$.
It follows that:

$u = p + \frac 1 2 \left({m - 1}\right) \Delta \in \alpha$
$v = \left({p + \frac 1 2 \left({m + 1}\right) \Delta}\right)^{-1} \in \beta$
Since $u \ge p$, we have that:

$u s^{-1} = u \left({1 + \dfrac \Delta p}\right) \ge u + \Delta = v^{-1}$
Hence, $uv \ge s$.
Since $\alpha \beta$ is a Dedekind cut, it follows that $s \in \alpha \beta$.

By the definition of set equality, we have that $\alpha \beta = 1^*$.

If $\alpha < 0^*$, then:

$\bigl({-\left({-\alpha}\right)^{-1}}\bigr) \alpha = -\bigl({\left({-\alpha}\right)^{-1} \alpha}\bigr) = \left({-\alpha}\right)^{-1} \left({-\alpha}\right) = 1^*$
Similarly:

$\alpha \bigl({-\left({-\alpha}\right)^{-1}}\bigr) = 1^*$
It follows that $-\left({-\alpha}\right)^{-1}$ is the inverse of $\alpha$ for $\times$.
$\blacksquare$





