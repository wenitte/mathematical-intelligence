# 

Source: https://proofwiki.org/wiki/Complement_of_Limit_Inferior_is_Limit_Superior_of_Complements

Theorem
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of sets.

Then:

$\ds \map \complement {\liminf_{n \mathop \to \infty} \ E_n} = \limsup_{n \mathop \to \infty} \ \map \complement {E_n}$
where $\liminf$ and $\limsup$ denote the limit inferior and limit superior, respectively.


Proof













\(\ds \map \complement {\liminf_{n \mathop \to \infty} \ E_n}\)

\(=\)







\(\ds \map \complement {\bigcup_{n \mathop = 0}^\infty \bigcap_{i \mathop = n}^\infty E_n}\)





Definition 1 of Limit Inferior of Sequence of Sets














\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop = 0}^\infty \map \complement {\bigcap_{i \mathop = n}^\infty E_n}\)





De Morgan's Laws














\(\ds \)

\(=\)







\(\ds \bigcap_{n \mathop = 0}^\infty \bigcup_{i \mathop = n}^\infty \map \complement {E_n}\)





De Morgan's Laws














\(\ds \)

\(=\)







\(\ds \limsup_{n \mathop \to \infty} \ \map \complement {E_n}\)





Definition 1 of Limit Superior of Sequence of Sets



$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Problem $1.1.1$




