# 

Source: https://proofwiki.org/wiki/Complement_of_Singleton_Closure_is_Meet-Irreducible

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $x \in S$.

Then:

$S \setminus \set x^-$ is a meet-irreducible open set
where $\set x^-$ denotes the closure of $\set x$


Proof
From Characterization of Meet-Irreducible Open Set:
$S \setminus \set x^-$ is a meet-irreducible open set if and only if

$\forall U, V \in \tau : \paren {U \cap V \subseteq S \setminus \set x^- \implies U \subseteq S \setminus \set x^- \text { or } V \subseteq S \setminus \set x^-}$

Let:

$U, V \in \tau: U \cap V \subseteq S \setminus \set x^-$

By Set is Subset of its Topological Closure:

$x \in \set x^-$
By definition of set difference:

$x \notin S \setminus \set x^-$
By definition of subset:

$x \notin U \cap V$
By definition of set intersection:

either $x \notin U$ or $x \notin V$

Without loss of generality, suppose $x \notin U$.
By definition of set complement:

$x \in S \setminus U$

We have $S \setminus U$ is a closed set by definition.
From Closure of Subset of Closed Set of Topological Space is Subset:

$\set x^- \subseteq S \setminus U$
From Subset of Set Difference iff Disjoint Set:

$U \subseteq S \setminus \set x^-$

The result follows.
$\blacksquare$


Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter $1$: Spaces and Lattices of Open Sets, $\S 1$ Sober spaces, Definition $1.1$




