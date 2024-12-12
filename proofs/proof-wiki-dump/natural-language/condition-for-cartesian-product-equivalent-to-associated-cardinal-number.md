# 

Source: https://proofwiki.org/wiki/Condition_for_Cartesian_Product_Equivalent_to_Associated_Cardinal_Number


It has been suggested that this page or section be merged into Cardinality of Cartesian Product of Finite Sets.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $S$ and $T$ be nonempty sets.
Let $\card S$ denote the cardinal number of $S$.

Then:

$S \times T \sim \card {S \times T} \iff S \sim \card S \land T \sim \card T$
where $S \times T$ denotes the cartesian product of $S$ and $T$.


Proof
Necessary Condition
If $S \times T \sim \card {S \times T}$, then there is a mapping $f$ such that:

$f : S \times T \to \card {S \times T}$ is a bijection.

Since $f$ is a bijection, it follows that:

$S$ is equivalent to the image of $S \times \set x$ under $f$ where $x \in T$.

This, in turn, is a subset of the ordinal $\card {S \times T}$.
$\card {S \times T}$ is an ordinal by Cardinal Number is Ordinal.

By Condition for Set Equivalent to Cardinal Number, it follows that $S \sim \card S$.
Similarly, $T \sim \card T$.
$\Box$


Sufficient Condition
Suppose $f: S \to \card S$ is a bijection and $g: T \to \card T$ is a bijection.
Let $\cdot$ denote ordinal multiplication, while $\times$ shall denote the Cartesian product.

Define the function $F$ to be:

$\forall x \in S, y \in T: \map F {x, y} = \card S \cdot \map g y + \map f x$

It follows that $F: S \times T \to \card S \cdot \card T$ is a injection.
By Condition for Set Equivalent to Cardinal Number, it follows that $S \times T \sim \card {S \times T}$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.15 \ (2)$




