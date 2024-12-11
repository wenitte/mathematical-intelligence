# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Multiplication_is_Closed



Theorem
Let $\R$ denote the set of real numbers.
Let $\times$ denote multiplication on $\R$.

Then $\R$ is closed under $\times$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, $\R$ is closed under $\times$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.

Let $x, y \in \R$, $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$, $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$.
From Rational Multiplication is Closed, we have that:

$\forall n \in \N: x_n y_n \in \Q$
We show that $\left\langle{x_n y_n}\right\rangle$ is a Cauchy sequence.

Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Since a Cauchy sequence is bounded, there exist $A, B \in \Q$ such that, for all $n \in \N$:

$\left\vert{x_n}\right\vert \le A$
$\left\vert{y_n}\right\vert \le B$
There exist $N_1, N_2 \in \N$ such that, for all $m, n \in \N$:

$m, n \ge N_1 \implies \left\vert{x_n - x_m}\right\vert < \dfrac \epsilon {A + B + 1}$
$m, n \ge N_2 \implies  \left\vert{y_n - y_m}\right\vert < \dfrac \epsilon {A + B + 1}$
Let $N = \max {\{{N_1, N_2}\}} \in \N$.
Then, if $m, n \in \N$, $m, n \ge N$:














\(\ds \left\vert{x_n y_n - x_m y_m}\right\vert\)

\(=\)







\(\ds \left\vert{x_n \left({y_n - y_m}\right) + y_m \left({x_n - x_m}\right)}\right\vert\)




















\(\ds \)

\(\le\)







\(\ds \left\vert{x_n}\right\vert \left\vert{y_n - y_m}\right\vert + \left\vert{y_m}\right\vert \left\vert{x_n - x_m}\right\vert\)





by the Triangle Inequality for Real Numbers and Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \left({A + B}\right) \frac \epsilon {A + B + 1}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










Next, we have to show that $\times$ is well-defined. That is, if $\left\langle{x_n}\right\rangle \sim \left\langle{x'_n}\right\rangle$ and $\left\langle{y_n}\right\rangle \sim \left\langle{y'_n}\right\rangle$, then $\left\langle{x_n y_n}\right\rangle \sim \left\langle{x'_n y'_n}\right\rangle$.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Since a Cauchy sequence is bounded, there exist $C, D \in \Q$ such that, for all $n \in \N$:

$\left\vert{x_n}\right\vert \le C$
$\left\vert{y'_n}\right\vert \le D$
There exist $M_1, M_2 \in \N$ such that, for all $n \in \N$:

$n > N_1 \implies \left\vert{x_n - x'_n}\right\vert < \dfrac \epsilon {C + D + 1}$
$n > N_2 \implies  \left\vert{y_n - y'_n}\right\vert < \dfrac \epsilon {C + D + 1}$
Let $M = \max {\{{M_1, M_2}\}} \in \N$.
Then, if $n \in \N$, $n > M$:














\(\ds \left\vert{x_n y_n - x'_n y'_n}\right\vert\)

\(=\)







\(\ds \left\vert{x_n \left({y_n - y'_n}\right) + y'_n \left({x_n - x'_n}\right)}\right\vert\)




















\(\ds \)

\(\le\)







\(\ds \left\vert{x_n}\right\vert \left\vert{y_n - y'_n}\right\vert + \left\vert{y'_n}\right\vert \left\vert{x_n - x'_n}\right\vert\)





by the Triangle Inequality for Real Numbers and Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \left({C + D}\right) \frac \epsilon {C + D + 1}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.

Let $\alpha, \beta \in \R$.
It is to be shown that $\alpha \beta$ is a Dedekind cut of $\left({\Q, \le}\right)$.
By the definition of real multiplication, it suffices to consider the case where $\alpha > 0^*$ and $\beta > 0^*$.

We can choose $p_0 \in \alpha$ such that $p_0 \notin 0^*$.
Since $\alpha$ is a Dedekind cut, we can choose $p \in \alpha$ such that $p > p_0$.
It follows that $0 \le p_0 < p$.
Since $\beta$ is non-empty, it follows that $\alpha \beta$ is non-empty.

Since $\alpha$ and $\beta$ are proper subsets of $\Q$, we can choose $p', q' \in \Q$ such that $p' \notin \alpha$ and $q' \notin \beta$.
We have that $p', q' > 0$.
If $p \in \alpha$, $q \in \beta$, $p, q > 0$, then $p < p'$ and $q < q'$.
It follows that $pq < pq' < p'q'$, so $p'q' \notin \alpha \beta$.
Hence, $\alpha \beta \ne \Q$.

Let $p \in \alpha$, $q \in \beta$, $p, q > 0$, $r \in \Q$, $r < pq$.
If $r \le 0$, then $r \in \alpha \beta$.
If $r > 0$, then $p^{-1} r < q$, and so $p^{-1} r \in \beta$.
Hence, $r = p \left({p^{-1} r}\right) \in \alpha \beta$.

We can choose $s \in \beta$ such that $q < s$.
It follows that $pq < ps$ and $ps \in \alpha \beta$.

Hence, $\alpha \beta$ is a Dedekind cut of $\left({\Q, \le}\right)$.
$\blacksquare$





