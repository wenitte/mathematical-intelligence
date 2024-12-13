# 

Source: https://proofwiki.org/wiki/Order-Preserving_Identity_Mapping_between_Ordered_Structures_not_necessarily_Isomorphism

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be orderings on $A$ such that:

$\forall a, b \in A: a \mathrel \RR b \implies a \mathrel \SS b$
Let $I_A$ denote the identity mapping on $A$.

Then it is not necessarily the case that $I_A$ is an order isomorphism from the ordered structures $\struct {A, \RR}$ and $\struct {A, \SS}$.


Proof
Proof by Counterexample
Let $\RR: \N \to \N$ be the ordering on the natural numbers $\N$ defined as:

$\forall a, b \in \N: a \mathrel \RR b \iff a \le b \text { and } \map P a = \map P b$
where $\map P x$ is the parity of $x$.
That is:

$0 \mathrel \RR 2 \mathrel \RR 4 \mathrel \RR \cdots$
and:

$1 \mathrel \RR 3 \mathrel \RR 5 \mathrel \RR \cdots$
and so on, but (for example):

$\lnot \paren {0 \mathrel \RR 1}$

Let $\SS: \N \to \N$ be the ordering on the natural numbers $\N$ defined as:

$\forall a, b \in \N: a \mathrel \SS b \iff a \le b$

We have that:










\(\ds \forall a, b \in \N: \, \)



\(\ds a\)

\(\RR\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\le\)







\(\ds b\)





Definition of $\RR$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\SS\)







\(\ds b\)





Definition of $\SS$




But note that:














\(\ds 0\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\SS\)







\(\ds 1\)





Definition of $\SS$



while it is not the case that $0 \mathrel \RR 1$.

Hence while it is true that:

$\forall a, b \in \N: a \mathrel \RR b \implies a \mathrel \SS b$
it is not the case that:

$\forall a, b \in \N: a \mathrel \SS b \implies a \mathrel \RR b$
and so the identity mapping on $\NN$ is not an order isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(d)}$




