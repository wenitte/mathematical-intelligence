# 

Source: https://proofwiki.org/wiki/Knaster-Tarski_Lemma/Power_Set



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $f: \powerset S \to \powerset S$ be a $\subseteq$-increasing mapping.
That is, suppose that for all $T, U \in \powerset S$:

$T \subseteq U \implies \map f T \subseteq \map f U$

Then $f$ has a greatest fixed point and a least fixed point.


Proof
By Power Set is Complete Lattice, $\struct {\powerset S, \cap, \cup, \subseteq}$ is a complete lattice.
Thus the theorem holds by the Knaster-Tarski Lemma.
$\blacksquare$


Source of Name
This entry was named for Bronisław Knaster and Alfred Tarski.


Sources
1955: Alfred Tarski: A lattice-theoretical fixpoint theorem and its applications (Pacific J. Math. Vol. 5, no. 2: pp. 285 – 309): Footnote $2$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Lemma $9.2.2$




