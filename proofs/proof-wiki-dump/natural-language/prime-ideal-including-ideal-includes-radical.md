# 

Source: https://proofwiki.org/wiki/Prime_Ideal_Including_Ideal_Includes_Radical

Theorem
Let $R$ be a commutative ring with unity.
Let $\mathfrak p$ be a prime ideal.
Let $\mathfrak a$ be an ideal of $R$ such that:

$\mathfrak a \subseteq \mathfrak p$
Let $\map \Rad {\mathfrak a}$ be the radical of $\mathfrak a$.

Then:

$\map \Rad {\mathfrak a} \subseteq \mathfrak p$


Proof
Let $x \in \relcomp R {\mathfrak p}$.
By Definition 3 of Prime Ideal:








\(\ds \forall n \in \N_{>0} : \ \ \)





\(\ds x^n\)

\(\not\in\)







\(\ds \mathfrak p\)














\(\ds \leadsto \ \ \)





\(\ds x^n\)

\(\not\in\)







\(\ds \mathfrak a\)





since $\mathfrak a \subseteq \mathfrak p$



Therefore, by Definition 2 of Radical:

$x \not\in \map \Rad {\mathfrak a}$
Thus:

$\relcomp R {\mathfrak p} \subseteq \relcomp R {\map \Rad {\mathfrak a} }$
Therefore, by Relative Complement inverts Subsets:

$\map \Rad {\mathfrak a} \subseteq \mathfrak p$
$\blacksquare$





