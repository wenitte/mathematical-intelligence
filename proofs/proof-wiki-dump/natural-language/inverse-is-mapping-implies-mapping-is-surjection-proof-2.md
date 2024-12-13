# 

Source: https://proofwiki.org/wiki/Inverse_is_Mapping_implies_Mapping_is_Surjection/Proof_2

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let the inverse $f^{-1} \subseteq T \times S$ itself be a mapping.

Then $f$ is a surjection.


Proof
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


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions




