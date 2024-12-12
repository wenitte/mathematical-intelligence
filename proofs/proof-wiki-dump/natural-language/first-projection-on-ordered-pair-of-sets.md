# 

Source: https://proofwiki.org/wiki/First_Projection_on_Ordered_Pair_of_Sets

Theorem
Let $a$ and $b$ be sets.
Let $w = \tuple {a, b}$ denote the ordered pair of $a$ and $b$.
Let $\map {\pr_1} w$ denote the first projection on $w$.

Then:

$\ds \map {\pr_1} w = \bigcup \bigcap w$
where $\ds \bigcup$ and $\ds \bigcap$ denote union and intersection respectively.


Proof
We have by definition of first projection that:

$\map {\pr_1} w = \map {\pr_1} {a, b} = a$

Then:














\(\ds \bigcup \bigcap w\)

\(=\)







\(\ds \bigcup \bigcap \tuple {a, b}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds \bigcup \bigcap \set {\set a, \set {a, b} }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds \map \bigcup {\set a \cap \set {a, b} }\)





Intersection of Doubleton














\(\ds \)

\(=\)







\(\ds \bigcup \set a\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds a\)





Union of Singleton



$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.6 \ \text{(i)}$




