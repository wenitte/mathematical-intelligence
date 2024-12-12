# 

Source: https://proofwiki.org/wiki/Alternating_Group_is_Simple_except_on_4_Letters/Lemma_1

Theorem
Let $n$ be an integer such that $n \ge 5$.
Let $A_n$ denote the alternating group on $n$ letters.

Let $\alpha \in A_n$ be a permutation on $\N_n$ such that $\map \alpha 1 = 2$.
Let $\beta$ be the $3$-cycle $\tuple {3, 4, 5}$.
Then the permutation $\beta^{-1} \alpha^{-1} \beta \alpha$ fixes $1$.


Proof
We let $\beta^{-1} \alpha^{-1} \beta \alpha$ act on $1$.
By construction:

$\map \alpha 1 = 2$
Thus:














\(\ds \map {\beta^{-1} \alpha^{-1} \beta \alpha} 1\)

\(=\)







\(\ds \map {\paren {3, 5, 4} \alpha^{-1} \tuple {3, 4, 5} } {\map \alpha 1}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {3, 5, 4} \alpha^{-1} \tuple {3, 4, 5} } 2\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {3, 5, 4} \alpha^{-1} } 2\)





as $2$ is fixed by $\tuple {3, 4, 5}$














\(\ds \)

\(=\)







\(\ds \map {\paren {3, 5, 4} } 1\)





as $\map \alpha 1 = 2$














\(\ds \)

\(=\)







\(\ds 1\)





as $1$ is fixed by $\tuple {3, 4, 5}$



$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 83$




