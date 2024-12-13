# 

Source: https://proofwiki.org/wiki/Knaster-Tarski_Lemma/Corollary/Power_Set



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $f: \powerset S \to \powerset S$ be a $\subseteq$-increasing mapping.
That is, suppose that for all $T, U \in \powerset S$:

$T \subseteq U \implies \map f T \subseteq \map f U$

Then $f$ has a fixed point.


Proof 1
By the Knaster-Tarski Lemma: Power Set, $f$ has a least fixed point.
Thus it has a fixed point.
$\blacksquare$


Proof 2
Let $P = \set {x \in \powerset S: x \subseteq \map f x}$.
Let $\ds \bigcup P$ be the union of $P$.
Let $x \in P$.
Then by Set is Subset of Union: General Result:

$\ds x \subseteq \bigcup P$
Since $f$ is increasing, $\map f x \subseteq \map f {\bigcup P}$.
By definition of $P$, $x \subseteq \map f x$.
Thus $\ds x \subseteq \map f {\bigcup P}$ by Subset Relation is Transitive:
As this holds for all $x \in P$,  by Union is Smallest Superset: General Result:

$\ds \bigcup P \subseteq \map f {\bigcup P}$
Now since $f$ is increasing:

$\ds \map f {\bigcup P} \subseteq \map f {\map f {\bigcup P} }$
Thus $\ds \map f {\bigcup P} \in P$ by definition of $P$.
Therefore by Set is Subset of Union: General Result:

$\ds \map f {\bigcup P} \subseteq \bigcup P$
We have that:

$\ds \bigcup P \subseteq \map f {\bigcup P}$
Thus by definition of set equality:

$\ds \map f {\bigcup P} = \bigcup P$
Thus $\ds \bigcup P$ is a fixed point of $f$.
$\blacksquare$


Source of Name
This entry was named for Bronisław Knaster and Alfred Tarski.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Lemma $9.2.2$




