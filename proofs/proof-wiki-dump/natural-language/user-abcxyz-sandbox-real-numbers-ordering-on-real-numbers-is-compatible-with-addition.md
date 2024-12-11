# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Ordering_on_Real_Numbers_is_Compatible_with_Addition



Theorem
Let $\R$ denote the set of real numbers.
Let $\le$ denote the ordering on $\R$.
Let $+$ denote addition on $\R$.

Then $\le$ is compatible with $+$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By definition, $\le$ is compatible with $+$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\le$ denote the ordering on $\R$.
Let $+$ denote addition on $\R$.

Let $x, y, z \in \R$, $x \le y$.
Since $+$ is commutative, it suffices to show that $x + z \le y + z$.
By the definition of an equivalence class, we can choose $\left\langle{x_n}\right\rangle$, $\left\langle{y_n}\right\rangle$, and $\left\langle{z_n}\right\rangle$ such that $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$, $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$, and $z = \left[{\!\left[{\left\langle{z_n}\right\rangle}\right]\!}\right]$.
Suppose that $x + z = \left[{\!\left[{\left\langle{a_n}\right\rangle}\right]\!}\right]$ and $y + z = \left[{\!\left[{\left\langle{b_n}\right\rangle}\right]\!}\right]$.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Then there exists an $M \in \N$ such that:

$\forall n \in \N: n > M \implies x_n < y_n + \frac 1 3 \epsilon$
By Equivalence Class holds Equivalent Elements, we have that $\left\langle{x_n + z_n}\right\rangle \sim \left\langle{a_n}\right\rangle$ and $\left\langle{y_n + z_n}\right\rangle \sim \left\langle{b_n}\right\rangle$.
Hence, there exist $N_1, N_2 \in \N$ such that:

$\forall n \in \N: n > N_1 \implies \left\vert{x_n + z_n - a_n}\right\vert < \frac 1 3 \epsilon$
$\forall n \in \N: n > N_2 \implies \left\vert{y_n + z_n - b_n}\right\vert < \frac 1 3 \epsilon$
Let $N = \max {\left\{{M, N_1, N_2}\right\}} \in \N$.
Let $n \in \N$, $n > N$.
It follows that:














\(\ds a_n\)

\(=\)







\(\ds b_n + \left({y_n + z_n - b_n}\right) - \left({x_n + z_n - a_n}\right) + \left({x_n - y_n}\right)\)




















\(\ds \)

\(\le\)







\(\ds b_n + \left\vert{y_n + z_n - b_n}\right\vert + \left\vert{x_n + z_n - a_n}\right\vert + \left({x_n - y_n}\right)\)




















\(\ds \)

\(<\)







\(\ds b_n + \epsilon\)









Hence, $x + z \le y + z$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $\le$ denote the ordering on $\R$.
Let $+$ denote addition on $\R$.

By Subset Relation is Compatible with Subset Product, it follows that $\le$ is compatible with $+$.
$\blacksquare$


Proof 4
Let $\R$ denote the set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $\le$ denote the ordering on $\R$.
Let $+$ denote addition on $\R$.

By definition, $\left({\R, +, \le}\right)$ is an ordered group.
Hence, by definition, $\le$ is compatible with $+$.
$\blacksquare$





