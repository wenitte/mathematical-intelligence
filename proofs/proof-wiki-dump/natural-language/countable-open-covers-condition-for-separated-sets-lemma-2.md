# 

Source: https://proofwiki.org/wiki/Countable_Open_Covers_Condition_for_Separated_Sets/Lemma_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Let $\family {U_n}_{n \mathop \in \N}$ be a countable family of open sets.
Let $\family {V_n}_{n \mathop \in \N}$ be a countable family of open sets.

For each $n \in \N$, let:

${U_n}' = U_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {V_p}^-}$
For each $n \in \N$, let:

${V_n}' = V_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {U_p}^-}$

Let:

$U = \ds \bigcup_{n \mathop \in \N} {U_n}'$
and

$V = \ds \bigcup_{n \mathop \in \N} {V_n}'$

Then:

$U$ and $V$ are open in $T$.


Proof
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets, it is sufficient to show that:

$\forall n \in \N : {U_n}', {V_n}' \in \tau$
Let  $n \in \N$.
We have:














\(\ds {U_n}'\)

\(=\)







\(\ds U_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {V_p}^-}\)





Definition of ${U_n}'$














\(\ds \)

\(=\)







\(\ds U_n \cap \relcomp S {\bigcup_{p \mathop \le n} {V_p}^-}\)





Set Difference as Intersection with Relative Complement














\(\ds \)

\(=\)







\(\ds U_n \cap \paren{ \bigcap_{p \mathop \le n} \relcomp S { {V_p}^-} }\)





De Morgan's laws



From Topological Closure is Closed:

${V_p}^-$ is a closed set.
By definition of closed set:

$\relcomp S {V_p^-}$ is an open set.
Hence:

${U_n}'$ is the finite intersection of open sets.
By Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology:

${U_n}'$ is an open set.

Similarly:

${V_n}'$ is an open set.

The result follows from Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets.
$\blacksquare$





