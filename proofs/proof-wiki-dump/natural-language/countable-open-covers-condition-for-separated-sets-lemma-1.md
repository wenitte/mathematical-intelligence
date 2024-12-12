# 

Source: https://proofwiki.org/wiki/Countable_Open_Covers_Condition_for_Separated_Sets/Lemma_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Let $\family {U_n}_{n \mathop \in \N}$ be a family of subsets of $S$.
Let $\family {V_n}_{n \mathop \in \N}$ be a family of subsets of $S$.

For each $n \in \N$, let:

${U_n}' = U_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {V_p}^-}$
For each $n \in \N$, let:

${V_n}' = V_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {U_p}^-}$

Then:

$\forall n, m \in \N : {U_n}' \cap {V_m}' = \O$


Proof
Let $n, m \in \N$.
Without loss of generality, let $m \le n$.

We have:














\(\ds {U_m}'\)

\(=\)







\(\ds U_m \setminus \paren {\bigcup_{p \mathop \le m} {V_p}^-}\)





Definition of ${U_m}'$














\(\ds \)

\(\subseteq\)







\(\ds U_m\)





Set Difference is Subset














\(\ds \)

\(\subseteq\)







\(\ds {U_m}^-\)





Set is Subset of its Topological Closure




As $m \le n$, then:

${U_m}^- \in \set { {U_p}^- : p \le n}$
We have:














\(\ds U_m^-\)

\(\subseteq\)







\(\ds \bigcup_{p \mathop \le n} {U_p}^-\)





Set is Subset of Union




Also:














\(\ds {V_n}'\)

\(=\)







\(\ds V_n \setminus \paren {\bigcup_{p \mathop \le n} {U_p}^-}\)





Definition of ${V_m}'$














\(\ds \)

\(\subseteq\)







\(\ds V_n \setminus {U_m}^-\)





Set Difference with Subset is Superset of Set Difference




Finally:














\(\ds {U_m}' \cap {V_n}'\)

\(=\)







\(\ds \paren {U_m \setminus \paren {\bigcup_{p \mathop \le m} {V_p}^-} } \cap \paren {V_n \setminus \paren {\bigcup_{p \mathop \le n} {U_p}^-} }\)




















\(\ds \)

\(\subseteq\)







\(\ds {U_m}^- \cap \paren {V_n \setminus {U_m}^-}\)





Set Intersection Preserves Subsets














\(\ds \)

\(=\)







\(\ds \O\)





Set Difference Intersection with Second Set is Empty Set




From Empty Set is Subset of All Sets:

$\O \subseteq {U_m}' \cap {V_n}'$
By definition of set equality:

${U_m}' \cap {V_n}' = \O$

Similarly:

${U_n}' \cap {V_m}' = \O$
The result follows.
$\blacksquare$





