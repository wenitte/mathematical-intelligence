# 

Source: https://proofwiki.org/wiki/Outer_Measure_of_Limit_of_Increasing_Sequence_of_Sets

Theorem
Let $\mu^*$ be an outer measure on a set $X$.
Let $\sequence {S_n}$ be an increasing sequence of $\mu^*$-measurable sets, and let $S_n \uparrow S$ (as $n \to \infty$).

Then for any subset $A \subseteq X$:

$\ds \map {\mu^*} {A \cap S} = \lim_{n \mathop \to \infty} \map {\mu^*} {A \cap S_n}$


Proof
By the monotonicity of $\mu^*$, it suffices to prove that:

$\ds \map {\mu^*} {A \cap S} \le \lim_{n \mathop \to \infty} \map {\mu^*} {A \cap S_n}$
Assume that $\map {\mu^*} {A \cap S_n}$ is finite for all $n \in \N$, otherwise the statement is trivial by the monotonicity of $\mu^*$.

Let $S_0 = \O$.
Then $x \in S$ if and only if there exists an integer $n \ge 0$ such that $x \in S_{n + 1}$. 
Taking the least possible $n$, it follows that $x \notin S_n$, and so:

$x \in S_{n + 1} \setminus S_n$
Therefore:

$\ds S = \bigcup_{n \mathop = 0}^\infty \paren {S_{n + 1} \setminus S_n}$
From Intersection Distributes over Union:

$\ds A \cap S = A \cap \bigcup_{n \mathop = 0}^\infty \paren {S_{n + 1} \setminus S_n} = \bigcup_{n \mathop = 0}^\infty \paren {A \cap \paren {S_{n + 1} \setminus S_n} }$
Therefore:














\(\ds \map {\mu^*} {A \cap S}\)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \map {\mu^*} {A \cap \paren {S_{n + 1} \setminus S_n} }\)





Definition of Countably Subadditive Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\map {\mu^*} {A \cap S_{n + 1} } - \map {\mu^*} {A \cap S_{n + 1} \cap S_n} }\)





Definition of Measurable Set of Arbitrary Outer Measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\map {\mu^*} {A \cap S_{n + 1} } - \map {\mu^*} {A \cap S_n} }\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\mu^*} {A \cap S_n} - \map {\mu^*} {A \cap \O}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\mu^*} {A \cap S_n}\)





Intersection with Empty Set and Definition of Outer Measure



$\blacksquare$





