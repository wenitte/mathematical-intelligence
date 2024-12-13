# 

Source: https://proofwiki.org/wiki/Order_of_Cycle_is_Length_of_Cycle

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi \in S_n$ be a cyclic permutation of length $k$.
Then:

$\order \pi = k$
where:

$\order \pi$ denotes the order of $\pi$ in $S_n$.


Proof
Let $\pi = \tuple {a_0, a_1, \ldots, a_{k - 1} }$.
Observe that:














\(\ds \paren {\paren {j + n} \pmod k} + 1\)

\(=\)







\(\ds \paren {j + n + 1} \pmod k\)














\(\ds \leadsto \ \ \)





\(\ds \map \pi {a_{\paren {j + n} \pmod k} }\)

\(=\)







\(\ds a_{\paren {j + n + 1} \pmod k}\)














\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N, \forall j \in \Z / k \Z: \, \)



\(\ds \map {\pi^n} {a_j}\)

\(=\)







\(\ds a_{\paren {j + n} \pmod k}\)














\(\ds \leadsto \ \ \)

\(\ds \forall j < k: \, \)



\(\ds \pi^k\)

\(=\)







\(\ds I_{S_n}\)


















\(\, \ds \land \, \)

\(\ds \pi^j\)

\(\ne\)







\(\ds I_{S_n}\)





where $I_{S_n}$ denotes the identity mapping on $S_n$



Hence the result, by definition of order of group element.
$\blacksquare$


Sources
Jonathan Y. (https://math.stackexchange.com/users/89121/jonathan-y), Why is the order of a k-cycle σ equal to k?, URL (version: 2014-02-12): https://math.stackexchange.com/q/673710




