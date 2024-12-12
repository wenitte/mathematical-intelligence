# 

Source: https://proofwiki.org/wiki/Closure_of_Irreducible_Subspace_is_Irreducible/Proof_3

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $Y \subseteq S$ be a subset of $S$ which is irreducible in $T$.

Then its closure $Y^-$ in $T$ is also irreducible in $T$.


Proof
Observe that for each closed set $V$ in $T$:

$(1): \quad V \subsetneqq Y^- \implies V \cap Y \subsetneqq Y$
Indeed:














\(\ds V \cap Y\)

\(=\)







\(\ds Y\)














\(\ds \leadsto \ \ \)





\(\ds Y \setminus V\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds Y\)

\(\subseteq\)







\(\ds V\)














\(\ds \leadsto \ \ \)





\(\ds Y^-\)

\(\subseteq\)







\(\ds V\)





Closure of Subset of Closed Set of Topological Space is Subset








\(\ds \leadsto \ \ \)





\(\ds V\)

\(\subsetneqq\)







\(\ds Y^-\)










Aiming for a contradiction, suppose $Y^-$ is not irreducible.
That is, there exist $V_1, V_2 \subsetneqq Y^-$, closed in $\struct {Y^-, \tau_{Y^-} }$, such that:

$Y^- = V_1 \cup V_2$
$V_1$ and $V_2$ are also closed in $T$, since $Y^-$ is closed in $T$,

Then, from $(1)$:

$V_1 \cap Y \subsetneqq Y$
and:

$V_2 \cap Y \subsetneqq Y$
Therefore $V_1 \cap Y$ and $V_2 \cap Y$ are proper subsets of $Y$ such that:

$Y = \paren {V_1 \cap Y} \cup \paren {V_2 \cap Y}$
Furtheremore, $V_1 \cap Y$ and $V_2 \cap Y$ are closed in $\struct {Y, \tau_Y}$.
This contradicts the fact that $Y$ is irreducible.
$\blacksquare$





