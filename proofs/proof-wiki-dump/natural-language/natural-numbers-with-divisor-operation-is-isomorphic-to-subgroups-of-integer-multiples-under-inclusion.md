# 

Source: https://proofwiki.org/wiki/Natural_Numbers_with_Divisor_Operation_is_Isomorphic_to_Subgroups_of_Integer_Multiples_under_Inclusion



Theorem
Let $\N_{>0}$ denote the set of strictly positive natural numbers.
For $n \in \N_{>0}$, let $n \Z$ denote the set of integer multiples of $n$.
Let $\struct {\Z, +}$ denote the additive group of integers.
Let $\mathscr G$ be the set of all subgroups of $\struct {\Z, +}$.

Consider the algebraic structure $\struct {\N_{>0}, \divides}$, where $\divides$ denotes the divisor operator:

$a \divides b$ denotes that $a$ is a divisor of $b$
Let $\phi: \struct {\N_{>0}, \divides} \to \struct {\mathscr G, \supseteq}$ be the mapping defined as:

$\forall n \in \N_{>0}: \map \phi n = n \Z$
Then $\phi$ is an order isomorphism.


Corollary
Consider the ordered semigroup $\struct {\N_{>0}, \times, \divides}$, where:

$\divides$ denotes the divisor operator:
$a \divides b$ denotes that $a$ is a divisor of $b$
$\times$ denotes integer multiplication.
Let $\phi: \struct {\N_{>0}, \times, \divides} \to \struct {\mathscr G, \times_\PP, \supseteq}$ be the mapping defined as:

$\forall n \in \N_{>0}: \map \phi n = n \Z$
Then $\phi$ is an ordered semigroup isomorphism.


Proof
We note that from Subgroups of Additive Group of Integers, the subgroups of $\struct {\Z, +}$ are precisely the sets of integer multiples $n \Z$, for $n \in \N_{>0}$.
For each $n \in \N_{>0}$, there is a unique $n \Z \in \mathscr G$.
Hence $\phi$ is a bijection.

It remains to be demonstrated that $\phi$ is order-preserving in both directions.

Thus:














\(\ds a\)

\(\divides\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k a\)

\(=\)







\(\ds b\)





Definition of Divisor of Integer




Then:














\(\ds x\)

\(\in\)







\(\ds b \Z\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists m \in \Z: \, \)



\(\ds x\)

\(=\)







\(\ds m b\)





Definition of Set of Integer Multiples








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds x\)

\(=\)







\(\ds \paren {m k} a\)





a priori: $k a = b$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds a \Z\)





Definition of Set of Integer Multiples








\(\ds \leadstoandfrom \ \ \)





\(\ds a \Z\)

\(\supseteq\)







\(\ds b \Z\)





Definition of Subset



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.21$




