# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Vector_Space_has_Unique_Limit



Theorem
Let $\struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $\sequence {x_n}$ be a sequence in $\struct {X, \norm {\,\cdot\,} }$.

Then $\sequence {x_n}$ can have at most one limit.


Proof
Aiming for a contradiction, suppose $\ds \lim_{n \mathop \to \infty} x_n = L_1$ and $\ds \lim_{n \mathop \to \infty} x_n = L_2$ such that $L_1 \ne L_2$.
Let $\epsilon = \dfrac {\norm {L_1 - L_2} } 3$.
From the norm axioms it follows that $\epsilon > 0$.
By definition:

$\exists N_1 \in \N : \forall n > N_1 : \norm {x_n - L_1} < \epsilon$
$\exists N_2 \in \N : \forall n > N_2 : \norm {x_n - L_2} < \epsilon$
Choose $n > N_1 + N_2$.
Then:














\(\ds \norm {L_1 - L_2}\)

\(=\)







\(\ds \norm {L_1 - x_n + x_n - L_2}\)




















\(\ds \)

\(\le\)







\(\ds \norm {L_1 - x_n} + \norm {x_n - L_2}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon + \epsilon\)




















\(\ds \)

\(=\)







\(\ds \frac 2 3 \norm {L_1 - L_2}\)









which implies that:

$1 < \dfrac 2 3$
This is a contradiction.
Hence $L_1 = L_2$.
$\blacksquare$


Also see
Convergent Sequence has Unique Limit


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




