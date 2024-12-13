# 

Source: https://proofwiki.org/wiki/Local_Basis_Test_for_Adherent_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $x \in S$.
Let $\BB_x$ be a local basis of $x$.

Then $x \in S$ is an adherent point of $H$ if and only if:

$\forall U \in \BB_x : H \cap U \ne \O$


Proof
Necessary Condition
Let $x \in S$ be an adherent point of $H$.
By definition of an adherent point of $H$:

$\forall U \in \tau : x \in U$ satisfies $H \cap U \ne \O$
By definition of a local basis of $T$:

$\BB_x \subseteq \tau$
The result follows.
$\Box$


Sufficient Condition
Let $x$ satisfy:

$\forall U \in \BB_x : H \cap U \ne \O$

Let $V$ be any open neighborhood of $x$.
By definition of a local basis of $T$:

$\exists U \in \BB : x \in U \subseteq V$
Then:

$H \cap U \ne \O$
From the contrapositive statement of Subsets of Disjoint Sets are Disjoint:

$H \cap V \ne \O$

Thus $x$ is an adherent point of $H$ by definition.
$\blacksquare$





