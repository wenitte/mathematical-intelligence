# 

Source: https://proofwiki.org/wiki/Connectedness_of_Points_is_Equivalence_Relation



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $a \sim b $ denote the relation:

$a \sim b \iff a$ is connected to $b$
where $a, b \in S$.

Then $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that $\set a \subseteq S$ is a (degenerate) connected set of $S$.
So $a$ is in the same connected set as itself and so $a \sim a$.
So $\sim$ has been shown to be reflexive.
$\Box$


Symmetry
If $x \sim y$ then $x$ is in the same connected set as $y$ by definition.
Trivially it follows that $y$ is in the same connected set as $x$ and so $y \sim x$.
So $\sim$ has been shown to be symmetric.
$\Box$


Transitivity
Let $x \sim y$ and $y \sim z$.
Then by definition:

$x$ is in the same connected set as $y$
$y$ is in the same connected set as $z$
By Union of Connected Sets with Non-Empty Intersections is Connected it follows that $x$ is in the same connected set as $z$.
Thus so $x \sim z$.
So $\sim$ has been shown to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.5$: Components
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




