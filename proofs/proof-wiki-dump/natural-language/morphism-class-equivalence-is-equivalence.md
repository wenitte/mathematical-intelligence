# 

Source: https://proofwiki.org/wiki/Morphism_Class_Equivalence_is_Equivalence



Theorem
Let $\mathbf C$ be a metacategory.
Let $C$ be an object of $\mathbf C$.
Let $\map {\mathbf {Sub}_{\mathbf C} } C$ be the category of subobjects of $C$.
Let $\sim$ denote morphism class equivalence on the morphisms of $\map {\mathbf {Sub}_{\mathbf C} } C$.

Then $\sim$ is an equivalence.


Proof
Let us check the three conditions for an equivalence in turn.


Reflexivity
To show that $\sim$ is reflexive, note that for $f: m \to m'$:

$f \sim f$
holds if and only if $m \sim m$ and $m' \sim m'$.
By Equivalence of Subobjects is Equivalence, these conditions are satisfied.
$\Box$


Symmetry
It is to be shown that for $f: m \to n$ and $f': m' \to n'$:

$f \sim f'$ implies $f' \sim f$
By definition of $\sim$, this is equivalent to:

$m \sim m' \land n \sim n'$ implies $m' \sim m \land n' \sim n$
Again by Equivalence of Subobjects is Equivalence, this is satisfied.
$\Box$


Transitivity
Given $f: m \to n$, $f': m' \to n'$ and $f: m \to n$, it is to be shown that:

$f \sim f' \land f' \sim f$ implies $f \sim f$
By definition of $\sim$, this is equivalent to:

$m \sim m' \land n \sim n' \land m' \sim m \land n' \sim n$ implies $m \sim m \land n \sim n$
which also follows from Equivalence of Subobjects is Equivalence.
$\Box$

Thence $\sim$ is proven an equivalence.
$\blacksquare$





