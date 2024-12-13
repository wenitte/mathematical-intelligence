# 

Source: https://proofwiki.org/wiki/Resolvent_Mapping_is_Continuous/Banach_Algebra/Lemma

Lemma
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$. 
Let $x \in A$.
Define $S : \C \to A$ by:

$\map S \lambda = \lambda {\mathbf 1}_A - x$

Then $S$ is continuous.


Proof
We have, for $\lambda, \mu \in \C$:














\(\ds \norm {\map S \lambda - \map S \mu}\)

\(=\)







\(\ds \norm {\paren {\lambda {\mathbf 1}_A - x} - \paren {\mu {\mathbf 1}_A - x} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {\lambda - \mu} {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \cmod {\lambda - \mu} \norm { {\mathbf 1}_A}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \cmod {\lambda - \mu}\)





Definition of Unital Banach Algebra



Let $\epsilon > 0$ and $\lambda, \mu \in \C$ be such that:

$\cmod {\lambda - \mu} < \epsilon$
Then, we have:

$\norm {\map S \lambda - \map S \mu} < \epsilon$
Hence $S$ is continuous.
$\blacksquare$





