# 

Source: https://proofwiki.org/wiki/Complement_of_Limit_Superior_is_Limit_Inferior_of_Complements

Theorem
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of sets.

Then:

$\ds \map \complement {\limsup_{n \mathop \to \infty} \ E_n} = \liminf_{n \mathop \to \infty} \ \map \complement {E_n}$
where $\limsup$ and $\liminf$ denote the limit superior and limit inferior, respectively.


Proof













\(\ds \map \complement {\limsup_{n \mathop \to \infty} \ E_n}\)

\(=\)







\(\ds \map \complement {\bigcap_{n \mathop = 0}^\infty \bigcup_{i \mathop = n}^\infty E_n}\)





Definition 1 of Limit Superior of Sequence of Sets














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 0}^\infty \map \complement {\bigcup_{i \mathop = n}^\infty E_n}\)





De Morgan's Laws














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 0}^\infty \bigcap_{i \mathop = n}^\infty \map \complement {E_n}\)





De Morgan's Laws














\(\ds \)

\(=\)







\(\ds \liminf_{n \mathop \to \infty} \ \map \complement {E_n}\)





Definition 1 of Limit Inferior of Sequence of Sets



$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Problem $1.1.1$




