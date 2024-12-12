# 

Source: https://proofwiki.org/wiki/Complement_of_F-Sigma_Set_is_G-Delta_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $X$ be an $F_\sigma$ set of $T$.

Then its complement $S \setminus X$ is a $G_\delta$ set of $S$.


Proof
Let $X$ be an $F_\sigma$ set of $T$.
Then $X = \ds \bigcup \VV$ where $\VV$ is a countable set of closed sets in $T$.
Then from De Morgan's Laws: Difference with Union we have:

$\ds S \setminus X = S \setminus \bigcup \VV = \bigcap_{V \mathop \in \VV} \paren {S \setminus V}$
By definition of closed set, each of the $S \setminus V$ are open sets.
So $\ds \bigcap_{V \mathop \in \VV} \paren {S \setminus V}$ is a countable intersection of open sets in $T$.
Hence $S \setminus X$ is, by definition, a $G_\delta$ set of $T$.
$\blacksquare$


Also see
Complement of $G_\delta$ Set is $F_\sigma$ Set


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Problems: Section $1: \ 3$




