# 

Source: https://proofwiki.org/wiki/Limit_Point_of_Underlying_Set_of_Sequence_of_Reciprocals_and_Reciprocals_%2B_1

Theorem
Let $\sequence {a_n}$ denote the sequence defined as:














\(\ds a_n\)

\(=\)







\(\ds \begin {cases} \dfrac 2 {n + 1} & : \text {$n$ odd} \\ 1 + \dfrac 2 n & : \text {$n$ even} \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\dfrac 1 1, 1 + \dfrac 1 1, \dfrac 1 2, 1 + \dfrac 1 2, \dfrac 1 3, 1 + \dfrac 1 3, \dotsb}\)









Let $\struct {\R, \tau}$ denote the real number line under the usual (Euclidean) topology.
Let $S$ denote the set of terms of $\sequence {a_n}$ considered as a subset of $\struct {\R, \tau_d}$.

Then $0$ is a limit point of $S$.


Proof
Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
Then the open interval $\openint {-\epsilon} \epsilon$ contains $0$ and all elements $a_m$ of $S$ such that $0 < \dfrac 1 m < \epsilon$.
Hence $\dfrac 1 m \in \openint {-\epsilon} \epsilon$.
Hence the result by definition of limit point of $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $3$




