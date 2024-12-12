# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summations_over_Finite_Sets/Cartesian_Product



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $S, T$ be finite sets.
Let $S \times T$ be their cartesian product.
Let $f: S \times T \to \mathbb A$ be a mapping.

Then we have an equality of summations over finite sets:

$\ds \sum_{s \mathop \in S} \sum_{t \mathop \in T} \map f {s, t} = \sum_{t \mathop \in T} \sum_{s \mathop \in S} \map f {s, t}$


Proof 1

This theorem requires a proof.In particular: using Summation over Cartesian Product as Double SummationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
Let $m$ be the cardinality of $S$ and $n$ be the cardinality of $T$.
Let $\N_{< m}$ denote an initial segment of the natural numbers.
Let $\sigma: \N_{< m} \to S$ and $\tau : \N_{< n} \to T$ be bijections.
We have:














\(\ds \sum_{s \mathop \in S} \sum_{t \mathop \in T} \map f {s, t}\)

\(=\)







\(\ds \sum_{s \mathop \in S} \sum_{j \mathop = 0}^{n - 1} \map f {s, \map \tau j}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{m - 1} \sum_{j \mathop = 0}^{n - 1} \map f {\map \sigma i, \map \tau j}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \sum_{i \mathop = 0}^{m - 1} \map f {\map \sigma i, \map \tau j}\)





Exchange of Order of Indexed Summations over Rectangular Domain














\(\ds \)

\(=\)







\(\ds \sum_{t \mathop \in T} \sum_{i \mathop = 0}^{m - 1} \map f {\map \sigma i, t}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{t \mathop \in T} \sum_{s \mathop \in S} \map f {s, t}\)





Definition of Summation



$\blacksquare$


Proof 3
Let $n$ be the cardinality of $T$.
The proof goes by induction on $n$.


Basis for the Induction
Let $n = 0$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Induction Step
Let $n > 0$.
Let $t \in T$.
Use Cardinality of Set minus Singleton


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




