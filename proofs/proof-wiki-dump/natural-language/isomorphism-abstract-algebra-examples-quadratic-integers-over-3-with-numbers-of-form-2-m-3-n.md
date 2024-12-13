# 

Source: https://proofwiki.org/wiki/Isomorphism_(Abstract_Algebra)/Examples/Quadratic_Integers_over_3_with_Numbers_of_Form_2%5Em_3%5En

Example of Isomorphism
Let $\Z \sqbrk {\sqrt 3}$ denote the  set of quadratic integers over $3$:

$\Z \sqbrk {\sqrt 3} = \set {a + b \sqrt 3: a, b \in \Z}$

Let $S$ be the set defined as:

$S := \set {2^m 3^n: m, n \in \Z}$

Let $\struct {\Z \sqbrk {\sqrt 3}, +}$ and $\struct {S, \times}$ be the algebraic structures formed from the above with addition and multiplication respectively.

Then $\struct {\Z \sqbrk {\sqrt 3}, +}$ and $\struct {S, \times}$ are isomorphic.


Proof
Let us define the mapping $\phi: \Z \sqbrk {\sqrt 3} \to S$ as:

$\forall a + b \sqrt 3 \in \Z \sqbrk {\sqrt 3}: \map \phi {a + b \sqrt 3} = 2^a 3^b$

Let $a_1 + b_1 \sqrt 3$ and $a_2 + b_2 \sqrt 3$ be arbitrary elements of $\Z \sqbrk {\sqrt 3}$.
Then we have:














\(\ds \map \phi {\paren {a_1 + b_1 \sqrt 3} + \paren {a_2 + b_2 \sqrt 3} }\)

\(=\)







\(\ds \map \phi {\paren {a_1 + a_2} + \paren {b_1 + b_2} \sqrt 3}\)




















\(\ds \)

\(=\)







\(\ds 2^{a_1 + a_2} 3^{b_1 + b_2}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {2^{a_1} 2^{a_2} } \paren {3^{b_1} 3^{b_2} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {2^{a_1} 3^{b_1} } \times \paren {2^{a_2} 3^{b_2} }\)





Real Multiplication is Commutative and Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \map \phi {a_1 + b_1 \sqrt 3} \times \map \phi {a_2 + b_2 \sqrt 3}\)





Definition of $\phi$



This demonstrates that $\phi$ is a homomorphism.

Now we have:














\(\ds \map \phi {a_1 + b_1 \sqrt 3}\)

\(=\)







\(\ds \map \phi {a_2 + b_2 \sqrt 3}\)














\(\ds \leadsto \ \ \)





\(\ds 2^{a_1} 3^{b_1}\)

\(=\)







\(\ds 2^{a_2} 3^{b_2}\)














\(\ds \leadsto \ \ \)





\(\ds 2^{a_1}\)

\(=\)







\(\ds 2^{a_2}\)





as $2$ and $3$ are coprime












\(\, \ds \land \, \)

\(\ds 3^{b_1}\)

\(=\)







\(\ds 3^{b_2}\)














\(\ds \leadsto \ \ \)





\(\ds a_1\)

\(=\)







\(\ds a_2\)


















\(\, \ds \land \, \)

\(\ds b_1\)

\(=\)







\(\ds b_2\)














\(\ds \leadsto \ \ \)





\(\ds a_1 + b_1 \sqrt 3\)

\(=\)







\(\ds a_2 + b_2 \sqrt 3\)









demonstrating that $\phi$ is injective.

Then:










\(\ds \forall x \in S: \exists a, b \in \Z: \, \)



\(\ds x\)

\(=\)







\(\ds 2^a 3^b\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \map \phi {a + b \sqrt 3}\)









demonstrating that $\phi$ is surjective.
The result follows by definition of isomorphic.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.7 \ \text {(c)}$




