# 

Source: https://proofwiki.org/wiki/P-Sequence_Space_with_Pointwise_Addition_and_Pointwise_Scalar_Multiplication_on_Ring_of_Sequences_forms_Vector_Space


This article needs proofreading.In particular: especially references to the ring of sequencesIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\ell^p$ be the p-sequence space.
Let $\struct {\R, +_\R, \times_\R}$ be the field of real numbers.
Let $\paren +$ be the pointwise addition on the ring of sequences.
Let $\paren {\, \cdot \,}$ be the pointwise multiplication on the ring of sequences.

Then $\struct {\ell^p, +, \, \cdot \,}_\R$ is a vector space.


Proof
Let $\sequence {a_n}_{n \mathop \in \N}, \sequence {b_n}_{n \mathop \in \N}, \sequence {c_n}_{n \mathop \in \N} \in \ell^p$.
Let $\lambda, \mu \in \R$.
Let $\sequence 0 := \tuple {0, 0, 0, \dots}$ be a real-valued function.
Let us use real number addition and multiplication.
Define pointwise addition as:

$\sequence {a_n + b_n}_{n \mathop \in \N} := \sequence {a_n}_{n \mathop \in \N} +_\R \sequence {b_n}_{n \mathop \in \N}$.
Define pointwise scalar multiplication as:

$\sequence {\lambda \cdot a_n}_{n \mathop \in \N} := \lambda \times_\R \sequence {a_n}_{n \mathop \in \N}$
Let the additive inverse be $\sequence {-a_n} := - \sequence {a_n}$.


Closure Axiom
By assumption, $\sequence {a_n}_{n \mathop \in \N}, \sequence {b_n}_{n \mathop \in \N} \in \ell^p$.
By definition:

$\ds \sum_{n \mathop = 1}^\infty \size {a_n}^p < \infty$
$\ds \sum_{n \mathop = 1}^\infty \size {b_n}^p < \infty$
Consider the sequence $\sequence {a_n + b_n}$.
Then: 














\(\ds \sum_{n \mathop = 1}^\infty \size {a_n + b_n}^p\)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\size {a_n} + \size {b_n} }^p\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\map \max {\size {a_n}, \size {b_n} } + \map \max {\size {a_n}, \size {b_n} } }^p\)





Definition of Max Operation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty 2^p \paren {\map \max {\size {a_n}, \size {b_n} } }^p\)




















\(\ds \)

\(\le\)







\(\ds 2^p \sum_{n \mathop = 1}^\infty \paren {\size {a_n}^p + \size {b_n}^p}\)




















\(\ds \)

\(<\)







\(\ds \infty\)





$\sequence {a_n}, \sequence {b_n} \in \ell^p$



Hence:

$\sequence {a_n + b_n} \in \ell^p$
$\Box$


Commutativity Axiom
By Pointwise Addition on Ring of Sequences is Commutative, $\sequence {a_n} + \sequence {b_n} = \sequence {b_n} + \sequence {a_n}$
$\Box$


Associativity Axiom
By Pointwise Addition on Ring of Sequences is Associative, $\paren {\sequence {a_n} + \sequence {b_n} } + \sequence {c_n} = \sequence {a_n} + \paren {\sequence {b_n} + \sequence {c_n} }$.
$\Box$


Identity Axiom













\(\ds \sequence {0 + a_n}\)

\(=\)







\(\ds \sequence 0 +_\R \sequence {a_n}\)





Definition of Pointwise Addition on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \tuple {0, 0, 0, \dots} +_\R \sequence {a_n}\)





Definition of $\sequence 0$














\(\ds \)

\(=\)







\(\ds \sequence {a_n}\)









$\Box$


Inverse Axiom













\(\ds \sequence {a_n + \paren {-a_n} }\)

\(=\)







\(\ds \sequence {a_n} +_\R \sequence {-a_n}\)





Definition of Pointwise Addition on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \sequence {a_n} +_\R \paren {-1} \times_\R \sequence {a_n}\)





Definition of $\sequence {-a_n}$














\(\ds \)

\(=\)







\(\ds 0\)









$\Box$


Distributivity over Scalar Addition













\(\ds \sequence {\paren {\lambda +_\R \mu} \cdot a_n }\)

\(=\)







\(\ds \paren {\lambda +_\R \mu} \times_\R \sequence {a_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \lambda \times_\R \sequence {a_n} +_\R \mu \times_\R \sequence {a_n}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \sequence {\lambda \cdot a_n} +_\R \sequence {\mu \cdot a_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \sequence {\lambda \cdot a_n + \mu \cdot a_n}\)





Definition of Pointwise Addition on Ring of Sequences



$\Box$


Distributivity over Vector Addition













\(\ds \lambda \times_\R \sequence {a_n + b_n}\)

\(=\)







\(\ds \lambda \times_\R \paren {\sequence {a_n} +_\R \sequence {b_n} }\)





Definition of Pointwise Addition on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \lambda \times_\R \sequence {a_n} +_\R \lambda \times_\R \sequence {b_n}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \sequence {\lambda \cdot a_n} +_\R \sequence {\lambda \cdot b_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \sequence {\lambda \cdot a_n + \mu \cdot b_n}\)





Definition of Pointwise Addition on Ring of Sequences



$\Box$


Associativity with Scalar Multiplication













\(\ds \sequence {\paren {\lambda \times_\R \mu} \cdot a_n}\)

\(=\)







\(\ds \paren {\lambda \times_\R \mu} \times_\R \sequence {a_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \lambda \times_\R \paren {\mu \times_\R \sequence {a_n} }\)





Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \lambda \times_\R \sequence {\mu \cdot a_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \sequence {\lambda \cdot \paren {\mu \cdot a_n} }\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences



$\Box$


Identity for Scalar Multiplication













\(\ds \sequence {1 \cdot a_n}\)

\(=\)







\(\ds 1 \times_\R \sequence {a_n}\)





Definition of Pointwise Scalar Multiplication on Ring of Sequences














\(\ds \)

\(=\)







\(\ds \sequence {a_n}\)









$\Box$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.1$: Vector Space




