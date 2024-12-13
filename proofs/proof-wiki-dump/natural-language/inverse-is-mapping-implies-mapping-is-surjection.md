# 

Source: https://proofwiki.org/wiki/Inverse_is_Mapping_implies_Mapping_is_Surjection



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let the inverse $f^{-1} \subseteq T \times S$ itself be a mapping.

Then $f$ is a surjection.


Proof 1
Let $f^{-1}: T \to S$ be a mapping.
Aiming for a contradiction, suppose $f$ is not a surjection.
That is:

$\exists y \in T: \neg \exists x \in S: \tuple {x, y} \in f$
By definition of inverse of mapping:

$\exists y \in T: \neg \exists x \in S: \tuple {y, x} \in f^{-1}$
which would mean that $f^{-1}$ is not a mapping.
From this contradiction it follows that $f$ is a surjection.
$\blacksquare$


Proof 2
Let $f^{-1}: T \to S$ be a mapping.

We have:














\(\ds t\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \map {f^{-1} } t\)

\(\in\)







\(\ds S\)





as $f^{-1}$ is a mapping








\(\ds \leadsto \ \ \)





\(\ds \map f {\map {f^{-1} } t}\)

\(=\)







\(\ds t\)





Definition 1 of Inverse Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists s \in S: \, \)



\(\ds \map f s\)

\(=\)







\(\ds t\)





setting $s = \map {f^{-1} } t$



Thus $f$ is by definition a surjection.
$\blacksquare$


Also see
Inverse is Mapping implies Mapping is Injection




