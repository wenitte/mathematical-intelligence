# 

Source: https://proofwiki.org/wiki/Regular_Representation_of_Invertible_Element_is_Permutation



Theorem
Let $\struct {S, \circ}$ be a monoid.
Let $a \in S$ be invertible.

Then the left regular representation $\lambda_a$ and the right regular representation $\rho_a$ are permutations of $S$.


Proof
Suppose $a \in \struct {S, \circ}$ is invertible.
A permutations is a bijection from a set to itself.
As $\lambda_a: S \to S$ and $\rho_a: S \to S$ are defined from $S$ to $S$, all we need to do is show that they are bijections.
To do that we can show that they are both injective and surjective.


Injectivity
From Invertible Element of Monoid is Cancellable, as $a$ is invertible, it is also cancellable.
From Cancellable iff Regular Representations Injective, it follows that both $\lambda_a$ and $\rho_a$ are injective.
$\Box$


Surjectivity
Let $y \in S$.

Then:




\(\text {(1)}: \quad\)









\(\ds y\)

\(=\)







\(\ds \paren {a \circ a^{-1} } \circ y\)





by hypothesis: $a$ is invertible














\(\ds \)

\(=\)







\(\ds a \circ \paren {a^{-1} \circ y}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \lambda_a \paren {a^{-1} \circ y}\)





Definition of Left Regular Representation








\(\text {(2)}: \quad\)









\(\ds y\)

\(=\)







\(\ds y \circ \paren {a^{-1} \circ a} \circ y\)





by hypothesis: $a$ is invertible














\(\ds \)

\(=\)







\(\ds \paren {y \circ a^{-1} } \circ a\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \rho_a \paren {y \circ a^{-1} }\)





Definition of Right Regular Representation




Thus both $\lambda_a$ and $\rho_a$ are surjective.
$\Box$

So $\lambda_a$ and $\rho_a$ are injective and surjective, and therefore bijections, and thus permutations of $S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Theorem $7.1$




