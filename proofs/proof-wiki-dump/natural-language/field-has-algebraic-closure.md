# 

Source: https://proofwiki.org/wiki/Field_has_Algebraic_Closure


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Every field has an algebraic closure. 


Proof
Let $F$ be a field.
Let $\FF$ be the collection of all extensions of $F$. 


This article, or a section of it, needs explaining.In particular: Is $\FF$ a set or a proper class? It is not obvious that this collection is "small enough" to be a set, and I was unable to find a proof of this on ProofWiki.(On the other hand, does it matter which it is? // Yes, because Zorn's lemma only covers the case of it being a set.)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define an ordering on $\FF$ thus:

$\forall K, L \in \FF: K \preceq L \iff L$ is an extension of $K$.
Let $C$ be a chain in $\FF$.
Let $\ds E = \bigcup_{K \mathop \in C} K$.
$E$ satisfies all field axioms, so $E \in \FF$.


This article, or a section of it, needs explaining.In particular: Why does $E$ satisfy all field axioms?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Set is Subset of Union, $E$ is an upper bound for $C$. 
	
By Zorn's Lemma, $C$ has a maximal element $m$.
Then $m$ is an algebraic closure of $F$.


This article, or a section of it, needs explaining.In particular: Why is this an algebraic closure of $F$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI).
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





