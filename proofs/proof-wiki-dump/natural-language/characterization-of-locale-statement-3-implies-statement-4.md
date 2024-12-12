# 

Source: https://proofwiki.org/wiki/Characterization_of_Locale/Statement_3_Implies_Statement_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L = \struct{S, \preceq}$ be an complete lattice satisfying the infinite join distributive law.

Then:

$L$ is a Heyting algebra


Proof
Let $a, b \in S$.
Let $a \to b = \sup \set{c \in S : a \wedge c \preceq b}$

We have:














\(\ds a \wedge \paren{a \to b}\)

\(=\)







\(\ds a \wedge \sup \set{c : a \wedge c \preceq b}\)





Definition of $a \to b$














\(\ds \)

\(=\)







\(\ds \sup \set{a \wedge c : a \wedge c \preceq b}\)





Infinite join distributive law














\(\ds \)

\(\preceq\)







\(\ds b\)





Definition of Supremum of Set




Hence:

$a \to b$ is the greatest element $c$ such that:
$c \wedge a \preceq b$
It follows that $a \to b$ is a relative psuedocomplement by definition.

Since $a, b$ were arbitrary, then:

$\forall a, b \in S : \exists a \to b \in S : a \to b$ is the greatest element $c \in L$ such that $a \wedge c \preceq b$
Hence $L$ is a Heyting algebra by definition.
$\blacksquare$





