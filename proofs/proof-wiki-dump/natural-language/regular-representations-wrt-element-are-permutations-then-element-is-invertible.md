# 

Source: https://proofwiki.org/wiki/Regular_Representations_wrt_Element_are_Permutations_then_Element_is_Invertible

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\lambda_a: S \to S$ and $\rho_a: S \to S$ be the left regular representation and right regular representation with respect to $a$ respectively:










\(\ds \forall x \in S: \, \)



\(\ds \map {\lambda_a} x\)

\(=\)







\(\ds a \circ x\)
















\(\ds \forall x \in S: \, \)



\(\ds \map {\rho_a} x\)

\(=\)







\(\ds x \circ a\)









Let both $\lambda_a$ and $\rho_a$ be permutations on $S$.

Then there exists an identity element for $\circ$ and $a$ is invertible.


Proof
We have that $\rho_a$ is a permutation on $S$.
Hence:










\(\ds \exists g \in S: \, \)



\(\ds a\)

\(=\)







\(\ds \map {\rho_a} g\)




















\(\ds \)

\(=\)







\(\ds g \circ a\)





Definition of Right Regular Representation



Then we have:










\(\ds \forall b \in S: \, \)



\(\ds \paren {b \circ g} \circ a\)

\(=\)







\(\ds b \circ \paren {g \circ a}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds b \circ a\)





from above








\(\ds \leadsto \ \ \)





\(\ds b \circ g\)

\(=\)







\(\ds b\)





Right Cancellable iff Right Regular Representation Injective



which demonstrates that $g$ is a right identity for $\circ$.

In the same way, we have that $\lambda_a$ is also a permutation on $S$.
Hence:










\(\ds \exists g \in S: \, \)



\(\ds a\)

\(=\)







\(\ds \map {\lambda_a} g\)




















\(\ds \)

\(=\)







\(\ds a \circ g\)





Definition of Left Regular Representation



Then we have:










\(\ds \forall b \in S: \, \)



\(\ds \paren {a \circ g} \circ b\)

\(=\)







\(\ds a \circ \paren {g \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ b\)





from above








\(\ds \leadsto \ \ \)





\(\ds g \circ b\)

\(=\)







\(\ds b\)





Left Cancellable iff Left Regular Representation Injective



which demonstrates that $g$ is a left identity for $\circ$.

So, by definition, $g$ is an identity element for $\circ$.

Again, we have that $\rho_a$ is a permutation on $S$, and so:










\(\ds \exists h \in S: \, \)



\(\ds g\)

\(=\)







\(\ds \map {\rho_a} h\)




















\(\ds \)

\(=\)







\(\ds h \circ a\)





Definition of Right Regular Representation



and that $\lambda_a$ is also a permutation on $S$, and so:










\(\ds \exists h \in S: \, \)



\(\ds g\)

\(=\)







\(\ds \map {\lambda_a} h\)




















\(\ds \)

\(=\)







\(\ds a \circ h\)





Definition of Right Regular Representation



So $h$ is both a left inverse and a right inverse for $a$.
Hence by definition $h$ is an inverse for $a$.
Hence $a$ is invertible by definition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.13$
joriki (https://math.stackexchange.com/users/6622/joriki), Left and Right Regular Representations are Permutations therefore Identity and Inverses Exist, URL (version: 2022-03-01): https://math.stackexchange.com/q/4393494




