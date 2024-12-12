# 

Source: https://proofwiki.org/wiki/Compact_Complement_Topology_is_Topology

Theorem
Let $T = \struct {\R, \tau}$ be the compact complement space.

Then $\tau$ is a topology on $T$.


Proof
By definition, we have that $\O \in \tau$.
We also have that $\R \in \tau$ as $\relcomp \R \R = \O$ which is trivially compact.

Now suppose $A, B \in \tau$.
Let $H = A \cap B$.
Then:














\(\ds H\)

\(=\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp \R H\)

\(=\)







\(\ds \relcomp \R {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \relcomp \R A \cup \relcomp \R B\)





De Morgan's Laws: Complement of Intersection



But as $A, B \in \tau$ it follows that $\relcomp \R A$ and $\relcomp \R B$ are both compact.
Hence from Union of Compact Sets is Compact their union is also compact and so $\relcomp \R H$ is compact.
So $H = A \cap B \in \tau$ as its complement is compact.

Now let $\UU \subseteq \tau$.
Then from De Morgan's Laws: Complement of Union:

$\ds \relcomp \R {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp \R U$

But as:

$\forall U \in \UU: \relcomp \R U \in \tau$
each of the $\relcomp \R U$ is compact.
Hence from Intersection of Compact Sets is Compact, so is their intersection.
So $\ds \relcomp \R {\bigcup \UU}$ is compact which means $\ds \bigcup \UU \in \tau$.

So $\tau$ is a topology on $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $22$. Compact Complement Topology




