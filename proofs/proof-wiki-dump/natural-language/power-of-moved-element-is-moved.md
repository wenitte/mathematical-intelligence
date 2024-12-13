# 

Source: https://proofwiki.org/wiki/Power_of_Moved_Element_is_Moved

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\sigma \in S_n$.

Then for all $m \in \Z$:

$i \notin \Fix \sigma \implies \map {\sigma^m} i \notin \Fix \sigma$
where $\Fix \sigma$ denotes the set of fixed elements of $\sigma$.


Proof
Aiming for a contradiction, suppose that there exists some $i \notin \Fix \sigma$ and some $m \in \Z$ such that $\map {\sigma^m} i \in \Fix \sigma$.
Then:














\(\ds \map {\paren {\sigma \circ \sigma^m} } i\)

\(=\)







\(\ds \map {\sigma^{m + 1} } i\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma^m} i\)





Definition of Fixed Element under Permutation








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma^{-m} \sigma^{m + 1} } i\)

\(=\)







\(\ds \map {\sigma^{-m} \sigma^m} i\)














\(\ds \leadsto \ \ \)





\(\ds \map \sigma i\)

\(=\)







\(\ds \map e i\)




















\(\ds \)

\(=\)







\(\ds i\)










But it was previously established that $i$ was moved by $\sigma$.
This is a contradiction.
Therefore $\map {\sigma^m} i$ is moved by $\sigma$.
$\blacksquare$





