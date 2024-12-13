# 

Source: https://proofwiki.org/wiki/Second_Projection_on_Ordered_Pair_of_Sets

Theorem
Let $a$ and $b$ be sets.
Let $w = \tuple {a, b}$ denote the ordered pair of $a$ and $b$.
Let $\map {\pr_2} w$ denote the second projection on $w$.

Then:

$\ds \map {\pr_2} w = \begin {cases} \ds \map \bigcup {\bigcup w \setminus \bigcap w} & : \ds \bigcup w \ne \bigcap w \\ \ds \bigcup \bigcup w & : \bigcup w = \ds \bigcap w \end {cases}$
where:

$\ds \bigcup$ and $\ds \bigcap$ denote union and intersection respectively.
$\setminus$ denotes the set difference operator.


Proof
We have by definition of second projection that:

$\map {\pr_1} w = \map {\pr_1} {a, b} = b$

We consider:














\(\ds \bigcup w\)

\(=\)







\(\ds \bigcup \tuple {a, b}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds \bigcup \set {\set a, \set {a, b} }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds \set a \cup \set {a, b}\)





Union of Doubleton




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \set {a, b}\)





Definition of Union of Set of Sets


















\(\ds \bigcap w\)

\(=\)







\(\ds \bigcap \tuple {a, b}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds \bigcap \set {\set a, \set {a, b} }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds \set a \cap \set {a, b}\)





Intersection of Doubleton




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \set a\)





Definition of Intersection of Set of Sets




Suppose $\ds \bigcup w \ne \bigcap w$.
Then:














\(\ds \map \bigcup {\bigcup w \setminus \bigcap w}\)

\(=\)







\(\ds \map \bigcup {\set {a, b} \setminus \set a}\)





from $(1)$ and $(2)$ above














\(\ds \)

\(=\)







\(\ds \bigcup \set b\)





Definition of Set Difference, which holds because $a \ne b$














\(\ds \)

\(=\)







\(\ds b\)





Union of Singleton



demonstrating that the first case holds.

Now suppose that $\bigcup w = \bigcap w$.
Thus:














\(\ds \bigcup w\)

\(=\)







\(\ds \bigcap w\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \set {a, b}\)

\(=\)







\(\ds \set a\)










\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)










Hence:














\(\ds \bigcup \bigcup w\)

\(=\)







\(\ds \bigcup \bigcup \tuple {a, b}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds \bigcup \bigcup \set {\set a, \set {a, b} }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds \bigcup \bigcup \set {\set a, \set a}\)





from $(3)$ above














\(\ds \)

\(=\)







\(\ds \map \bigcup {\set a \cup \set a}\)





Union of Doubleton














\(\ds \)

\(=\)







\(\ds \bigcup \set a\)





Set Union is Idempotent














\(\ds \)

\(=\)







\(\ds a\)





Union of Singleton














\(\ds \)

\(=\)







\(\ds b\)





from $(4)$ above



The result follows;
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.6 \ \text{(ii)}$




