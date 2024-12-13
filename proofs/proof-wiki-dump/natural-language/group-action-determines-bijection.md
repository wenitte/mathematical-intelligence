# 

Source: https://proofwiki.org/wiki/Group_Action_determines_Bijection



Theorem
Let $*$ be a group action of $G$ on $X$.
Then each $g \in G$ determines a bijection $\phi_g: X \to X$ given by:

$\map {\phi_g} x = g * x$
Its inverse is:

$\phi_{g^{-1} }: X \to X$.

These bijection are sometimes called transformations of $X$.


Proof
Proof of Injectivity
Let $x, y \in X$
Then:














\(\ds \map {\phi_g} x\)

\(=\)







\(\ds \map {\phi_g} y\)














\(\ds \leadsto \ \ \)





\(\ds g * x\)

\(=\)







\(\ds g * y\)














\(\ds \leadsto \ \ \)





\(\ds g^{-1} * \paren {g * x}\)

\(=\)







\(\ds g^{-1} * \paren {g * y}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g^{-1} g} * x\)

\(=\)







\(\ds \paren {g^{-1} g} * y\)














\(\ds \leadsto \ \ \)





\(\ds e * x\)

\(=\)







\(\ds e * y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)










Thus $\phi_g$ is an injection.
$\Box$


Proof of Surjectivity
Let $x \in X$.
Then:














\(\ds x\)

\(=\)







\(\ds e * x\)




















\(\ds \)

\(=\)







\(\ds \paren {g g^{-1} } * x\)




















\(\ds \)

\(=\)







\(\ds g * \paren {g^{-1} * x}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_g} y\)





where $y = g^{-1} * x \in X$




Thus a group action is a surjection.
$\Box$

So a group action is an injection and a surjection and therefore a bijection.
$\blacksquare$


Also see
Definition:Permutation Representation




