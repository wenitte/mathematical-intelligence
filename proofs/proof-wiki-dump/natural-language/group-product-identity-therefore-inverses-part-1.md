# 

Source: https://proofwiki.org/wiki/Group_Product_Identity_therefore_Inverses/Part_1

Theorem
Let $g$ and $h$ be elements of a group $G$ whose identity element is $e$.

Then:

$g h = e \implies h = g^{-1}$ and $g = h^{-1}$


Proof 1
From the Division Laws for Groups:

$g h = e \implies g = e h^{-1} = h^{-1}$
Also by the Division Laws for Groups:

$g h = e \implies h = g^{-1} e = g^{-1}$
$\blacksquare$


Proof 2
Let $g h = e$.
Then:














\(\ds h\)

\(=\)







\(\ds e h\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {g^{-1} g} h\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds g^{-1} \paren {g h}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds g^{-1} e\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element




and:














\(\ds g\)

\(=\)







\(\ds g e\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds g \paren {h h^{-1} }\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {g h} h^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e h^{-1}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds h^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element



$\blacksquare$





