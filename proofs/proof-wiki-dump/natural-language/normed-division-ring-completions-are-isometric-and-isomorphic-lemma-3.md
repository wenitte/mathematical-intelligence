# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic/Lemma_3

Theorem
Let $\struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be complete normed division rings.
Let $R_1$ be a dense subring of $S_1$.
Let $R_2$ be a dense subring of $S_2$.
Let $\psi': R_1 \to R_2$ be an isometric ring isomorphism.
Let $\psi: S_1 \to S_2$ be defined by:

$\forall x \in S_1: \map \psi x = \ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n}$
where $x = \ds \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$.
Then:

$\psi$ is a surjective mapping.


Proof
Let $y \in S_2$.
By the definition of dense subset:

$\map \cl {R_2} = S_2$
By Closure of Subset of Metric Space by Convergent Sequence:

there exists a sequence $\sequence {y_n} \subseteq R_2 $ that converges to $y$, that is, $\ds \lim_{n \mathop \to \infty} y_n = y$
By Isometric Image of Cauchy Sequence is Cauchy Sequence, $\sequence {\map {\psi'^{-1} } {y_n} }$ is a Cauchy sequence in $R_1 \subseteq S_1$.
Because $S_1$ is complete, the sequence $\sequence {\map {\psi’^{-1} } {y_n} }$ has a limit, say $x$.
By the definition of $\psi$:














\(\ds \map \psi x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {\map {\psi'^{-1} } {y_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} y_n\)




















\(\ds \)

\(=\)







\(\ds y\)









$\blacksquare$





