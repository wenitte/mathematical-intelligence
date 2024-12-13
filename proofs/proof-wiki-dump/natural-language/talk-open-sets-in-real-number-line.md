# 

Source: https://proofwiki.org/wiki/Talk:Open_Sets_in_Real_Number_Line

The last fifteen lines of this proof can be replaced by the following.
Since $I$ contains $K_{m_0}$ there exists $J_{m_0'} = \openint {a_0'} {b_0'}$ with $a_0'\notin I$ and $b_0'\notin I$ such that $J_{m_0'} \cap K_{m_0} \ne \O$.
This means that either $a_0' \in \openint {a_0} {b_0}$ or $b_0' \in \openint {a_0} {b_0}$.
Both possibilities contradict that $a_0'\notin I$ and $b_0'\notin I$.
This contradiction shows that for every $m \in \N$ there exists $\map \sigma m \in \N$ such that $K_m = J_{\map \sigma m}$.
Moreover since the $J_n$, $n \in \N$ are disjoint, there can be only one such $\map \sigma m$, so $\sigma$ is a permutation.
$\blacksquare$

Best option is to set up a lemma consisting of that bit of proof it relates to, then implement both proofs in the $\mathsf{Pr} \infty \mathsf{fWiki}$ manner of doing things, then implement the lemma as a modular result from this. --prime mover (talk) 14:24, 26 August 2024 (UTC)




