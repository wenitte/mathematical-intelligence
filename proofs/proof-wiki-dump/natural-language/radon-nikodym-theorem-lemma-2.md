# 

Source: https://proofwiki.org/wiki/Radon-Nikodym_Theorem/Lemma_2

Lemma
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$.

Then there exists a pairwise disjoint sequence of $\Sigma$-measurable sets $\sequence {X_n}_{n \in \mathop \N}$ such that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
where: 

$\map \mu {X_n} < \infty$ and $\map \nu {X_n} < \infty$ for each $n$.


Proof
Since $\mu$ is $\sigma$-finite, there exists a sequence of $\Sigma$-measurable sets $\sequence {A_n}_{n \mathop \in \N}$ such that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty A_n$
with: 

$\map \mu {A_n} < \infty$ for each $n$.
From Countable Union of Measurable Sets as Disjoint Union of Measurable Sets, there exists a sequence of pairwise disjoint  $\Sigma$-measurable sets $\sequence {E_n}_{n \mathop \in \N}$ with:

$\ds X = \bigcup_{n \mathop = 1}^\infty E_n$
with:

$E_n \subseteq A_n$ for each $n$.
From Measure is Monotone, we have that: 

$\map {\mu} {E_n} \le \map {\mu} {A_n}$ for each $n$.
So:

$\map {\mu} {E_n}$ is finite for each $n$.
Since $\nu$ is $\sigma$-finite, there exists a sequence of $\Sigma$-measurable sets $\sequence {B_n}_{n \mathop \in \N}$ such that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty B_n$
with: 

$\map \nu {B_n} < \infty$ for each $n$.
From Countable Union of Measurable Sets as Disjoint Union of Measurable Sets, there exists a sequence of pairwise disjoint  $\Sigma$-measurable sets $\sequence {F_n}_{n \mathop \in \N}$ with:

$\ds X = \bigcup_{n \mathop = 1}^\infty F_n$
with:

$F_n \subseteq B_n$ for each $n$.
From Measure is Monotone, we have that: 

$\map \nu {F_n} \le \map \nu {B_n}$ for each $n$.
So:

$\map \nu {F_n}$ is finite for each $n$.
Note that for $\tuple {i_1, j_1} \ne \tuple {i_2, j_2}$, we have: 














\(\ds \paren {E_{i_1} \cap F_{j_1} } \cap \paren {E_{i_2} \cap F_{j_2} }\)

\(=\)







\(\ds \paren {E_{i_1} \cap E_{i_2} } \cap \paren {E_{i_2} \cap F_{j_2} }\)




















\(\ds \)

\(=\)







\(\ds \O\)





since either $i_1 \ne i_2$ or $j_1 \ne j_2$



So $\set {E_i \cap F_j : \tuple {i, j} \in \N^2}$ is a pairwise disjoint family of sets.
We have: 














\(\ds \bigcup_{i \mathop = 1}^\infty \bigcup_{j \mathop = 1}^\infty \paren {E_i \cap F_j}\)

\(=\)







\(\ds \bigcup_{i \mathop = 1}^\infty \paren {E_i \cap \paren {\bigcup_{j \mathop = 1}^\infty F_j} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop = 1}^\infty E_i} \cap \paren {\bigcup_{j \mathop = 1}^\infty F_j}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds X \cap X\)




















\(\ds \)

\(=\)







\(\ds X\)









For each $i, j$, we now have: 














\(\ds \map \mu {E_i \cap F_j}\)

\(\le\)







\(\ds \map \mu {E_i}\)





Intersection is Subset, Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)









and:














\(\ds \map \nu {E_i \cap F_j}\)

\(\le\)







\(\ds \map \nu {F_j}\)





Intersection is Subset, Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)









From Cartesian Product of Countable Sets is Countable, we have: 

$\set {E_i \cap F_j : \tuple {i, j} \in \N^2}$ is countable.
So we can find a bijection: 

$f : \N \to \set {E_i \cap F_j : \tuple {i, j} \in \N^2}$
Writing: 

$X_n = \map f n$
for each $n \in \N$, we have: 

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
with $\sequence {X_n}_{n \mathop \in \N}$ pairwise disjoint: 

$\map \mu {X_n} < \infty$ and $\map \nu {X_n} < \infty$ for each $n$.
So we are done.
$\blacksquare$





