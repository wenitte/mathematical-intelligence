# 

Source: https://proofwiki.org/wiki/Countable_Local_Basis_in_Compact_Complement_Topology

Theorem
Let $T = \struct {\R, \tau}$ be the compact complement topology on $\R$.
Let $p \in \R$.
Then sets of the form:

$\openint \gets {-n} \cup \openint {p - \dfrac 1 n} {p + \dfrac 1 n} \cup \openint n \to$
form a countable local basis for $p$.


Proof
Let $p \in \R$.
Let:

$\BB_p = \set {\openint \gets {-n} \cup \openint {p - \dfrac 1 n} {p + \dfrac 1 n} \cup \openint n \to: n \in \N}$
Let $n \in \N$ and $P_n \in \BB$, so that:

$P_n = \openint \gets {-n} \cup \openint {p - \dfrac 1 n} {p + \dfrac 1 n} \cup \openint n \to$
Then:

$\R \setminus P_n = \closedint {-n} {p - \dfrac 1 n} \cup \closedint {p + \dfrac 1 n} n$
which is the union of two compact sets in $\R$ and therefore itself compact.
Clearly $p \in P_n$.
So $\BB$ is a set of open neighborhoods of $p$ in $T$.
Now let $U \in \tau$ such that $p \in U$.
Then $V := \R \setminus U$ is compact and is therefore bounded.
Suppose $\sup V = M, \inf V = m$.
Then $\exists n_B \in \N: n_T > M, -n_B > m$.
But as $p \notin V$ we have:

$\exists \epsilon \in \R: p + \epsilon \notin V, p - \epsilon \notin V$
So $\exists n \in \N: \epsilon > \dfrac 1 n$
and so by making $n$ large enough you can fix it so that:

$\openint \gets {-n} \cup \openint {p - \dfrac 1 n} {p + \dfrac 1 n} \cup \openint n \to \subseteq U$
so fulfilling the conditions for $\BB$ to be a local basis for $p$ which is countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $22$. Compact Complement Topology: $5$




