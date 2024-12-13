# 

Source: https://proofwiki.org/wiki/Inverse_Image_of_Set_under_Set-Like_Relation_is_Set

Theorem
Let $A$ be a class.
Let $\RR$ be a set-like endorelation on $A$.
Let $B \subseteq A$ be a set.

Then $\map {\RR^{-1} } B$, the inverse image of $B$ under $\RR$, is also a set.


Proof
Since $\RR$ is set-like, $\map {\RR^{-1} } {\set x}$ is a set for each $x$ in $A$.
As $B \subseteq A$, this holds also for each $x \in B$.


This article, or a section of it, needs explaining.In particular: Explain better.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
But then $\ds \map {\RR^{-1} } B = \bigcup_{x \mathop \in B} \map {\RR^{-1} } {\set x}$, which is a set by the Axiom of Unions.
$\blacksquare$





