# 

Source: https://proofwiki.org/wiki/Countable_Complement_Space_is_not_First-Countable

Theorem
Let $T = \struct {S, \tau}$ be a countable complement topology on an uncountable set $S$.

Then $T$ is not a first-countable space.


Proof
Aiming for a contradiction, suppose some $x \in S$ has a countable local basis.
That means:

there exists a countable set of sets $\BB_x \subseteq \tau$
such that:

$\forall B \in \BB_x: x \in B$
and such that:

every open neighborhood of $x$ contains some $B \in \BB_x$.

So:














\(\ds \bigcap \BB_x\)

\(=\)







\(\ds \set x\)














\(\ds \leadsto \ \ \)





\(\ds S \setminus \set x\)

\(=\)







\(\ds S \setminus \bigcap \BB_x\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{B \mathop \in \BB_x} \paren {S \setminus B}\)





De Morgan's Laws: Difference with Intersection



By definition, each of $S \setminus B$ is countable.
From Countable Union of Countable Sets is Countable it follows that $\ds \bigcup_{B \mathop \in \BB_x} \paren {S \setminus B}$ is also countable.
So $S \setminus \set x$ and therefore $S$ is also countable.
From this contradiction (as we have specified that $S$ is uncountable) it follows that our assumption that $x \in S$ has a countable local basis must be false.
Hence by definition $T$ can not be first-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $3$




