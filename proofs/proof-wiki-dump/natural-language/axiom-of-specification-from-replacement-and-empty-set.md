# 

Source: https://proofwiki.org/wiki/Axiom_of_Specification_from_Replacement_and_Empty_Set

Theorem
The Axiom of Specification is a consequence of:

the Axiom of Replacement
and

the Axiom of the Empty Set.


Outline of Proof
Take some set $A$ and some propositional function $\map P x$.
We obtain the set:

$ B = \set {x \in A : \map P x}$
by defining the mapping:

$\map f x = \begin{cases}
x & : \map P x \\
w & : \text{otherwise}
\end{cases}$
on $A$, where we choose some fixed $w \in A : \map P w$.
We obtain its image with the Axiom of Replacement.
This mapping maps all of the $x \in A$ that fulfill $\map P x$ to themselves, ensuring that they are in the image.
It redirects the elements that don't fulfill $\map P x$ to some fixed $w$ that does fulfill $\map P x$.
Thus, the image we have obtained is $B$.

We must also deal with the special case where no elements in $A$ fulfill $\map P x$.
We must map all elements to something to fulfill the mapping definition.
All elements need to be redirected to a $w$ that fulfills $\map P x$, but here, there is no such $w$.
However, the Axiom of the Empty Set provides us with the desired set.

Thus, we can produce the set $B$ both when it is empty and when it is non-empty.

While this proof outline would suffice as a proof, the construction of set-theoretic mappings relies on Cartesian Product Exists and is Unique, which relies on Axiom of Specification, making such a proof circular in this context.
We thus must define a propositional function that is not set theoretic to act as the above $f$, leading to a proof that is conceptually the same, but more tedious.


Proof

This article needs proofreading.In particular: proof is tediousIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $A$ be an arbitrary set.
Let $\map P x$ be an arbitrary propositional function.
It is to be shown that there exists a set $B$ consisting of exactly the $y \in A$ such that $\map P y$.
That is:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \paren {y \in A \land \map P y} }$

By Law of Excluded Middle, there are two choices:

$\exists y \in A : \map P y$
or:

$\not \exists y \in A : \map P y$

Suppose $\not \exists y \in A : \map P x$.
By Axiom of the Empty Set, take $B = \O$.
Take arbitrary $A$ and $y$.
Assume $y \in B$.
This contradicts the empty set definition.
By Rule of Explosion, we have:

$y \in A \land \map P y$
giving:

$y \in B \implies \paren {y \in A \land \map P y}$
Now assume:

$y \in A \land \map P y$
This contradicts our assumption that:

$\not \exists y \in A : \map P y$
By Rule of Explosion, we have:

$y \in B$
giving:

$\paren {y \in A \land \map P y} \implies y \in B$
Thus:

$\paren {y \in A \land \map P y} \iff y \in B$
and by Universal Generalisation and Existential Generalisation:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \paren {y \in A \land \map P y} }$
This shows that the Axiom of Specification holds when:

$\not \exists y \in A : \map P y$
$\Box$

Suppose $\exists y \in A : \map P y$.
Take some fixed $w \in A : \map P w$.
Define the propositional function $\map Q {x, z}$ as follows:

$\paren {\map P x \land z = x} \lor \paren {\neg \map P x \land z = w}$
Usually this would be written as the mapping:

$\map f x = \begin {cases}
x & : \map P x \\
w & : \text{otherwise}
\end {cases}$
It is to be shown that $\map Q {x, z}$ determines a mapping.
That is:

$\forall x: \exists a: \forall z: \paren {\map Q {x, z} \iff a = z}$

Take arbitrary $x$ and $z$.
Assume that $\map Q {x, z}$, giving:

$\paren {\map P x \land z = x} \lor \paren {\neg \map P x \land z = w}$

By Law of Excluded Middle, there are two choices:

$\map P x$
or:

$\neg \map P x$

Suppose $\map P x$.
Aiming for a contradiction, suppose that:

$\paren {\neg \map P x \land z = w}$
Then we have the contradiction:

$\map P x \land \neg \map P x$
Thus we have:

$\neg \paren{\neg \map P x \land z = w}$
and by Modus Tollendo Ponens:

$\paren {\map P x \land z = x}$
Take $a=x$.
Thus, for all $z$ such that $\map Q {x, z}$, we have $a = x = z$, giving:

$\map Q {x, z} \implies a = z$

Suppose $\neg \map P x$.
Aiming for a contradiction, suppose that:

$\paren {\map P x \land z = x}$
Then we have the contradiction:

$\map P x \land \neg \map P x$
Thus we have:

$\neg \paren {\map P x \land z = x}$
and by Modus Tollendo Ponens:

$\paren {\neg \map P x \land z = w}$
Take $a=w$.
Thus, for all $z$ such that $\map Q {x, z}$, we have $a = w = z$, giving:

$\map Q {x, z} \implies a = z$

Thus:

$\map Q {x, z} \implies a = z$
follows from both $\map P x$ and $\neg \map P x$.
By Universal Generalisation and Existential Generalisation:

$\forall x: \exists a: \forall z: \paren {\map Q {x, z} \iff a = z}$
and $\map Q {x, y}$ determines a mapping.
$\Box$

We now have a propositional function $\map Q {x, y}$ satisfying the premise of Axiom of Replacement, giving:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \exists x \in A : \map Q {x, y} }$
By definition of $\map Q {x, y}$, we have:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \exists x \in A : \paren {\paren {\map P x \land y = x} \lor \paren {\neg \map P x \land y = w} } }$
where $w \in A$ and $\map P w$.
We must show that the Axiom of Specification holds:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \paren {y \in A \land \map P y} }$

Assume $y \in B$.
By the Axiom of Replacement, we have:

$\paren {\map P x \land y = x} \lor \paren {\neg \map P x \land y = w}$
for some $x \in A$.
$\map P x \land y = x$ and $x \in A$ imply $y \in A \land \map P y$.
Recalling that $w \in A$ and $\map P w$, $\neg \map P x \land y = w$ implies $y \in A \land \map P y$.
Thus:

$y \in B \implies \paren {y \in A \land \map P y}$

Now assume $y \in A \land \map P y$.
Then there is an $x$, namely $x = y$, such that:

$\exists x \in A : \paren {\map P x \land y = x}$
By Rule of Addition:

$\exists x \in A : \paren {\paren {\map P x \land y = x} \lor \paren {\neg \map P x \land y = w} }$
Thus, by the Axiom of Replacement we have $y \in B$.
Thus:

$\paren {y \in A \land \map P y} \implies y \in B$

This completes the biconditional:

$y \in B \iff \paren {y \in A \land \map P y}$
By Universal Generalisation and Existential Generalisation:

$\forall A: \exists B: \forall y: \paren {y \in B \iff \paren {y \in A \land \map P y} }$
This shows that the Axiom of Specification holds when:

$\exists y \in A : \map P y$
$\Box$

Thus, the Axiom of Specification holds both when:

$\exists y \in A : \map P y$
and when:

$\not \exists y \in A : \map P y$
completing the proof.
$\blacksquare$





