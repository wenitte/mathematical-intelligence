# 

Source: https://proofwiki.org/wiki/Countable_Complement_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be a countable complement space.

Then $\tau$ is a topology on $T$.


Proof
By definition, we have that $\O \in \tau$.
We also have that $S \in \tau$ as $\relcomp S S = \O$ which is trivially countable.

Now suppose $A, B \in \tau$.
Let $H = A \cap B$.
Then:














\(\ds H\)

\(=\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S H\)

\(=\)







\(\ds \relcomp S {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \relcomp S A \cup \relcomp S B\)





De Morgan's Laws: Complement of Intersection



But as $A, B \in \tau$ it follows that $\relcomp S A$ and $\relcomp S B$ are both countable.
Hence from Countable Union of Countable Sets is Countable their union is also countable and so $\relcomp S H$ is countable.
So $H = A \cap B \in \tau$ as its complement is countable.

Now let $\UU \subseteq \tau$.
Then:

$\ds \relcomp S {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp S U$
by De Morgan's Laws: Complement of Union.

But as:

$\forall U \in \UU: \relcomp S U \in \tau$
each of the $\relcomp S U$ is countable.
Hence so is their intersection.
So $\ds \relcomp S {\bigcup \UU}$ is countable which means:

$\ds \bigcup \UU \in \tau$

So $\tau$ is a topology on $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology




