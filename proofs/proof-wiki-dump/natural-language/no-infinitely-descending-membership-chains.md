# 

Source: https://proofwiki.org/wiki/No_Infinitely_Descending_Membership_Chains



Theorem
Let $\omega$ denote the minimally inductive set.
Let $F$ be a mapping whose domain is $\omega$.

Then:

$\exists n \in \omega: \map F {n^+} \notin \map F n$


Corollary
There cannot exist a sequence $\sequence {x_n}$ whose domain is $\N_{\gt 0}$ such that:

$\forall n \in \N_{>0}: x_{n + 1} \in x_n$


Axiom of Foundation
This theorem depends on the Axiom of Foundation.
Most mathematicians accept the Axiom of Foundation, but theories that reject it, or negate it, have found applications in Computer Science and Linguistics.


Proof
Let $F$ be a mapping whose domain is $\omega$.
By the axiom of replacement, the image of $F$ is a set.

Let the image of $F$ be denoted $\map \WW F$.
Then:














\(\ds \)

\(\)







\(\ds \exists x \in \map \WW F: \paren {\map \WW F \cap x} = \O\)





Axiom of Foundation














\(\ds \)

\(\leadsto\)







\(\ds \exists x: \paren {\paren {\map \WW F \cap x} = \O \land \exists n \in \omega: x = \map F n}\)





as $x \in \map \WW F$, $x = \map F n$ for some $n \in \omega$














\(\ds \)

\(\leadsto\)







\(\ds \exists n \in \omega: \paren {\map \WW F \cap \map F n} = \O\)





Logical manipulation eliminating $x$



But:

$\map F {n^+} \in \map \WW F$
So:

$\map F {n^+} \notin \map F n$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.34$




