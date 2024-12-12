# 

Source: https://proofwiki.org/wiki/Basis_Test_for_Limit_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB$ be a synthetic basis of $T$.
Let $H \subseteq S$.

Then $x \in S$ is a limit point of $H$ if and only if:

$\forall U \in \BB : x \in U$ satisfies $H \cap U \setminus \set x \ne \O$


Proof
Necessary Condition
Let $x \in S$ be a limit point of $H$.
By definition of a limit point of $H$:

$\forall U \in \tau : x \in U$ satisfies $H \cap U \setminus \set x \ne \O$
By definition of a synthetic basis of $T$:

$\BB \subseteq \tau$
The result follows.
$\Box$


Sufficient Condition
Let $x$ satisfy:

$\forall U \in \BB : x \in U$ satisfies $H \cap U \setminus \set x \ne \O$

Let $V$ be any open neighborhood of $x$.
By definition of a synthetic basis of $T$:

$\exists U \in \BB : x \in U \subseteq V$
Then:

$H \cap U \setminus \set x \ne \O$
From the contrapositive statement of Subsets of Disjoint Sets are Disjoint:

$H \cap V \setminus \set x \ne \O$

Thus $x$ is a limit point of $H$ by definition.
$\blacksquare$





