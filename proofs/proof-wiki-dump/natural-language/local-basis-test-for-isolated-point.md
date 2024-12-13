# 

Source: https://proofwiki.org/wiki/Local_Basis_Test_for_Isolated_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $x \in H$.
Let $\BB_x$ be a local basis of $x$.

Then $x$ is an isolated point of $H$ if and only if:

$\exists U \in \BB_x : U \cap H = \set x$


Proof
Necessary Condition
Let $x \in H$ be an isolated point of $H$.
By definition of an isolated point:

$\exists U \in \tau: U \cap H  = \set x$
By definition of a local basis of $T$:

$\exists V \in \BB_x : x \in V \subseteq U$
From Set Intersection Preserves Subsets:

$V \cap H \subseteq U \cap H  = \set x$
From Singleton of Element is Subset:

$\set x \subseteq V \cap H$
From set equality:

$V \cap H  = \set x$
$\Box$


Sufficient Condition
Let $U \in \BB_x : U \cap H = \set x$.
By definition of local basis of $T$:

$U \in \tau$
Then $x$ is an isolated point of $H$ by definition.
$\blacksquare$





