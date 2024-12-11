# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Numbers_are_Dedekind_Complete



Theorem
Let $\R$ denote the set of real numbers.
Let $\le$ denote ordering on $\R$.

Then the ordered set $\left({\R, \le}\right)$ is Dedekind complete.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By definition, $\left({\R, \le}\right)$ is Dedekind complete.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\le$ denote the ordering on $\R$.

Let $A \subseteq \R$ be non-empty and bounded above.
Let $a = \left[{\!\left[{\left\langle{a_n}\right\rangle}\right]\!}\right]$ be an upper bound for $A$ in $\R$.
Since a Cauchy sequence is bounded, we have that $\left\langle{a_n}\right\rangle$ is bounded above by some $p_0 \in \Q$.
We have that $\left[{\!\left[{\left\langle{p_0}\right\rangle}\right]\!}\right]$ is an upper bound for $A$ in $\R$.
Let $b = \left[{\!\left[{\left\langle{b_n}\right\rangle}\right]\!}\right] \in A$.
Since a Cauchy sequence is bounded, we have that $\left\langle{b_n}\right\rangle$ is bounded below by some $q_0 \in \Q$.
We have that $p_0 \ge q_0$.

We now define a sequence $\left\langle{u_n}\right\rangle$.
Since $\left({\Q, +, \le}\right)$ is an Archimedean totally ordered group, there exists an $N \in \N$ such that $2^{-n} N > p_0 - q_0$.
We have that $\left[{\!\left[{\left\langle{p_0 - 2^{-n} N}\right\rangle}\right]\!}\right]$ is not an upper bound for $A$ in $\R$.
By the Well-Ordering Principle, the set:

$S_n = \left\{{N \in \N: \left[{\!\left[{\left\langle{p_0 - 2^{-n} N}\right\rangle}\right]\!}\right]}\right.$ is not an upper bound for $A$ in $\left.{\R}\right\}$
has a smallest element $\sigma_n \ne 0$.
We define the sequence $\left\langle{u_n}\right\rangle$ as:

$u_n = p_0 - 2^{-n} \left({\sigma_n - 1}\right)$
We claim that $u = \left[{\!\left[{\left\langle{u_n}\right\rangle}\right]\!}\right]$ is the supremum of $A$ in $\R$.

First, we show that $\left\langle{u_n}\right\rangle$ is a Cauchy sequence.
Since $2 \sigma_n \in S_{n+1}$, we have that $\sigma_{n+1} \le 2 \sigma_n$.
Hence:

$u_n - u_{n+1} = 2^{-n-1} - 2^{-n-1} \left({2 \sigma_n - \sigma_{n+1}}\right) \le 2^{-n-1}$
Since $0 \le 2 \sigma_n - 2 \notin S_{n+1}$, we have that $\sigma_{n+1} > 2 \sigma_n - 2$.
Therefore, $\sigma_{n+1} \ge 2 \sigma_n - 1$.
Hence:

$u_n - u_{n+1} = 2^{-n-1} \left({\sigma_{n+1} - 2 \sigma_n + 1}\right) \ge 0$
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
By Sequence of Powers of Number less than One, there exists an $N \in \N$ such that $2^{-N} < \epsilon$.
Let $m, n \in \N$, $N \le m < n$.
Then:














\(\ds 0\)

\(\le\)







\(\ds u_m - u_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^{n-1} \left({ u_k - u_{k+1} }\right)\)




















\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = m}^{\infty} 2^{-k-1}\)




















\(\ds \)

\(=\)







\(\ds 2^{-m}\)





by Sum of Geometric Progression














\(\ds \)

\(<\)







\(\ds \epsilon\)










We show that $u$ is an upper bound for $A$ in $\R$.
Suppose $x = \left[{\!\left[{\left\langle{x_n}\right\rangle}\right]\!}\right] \in A$.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
Since $\left\langle{u_n}\right\rangle$ is a Cauchy sequence, there exist $M, M' \in \N$ such that, for all $m, n \in \N$:

$m, n \ge M \implies \left\vert{u_m - u_n}\right\vert < \dfrac \epsilon 2$
$n > M' \implies x_n < u_M + \dfrac \epsilon 2$
Let $N = \max {\left\{{M, M'}\right\}} \in \N$.
It follows that, for all $n \in \N$:

$n > N \implies x_n < u_M + \dfrac \epsilon 2 < u_n + \epsilon$
Hence, $x \le u$.

Let $v = \left[{\!\left[{\left\langle{v_n}\right\rangle}\right]\!}\right]$ be an upper bound for $A$ in $\R$.
We show that $u \le v$.
Let $\epsilon \in \Q_{>0}$ be a strictly positive rational number.
By Sequence of Powers of Number less than One, there exists an $m \in \N$ such that $2^{-m} < \dfrac \epsilon 2$.
We have that $\left[{\!\left[{\left\langle{p_0 - 2^{-m} \sigma_m}\right\rangle}\right]\!}\right] \le \left[{\!\left[{\left\langle{v_n}\right\rangle}\right]\!}\right]$.
By the definition of $\le$, there exists an $M \in \N$ such that, for all $n \in \N$:

$n > M \implies p_0 - 2^{-m} \sigma_m < v_n + \dfrac \epsilon 2$
It follows that:

$n > M \implies u_m < v_n + \epsilon$
Let $N = \max {\left\{{m, M}\right\}} \in \N$.
Let $n \in \N$, $n > N$. Then:

$u_n \le u_m < v_n + \epsilon$
Hence, $u \le v$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $A \subseteq \R$ be non-empty and bounded above.
Let $\displaystyle \beta = \bigcup A$ be the union of $A$.
We claim that $\beta$ is the supremum of $A$ in $\R$.

First, we show that $\beta$ is the supremum of $A$ in the power set $\mathcal P \left({\Q}\right)$.
From Set is Subset of Union, we have that $\beta$ is an upper bound for $A$ in $\mathcal P \left({\Q}\right)$.
Suppose that $u$ is an upper bound for $A$ in $\mathcal P \left({\Q}\right)$.
Then $\forall \alpha \in A: \alpha \subseteq u$.
From Union is Smallest Superset, we have that $\beta \subseteq u$.

Now, we show that $\beta \in \R$.
Since $A$ is non-empty and all of its elements are non-empty, it follows that $\beta$ is non-empty.
Let $v$ be an upper bound for $A$ in $\R$.
Then $\beta \subseteq v$.
Since $v \ne \Q$, we have that $\beta \ne \Q$.
Suppose $q \in \beta$.
Then we can choose $\alpha \in A$ such that $q \in \alpha$, and we can choose $r > q$ such that $r \in \alpha \subseteq \beta$.
If $p \in \Q$ and $p < q$, then $p \in \alpha \subseteq \beta$.
$\blacksquare$


Proof 4
Let $\left({\R, \le}\right)$ denote the ordered set of real numbers, as defined as the Dedekind completion of the rational numbers.
By definition, $\left({\R, \le}\right)$ is Dedekind complete.
$\blacksquare$





