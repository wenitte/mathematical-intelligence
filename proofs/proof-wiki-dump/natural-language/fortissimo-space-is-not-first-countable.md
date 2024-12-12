# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_not_First-Countable

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is not a first-countable space.


Proof
This proof follows the proof from Countable Complement Space is not First-Countable.

Aiming for a contradiction, suppose that $p \in S$ has a countable local basis.
That means:

there exists a countable set of sets $\BB_p \subseteq \tau$
such that:

$\forall B \in \BB_p: p \in B$
and such that:

every open neighborhood of $p$ contains some $B \in \BB_p$.

So:














\(\ds \bigcap \BB_p\)

\(=\)







\(\ds \set p\)














\(\ds \leadsto \ \ \)





\(\ds S \setminus \set p\)

\(=\)







\(\ds S \setminus \bigcap \BB_p\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{B \mathop \in \BB_p} \paren {S \setminus B}\)





De Morgan's Laws: Difference with Intersection



By definition of the fortissimo space, each of $S \setminus B$ is countable.
From Countable Union of Countable Sets is Countable it follows that $\ds \bigcup_{B \mathop \in \BB_p} \paren {S \setminus B}$ is also countable.
So $S \setminus \set p$ and therefore $S$ is also countable.
From this contradiction (as we have specified that $S$ is uncountable) it follows that our assumption that $p \in S$ has a countable local basis must be false.
Hence by definition $T$ can not be first-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $1$




