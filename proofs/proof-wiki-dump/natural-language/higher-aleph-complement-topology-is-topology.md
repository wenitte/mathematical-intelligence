# 

Source: https://proofwiki.org/wiki/Higher-Aleph_Complement_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be an $\aleph_n$ complement space.

Then $\tau$ is a topology on $T$.


Proof
By definition, we have that $\O \in \tau$.
We also have that $S \in \tau$ as $\relcomp S S = \O$ which is trivially finite.

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



But as $A, B \in \tau$ it follows that $\relcomp S A$ and $\relcomp S B$ both have a cardinality strictly smaller than that of $S$.
Hence their union also has a cardinality strictly smaller than that of $S$.
So $\relcomp S H$ has a cardinality strictly smaller than that of $S$.
So $H = A \cap B \in \tau$ as its complement has a cardinality strictly smaller than that of $S$.

Now let $\UU \subseteq \tau$.
Then from De Morgan's laws: Complement of Union:

$\ds \relcomp S {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp S U$

But as:

$\forall U \in \UU: \relcomp S U \in \tau$
each of the $\relcomp S U$ has a cardinality strictly smaller than that of $S$.
Hence so has their intersection.
So $\ds \relcomp S {\bigcup \UU}$ has a cardinality strictly smaller than that of $S$, which means:

$\ds \bigcup \UU \in \tau$

So $\tau$ is a topology on $T$.
$\blacksquare$


Sources
Believed original to Prime.mover




