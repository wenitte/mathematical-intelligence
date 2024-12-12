# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Disjoint_Union/Corollary

Theorem
Let $X$ be a set. 
Let $\set {D_1, D_2, \ldots, D_N}$ be a set of pairwise disjoint subsets of $X$. 
Let: 

$\ds D = \bigcup_{n \mathop = 1}^N D_n$

Then: 

$\ds \chi_D = \sum_{n \mathop = 1}^N \chi_{D_n}$
where:

$\chi_D$ is the characteristic function of $D$
$\chi_{D_n}$ is the characteristic function of $D_n$.


Proof
We can extend $\set {D_1, D_2, \ldots, D_N}$ to a sequence $\sequence {D_n}_{n \mathop \in \N}$ of subsets of $X$ by setting: 

$D_i = \O$ for $i \ge N + 1$
Clearly, from Intersection with Empty Set, we have: 

$D_i \cap D_j = \O$ for $i \ge N + 1$ and all $j$.
So $\sequence {D_n}_{n \mathop \in \N}$ is a sequence of pairwise disjoint subsets of $X$ with: 

$\ds D = \bigcup_{n \mathop = 1}^\infty D_n$
We therefore have, by Characteristic Function of Disjoint Union:

$\ds \chi_D = \sum_{n \mathop = 1}^\infty \chi_{D_n}$
We can write:














\(\ds \sum_{n \mathop = 1}^\infty \chi_{D_n}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \chi_{D_n} + \sum_{n \mathop = N + 1}^\infty \chi_{D_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \chi_{D_n} + \sum_{n \mathop = N + 1}^\infty \chi_\O\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \chi_{D_n} + \sum_{n \mathop = N + 1}^\infty 0\)





Characteristic Function of Empty Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \chi_{D_n}\)









$\blacksquare$





