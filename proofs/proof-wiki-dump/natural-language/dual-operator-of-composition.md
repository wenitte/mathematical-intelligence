# 

Source: https://proofwiki.org/wiki/Dual_Operator_of_Composition

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$, $Y$ and $Z$ be normed vector spaces over $\GF$.
Let $X^\ast$, $Y^\ast$ and $Z^\ast$ be the normed dual spaces of $X$, $Y$ and $Z$ respectively. 
Let $T : X \to Y$ and $S : Y \to Z$ be bounded linear transformations.
Let $T^\ast : Y^\ast \to X^\ast$ and $S^\ast : Z^\ast \to Y^\ast$ be the dual operators of $T$ and $S$ respectively. 

Then: 

$\paren {S T}^\ast = T^\ast S^\ast$
where $\paren {S T}^\ast$ is the dual operator of $S T : X \to Z$. 


Proof
Let $f \in Z^\ast$.
Then, we have: 














\(\ds \map {\paren {T^\ast S^\ast} } f\)

\(=\)







\(\ds \map {T^\ast} {S^\ast f}\)




















\(\ds \)

\(=\)







\(\ds \map {T^\ast} {f \circ S}\)





Definition of Dual Operator














\(\ds \)

\(=\)







\(\ds \paren {f \circ S} \circ T\)





Definition of Dual Operator














\(\ds \)

\(=\)







\(\ds f \circ \paren {S T}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \map {\paren {S T}^\ast} f\)





Definition of Dual Operator



$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $2.28$




