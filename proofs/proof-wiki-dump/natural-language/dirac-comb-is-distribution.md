# 

Source: https://proofwiki.org/wiki/Dirac_Comb_is_Distribution



Theorem
Let $\phi \in \map \DD \R$ be a test function.
Suppose $\map {\operatorname {III} } 0$ is a Dirac comb such that:

$\ds \map {\map {\operatorname {III} } 0} \phi := \sum_{n \mathop \in \Z} \map \phi n$

Then $\map {\operatorname {III} } 0$ is a distribution.



This article, or a section of it, needs explaining.In particular: Dirac comb currently leads to Definition:Sampling Function, but the notation does not quote tally. It all needs to be made consistent.Presumably the $0$ is the offset $\chi$ (for $0 < \chi < 1$ which is not offered as a variable in Definition:Sampling Function but is defined as $0$ therein, and the $T$ in the $\operatorname {III}_T$ set to $1$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
By definition of test function, $\phi$ is supported on a compact subset of $\R$.
Hence:

$\exists N \in \N : \forall x \in \R \setminus \closedint {-N} N : \map \phi x = 0$
Therefore:

$\ds \sum_{n \mathop \in \Z} \map \phi n = \sum_{n \mathop = - N}^N \map \phi n$
This is a finite sequence of real numbers.
Thus, the sequence converges, and $\map {\operatorname {III} } 0$ is a mapping such that $\map {\operatorname {III} } 0 : \map \DD \R \to \R$.


Linearity
Follows from Summation is Linear.
$\Box$


Convergence in $\map \DD \R$
Let $\sequence {\phi_n}$ be a convergent sequence in $\map \DD \R$ with the limit $\mathbf 0$.
By definition of convergence, all $\sequence {\phi_n}$ are supported on a compact subset of $\R$, say, $\closedint {-K} K$ with $K \in \N$.
By definition of convergence, $\sequence {\phi_n}$ converges to $\mathbf 0$ uniformly.
Hence:

$\ds \forall k \in \R : \size k < K : \lim_{n \mathop \to \infty} \map {\phi_n} k = 0$
Therefore:














\(\ds \map {\map {\operatorname {III} } 0} {\phi_n}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \map {\phi_n} k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = -K}^K \map {\phi_n} k\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \map {\map {\operatorname {III} } 0} {\phi_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{k \mathop = -K}^K \map {\phi_n} k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = -K}^K 0\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds 0\)









$\Box$

By definition, the Dirac comb is a distribution.
$\blacksquare$


Also see
Closed Real Interval is Compact


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




