# 

Source: https://proofwiki.org/wiki/Indexed_Summation_of_Multiple_of_Mapping


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: redlinks to be fixed -- presumably pointwise scalar operationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a, b$ be integers.
Let $\closedint a b$ denote the integer interval between $a$ and $b$.
Let $f: \closedint a b \to \mathbb A$ be a mapping.
Let $\lambda \in \mathbb A$.
Let $g = \lambda \cdot f$ be the product of $f$ with $\lambda$.

Then we have the equality of indexed summations:

$\ds \sum_{i \mathop = a}^b \map g i = \lambda \cdot \sum_{i \mathop = a}^b \map f i$


Proof
The proof goes by induction on $b$.


Basis for the Induction
Let $b < a$.
Then all indexed summations are zero.
Because $0 = \lambda \cdot 0$, the result follows.
This is our basis for the induction.


Induction Step
Let $b \geq a$.
We have:














\(\ds \sum_{i \mathop = a}^b \map g i\)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map g i + \map g b\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map g i + \lambda \cdot \map f b\)





Definition of Product of Mapping with Scalar














\(\ds \)

\(=\)







\(\ds \lambda \cdot \sum_{i \mathop = a}^{b - 1} \map f i + \lambda \cdot \map fb\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \lambda \cdot \paren {\sum_{i \mathop = a}^{b - 1} \map f i + \map f b}\)





Distributive Property














\(\ds \)

\(=\)







\(\ds \lambda \cdot \sum_{i \mathop = a}^b \map f i\)





Definition of Indexed Summation



By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$


Also see
Linear Combination of Indexed Summations
Summation of Multiple of Mapping on Finite Set
General Distributivity Theorem




