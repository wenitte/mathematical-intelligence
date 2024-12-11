# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Ordering_on_Real_Numbers_is_Total_Ordering



Theorem
Let $\R$ denote the set of real numbers.
Let $\le$ denote the ordering on $\R$.

Then $\le$ is a total ordering.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By definition, $\le$ is a total ordering.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\le$ denote the ordering on $\R$.


Self-Consistency of Definition
Let $X$ be the set of all rational Cauchy sequences.
Let $\preceq$ be the relation on $X$ defined by:

$\left\langle{x_n}\right\rangle \preceq \left\langle{y_n}\right\rangle \iff \forall \epsilon \in \Q_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies x_n < y_n + \epsilon$

Suppose that $\left\langle{x_n}\right\rangle \sim \left\langle{x'_n}\right\rangle$ and $\left\langle{y_n}\right\rangle \sim \left\langle{y'_n}\right\rangle$. We wish to show that:

$\left\langle{x_n}\right\rangle \preceq \left\langle{y_n}\right\rangle \iff \left\langle{x'_n}\right\rangle \preceq \left\langle{y'_n}\right\rangle$
Since $\sim$ is symmetric, it suffices to prove only one conditional.

We first show that $\preceq$ is transitive.
Let $\left\langle{x_n}\right\rangle, \left\langle{y_n}\right\rangle, \left\langle{z_n}\right\rangle \in X$, $\left\langle{x_n}\right\rangle \preceq \left\langle{y_n}\right\rangle$, $\left\langle{y_n}\right\rangle \preceq \left\langle{z_n}\right\rangle$.
Let $\epsilon \in \Q_{>0}$.
Then, by the definition of $\preceq$, there exist $N_1, N_2 \in \N$ such that:

$\forall n \in \N: n > N_1 \implies x_n < y_n + \frac 1 2 \epsilon$
$\forall n \in \N: n > N_2 \implies y_n < z_n + \frac 1 2 \epsilon$
Let $N = \max {\left\{{N_1, N_2}\right\}} \in \N$.
Then:

$\forall n \in \N: n > N \implies x_n < z_n + \epsilon$
Hence, $\left\langle{x_n}\right\rangle \preceq \left\langle{z_n}\right\rangle$.

It follows directly from the definition of $\sim$ that $\left\langle{x'_n}\right\rangle \preceq \left\langle{x_n}\right\rangle$ and $\left\langle{y_n}\right\rangle \preceq \left\langle{y'_n}\right\rangle$.
The result thus follows from the transitivity of $\preceq$.
$\Box$


$\le$ is Reflexive
This follows directly by definition.
$\Box$


$\le$ is Transitive
This follows directly from the transitivity of $\preceq$.
$\Box$


$\le$ is Antisymmetric
Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$, $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$, $x \le y$, $y \le x$.
It is to be shown that $x = y$.
By Equivalence Class holds Equivalent Elements, it suffices to show that $\left\langle{x_n}\right\rangle \sim \left\langle{y_n}\right\rangle$.
Let $\epsilon \in \Q_{>0}$.
Then there exist $N_1, N_2 \in \N$ such that:

$\forall n \in \N: n > N_1 \implies x_n < y_n + \epsilon$
$\forall n \in \N: n > N_2 \implies y_n < x_n + \epsilon$
Let $N = \max {\left\{{N_1, N_2}\right\}} \in \N$.
Then:

$\forall n \in \N: n > N \implies -\epsilon < x_n - y_n < \epsilon$
It follows that $\left\langle{x_n}\right\rangle \sim \left\langle{y_n}\right\rangle$.
$\Box$


$\le$ is Total
Let $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right]$, $y = \left[{\!\left[{\left\langle{y_n}\right\rangle}\right]\!}\right]$.
It is to be shown that either $x \le y$ or $y \le x$.

Suppose that $y \not \le x$.
Since $\left({\Q, \le}\right)$ is a totally ordered set, there exists an $\epsilon \in \Q_{>0}$ such that:

$\forall M \in \N: \exists N \in \N: N > M$ and $y_N \ge x_N + \epsilon$
Since $\left\langle{x_n}\right\rangle$ and $\left\langle{y_n}\right\rangle$ are Cauchy sequences, there exist $M_1, M_2 \in \N$ such that:

$\forall m, n \in \N: m, n > M_1 \implies \left\vert{x_m - x_n}\right\vert < \frac 1 2 \epsilon$
$\forall m, n \in \N: m, n > M_2 \implies \left\vert{y_m - y_n}\right\vert < \frac 1 2 \epsilon$
Let $M = \max {\left\{{M_1, M_2}\right\}} \in \N$.
There exists an $N \in \N$ such that $N > M$ and $y_N \ge x_N + \epsilon$.
Let $n \in \N$, $n > N$.
Then:














\(\ds y_n -  x_n\)

\(=\)







\(\ds \left({y_N - x_N}\right) + \left({y_n - y_N}\right) - \left({x_n - x_N}\right)\)




















\(\ds \)

\(\ge\)







\(\ds \left({y_N - x_N}\right) - \left\vert{y_n - y_N}\right\vert - \left\vert{x_n - x_N}\right\vert\)




















\(\ds \)

\(>\)







\(\ds 0\)









Hence, $x \le y$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.

We have that $\subseteq$ is an ordering (on $\R$).
It remains to show that $\subseteq$ is total (on $\R$).

Let $\alpha, \beta \in \R$.
Suppose that $\beta \nsubseteq \alpha$.
Then we can choose $p \in \beta$ such that $p \notin \alpha$.
Suppose that $q \in \alpha$.
Then $q < p$; otherwise, $p \in \alpha$.
Hence, $q \in \beta$.
That is, $\alpha \subseteq \beta$.
$\blacksquare$


Proof 4
Let $\R$ denote the set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $\le$ denote the ordering on $\R$.

We have that $\left({\Q, \le}\right)$ is a totally ordered set.
The result follows from Dedekind Completion of Totally Ordered Set is Totally Ordered.
$\blacksquare$





