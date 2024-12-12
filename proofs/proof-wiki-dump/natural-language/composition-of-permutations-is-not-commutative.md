# 

Source: https://proofwiki.org/wiki/Composition_of_Permutations_is_not_Commutative

Theorem
Let $S$ be a set.
Let $\map \Gamma S$ denote the set of permutations on $S$.
Let $\pi, \rho$ be elements of $\map \Gamma S$
Then it is not necessarily the case that:

$\pi \circ \rho = \rho \circ \pi$
where $\circ$ denotes composition.


Proof
Proof by Counterexample:
Let $S := \set {1, 2, 3}$.
Let:














\(\ds \pi\)

\(:=\)







\(\ds \dbinom {1 \ 2 \ 3} {2 \ 3 \ 1}\)




















\(\ds \rho\)

\(:=\)







\(\ds \dbinom {1 \ 2 \ 3} {1 \ 3 \ 2}\)










Then:














\(\ds \pi \circ \rho\)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {2 \ 3 \ 1} \circ \dbinom {1 \ 2 \ 3} {1 \ 3 \ 2}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {3 \ 2 \ 1}\)










while:














\(\ds \rho \circ \pi\)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {1 \ 3 \ 2} \circ \dbinom {1 \ 2 \ 3} {2 \ 3 \ 1}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {1 \ 2 \ 3} {2 \ 1 \ 3}\)




















\(\ds \)

\(\ne\)







\(\ds \pi \circ \rho\)









$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations: Example $62$




