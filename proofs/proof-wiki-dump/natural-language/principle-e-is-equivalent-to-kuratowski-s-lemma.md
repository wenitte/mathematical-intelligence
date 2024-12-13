# 

Source: https://proofwiki.org/wiki/Principle_E_is_Equivalent_to_Kuratowski%27s_Lemma



Theorem
Kuratowski's Lemma is equivalent to Principle E.


Proof
Recall Kuratowski's Lemma:
Let $S$ be a  set of sets which is closed under chain unions.
Then every element of $S$ is a subset of a maximal element of $S$ under the subset relation.
$\Box$

Recall Principle E:
Let $S$ be a set of sets.
Let $S$ be closed under chain unions.

Then every element $b$ of $S$ is a subset of some element of $S$ that has no immediate extension in $S$.
$\Box$


Kuratowski's Lemma implies Principle E
Let Kuratowski's Lemma hold.
Let $x$ be a maximal element under the subset relation.
Then $x$ has no immediate extension which is not $x$ itself.
That is, Principle E holds directly.
$\Box$


Principle E implies Kuratowski's Lemma
Let Principle E hold.
Let $S$ be swelled.
That is, every subset of every element of $S$ is an element of $S$.
Then an element $x$ of $S$ has no immediate extension in $S$ if and only if $x$ is a maximal element of $S$ under the subset relation.
Thus Principle E implies that for every swelled set $S$ which is closed under chain unions, every $b \in S$ is a subset of some maximal element of $S$.

By Class of Finite Character is Swelled,  a set of finite character is swelled.
By Class of Finite Character is Closed under Chain Unions a set of finite character is closed under chain unions.


This article, or a section of it, needs explaining.In particular: Establish why $S$ is of finite character.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Thus Principle E implies Tukey's Lemma.
From Maximal Principles are Equivalent, we have that Tukey's Lemma is equivalent to Kuratowski's Lemma.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 6$ Another approach to maximal principles: Theorem $6.1$




