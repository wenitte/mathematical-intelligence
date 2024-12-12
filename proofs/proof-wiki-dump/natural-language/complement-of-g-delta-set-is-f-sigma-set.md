# 

Source: https://proofwiki.org/wiki/Complement_of_G-Delta_Set_is_F-Sigma_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $X$ be an $G_\delta$ set of $T$.

Then its complement $S \setminus X$ is an $F_\sigma$ set of $T$.


Proof
Let $X$ be a $G_\delta$ set of $T$.
Let $X = \bigcap \UU$ where $\UU$ is a countable set of open sets in $T$.
Then from De Morgan's Laws: Difference with Intersection we have:

$\ds S \setminus X = S \setminus \bigcap \UU = \bigcup_{U \mathop \in \UU} \paren {S \setminus U}$
By definition of closed set, each of the $S \setminus U$ are closed sets.
So $\ds \bigcup_{U \mathop \in \UU} \paren {S \setminus U}$ is a countable union of closed sets in $T$.
Hence $S \setminus X$ is, by definition, an $F_\sigma$ set of $T$.
$\blacksquare$


Also see
Complement of $F_\sigma$ Set is $G_\delta$ Set


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Problems: Section $1: \ 3$




