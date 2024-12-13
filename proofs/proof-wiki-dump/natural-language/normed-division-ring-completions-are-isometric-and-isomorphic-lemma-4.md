# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Completions_are_Isometric_and_Isomorphic/Lemma_4

Theorem
Let $\struct {S_1, \norm {\, \cdot \,}_1 }$ and $\struct {S_2, \norm {\, \cdot \,}_2 }$ be complete normed division rings.
Let $R_1$ be a dense subring of $S_1$.
Let $R_2$ be a dense subring of $S_2$.
Let $\psi': R_1 \to R_2$ be an isometric ring isomorphism.
Let $\psi:S_1 \to S_2$ be defined by:

$\forall x \in S_1: \map \psi x = \ds \lim_{n \mathop \to \infty} \map {\psi'}{x_n}$
where $x = \ds \lim_{n \mathop \to \infty} x_n$ for some sequence $\sequence {x_n} \subseteq R_1$
Then:

$\psi$ is an isometry.


Proof
Let $x, y \in S_1$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $R_1$ such that $\ds \lim_{n \mathop \to \infty} x_n = x, \lim_{n \mathop \to \infty} y_n = y$.
Then:














\(\ds x - y\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x_n - y_n\)





Difference Rule for Sequences in Normed Division Ring














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \norm {x - y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n - y_n}\)





Modulus of Limit














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {\map {\psi'} {x_n} - \map {\psi'} {y_n} }\)





Definition of Isometry (Metric Spaces)




On the other hand:














\(\ds \map \psi x - \map \psi y\)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} \map {\psi'} {x_n} } - \paren {\lim_{n \mathop \to \infty} \map {\psi'} {y_n} }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {\psi'} {x_n} - \map {\psi'} {y_n}\)





Difference Rule for Sequences in Normed Division Ring














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \norm {\map \psi x - \map \psi y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {\map {\psi'} {x_n} - \map {\psi'} {y_n} }\)





Modulus of Limit




By Convergent Sequence in Metric Space has Unique Limit:

$\norm {x - y} = \norm {\map \psi x - \map \psi y}$
It follows that $\psi$ is distance-preserving.
By Distance-Preserving Surjection is Isometry of Metric Spaces then $\psi$ is an isometry.
$\blacksquare$





