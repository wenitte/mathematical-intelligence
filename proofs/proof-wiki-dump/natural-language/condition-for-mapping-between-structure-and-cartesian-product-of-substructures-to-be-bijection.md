# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_between_Structure_and_Cartesian_Product_of_Substructures_to_be_Bijection



Theorem
Let $\struct {S, \circ}$ be an algebraic structure with $1$ operation.
Let $\struct {A, \circ {\restriction_A} }$ and $\struct {B, \circ {\restriction_B} }$ be closed algebraic substructures of $\struct {S, \circ}$, where $\circ {\restriction_A}$ and $\circ {\restriction_B}$ are the operations induced by the restrictions of $\circ$ to $A$ and $B$ respectively.

Let the mapping $\phi: A \times B \to S$ be defined as:

$\forall \tuple {a, b} \in A \times B: \map \phi {a, b} = a \circ b$
where $A \times B$ denotes the Cartesian product of $A$ and $B$.

Then:

$\phi$ is a bijection
if and only if:

for all $s \in S$: there exists a unique $\tuple {a, b} \in A \times B$ such that $a \circ b = s$.


Proof
First we establish that from Set of Finite Subsets under Induced Operation is Closed:

$A \times B \subseteq S$
Thus:

$\forall \tuple {a, b} \in A \times B: \exists s \in S: s = a \circ b = \map \phi {a, b}$
Thus $\phi$ is indeed a mapping.


Sufficient Condition
Let $\phi$ be a bijection.

As $\phi$ is a bijection, it is a fortiori surjective, so:

$S \subseteq A \times B$
Thus:

$S = A \times B$
That is, every element of $S$ is an element of $A \times B$.
Thus, every element of $S$ can be expressed as a product of the form $a \circ b$ such that $\tuple {a, b} \in A \times B$ in at least one way.

As $\phi$ is a bijection, it is a fortiori injective.
Let $\map \phi {a_1, b_1} = \map \phi {a_2, b_2}$.
Then by definition of injective:

$\tuple {a_1, b_1} = \tuple {a_2, b_2}$
and thus:

$a_1 = a_2, b_1 = b_2$
From the definition of $\phi$, this means:

$a_1 \circ b_1 = a_2 \circ b_2$
Thus, every element of $S$ that can be expressed as a product of the form $a \circ b$ such that $\tuple {a, b} \in A \times B$ can be thus expressed uniquely.

In summary:

$\forall s \in S: \exists_1 \tuple {a, b} \in A \times B: s = a \circ b$
where $\exists_1$ denotes unique existence.
$\Box$


Necessary Condition
Let it be the case that:

for all $s \in S$: there exists a unique $\tuple {a, b} \in A \times B$ such that $a \circ b = s$.
Hence by definition of $\phi$:

$\forall s \in S: \exists \tuple {a, b} \in A \times B: s = \map \phi {a, b}$
That is, $\phi$ is surjective.

Now let $\tuple {a, b}$ and $\tuple {c, d}$ in $A \times B$ such that:

$\map \phi {a, b} = \map \phi {c, d}$
That is:

$\exists s \in S: s = a \circ b = c \circ d$
But by hypothesis such a representation of $s$ is unique.
That is:

$\tuple {a, b} = \tuple {c, d}$
and so $\phi$ is by definition an injection.

Thus $\phi$ is both a surjection and an injection.
Hence the result by definition of bijection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces




