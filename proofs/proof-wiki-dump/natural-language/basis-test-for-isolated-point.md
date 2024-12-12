# 

Source: https://proofwiki.org/wiki/Basis_Test_for_Isolated_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB$ be a synthetic basis of $T$.
Let $H \subseteq S$.

Then $x \in H$ is an isolated point of $H$ if and only if:

$\exists U \in \BB : U \cap H = \set x$


Proof
Necessary Condition
Let $x \in H$ be an isolated point of $H$.
By definition of an isolated point:

$\exists U \in \tau: U \cap H  = \set x$
By definition of a synthetic basis of $T$:

$\exists V \in \BB: x \in V \subseteq U$
From Set Intersection Preserves Subsets:

$V \cap H \subseteq U \cap H  = \set x$
From Singleton of Element is Subset:

$\set x \subseteq V \cap H$
From set equality:

$V \cap H  = \set x$
$\Box$


Sufficient Condition
Let $U \in \BB : U \cap H = \set x$.
By definition of synthetic basis of $T$:

$U \in \tau$
Then $x$ is an isolated point of $H$ by definition.
$\blacksquare$





