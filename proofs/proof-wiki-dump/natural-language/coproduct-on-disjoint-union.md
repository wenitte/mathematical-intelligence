# 

Source: https://proofwiki.org/wiki/Coproduct_on_Disjoint_Union

Theorem
Let $S_1$ and $S_2$ be sets.
Let $S_1 \sqcup S_2 := \paren {S_1 \times \set 1} \cup \paren {S_2 \times \set 2}$ be the disjoint union of $S_1$ and $S_2$.

Let $i_1: S_1 \to S_1 \sqcup S_2$ and $i_2: S_2 \to S_1 \sqcup S_2$ be the mappings defined as:

$\forall s_1 \in S_1: \map {i_1} {s_1} = \tuple {s_1, 1}$
$\forall s_2 \in S_2: \map {i_2} {s_2} = \tuple {s_2, 2}$

Then $\struct {S_1 \sqcup S_2, i_1, i_2}$ is a coproduct of $S_1$ and $S_2$.


Proof
For $\struct {S_1 \sqcup S_2, i_1, i_2}$ to be a coproduct, it is necessary that:

for all sets $X$ and all mappings $f_1: S_1 \to X$ and $f_2: S_2 \to X$
there exists a unique mapping $h: S_1 \sqcup S_2 \to X$ such that:
$h \circ i_1 = f_1$
$h \circ i_2 = f_2$

Let $h$ be the mapping defined as:

$\forall \tuple {s, t} \in S_1 \sqcup S_2: \map h {s, t} = \begin {cases} \map {f_1} s & : t = 1 \\ \map {f_2} s & : t = 2 \end {cases}$
Then:














\(\ds \map {h \circ i_1} {s_1}\)

\(=\)







\(\ds \map h {s_1, 1}\)




















\(\ds \)

\(=\)







\(\ds \map {f_1} {s_1}\)










and:












\(\ds \map {h \circ i_2} {s_2}\)

\(=\)







\(\ds \map h {s_2, 2}\)




















\(\ds \)

\(=\)







\(\ds \map {f_2} {s_2}\)









The existence of $h$ is apparent.
It remains to prove that $h$ is unique.

Let $h_1: S_1 \sqcup S_2 \to X$ and $h_2: S_1 \sqcup S_2 \to X$ both be mappings with the properties of $h$.
Let $\tuple {s, t} \in S_1 \sqcup S_2$ be arbitrary.
Then:














\(\ds \map {h_1 \circ i_1} {s_1}\)

\(=\)







\(\ds \map {f_1} {s_1}\)




















\(\ds \)

\(=\)







\(\ds \map {h_2 \circ i_1} {s_1}\)





as $h_1$ and $h_2$ have the same properties








\(\ds \leadsto \ \ \)





\(\ds \map {h_1} {s_1, 1}\)

\(=\)







\(\ds \map {h_2} {s_1, 1}\)





for all $s_1 \in S_1$




and:














\(\ds \map {h_1 \circ i_2} {s_2}\)

\(=\)







\(\ds \map {f_2} {s_2}\)




















\(\ds \)

\(=\)







\(\ds \map {h_2 \circ i_2} {s_2}\)





as $h_1$ and $h_2$ have the same properties








\(\ds \leadsto \ \ \)





\(\ds \map {h_2} {s_2, 2}\)

\(=\)







\(\ds \map {h_2} {s_2, 2}\)





for all $s_2 \in S_2$



Hence $h_1 = h_2$ and so $h$ is unique

Hence $\struct {S_1 \sqcup S_2, i_1, i_2}$ is a coproduct of $S_1$ and $S_2$.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $18$




