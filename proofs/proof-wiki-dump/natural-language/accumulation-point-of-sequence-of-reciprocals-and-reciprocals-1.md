# 

Source: https://proofwiki.org/wiki/Accumulation_Point_of_Sequence_of_Reciprocals_and_Reciprocals_%2B_1



Theorem
Let $\struct {\R, \tau}$ denote the real number line under the usual (Euclidean) topology.
Let $\sequence {a_n}$ denote the sequence in $\struct {\R, \tau}$ defined as:














\(\ds a_n\)

\(=\)







\(\ds \begin {cases} \dfrac 2 {n + 1} & : \text {$n$ odd} \\ 1 + \dfrac 2 n & : \text {$n$ even} \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\dfrac 1 1, 1 + \dfrac 1 1, \dfrac 1 2, 1 + \dfrac 1 2, \dfrac 1 3, 1 + \dfrac 1 3, \dotsb}\)










Then $0$ is an accumulation point of $\sequence {a_n}$.


Proof
Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
Then the open interval $\openint {-\epsilon} \epsilon$ contains $0$ and all elements $a_m$ of $S$ such that $0 < \dfrac 1 m < \epsilon$.
We have that:

$\forall n \in \N: n \ge m$
have the property that $0 < \dfrac 1 n < \epsilon$.
Hence there are a countably infinite number of terms of $\sequence {a_n}$ such that $a_n \in \openint {-\epsilon} \epsilon$.


This article, or a section of it, needs explaining.In particular: Why? The step from $0 < \dfrac 1 n < \epsilon$ to $0 < a_n < \epsilon$ is non-trivial.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result by definition of accumulation point of $\sequence {a_n}$.
$\blacksquare$


Also see
Zero is not a Limit Point of Sequence of Reciprocals and Reciprocals + 1 where it is shown that $0$ is not a limit of $\sequence {a_n}$.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $3$




