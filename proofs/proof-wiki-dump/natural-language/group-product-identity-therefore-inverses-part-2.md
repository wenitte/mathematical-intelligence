# 

Source: https://proofwiki.org/wiki/Group_Product_Identity_therefore_Inverses/Part_2



Theorem
Let $g$ and $h$ be elements of a group $G$ whose identity element is $e$.

Then:

$h g = e \implies h = g^{-1}$ and $g = h^{-1}$


Proof 1
From the Division Laws for Groups:

$h g = e \implies g = e h^{-1} = h^{-1}$
Also by the Division Laws for Groups:

$h g = e \implies h = g^{-1} e = g^{-1}$
$\blacksquare$


Proof 2
Let $h g = e$.
Then:














\(\ds g\)

\(=\)







\(\ds e g\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {h^{-1} h} g\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds h^{-1} \paren {h g}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds h^{-1} e\)





by hypothesis














\(\ds \)

\(=\)







\(\ds h^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element




and:














\(\ds h\)

\(=\)







\(\ds h e\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds h \paren {g g^{-1} }\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {h g} g^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e g^{-1}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element



$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: The Group Property: Theorem $1 \ \text{(iv)}$




