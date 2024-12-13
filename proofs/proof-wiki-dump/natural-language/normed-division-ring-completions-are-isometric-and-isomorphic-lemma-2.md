# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic/Lemma_2

Theorem
Let $\struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be complete normed division rings.
Let $R_1$ be a dense subring of $S_1$.
Let $R_2$ be a dense subring of $S_2$.
Let $\psi': R_1 \to R_2$ be an isometric ring isomorphism.
Let $\psi: S_1 \to S_2$ be defined by:

$\forall x \in S_1: \map \psi x = \ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n}$
where $\ds x = \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$
Then $\psi$ is a well-defined mapping.


Proof
Let $x \in S_1$.
By the definition of dense subset:

$\map \cl {R_1} = S_1$
By Closure of Subset of Metric Space by Convergent Sequence, there exists a sequence $\sequence {x_n} \subseteq R_1 $ that converges to $x$, that is:

$\ds \lim_{n \mathop \to \infty} x_n = x$
By Isometric Image of Cauchy Sequence is Cauchy Sequence, $\sequence {\map {\psi'} {x_n} }$ is a Cauchy sequence in $R_2 \subseteq S_2$.
Since $S_2$ is complete then the sequence $\sequence {\map {\psi'} {x_n} }$ has a limit, say $y$.

Let $\sequence {x_n}$ and $\sequence {x'_n}$ be sequences in $\map {\phi_1} R$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = \lim_{n \mathop \to \infty} x'_n = x$

Then:














\(\ds \lim_{n \mathop \to \infty} x_n - x'_n\)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} x_n} - \paren {\lim_{n \mathop \to \infty} x'_n}\)





Difference Rule for Sequences in Normed Division Ring














\(\ds \)

\(=\)







\(\ds x - x\)




















\(\ds \)

\(=\)







\(\ds 0_{S_1}\)




















\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n - x'_n}_1\)





Definition of Convergent Sequence in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {\map {\psi'} {x_n} - \map {\psi'} {x'_n} }_2\)





Definition of Isometric Metric Spaces














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds 0_{S_2}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n} - \map {\psi'} {x'_n}\)





Definition of Convergent Sequence in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} \map {\psi'} {x_n} } - \paren {\lim_{n \mathop \to \infty} \map {\psi'} {x'_n} }\)





Difference Rule for Sequences in Normed Division Ring














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x'_n}\)









The result follows.
$\blacksquare$





