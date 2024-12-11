# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Addition_is_Closed



Theorem
Let $\R$ denote the set of real numbers.
Let $+$ denote addition on $\R$.

Then $\R$ is closed under $+$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, $\R$ is closed under $+$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $+$ denote addition on $\R$.

Let $x, y \in \R$, $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$, $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$.
From Rational Addition is Closed, we have that:

$\forall n \in \N: x_n + y_n \in \Q$
We show that $\left\langle{x_n + y_n}\right\rangle$ is a Cauchy sequence.

Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Then there exist $N_1, N_2 \in \N$ such that, for all $m, n \in \N$:

$m, n \ge N_1 \implies \left\vert{x_n - x_m}\right\vert < \dfrac \epsilon 2$
$m, n \ge N_2 \implies  \left\vert{y_n - y_m}\right\vert < \dfrac \epsilon 2$
Let $N = \max {\{{N_1, N_2}\}} \in \N$.
Then, if $m, n \in \N$, $m, n \ge N$:














\(\ds \left\vert{\left({x_n + y_n}\right) - \left({x_m + y_m}\right)}\right\vert\)

\(=\)







\(\ds \left\vert{\left({x_n - x_m}\right) + \left({y_n - y_m}\right)}\right\vert\)




















\(\ds \)

\(\le\)







\(\ds \left\vert{x_n - x_m}\right\vert + \left\vert{y_n - y_m}\right\vert\)





by the Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










Next, we have to show that $+$ is well-defined. That is, if $\left\langle{x_n}\right\rangle \sim \left\langle{x'_n}\right\rangle$ and $\left\langle{y_n}\right\rangle \sim \left\langle{y'_n}\right\rangle$, then $\left\langle{x_n + y_n}\right\rangle \sim \left\langle{x'_n + y'_n}\right\rangle$.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Then there exist $M_1, M_2 \in \N$ such that, for all $n \in \N$:

$n > M_1 \implies \left\vert{x_n - y_n}\right\vert < \dfrac \epsilon 2$
$n > M_2 \implies  \left\vert{x'_n - y'_n}\right\vert < \dfrac \epsilon 2$
Let $M = \max {\left\{{M_1, M_2}\right\}} \in \N$.
Then, if $n \in \N$, $n > M$:














\(\ds \left\vert{\left({x_n + y_n}\right) - \left({x'_n + y'_n}\right)}\right\vert\)

\(=\)







\(\ds \left\vert{\left({x_n - x'_n}\right) + \left({y_n - y'_n}\right)}\right\vert\)




















\(\ds \)

\(\le\)







\(\ds \left\vert{x_n - x'_m}\right\vert + \left\vert{y_n - y'_m}\right\vert\)





by the Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $+$ denote addition on $\R$.

Let $\alpha, \beta \in \R$.
It is to be shown that $\alpha + \beta$ is a Dedekind cut of $\left({\Q, \le}\right)$.

We have that $\left({\Q, +, \le}\right)$ is an ordered group.

It follows that $\alpha + \beta \subseteq \Q$.
By the definition of a Dedekind cut, $\alpha$ and $\beta$ are non-empty, so $\alpha + \beta$ is non-empty.
By the definition of a Dedekind cut, we can choose $r \in \Q \setminus \alpha$ and $s \in \Q \setminus \beta$.
It follows that $r + s \in \Q \setminus \left({\alpha + \beta}\right)$.

Suppose that $p \in \alpha$, $q \in \beta$, $s \in \Q$, $s < p + q$.
Then $-p + s < q$; therefore, by the definition of a Dedekind cut, we have that $-p + s \in \beta$.
Hence, $s = p + \left({-p + s}\right) \in \alpha + \beta$.

By the definition of a Dedekind cut, we can choose $r \in \beta$ such that $q < r$.
It follows that $p + r \in \alpha + \beta$ and $p + q < p + r$.
$\blacksquare$


Proof 4
Let $\R$ denote the set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $+$ denote addition on $\R$.

By definition, $\left({\R, +}\right)$ is a group.
By the group axioms, $\R$ is closed under $+$.
$\blacksquare$





