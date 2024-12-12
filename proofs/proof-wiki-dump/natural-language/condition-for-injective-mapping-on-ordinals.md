# 

Source: https://proofwiki.org/wiki/Condition_for_Injective_Mapping_on_Ordinals



Theorem
Let $F$ be a mapping satisfying the following properties:

$(1): \quad$ The domain of $F$ is $\On$, the class of all ordinals
$(2): \quad$ For all ordinals $x$, $\map F x = \map G {F \restriction x}$
$(3): \quad$ For all ordinals $x$, $\map G {F \restriction x} \in \paren {A \setminus \Img x}$ where $\Img x$ is the image of $x$ under $F$.
Let $\Img F$ denote the image of $F$.

Then the following properties hold:

$(1): \quad \Img F \subseteq A$
$(2): \quad F$ is injective
$(3): \quad A$ is a proper class.
Note that only the third property of $F$ is the most important.
For any function $G$, a function $F$ can be constructed satisfying the first two using the First Principle of Transfinite Recursion.


This article, or a section of it, needs explaining.In particular: Exactly which of the above statements is the "third" is unclear. This statement needs to be made precise. It also needs to be explained. Also, it needs to be put in a separate section as it is peripheral to the statement of the theorem.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Let $x$ be an ordinal.
Then $\map F x = \map G {F \restriction x}$ and $\map G {F \restriction x} \in A$ by hypothesis.
Therefore, $\map F x \in A$.
This satisfies the first statement.

Take two distinct ordinals $x$ and $y$.
Without loss of generality, assume $x \in y$ (we are justified in this by Ordinal Membership is Trichotomy).
Then:














\(\ds x \in y\)

\(\leadsto\)







\(\ds \map F x \in \Img y\)




















\(\ds \)

\(\leadsto\)







\(\ds \map F x \in \Img y \land \map F y \notin \Img y\)





by hypothesis














\(\ds \)

\(\leadsto\)







\(\ds \map F x \ne \map F y\)









Thus for distinct ordinals $x$ and $y$, $\map F x \ne \map F y$.
Therefore, $F$ is injective.
$F$ is injective and $F: \On \to A$.
Therefore, if $A$ is a set, then $\On$ is a set.
But by the Burali-Forti Paradox, this is impossible, so $A$ is not a set.
Therefore, $A$ is a proper class.
$\blacksquare$


Also see
Maximal Injective Mapping from Ordinals to a Set
Transfinite Recursion Theorem


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.46$




