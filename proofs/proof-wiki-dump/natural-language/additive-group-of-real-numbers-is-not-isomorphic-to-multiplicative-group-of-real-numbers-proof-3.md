# 

Source: https://proofwiki.org/wiki/Additive_Group_of_Real_Numbers_is_Not_Isomorphic_to_Multiplicative_Group_of_Real_Numbers/Proof_3

Theorem
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $\struct {\R_{\ne 0}, \times}$ denote the multiplicative group of real numbers.

Then $\struct {\R, +}$ is not isomorphic to $\struct {\R_{\ne 0}, \times}$.


Proof
There are two element of $\struct {\R_{\ne 0}, \times}$ which are self-inverse, that is, $-1$ and $1$.
However, there is only one element of $\struct {\R, +}$ which is self-inverse, that is, $0$.
Aiming for a contradiction, suppose there exists an isomorphism $f: \struct {\R_{\ne 0}, \times} \to \struct {\R, +}$.
Then:














\(\ds 0\)

\(=\)







\(\ds \map f 1\)




















\(\ds \)

\(=\)







\(\ds \map f {-1 \times -1}\)




















\(\ds \)

\(=\)







\(\ds \map f {-1} + \map f {-1}\)




















\(\ds \)

\(=\)







\(\ds 2 \map f {-1}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {-1}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \map f 1\)









So we have demonstrated that $f$ is not an injection.
Hence $f$ is not a bijection and so not an isomorphism.

It follows from Proof by Contradiction that there can be no such isomorphism.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures




