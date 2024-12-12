# 

Source: https://proofwiki.org/wiki/Countable_Fort_Space_is_Second-Countable

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on a countably infinite set $S$.

Then $T$ is a second-countable space.


Proof
From Subset of Countably Infinite Set is Countable, $S \setminus \set p$ is countable.
Let $f: \N \to S$ be an enumeration of $S \setminus \set p$.
For brevity, let us write $s_n$ for $\map f n$.

Now define, for $n \in \N$, $S_n = S \setminus \set {s_0, \ldots, s_{n - 1} }$.
Note that $s_n \ne p$ for all $n \in \N$, so that $p \in S_n$ for all $n$.
By Relative Complement of Relative Complement, $S \setminus S_n = \set {s_0, \ldots, s_{n - 1} }$ and so $S_n \in \tau_p$.
Also, define $S'_n = \set {s_n}$.
Since $s_n \ne p$, $S'_n$ is open in $\tau_p$ as well.
From Finite Union of Countable Sets is Countable, $\BB := \set {S_n : n \in \N} \cup \set {S'_n : n \in \N}$ is countable.

Let us verify that $\BB$ forms a basis for $\tau_p$.
So let $U \subseteq S$ be open in $\tau_p$.

If $p \notin U$ then $\ds U = \bigcup \set {S'_n: s_n \in U}$ because the $s_n$ form an enumeration of $S \setminus \set p$.
Now if $p \in U$, then by definition of the Fort topology, $S \setminus U$ must be finite.
It follows that $A = \set {n \in \N: s_n \in S \setminus U}$ is also finite.
From Subset of Naturals is Finite iff Bounded, there exists an $N \in \N$ such that $N - 1 > n$ for all $n \in A$.
Therefore, $A \subseteq \set {0, \ldots, N - 1}$ and hence:

$S \setminus U \subseteq \set {s_0, \ldots, s_{N - 1} }$
From Set Complement inverts Subsets, also:

$S_N = S \setminus \set {s_0, \ldots, s_{N - 1} } \subseteq U$

It follows that $\BB$ is a basis for $\tau_p$.
Since $\BB$ is countable, we conclude $T$ is second-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $23$. Countable Fort Space: $6$




